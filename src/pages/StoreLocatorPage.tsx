import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const StoreLocatorPage: React.FC = () => {
  useEffect(() => {
    const allenTX: [number, number] = [33.1032, -96.6706];
    const map = L.map("map").setView(allenTX, 13);

    // Base map layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Center marker
    L.marker(allenTX)
      .addTo(map)
      .bindPopup("📍 Allen, TX")
      .openPopup();

    // Fetch pharmacy locations
    const searchPharmacy = async (lat: number, lng: number) => {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=Allen+City+Pharmacy&limit=10&viewbox=${
        lng - 0.05
      },${lat + 0.05},${lng + 0.05},${lat - 0.05}&bounded=1`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.length === 0) {
          console.log("No nearby Allen City Pharmacy found.");
          return;
        }

        data.forEach((place: any) => {
          const latNum = parseFloat(place.lat);
          const lonNum = parseFloat(place.lon);

          if (!isNaN(latNum) && !isNaN(lonNum)) {
            const marker = L.marker([latNum, lonNum]).addTo(map);
            marker.bindPopup(`<strong>${place.display_name}</strong>`);
          }
        });
      } catch (err) {
        console.error("Search error:", err);
      }
    };

    searchPharmacy(allenTX[0], allenTX[1]);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-tr from-[#c3edea] via-[#a6e3e9] via-[#dffaf5] to-[#d6f2f0] bg-[length:400%_400%] animate-[calmGradient_20s_ease_infinite] transition duration-1000 font-[Segoe_UI]">
      {/* Header */}
      <header className="flex items-center gap-2 bg-white/90 p-3 shadow-md w-full max-w-sm box-border rounded-t-md backdrop-blur-md mt-4">
        <img
          src="/AllenCity Pharmacy Logo.png"
          alt="Allen City Pharmacy Logo"
          className="h-9"
        />
        <h1 className="text-base md:text-lg font-semibold text-[#0a4d40]">
          Allen City Pharmacy Locator
        </h1>
      </header>

      {/* Map container */}
      <div
        id="map"
        className="w-full max-w-sm aspect-square border border-gray-300 rounded-b-md shadow-md"
      ></div>

      {/* Tailwind custom animations */}
      <style>
        {`
          @keyframes calmGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default StoreLocatorPage;
