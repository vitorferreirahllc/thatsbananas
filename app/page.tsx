import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Favorites from "@/components/Favorites";
import Locations from "@/components/Locations";
import OurStory from "@/components/OurStory";
import CafeToHome from "@/components/CafeToHome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Favorites />
        <Locations />
        <OurStory />
        <CafeToHome />
      </main>
      <Footer />
    </>
  );
}
