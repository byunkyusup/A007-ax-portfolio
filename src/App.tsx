import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { Work } from './components/work/Work';
import { Services } from './components/services/Services';
import { Trust } from './components/trust/Trust';
import { Contact } from './components/contact/Contact';

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 건너뛰기</a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
