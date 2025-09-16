// src/pages/dashboard.js
import Head from 'next/head';
import UniversalAIProcessor from '../components/UniversalAIProcessor';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - Search Everything AI</title>
        <meta name="description" content="Access 100+ AI models through one powerful platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <UniversalAIProcessor />
    </>
  );
}
