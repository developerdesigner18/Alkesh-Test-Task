import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Journey from './components/Journey/Journey';
import BrandSoul from './components/BrandSoul/BrandSoul';
import Brands from './components/Brands/Brands';
import Footer from './components/Footer/Footer';

const SoulBehind = lazy(() => import('./components/SoulBehind/SoulBehind'));
const Manifesto = lazy(() => import('./components/Manifesto/Manifesto'));
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'));
const NextChapter = lazy(() => import('./components/NextChapter/NextChapter'));
const MyStory = lazy(() => import('./components/MyStory/MyStory'));

function App() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <BrandSoul />
        <Brands />
        <Suspense fallback={<div className="h-40 bg-[#141414]" />}>
          <SoulBehind />
          <Manifesto />
          <Testimonials />
          <NextChapter />
          <MyStory />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
