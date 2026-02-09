'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  BarChart3, 
  Users, 
  Settings, 
  Search, 
  Bell, 
  ArrowUpRight, 
  Wallet,
  Activity,
  Globe,
  Zap
} from 'lucide-react';

export default function DashboardPreview() {
  // Data for the main chart
  const chartData = [40, 65, 55, 80, 72, 95, 88, 110, 102, 125, 115, 140];
  const maxVal = Math.max(...chartData);
  const points = chartData.map((val, i) => {
    const x = (i / (chartData.length - 1)) * 100;
    const y = 100 - (val / maxVal) * 80; // 80% height max
    return `${x},${y}`;
  }).join(' ');
  
  const areaPath = `M0,100 ${points.split(' ').map(p => `L${p}`).join(' ')} L100,100 Z`;
  const linePath = `M0,${100 - (chartData[0] / maxVal) * 80} ${points.split(' ').map(p => `L${p}`).join(' ')}`;

  return (
    <div className="w-full max-w-[1100px] mx-auto p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 shadow-2xl border border-white/10 backdrop-blur-sm">
      <div className="w-full h-[700px] bg-slate-950 rounded-[22px] border border-white/5 flex overflow-hidden relative selection:bg-purple-500/30">
        
        {/* Sidebar */}
        <div className="hidden md:flex w-20 flex-col items-center py-6 border-r border-white/5 gap-8 bg-slate-900/50">
          <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Zap className="text-white w-6 h-6" fill="currentColor" />
          </div>
          <div className="flex flex-col gap-6 w-full items-center">
            {[Home, BarChart3, Users, Wallet, Settings].map((Icon, i) => (
              <button key={i} className={`p-3 rounded-xl transition-all ${i === 1 ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}>
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
          <div className="mt-auto">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
               <img src="https://picsum.photos/100/100?random=99" className="rounded-full w-full h-full border-2 border-slate-950 object-cover" alt="Profile" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 bg-slate-950/80">
          {/* Header */}
          <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 md:px-8">
            <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
              <span className="text-slate-200">Overview</span>
              <span className="text-slate-700">/</span>
              <span className="hover:text-slate-200 cursor-pointer transition-colors">Analytics</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-400 text-sm focus-within:bg-white/10 transition-colors">
                  <Search className="w-4 h-4" />
                  <input className="bg-transparent border-none outline-none w-32 placeholder:text-slate-600" placeholder="Search..." />
               </div>
               <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-slate-950"></span>
               </button>
            </div>
          </header>

          {/* Scrollable Area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
            
            {/* Top Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-slate-900 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
              >
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Wallet className="w-24 h-24 text-purple-500 -mr-8 -mt-8 rotate-12" />
                 </div>
                 <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <Wallet className="w-4 h-4" />
                      </div>
                      Total Revenue
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white tracking-tight">$124,592</div>
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" /> 12.5%
                        </span>
                        <span className="text-slate-500 font-medium">vs last month</span>
                      </div>
                    </div>
                 </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-5 rounded-2xl bg-slate-900 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
              >
                 <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <Activity className="w-4 h-4" />
                      </div>
                      Active Sessions
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white tracking-tight">1,842</div>
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" /> 4.2%
                        </span>
                        <span className="text-slate-500 font-medium">vs last hour</span>
                      </div>
                    </div>
                 </div>
                 {/* Decorative Pulse */}
                 <div className="absolute bottom-4 right-4 flex gap-1 items-end h-8">
                    {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: [h + "%", (h * 0.5) + "%", h + "%"] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                        className="w-1.5 bg-blue-500/20 rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                 </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-2xl bg-slate-900 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
              >
                 <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                      <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                        <Globe className="w-4 h-4" />
                      </div>
                      Global Reach
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white tracking-tight">24 Countries</div>
                      <div className="flex items-center gap-2 text-pink-400 text-xs font-bold mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-pink-500/10 border border-pink-500/20 flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" /> 2 New
                        </span>
                        <span className="text-slate-500 font-medium">this week</span>
                      </div>
                    </div>
                 </div>
              </motion.div>
            </div>

            {/* Main Chart Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full h-80 rounded-2xl bg-slate-900 border border-white/5 p-6 relative flex flex-col"
            >
               <div className="flex justify-between items-start mb-6">
                 <div>
                    <h3 className="text-lg font-bold text-white">Revenue Growth</h3>
                    <p className="text-slate-500 text-sm">Year over year performance</p>
                 </div>
                 <div className="flex gap-2">
                    {['1D', '1W', '1M', '1Y'].map(t => (
                      <button key={t} className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${t === '1M' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'text-slate-500 hover:bg-white/5'}`}>
                        {t}
                      </button>
                    ))}
                 </div>
               </div>
               
               <div className="flex-1 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path 
                      d={areaPath} 
                      fill="url(#chartGradient)" 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.path 
                      d={linePath} 
                      fill="none" 
                      stroke="#a855f7" 
                      strokeWidth="0.8" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </svg>

                  {/* Horizontal Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[0, 1, 2, 3, 4].map(i => (
                      <div key={i} className="w-full h-px bg-white/5" />
                    ))}
                  </div>
               </div>
            </motion.div>

            {/* List Section */}
            <div className="rounded-2xl bg-slate-900 border border-white/5 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Recent Transactions</h3>
              <div className="flex flex-col gap-4">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center overflow-hidden">
                        <img src={`https://picsum.photos/100/100?random=${10+i}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">Enterprise Plan Upgrade</span>
                        <span className="text-xs text-slate-500">Just now • Acme Corp</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">+$2,499.00</div>
                      <div className="text-xs text-emerald-500">Completed</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}