import React, { useEffect, useState } from "react";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://urban-space-goggles-g4v7qv6g79x7fw49p-5272.app.github.dev";

const BackendStatus: React.FC = () => {
  const [status, setStatus] = useState<"checking" | "connected" | "failed">("checking");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        console.log("Checking backend at:", `${API_URL}/api/products`);
        const response = await fetch(`${API_URL}/api/products`);
        if (response.ok) {
          setStatus("connected");
        } else {
          setStatus("failed");
        }
      } catch (err) {
        console.error("Error connecting to backend:", err);
        setStatus("failed");
      }
    };

    checkBackend();
  }, []); // ✅ correct syntax here

  return (
    <div
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
        margin: "20px auto",
        width: "fit-content",
        background:
          status === "connected"
            ? "#d1fae5"
            : status === "failed"
            ? "#fee2e2"
            : "#fef3c7",
        color:
          status === "connected"
            ? "#065f46"
            : status === "failed"
            ? "#991b1b"
            : "#92400e",
        fontWeight: "bold",
      }}
    >
      {status === "checking" && "🔍 Checking backend connection..."}
      {status === "connected" && "✅ Connected to backend!"}
      {status === "failed" && "❌ Backend unreachable!"}
    </div>
  );
};

export default BackendStatus;
