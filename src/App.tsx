import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Stories from './components/Stories';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Stories />
        <Gallery />
        <Map />
        <Testimonials />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;