import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const features = ["POS Integration","Inventory Management","Customer Analytics","Staff Scheduling"];

  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#050505]">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/30 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <header className="w-full p-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10 fixed top-0 z-50">
        <div className="text-2xl font-extrabold flex items-center gap-1">
          ZentraOS <span className="text-blue-500">.</span>
        </div>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all shadow-lg shadow-blue-500/20">
          Get Started
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center text-center mt-32 px-5 z-10 w-full max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          Enterprise Restaurant Management System
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10">
          A complete operating system for modern restaurants featuring seamless POS integration, inventory management, and deep customer analytics.
        </p>
        <button className="flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all shadow-xl hover:scale-105">
          Request Early Access <ArrowRight size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-24 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:-translate-y-2 transition-all text-left group">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature}</h3>
              <p className="text-neutral-400 text-sm">Experience seamless integration and top-tier performance tailored for your needs.</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="w-full p-8 border-t border-white/10 text-center text-neutral-500 text-sm mt-auto z-10">
        &copy; {new Date().getFullYear()} ZentraOS. Developed by UZINC Team. All rights reserved.
      </footer>
    </main>
  );
}