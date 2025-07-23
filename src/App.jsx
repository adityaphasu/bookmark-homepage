import ExtensionSection from "./components/ExtensionSection";
import FAQ from "./components/FAQ";
import FeaturesTab from "./components/FeaturesTab";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesTab />
        <ExtensionSection />
        <FAQ />
      </main>
    </>
  );
}

export default App;
