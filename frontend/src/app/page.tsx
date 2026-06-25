
import FAQ from "@/components/FAQ";
import FeatureSection from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import Trustedby from "@/components/Partners";
import StatsCounter from "@/components/StasCounter";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <Trustedby/>
   <FeatureSection/>
   <StatsCounter/>
   <FAQ/>
   </>
  );
}
