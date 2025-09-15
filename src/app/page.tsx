import { Benefits } from "@/shared/components/Benefits";
import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import { Hero } from "@/shared/components/Hero";
import { HowItWorks } from "@/shared/components/HowItWorks";
import { Packages } from "@/shared/components/Packages";
import { SocialImpact } from "@/shared/components/SocialImpact";

export default async function Home() {

  return (
      <div className="flex flex-col w-full min-h-screen bg-white">
        <Header />

        <main className="flex-grow">
          <Hero />
          <Packages />
          <Benefits />
          <HowItWorks />
          <SocialImpact />
        </main>
        <Footer />
      </div>
  );
}
