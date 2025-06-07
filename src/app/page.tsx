import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CtaSection from '@/components/CtaSection';
// 你可以再创建一个简单的 Footer 组件

export default function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <header>
        {/* 这里可以放一个简单的导航栏，暂时留空 */}
      </header>
      <main>
        <HeroSection />
        <GallerySection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <footer className="bg-slate-800 text-slate-400 text-center py-6">
        <p>© {new Date().getFullYear()} 毛绒造梦局. All Rights Reserved.</p>
      </footer>
    </div>
  );
}