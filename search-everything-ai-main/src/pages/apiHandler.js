// src/utils/apiHandler.js - CREATE THIS NEW FILE

export const handleApiCall = async (apiFunction, retryCount = 3) => {
  for (let i = 0; i < retryCount; i++) {
    try {
      const result = await apiFunction();
      return result;
    } catch (error) {
      console.error(`API call failed (attempt ${i + 1}):`, error);
      
      // Handle specific error types
      if (error.message.includes('quota') || error.message.includes('limit')) {
        throw new Error('API quota exceeded. Please add billing to your OpenAI account or try again later.');
      }
      
      if (error.message.includes('authentication') || error.message.includes('invalid')) {
        throw new Error('Invalid API key. Please check your environment variables.');
      }
      
      // Retry on temporary failures
      if (i < retryCount - 1 && (
        error.message.includes('network') || 
        error.message.includes('timeout') || 
        error.message.includes('500')
      )) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        continue;
      }
      
      throw error;
    }
  }
};

export const makeApiRequest = async (url, options) => {
  return handleApiCall(async () => {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
  });
};
