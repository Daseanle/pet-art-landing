// src/components/HeroSection.tsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white text-center px-4">
      {/* 背景图片 */}
      <Image
        src="/images/hero-banner.jpg" // 换成你的主视觉图
        alt="AI Pet Art Banner"
        layout="fill"
        objectFit="cover"
        className="z-0 brightness-50"
      />
      <div className="z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          为您爱宠，定制一件AI艺术品
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          利用尖端AI技术，将您宠物的照片变成独一无二的皮克斯、迪士尼或梵高风格艺术杰作。
        </p>
        <a
          href="#signup" // 链接到下面的邮件订阅区
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
        >
          加入候补名单
        </a>
      </div>
    </section>
  );
}