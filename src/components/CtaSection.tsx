// src/components/CtaSection.tsx
export default function CtaSection() {
  // 这里的 form action 需要替换成你的邮件服务商提供的链接
  // 为了演示，我们暂时使用一个占位符
  const mailerliteFormAction = "YOUR_MAILERLITE_EMBED_FORM_ACTION_URL";

  return (
    <section id="signup" className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">抢先体验，快人一步！</h2>
        <p className="mt-4 text-lg text-slate-500">
          产品即将上线！成为首批体验官，享受专属早鸟折扣和优先体验权。
        </p>
        {/* 邮件订阅表单 */}
        <form 
          // action={mailerliteFormAction} // 当你获取到链接后，取消这行注释
          method="post"
          target="_blank" // 在新标签页打开，避免离开当前页面
          className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            name="fields[email]" // 这个 name 通常由邮件服务商规定
            required
            placeholder="请输入您的邮箱地址"
            className="flex-grow w-full px-5 py-3 border border-slate-300 rounded-md focus:ring-violet-500 focus:border-violet-500"
          />
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105"
          >
            立即加入
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-400">我们承诺不发送垃圾邮件。</p>
      </div>
    </section>
  );
}