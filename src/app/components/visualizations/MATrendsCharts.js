"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { motion } from 'framer-motion';

const MATrendsCharts = () => {
  // Data for M&A Deal Values by Sector (2022-2025F)
  const sectorDealData = [
    { sector: 'Technology', '2022': 25, '2023': 35, '2024': 45, '2025F': 60 },
    { sector: 'Financial Services', '2022': 20, '2023': 28, '2024': 35, '2025F': 45 },
    { sector: 'Healthcare', '2022': 15, '2023': 22, '2024': 28, '2025F': 35 },
    { sector: 'Energy & Infrastructure', '2022': 12, '2023': 18, '2024': 25, '2025F': 32 },
    { sector: 'Consumer', '2022': 10, '2023': 15, '2024': 20, '2025F': 25 },
    { sector: 'Manufacturing', '2022': 8, '2023': 12, '2024': 16, '2025F': 20 }
  ];

  // Data for M&A Volume Trends
  const volumeTrendsData = [
    { year: '2020', deals: 1200, value: 45 },
    { year: '2021', deals: 1350, value: 52 },
    { year: '2022', deals: 1500, value: 65 },
    { year: '2023', deals: 1650, value: 78 },
    { year: '2024', deals: 1800, value: 95 },
    { year: '2025F', deals: 2000, value: 150 }
  ];

  // Data for Private Equity Participation
  const peParticipationData = [
    { year: '2020', peDeals: 25, totalDeals: 100, peValue: 15 },
    { year: '2021', peDeals: 30, totalDeals: 100, peValue: 20 },
    { year: '2022', peDeals: 35, totalDeals: 100, peValue: 28 },
    { year: '2023', peDeals: 38, totalDeals: 100, peValue: 35 },
    { year: '2024', peDeals: 40, totalDeals: 100, peValue: 42 },
    { year: '2025F', peDeals: 45, totalDeals: 100, peValue: 50 }
  ];

  // Data for Cross-border M&A
  const crossBorderData = [
    { region: 'US', inbound: 35, outbound: 15, color: '#3B82F6' },
    { region: 'Japan', inbound: 25, outbound: 8, color: '#10B981' },
    { region: 'Middle East', inbound: 20, outbound: 5, color: '#F59E0B' },
    { region: 'Europe', inbound: 18, outbound: 12, color: '#EF4444' },
    { region: 'Southeast Asia', inbound: 15, outbound: 20, color: '#8B5CF6' },
    { region: 'Africa', inbound: 8, outbound: 10, color: '#06B6D4' }
  ];

  // Data for Deal Size Distribution
  const dealSizeData = [
    { range: 'Under $50M', count: 45, percentage: 35 },
    { range: '$50M - $100M', count: 25, percentage: 20 },
    { range: '$100M - $500M', count: 20, percentage: 15 },
    { range: '$500M - $1B', count: 15, percentage: 12 },
    { range: 'Over $1B', count: 10, percentage: 8 }
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
        <h3 className="text-xl font-bold text-gray-900 mb-4">M&A Deal Values by Sector (USD Billion)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={sectorDealData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sector" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="2022" fill="#3B82F6" name="2022" />
            <Bar dataKey="2023" fill="#10B981" name="2023" />
            <Bar dataKey="2024" fill="#F59E0B" name="2024" />
            <Bar dataKey="2025F" fill="#EF4444" name="2025F" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">M&A Volume and Value Trends</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={volumeTrendsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="deals" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} name="Number of Deals" />
            <Line yAxisId="right" type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} name="Deal Value (USD B)" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Private Equity Participation in M&A</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={peParticipationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="peDeals" fill="#3B82F6" name="PE Deals %" />
            <Line yAxisId="right" type="monotone" dataKey="peValue" stroke="#10B981" strokeWidth={3} name="PE Value %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-border M&A Activity (USD Billion)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={crossBorderData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="inbound" fill="#3B82F6" name="Inbound to India" />
            <Bar dataKey="outbound" fill="#10B981" name="Outbound from India" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Deal Size Distribution</h3>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dealSizeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ range, percentage }) => `${range}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {dealSizeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1">
            <div className="space-y-3">
              {dealSizeData.map((deal, index) => (
                <div key={deal.range} className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm font-medium">{deal.range}</span>
                  <span className="text-sm text-gray-600">{deal.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MATrendsCharts;
