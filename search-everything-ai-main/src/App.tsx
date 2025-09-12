import Home from "./pages/Home";

<Route path="/" element={<Home />} />


import ContentCreation from "./pages/ContentCreation";
import DataAnalysis from "./pages/DataAnalysis";
import CodeGeneration from "./pages/CodeGeneration";
import DesignGraphics from "./pages/DesignGraphics";
import MarketingCampaigns from "./pages/MarketingCampaigns";
import BusinessAutomation from "./pages/BusinessAutomation";
import ResearchInsights from "./pages/ResearchInsights";
import AIImageGenerator from "./pages/AIImageGenerator";
import FinanceManagement from "./pages/FinanceManagement";
import HealthWellness from "./pages/HealthWellness";
import EducationLearning from "./pages/EducationLearning";
import CommunicationSocial from "./pages/CommunicationSocial";
import VideoProduction from "./pages/VideoProduction";
import AudioProcessing from "./pages/AudioProcessing";
import TranslationServices from "./pages/TranslationServices";
import LegalDocuments from "./pages/LegalDocuments";
import RealEstateAnalysis from "./pages/RealEstateAnalysis";
import EcommerceSolutions from "./pages/EcommerceSolutions";
import AdvancedAIChat from "./pages/AdvancedAIChat";
import CodePlayground from "./pages/CodePlayground";
import DocumentAIProcessor from "./pages/DocumentAIProcessor";
import DataVisualizationHub from "./pages/DataVisualizationHub";
import VideoAudioAICreator from "./pages/VideoAudioAICreator";
import SocialMediaManager from "./pages/SocialMediaManager";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      {/* ✅ Simple Top Navigation */}
      <nav style={{ padding: "1rem", background: "#f5f5f5" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/content-creation" style={{ marginRight: "1rem" }}>
          Content Creation
        </Link>
        <Link to="/data-analysis" style={{ marginRight: "1rem" }}>
          Data Analysis
        </Link>
        <Link to="/code-generation" style={{ marginRight: "1rem" }}>
          Code Generation
        </Link>
        {/* ✅ For now just 4 main links. We'll add a sidebar or dropdown later */}
      </nav>

      {/* ✅ Routes for all 24 pages */}
      <Routes>
        <Route path="/" element={<h1>SEARCH AI – Choose a Tool</h1>} />
        <Route path="/content-creation" element={<ContentCreation />} />
        <Route path="/data-analysis" element={<DataAnalysis />} />
        <Route path="/code-generation" element={<CodeGeneration />} />
        <Route path="/design-graphics" element={<DesignGraphics />} />
        <Route path="/marketing-campaigns" element={<MarketingCampaigns />} />
        <Route path="/business-automation" element={<BusinessAutomation />} />
        <Route path="/research-insights" element={<ResearchInsights />} />
        <Route path="/ai-image-generator" element={<AIImageGenerator />} />
        <Route path="/finance-management" element={<FinanceManagement />} />
        <Route path="/health-wellness" element={<HealthWellness />} />
        <Route path="/education-learning" element={<EducationLearning />} />
        <Route path="/communication-social" element={<CommunicationSocial />} />
        <Route path="/video-production" element={<VideoProduction />} />
        <Route path="/audio-processing" element={<AudioProcessing />} />
        <Route path="/translation-services" element={<TranslationServices />} />
        <Route path="/legal-documents" element={<LegalDocuments />} />
        <Route path="/real-estate-analysis" element={<RealEstateAnalysis />} />
        <Route path="/ecommerce-solutions" element={<EcommerceSolutions />} />
        <Route path="/advanced-ai-chat" element={<AdvancedAIChat />} />
        <Route path="/code-playground" element={<CodePlayground />} />
        <Route path="/document-ai-processor" element={<DocumentAIProcessor />} />
        <Route path="/data-visualization-hub" element={<DataVisualizationHub />} />
        <Route path="/video-audio-ai-creator" element={<VideoAudioAICreator />} />
        <Route path="/social-media-manager" element={<SocialMediaManager />} />

        {/* ✅ Fallback for unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

