import Image from "next/image";
import Header from './components/Header';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from "./components/section3";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <div className="pageBackground"></div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      

    </main>
  );
}
