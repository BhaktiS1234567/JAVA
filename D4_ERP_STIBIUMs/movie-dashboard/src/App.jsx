import React from "react";
import TopRatedMoviesWithReviews from "./components/TopRatedMoviesWithReviews";
import bgImage from "./assets/bg.jpg";

function App() {
  return (
    <>
      {/* ✅ Global Styles applied here (equivalent to :root in CSS) */}
      <style>
        {`
          :root {
            font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            font-weight: 400;
            color-scheme: light dark;
            color: rgba(255, 255, 255, 0.87);
            background-color: #242424;
            font-synthesis: none;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          body, html, #root {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
          }
        `}
      </style>

      {/* ✅ Full-screen background setup */}
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          fontFamily:
            "system-ui, Avenir, Helvetica, Arial, sans-serif",
          color: "rgba(255, 255, 255, 0.87)",
          overflowX: "hidden",
        }}
      >
        {/* Background layer */}
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "brightness(0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />

        {/* Transparent header */}
        <header
          style={{
            textAlign: "center",
            padding: "2rem 0 1rem 0",
            background: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(4px)",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#fff",
            letterSpacing: "1px",
            textShadow: "0 2px 10px rgba(0,0,0,0.6)",
            borderBottom: "2px solid rgba(255,255,255,0.2)",
          }}
        >
          🎬 Movie Dashboard
        </header>

        {/* Movie List */}
        <div style={{ padding: "1rem 2rem" }}>
          <TopRatedMoviesWithReviews />
        </div>
      </div>
    </>
  );
}

export default App;
