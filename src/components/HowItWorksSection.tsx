// src/components/HowItWorksSection.tsx
import { Upload, Brush, Sparkles, Package } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-12 h-12 text-violet-600" />,
    name: '第一步: 上传照片',
    description: '选择一张您爱宠最可爱、最清晰的照片。',
  },
  {
    icon: <Brush className="w-12 h-12 text-violet-600" />,
    name: '第二步: 选择风格',
    description: '从我们独家的艺术风格库中，挑选您最心动的一款。',
  },
  {
    icon: <Sparkles className="w-12 h-12 text-violet-600" />,
    name: '第三步: AI魔法创作',
    description: '我们强大的AI将开始施展魔法，为您创造专属艺术品。',
  },
  {
    icon: <Package className="w-12 h-12 text-violet-600" />,
    name: '第四步: 珍藏与分享',
    description: '下载高清数字作品，或定制成独一无二的实物周边。',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">简单四步，开启奇妙之旅</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500">
            过程就像变魔术一样简单有趣。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-6 lg:gap-x-8">
          {steps.map((step) => (
            <div key={step.name} className="text-center">
              <div className="w-24 h-24 mx-auto flex items-center justify-center bg-violet-100 rounded-full">
                {step.icon}
              </div>
              <h3 className="mt-6 text-lg font-medium">{step.name}</h3>
              <p className="mt-2 text-base text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}