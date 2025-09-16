import { Benefits } from "@/shared/components/Benefits";
import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import { Hero } from "@/shared/components/Hero";
import { HowItWorks } from "@/shared/components/HowItWorks";
import { Packages } from "@/shared/components/Packages";
import { SocialImpact } from "@/shared/components/SocialImpact";
import { getAll } from "@/shared/http/api/packages/get-all";

export default async function Home() {
    const packages = await getAll();

  return (
      <div className="flex flex-col w-full min-h-screen bg-white">
        <Header />

        <main className="flex-grow">
          <Hero />
          <Packages packages={packages}/>
          <Benefits />
          <HowItWorks />
          <SocialImpact />
        </main>
        <Footer />
      </div>
  );
}
