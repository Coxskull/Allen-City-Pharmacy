import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const StoreLocatorPage: React.FC = () => {
  useEffect(() => {
    const allenTX: [number, number] = [33.1032, -96.6706];
    const map = L.map("map").setView(allenTX, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const centerMarker = L.marker(allenTX).addTo(map);
    centerMarker.bindPopup("📍 Allen, TX").openPopup();

    const searchPharmacy = async (lat: number, lng: number) => {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=Allen+City+Pharmacy&limit=10&viewbox=${
        lng - 0.05
      },${lat - 0.05},${lng + 0.05},${lat + 0.05}&bounded=1`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.length === 0) {
          console.log("No nearby Allen City Pharmacy found.");
          return;
        }

        data.forEach((place: any) => {
          const marker = L.marker([place.lat, place.lon]).addTo(map);
          marker.bindPopup(`<strong>${place.display_name}</strong>`);
        });
      } catch (error) {
        console.error("Search error:", error);
      }
    };

    searchPharmacy(allenTX[0], allenTX[1]);
    return () => map.remove();
  }, []);

  return (
    <div
      style={{
        margin: 0,
        fontFamily: `"Segoe UI", Arial, sans-serif`,
        background:
          "linear-gradient(-45deg, #c3edea, #a6e3e9, #dffaf5, #d6f2f0)",
        backgroundSize: "400% 400%",
        animation: "calmGradient 20s ease infinite",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      ...
    </div>
  );
};

export default StoreLocatorPage;
