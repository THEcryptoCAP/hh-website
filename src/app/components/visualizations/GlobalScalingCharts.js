"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ScatterChart, Scatter } from 'recharts';
import { motion } from 'framer-motion';

const GlobalScalingCharts = () => {
  // Data for Global Revenue Share Projections
  const globalRevenueData = [
    { year: '2025', domestic: 70, international: 30 },
    { year: '2026', domestic: 65, international: 35 },
    { year: '2027', domestic: 60, international: 40 },
    { year: '2028', domestic: 55, international: 45 }
  ];

  // Data for Sector-wise Global Scaling
  const sectorScalingData = [
    { sector: 'SaaS', domestic: 40, international: 60, growth: 85, color: '#3B82F6' },
    { sector: 'Fintech', domestic: 50, international: 50, growth: 90, color: '#10B981' },
    { sector: 'Climate Tech', domestic: 35, international: 65, growth: 75, color: '#F59E0B' },
    { sector: 'Health Tech', domestic: 45, international: 55, growth: 80, color: '#EF4444' },
    { sector: 'EdTech', domestic: 60, international: 40, growth: 70, color: '#8B5CF6' },
    { sector: 'E-commerce', domestic: 55, international: 45, growth: 65, color: '#06B6D4' }
  ];

  // Data for Geographic Expansion Patterns
  const geographicData = [
    { region: 'Southeast Asia', startups: 45, funding: 2.5, marketSize: 8.5, color: '#3B82F6' },
    { region: 'Middle East', startups: 35, funding: 3.2, marketSize: 6.8, color: '#10B981' },
    { region: 'Africa', startups: 25, funding: 1.8, marketSize: 4.2, color: '#F59E0B' },
    { region: 'Europe', startups: 30, funding: 4.5, marketSize: 12.5, color: '#EF4444' },
    { region: 'North America', startups: 20, funding: 6.8, marketSize: 18.2, color: '#8B5CF6' },
    { region: 'Latin America', startups: 15, funding: 1.2, marketSize: 3.5, color: '#06B6D4' }
  ];

  // Data for Scaling Challenges
  const challengesData = [
    { challenge: 'Talent Retention', severity: 85, impact: 90, color: '#3B82F6' },
    { challenge: 'Cultural Adaptation', severity: 75, impact: 80, color: '#10B981' },
    { challenge: 'Regulatory Variation', severity: 90, impact: 85, color: '#F59E0B' },
    { challenge: 'Financial Sustainability', severity: 80, impact: 75, color: '#EF4444' },
    { challenge: 'Market Entry', severity: 70, impact: 85, color: '#8B5CF6' },
    { challenge: 'Competition', severity: 65, impact: 70, color: '#06B6D4' }
  ];

  // Data for Success Metrics
  const successMetricsData = [
    { metric: 'Revenue Growth', domestic: 25, international: 45, target: 50 },
    { metric: 'Market Penetration', domestic: 60, international: 25, target: 40 },
    { metric: 'Customer Acquisition', domestic: 40, international: 30, target: 50 },
    { metric: 'Brand Recognition', domestic: 70, international: 35, target: 60 },
    { metric: 'Operational Efficiency', domestic: 55, international: 40, target: 65 }
  ];

  // Data for Funding Rounds for Global Expansion
  const fundingData = [
    { round: 'Seed', domestic: 80, international: 20, avgSize: 1.5 },
    { round: 'Series A', domestic: 70, international: 30, avgSize: 5.2 },
    { round: 'Series B', domestic: 60, international: 40, avgSize: 12.8 },
    { round: 'Series C+', domestic: 50, international: 50, avgSize: 25.5 },
    { round: 'IPO', domestic: 40, international: 60, avgSize: 150.0 }
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
        <h3 className="text-xl font-bold text-gray-900 mb-4">Global Revenue Share Projections (2025-2028)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={globalRevenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="domestic" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} name="Domestic Revenue %" />
            <Area type="monotone" dataKey="international" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} name="International Revenue %" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Sector-wise Global Scaling Performance</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={sectorScalingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sector" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="domestic" fill="#3B82F6" name="Domestic %" />
            <Bar dataKey="international" fill="#10B981" name="International %" />
            <Bar dataKey="growth" fill="#F59E0B" name="Growth %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Geographic Expansion Opportunities</h3>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart data={geographicData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="marketSize" name="Market Size (USD B)" />
            <YAxis dataKey="funding" name="Funding (USD B)" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter dataKey="startups" fill="#3B82F6" name="Number of Startups" />
          </ScatterChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Global Scaling Challenges</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={challengesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="challenge" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="severity" fill="#3B82F6" name="Severity %" />
            <Bar dataKey="impact" fill="#10B981" name="Impact %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Success Metrics: Domestic vs International</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={successMetricsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="domestic" fill="#3B82F6" name="Domestic %" />
            <Bar dataKey="international" fill="#10B981" name="International %" />
            <Bar dataKey="target" fill="#F59E0B" name="Target %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Funding Rounds for Global Expansion</h3>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fundingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ round, avgSize }) => `${round}: $${avgSize}M`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="avgSize"
                >
                  {fundingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1">
            <div className="space-y-3">
              {fundingData.map((round, index) => (
                <div key={round.round} className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm font-medium">{round.round}</span>
                  <span className="text-sm text-gray-600">${round.avgSize}M avg</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GlobalScalingCharts;
