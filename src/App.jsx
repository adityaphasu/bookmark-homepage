import ExtensionSection from "./components/ExtensionSection";
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
      </main>
    </>
  );
}

export default App;
