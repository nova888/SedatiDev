import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Tech } from "@/components/sections/Tech";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { Workflow } from "@/components/sections/Workflow";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress, WhatsAppButton } from "@/components/sections/Floating";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sedati Dev — Solusi Website, AI & Machine Learning untuk Bisnis Modern" },
      { name: "description", content: "Sedati Dev adalah studio teknologi yang membangun website, web app, data science, machine learning, dan AI implementation untuk perusahaan, startup, UMKM, dan instansi." },
      { property: "og:title", content: "Sedati Dev — Solusi Website, AI & Machine Learning" },
      { property: "og:description", content: "Studio teknologi modern untuk website, AI, dan automasi bisnis." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Tech />
        <Portfolio />
        <WhyUs />
        <Workflow />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
