import Navbar from "@/components/home/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundColor: "var(--reviva-cream)",
        }}
      >
        <h1
          className="text-6xl font-bold"
          style={{
            color: "var(--reviva-green)",
          }}
        >
          Reviva Nutrition
        </h1>
      </main>
    </>
  );
}