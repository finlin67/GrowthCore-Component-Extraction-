'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, 
  Search, 
  Activity,
  Globe,
  ArrowUpRight,
  Menu,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function DashboardPreview() {
  // Chart Data & Path Generation
  const chartData = [40, 65, 55, 80, 72, 95, 88, 110, 102, 125, 115, 140];
  const maxVal = Math.max(...chartData);
  const points = chartData.map((val, i) => {
    const x = (i / (chartData.length - 1)) * 100;
    const y = 100 - (val / maxVal) * 80; 
    return `${x},${y}`;
  }).join(' ');
  
  const areaPath = `M0,100 ${points.split(' ').map(p => `L${p}`).join(' ')} L100,100 Z`;
  const linePath = `M0,${100 - (chartData[0] / maxVal) * 80} ${points.split(' ').map(p => `L${p}`).join(' ')}`;

  return (
    <div className="w-full max-w-[600px] aspect-square mx-auto rounded-[32px] bg-slate-950 border border-white/10 relative overflow-hidden flex flex-col shadow-2xl group select-none ring-1 ring-white/5">
       {/* Background Ambient Effects */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_45%)] pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />
       
       {/* HEADER (Top 15%) */}
       <header className="h-[15%] px-8 flex items-center justify-between border-b border-white/5 bg-slate-900/40 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
               <Zap className="w-5 h-5 text-purple-400" fill="currentColor" />
             </div>
             <div className="flex flex-col">
                <h3 className="text-white font-bold text-lg leading-tight tracking-tight">Analytics</h3>
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Real-time Overview</p>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="p-2.5 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
             </button>
             <button className="p-2.5 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors relative group">
                <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-slate-950 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
             </button>
          </div>
       </header>

       {/* HERO: Chart (Centered Optical Focus) */}
       <div className="flex-1 flex flex-col justify-center px-8 relative z-10 pt-4">
          <div className="flex justify-between items-end mb-4">
             <div>
               <motion.h2 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-4xl font-black text-white tracking-tight"
               >
                 $124,592
               </motion.h2>
               <motion.div 
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="flex items-center gap-2 mt-2"
               >
                 <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-md border border-emerald-500/20 flex items-center gap-1">
                   <ArrowUpRight className="w-3 h-3" /> +12.5%
                 </span>
                 <span className="text-slate-500 text-sm font-medium">Revenue Growth</span>
               </motion.div>
             </div>
             
             {/* Time Filters */}
             <div className="flex gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
                {['1D','1W','1M'].map((t,i) => (
                   <button key={t} className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${i===1 ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                      {t}
                   </button>
                ))}
             </div>
          </div>

          {/* Chart Graphic */}
          <div className="h-44 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                       <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                    </linearGradient>
                 </defs>
                 <motion.path
                    d={areaPath}
                    fill="url(#chartFill)"
                    initial={{ opacity: 0, d: "M0,100 L100,100 Z" }}
                    whileInView={{ opacity: 1, d: areaPath }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                 />
                 <motion.path
                    d={linePath}
                    fill="none"
                    stroke="#c084fc"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                 />
              </svg>
              
              {/* Interactive Point Simulation */}
              <motion.div 
                 className="absolute top-[20%] right-[30%] flex flex-col items-center pointer-events-none"
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 1.8 }}
              >
                 <div className="w-3 h-3 bg-slate-950 border-2 border-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] z-20" />
                 <div className="absolute -top-9 bg-slate-800 text-[10px] font-bold text-white px-2 py-1 rounded border border-white/10 shadow-xl whitespace-nowrap z-10 flex flex-col items-center">
                    $132,400
                    <div className="w-2 h-2 bg-slate-800 border-r border-b border-white/10 rotate-45 -mb-4 absolute -bottom-1" />
                 </div>
                 <div className="absolute top-3 w-px h-28 bg-gradient-to-b from-purple-500/50 to-transparent border-l border-dashed border-purple-500/30" />
              </motion.div>
          </div>
       </div>

       {/* SECONDARY METRICS (Stacked) */}
       <div className="px-8 flex flex-col gap-3 pb-6 relative z-10">
          <MetricRow 
             icon={Activity} 
             color="blue" 
             label="Active Sessions" 
             value="1,842" 
             trend="+4.2%" 
             delay={0.2}
          />
          <MetricRow 
             icon={Globe} 
             color="pink" 
             label="Global Reach" 
             value="24 Countries" 
             trend="+2 New" 
             delay={0.4}
          />
       </div>

       {/* FOOTER (Bottom 15%) */}
       <footer className="h-[15%] border-t border-white/5 bg-slate-900/40 backdrop-blur-md px-8 flex items-center justify-between text-xs font-medium text-slate-500">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
             <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
             <span className="text-slate-400">System Secure</span>
          </div>
          <div className="flex items-center gap-6">
             <button className="hover:text-white transition-colors flex items-center gap-2">
                <Menu className="w-4 h-4" />
                <span className="hidden sm:inline">Menu</span>
             </button>
          </div>
       </footer>
    </div>
  );
}

interface MetricRowProps {
  icon: React.ElementType;
  color: 'blue' | 'pink' | 'purple';
  label: string;
  value: string;
  trend: string;
  delay: number;
}

function MetricRow({ icon: Icon, color, label, value, trend, delay }: MetricRowProps) {
  const colorStyles = {
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]",
    pink: "text-pink-400 bg-pink-500/10 border-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.1)]",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  }[color];

  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 100 }}
      className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/40 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer group"
    >
       <div className="flex items-center gap-3.5">
          <div className={`p-2 rounded-xl border ${colorStyles} group-hover:scale-110 transition-transform duration-300`}>
             <Icon className="w-4 h-4" />
          </div>
          <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">{label}</span>
       </div>
       <div className="flex items-center gap-3">
          <span className="text-white font-bold text-base tracking-tight">{value}</span>
          <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded bg-white/5 ${color === 'pink' ? 'text-pink-400' : 'text-blue-400'}`}>
             {trend}
          </span>
       </div>
    </motion.div>
  )
}