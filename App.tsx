import React from 'react';
import { 
  TrendingUp, 
  ArrowRight, 
  Zap, 
  Banknote, 
  Network, 
  UserX, 
  CheckCircle,
} from 'lucide-react';
import CustomerMarketingTile from './components/CustomerMarketingTile';
import DashboardPreview from './components/DashboardPreview';

export default function App() {
  return (
    <div className="bg-slate-950 font-sans text-slate-100 min-h-screen">
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-6 md:px-20 lg:px-40 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white">GrowthCore</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-slate-300 hover:text-purple-500 transition-colors" href="#">Platform</a>
            <a className="text-sm font-medium text-slate-300 hover:text-purple-500 transition-colors" href="#">Solutions</a>
            <a className="text-sm font-medium text-slate-300 hover:text-purple-500 transition-colors" href="#">Case Studies</a>
            <a className="text-sm font-medium text-slate-300 hover:text-purple-500 transition-colors" href="#">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm font-bold px-4 py-2 hover:bg-white/5 rounded-lg transition-colors text-slate-300">
              Log In
            </button>
            <button className="bg-purple-500 text-white text-sm font-bold px-5 py-2 rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="relative">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-12 px-6 overflow-hidden">
          <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-bold uppercase tracking-wider w-fit">
                <Zap className="w-4 h-4" />
                Enterprise Growth OS
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-white">
                Visualize Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500">Momentum.</span>
              </h1>
              <p className="text-lg text-blue-100/70 max-w-lg">
                Transform complex user journeys into actionable growth levers. Track activation, expansion, and advocacy in real-time with our enterprise-grade visualization engine.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-purple-500 text-white text-base font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/20">
                  Start Growth Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/5 border border-white/10 text-white text-base font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
                  Book Architecture Demo
                </button>
              </div>
            </div>

            {/* Right Visual - Replaced with Component */}
            <CustomerMarketingTile />
          </div>
        </section>

        {/* Stats Grid */}
        <section className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stat 1 */}
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-slate-900 border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <p className="text-blue-100/60 text-sm font-medium">Activation Rate</p>
                <Zap className="w-5 h-5 text-purple-500" />
              </div>
              <p className="text-white tracking-tight text-3xl font-bold">+58%</p>
              <p className="text-blue-300 text-sm font-medium flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> +12% vs last month
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-slate-900 border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <p className="text-blue-100/60 text-sm font-medium">Expansion Revenue</p>
                <Banknote className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-white tracking-tight text-3xl font-bold">3.4x</p>
              <p className="text-blue-300 text-sm font-medium flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> +24% vs last month
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-slate-900 border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <p className="text-blue-100/60 text-sm font-medium">Net Retention</p>
                <Network className="w-5 h-5 text-purple-500" />
              </div>
              <p className="text-white tracking-tight text-3xl font-bold">112%</p>
              <p className="text-blue-300 text-sm font-medium flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> Stable vs last month
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-slate-900 border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <p className="text-blue-100/60 text-sm font-medium">Churn Rate</p>
                <UserX className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-white tracking-tight text-3xl font-bold">0.8%</p>
              <p className="text-blue-300 text-sm font-medium flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Target Met
              </p>
            </div>
          </div>
        </section>

        {/* Product Interface Section */}
        <section className="w-full bg-slate-950 py-20 px-6 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
                Command Your Growth.
              </h2>
              <p className="text-blue-100/60 text-lg max-w-2xl mx-auto">
                A powerful, centralized dashboard that turns raw data into strategic insights. Monitor every metric that matters in real-time.
              </p>
            </div>

            <DashboardPreview />
            
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 py-12 px-6 bg-slate-950">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold tracking-tight text-white">GrowthCore</h2>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">Terms</a>
            <a className="hover:text-white transition-colors" href="#">Security</a>
            <a className="hover:text-white transition-colors" href="#">System Status</a>
          </div>
          <div className="text-sm text-slate-600">
            © 2024 GrowthCore Technologies Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}