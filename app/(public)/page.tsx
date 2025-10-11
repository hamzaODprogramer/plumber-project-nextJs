'use client';
import AboutUS from '@/components/public/about-us';
import Footer from '@/components/public/footer';
import Numbers from '@/components/public/numbers';
import Services from '@/components/public/services';
import SuperSection from '@/components/public/super-section';
import Video from '@/components/public/video';

export default function Home() {
  return (
    <>
      <SuperSection />
      <AboutUS className={''} />
      <Numbers />
      <Services />
      <Video />
      <Footer className="mt-120" />
    </>
  );
}
