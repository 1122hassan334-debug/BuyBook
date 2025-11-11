import Map from "../components/Map";

export default function Home() {
  const buildings = [
    { id: 1, name: "Emporium Mall", type: "Shopping Mall", lat: 31.4672, lng: 74.2662 },
    { id: 2, name: "Packages Mall", type: "Mall", lat: 31.4718, lng: 74.3407 },
    { id: 3, name: "Readings Bookstore", type: "Library", lat: 31.5095, lng: 74.3489 },
    { id: 4, name: "Liberty Market", type: "Commercial Market", lat: 31.5099, lng: 74.3486 }
  ];

  return (
    <main className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">🏙️ Commercial Finder</h1>
      <p className="mb-6 text-gray-600">
        Discover malls, libraries, and commercial centers in your city.
      </p>
      <Map buildings={buildings} />
    </main>
  );
}
