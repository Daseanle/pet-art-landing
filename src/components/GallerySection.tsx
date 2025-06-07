// src/components/GallerySection.tsx
import Image from 'next/image';

const images = [
  // 在这里添加你的作品图片路径
  { src: '/images/gallery-1.jpg', alt: 'Pet in Pixar style' },
  { src: '/images/gallery-2.jpg', alt: 'Pet in Van Gogh style' },
  { src: '/images/gallery-3.jpg', alt: 'Pet in Ghibli style' },
  { src: '/images/gallery-4.jpg', alt: 'Pet in Cyberpunk style' },
  { src: '/images/gallery-5.jpg', alt: 'Pet as a superhero' },
  { src: '/images/gallery-6.jpg', alt: 'Pet in watercolor style' },
  // ...可以继续添加更多图片
];

export default function GallerySection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">我们的作品集</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500">
            探索由AI魔法创造的无限可能。
          </p>
        </div>
        <div className="mt-12 columns-2 sm:columns-3 lg:columns-4 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div key={index} className="mb-4 sm:mb-6 break-inside-avoid">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}