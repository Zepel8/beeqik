import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyBeeqik from "@/components/WhyBeeqik";
import SupplierNetwork from "@/components/SupplierNetwork";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyBeeqik />
        <SupplierNetwork />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
