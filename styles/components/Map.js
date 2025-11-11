import { useEffect, useRef } from "react";

export default function Map({ buildings }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 31.5204, lng: 74.3587 }, // Lahore
      zoom: 13,
    });

    buildings.forEach((b) => {
      const marker = new window.google.maps.Marker({
        position: { lat: b.lat, lng: b.lng },
        map,
        title: b.name,
      });

      const info = new window.google.maps.InfoWindow({
        content: `<div><h3>${b.name}</h3><p>${b.type}</p></div>`,
      });

      marker.addListener("click", () => info.open(map, marker));
    });
  }, [buildings]);

  return <div ref={mapRef} className="w-full h-[80vh] rounded-xl shadow-lg" />;
}
