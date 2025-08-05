import ContactUs from "./components/ContactUs";
import ExtensionSection from "./components/ExtensionSection";
import FAQ from "./components/FAQ";
import FeaturesTab from "./components/FeaturesTab";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <FeaturesTab />
        <ExtensionSection />
        <FAQ />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}

export default App;
