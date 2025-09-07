"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { motion } from 'framer-motion';

const CSRCharts = () => {
  // Data for CSR Spending Trends (2015-2025)
  const spendingTrendsData = [
    { year: '2015', spending: 8.5, companies: 1200 },
    { year: '2016', spending: 10.2, companies: 1350 },
    { year: '2017', spending: 12.8, companies: 1500 },
    { year: '2018', spending: 15.5, companies: 1650 },
    { year: '2019', spending: 18.2, companies: 1800 },
    { year: '2020', spending: 20.8, companies: 1950 },
    { year: '2021', spending: 22.5, companies: 2100 },
    { year: '2022', spending: 24.8, companies: 2250 },
    { year: '2023', spending: 27.2, companies: 2400 },
    { year: '2024', spending: 28.5, companies: 2550 },
    { year: '2025F', spending: 30.0, companies: 2700 }
  ];

  // Data for Sector-wise CSR Allocations (2025)
  const sectorAllocationData = [
    { sector: 'Education', allocation: 32, amount: 9.6, color: '#3B82F6' },
    { sector: 'Healthcare', allocation: 28, amount: 8.4, color: '#10B981' },
    { sector: 'Rural Development', allocation: 15, amount: 4.5, color: '#F59E0B' },
    { sector: 'Climate Action', allocation: 12, amount: 3.6, color: '#EF4444' },
    { sector: 'Digital Inclusion', allocation: 8, amount: 2.4, color: '#8B5CF6' },
    { sector: 'Women Empowerment', allocation: 5, amount: 1.5, color: '#06B6D4' }
  ];

  // Data for Top CSR Spenders
  const topSpendersData = [
    { company: 'Reliance Industries', spending: 1000, focus: 'Renewable Energy', color: '#3B82F6' },
    { company: 'Tata Group', spending: 850, focus: 'Education & Healthcare', color: '#10B981' },
    { company: 'Infosys', spending: 650, focus: 'Digital Education', color: '#F59E0B' },
    { company: 'HDFC Bank', spending: 580, focus: 'Financial Literacy', color: '#EF4444' },
    { company: 'TCS', spending: 520, focus: 'Rural Development', color: '#8B5CF6' },
    { company: 'Wipro', spending: 480, focus: 'Healthcare Access', color: '#06B6D4' }
  ];

  // Data for CSR Impact Metrics
  const impactMetricsData = [
    { metric: 'Students Educated', '2020': 2.5, '2025': 4.2, target: 5.0 },
    { metric: 'Healthcare Beneficiaries', '2020': 1.8, '2025': 3.5, target: 4.0 },
    { metric: 'Rural Households Uplifted', '2020': 1.2, '2025': 2.8, target: 3.5 },
    { metric: 'Carbon Footprint Reduced', '2020': 0.8, '2025': 2.2, target: 3.0 },
    { metric: 'Digital Literacy Programs', '2020': 0.5, '2025': 1.8, target: 2.5 }
  ];

  // Data for ESG Integration Trends
  const esgIntegrationData = [
    { year: '2020', esgAlignment: 25, csrSpending: 20.8, performance: 60 },
    { year: '2021', esgAlignment: 35, csrSpending: 22.5, performance: 65 },
    { year: '2022', esgAlignment: 45, csrSpending: 24.8, performance: 70 },
    { year: '2023', esgAlignment: 55, csrSpending: 27.2, performance: 75 },
    { year: '2024', esgAlignment: 65, csrSpending: 28.5, performance: 80 },
    { year: '2025F', esgAlignment: 75, csrSpending: 30.0, performance: 85 }
  ];

  // Data for Regional CSR Distribution
  const regionalDistributionData = [
    { region: 'Urban', allocation: 60, impact: 40, efficiency: 70 },
    { region: 'Semi-Urban', allocation: 25, impact: 35, efficiency: 80 },
    { region: 'Rural', allocation: 15, impact: 25, efficiency: 60 }
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
        <h3 className="text-xl font-bold text-gray-900 mb-4">CSR Spending Trends (2015-2025)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={spendingTrendsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="spending" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} name="Spending (₹ Cr)" />
            <Line yAxisId="right" type="monotone" dataKey="companies" stroke="#10B981" strokeWidth={3} name="Companies" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Sector-wise CSR Allocations (2025)</h3>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sectorAllocationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ sector, allocation }) => `${sector}: ${allocation}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="allocation"
                >
                  {sectorAllocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1">
            <div className="space-y-3">
              {sectorAllocationData.map((sector, index) => (
                <div key={sector.sector} className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm font-medium">{sector.sector}</span>
                  <span className="text-sm text-gray-600">{sector.allocation}% (₹{sector.amount} Cr)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Top CSR Spenders (₹ Crore)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={topSpendersData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="company" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="spending" fill="#3B82F6" name="CSR Spending (₹ Cr)" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">CSR Impact Metrics (Millions of Beneficiaries)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={impactMetricsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="2020" fill="#3B82F6" name="2020" />
            <Bar dataKey="2025" fill="#10B981" name="2025" />
            <Bar dataKey="target" fill="#F59E0B" name="Target" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">ESG Integration Trends</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={esgIntegrationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="esgAlignment" stroke="#3B82F6" strokeWidth={3} name="ESG Alignment %" />
            <Line yAxisId="left" type="monotone" dataKey="performance" stroke="#10B981" strokeWidth={3} name="Performance Score" />
            <Line yAxisId="right" type="monotone" dataKey="csrSpending" stroke="#F59E0B" strokeWidth={3} name="CSR Spending (₹ Cr)" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Regional CSR Distribution & Impact</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={regionalDistributionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="allocation" fill="#3B82F6" name="Allocation %" />
            <Bar dataKey="impact" fill="#10B981" name="Impact %" />
            <Bar dataKey="efficiency" fill="#F59E0B" name="Efficiency %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default CSRCharts;
