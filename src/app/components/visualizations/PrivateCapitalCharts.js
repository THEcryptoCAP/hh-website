"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { motion } from 'framer-motion';

const PrivateCapitalCharts = () => {
  // Data for Private vs Public Market Convergence
  const convergenceData = [
    { year: '2020', privateCapital: 30, publicMarket: 70, convergence: 10 },
    { year: '2021', privateCapital: 35, publicMarket: 65, convergence: 15 },
    { year: '2022', privateCapital: 40, publicMarket: 60, convergence: 20 },
    { year: '2023', privateCapital: 45, publicMarket: 55, convergence: 25 },
    { year: '2024', privateCapital: 50, publicMarket: 50, convergence: 30 },
    { year: '2025', privateCapital: 55, publicMarket: 45, convergence: 35 },
    { year: '2026F', privateCapital: 60, publicMarket: 40, convergence: 40 }
  ];

  // Data for Startup IPO Timeline
  const ipoTimelineData = [
    { year: '2020', yearsPrivate: 12, iposPerYear: 5, domesticPE: 30, retailParticipation: 25 },
    { year: '2021', yearsPrivate: 11, iposPerYear: 8, domesticPE: 35, retailParticipation: 30 },
    { year: '2022', yearsPrivate: 10, iposPerYear: 12, domesticPE: 40, retailParticipation: 35 },
    { year: '2023', yearsPrivate: 9, iposPerYear: 15, domesticPE: 45, retailParticipation: 38 },
    { year: '2024', yearsPrivate: 8, iposPerYear: 18, domesticPE: 50, retailParticipation: 42 },
    { year: '2025', yearsPrivate: 7, iposPerYear: 22, domesticPE: 52, retailParticipation: 44 },
    { year: '2026F', yearsPrivate: 6, iposPerYear: 25, domesticPE: 55, retailParticipation: 45 }
  ];

  // Data for Sector-wise Convergence
  const sectorConvergenceData = [
    { sector: 'Fintech', privateFunding: 85, publicListings: 15, convergence: 25, color: '#3B82F6' },
    { sector: 'Renewable Energy', privateFunding: 80, publicListings: 20, convergence: 30, color: '#10B981' },
    { sector: 'Healthcare', privateFunding: 75, publicListings: 25, convergence: 35, color: '#F59E0B' },
    { sector: 'SaaS', privateFunding: 90, publicListings: 10, convergence: 20, color: '#EF4444' },
    { sector: 'E-commerce', privateFunding: 70, publicListings: 30, convergence: 40, color: '#8B5CF6' },
    { sector: 'EdTech', privateFunding: 65, publicListings: 35, convergence: 45, color: '#06B6D4' }
  ];

  // Data for Capital Flow Sources
  const capitalFlowData = [
    { source: 'Domestic PE/VC', '2020': 30, '2026F': 55, color: '#3B82F6' },
    { source: 'Foreign PE/VC', '2020': 45, '2026F': 35, color: '#10B981' },
    { source: 'Sovereign Wealth', '2020': 15, '2026F': 25, color: '#F59E0B' },
    { source: 'Family Offices', '2020': 10, '2026F': 20, color: '#EF4444' }
  ];

  // Data for Regulatory Impact
  const regulatoryImpactData = [
    { metric: 'IPO Approval Time (months)', before: 12, after: 4, improvement: '67%' },
    { metric: 'Dual-class Share Adoption', before: 5, after: 25, improvement: '400%' },
    { metric: 'Cross-border Listings', before: 2, after: 15, improvement: '650%' },
    { metric: 'Retail Protection Score', before: 60, after: 85, improvement: '42%' }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];

  return (
    <div className="space-y-8 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Private vs Public Market Convergence</h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={convergenceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="privateCapital" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} name="Private Capital %" />
            <Area type="monotone" dataKey="publicMarket" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} name="Public Market %" />
            <Area type="monotone" dataKey="convergence" stackId="2" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.8} name="Convergence %" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Startup IPO Evolution (2020-2026F)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={ipoTimelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="yearsPrivate" stroke="#3B82F6" strokeWidth={3} name="Years Private" />
            <Line yAxisId="right" type="monotone" dataKey="iposPerYear" stroke="#10B981" strokeWidth={3} name="IPOs per Year" />
            <Line yAxisId="right" type="monotone" dataKey="domesticPE" stroke="#F59E0B" strokeWidth={3} name="Domestic PE %" />
            <Line yAxisId="right" type="monotone" dataKey="retailParticipation" stroke="#EF4444" strokeWidth={3} name="Retail Participation %" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Sector-wise Capital Convergence</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={sectorConvergenceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sector" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="privateFunding" fill="#3B82F6" name="Private Funding %" />
            <Bar dataKey="publicListings" fill="#10B981" name="Public Listings %" />
            <Bar dataKey="convergence" fill="#F59E0B" name="Convergence %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Capital Flow Sources Evolution</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={capitalFlowData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="source" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="2020" fill="#3B82F6" name="2020 %" />
            <Bar dataKey="2026F" fill="#10B981" name="2026F %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Impact on Convergence</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={regulatoryImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="before" fill="#EF4444" name="Before Reforms" />
            <Bar dataKey="after" fill="#10B981" name="After Reforms" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default PrivateCapitalCharts;
