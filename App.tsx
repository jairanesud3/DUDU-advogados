import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

function App() {
  return (
    <div className="bg-obsidian min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

export default App;