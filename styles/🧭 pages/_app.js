import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Load Google Maps API */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
