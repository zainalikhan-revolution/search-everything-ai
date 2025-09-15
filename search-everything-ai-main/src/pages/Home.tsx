import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Home() {
  const modules = [
    { name: "Code Generation", path: "/CodeGeneration" },
    { name: "Data Analysis", path: "/DataAnalysis" },
    { name: "Finance Management", path: "/FinanceManagement" },
    { name: "Health & Wellness", path: "/HealthWellness" },
    { name: "Research Assistant", path: "/ResearchAssistant" },
    { name: "Creative Writing", path: "/CreativeWriting" },
  ];

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <Helmet>
        <title>SEARCH AI</title>
        <meta
          name="description"
          content="The Ultimate Everything Platform - One Platform. Everything Possible."
        />
        <meta name="author" content="SEARCH AI" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="SEARCH AI - The Ultimate Everything Platform"
        />
        <meta
          property="og:description"
          content="Professional AI platform for content creation, business automation, research, design, and everything digital. One Platform. Everything Possible."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lovable_dev" />
        <meta
          name="twitter:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        />
      </Helmet>

      <h1>🚀 Welcome to SEARCH AI</h1>
      <p>
        The Ultimate Everything Platform — where AI powers content creation,
        automation, research, design, and more.
        <br />
        <strong>One Platform. Everything Possible.</strong>
      </p>

      {/* Navigation Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {modules.map((mod) => (
          <Link
            key={mod.path}
            to={mod.path}
            style={{
              display: "block",
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "12px",
              textDecoration: "none",
              color: "#333",
              background: "#f9f9f9",
              fontWeight: "bold",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#e6f7ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#f9f9f9")
            }
          >
            {mod.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
