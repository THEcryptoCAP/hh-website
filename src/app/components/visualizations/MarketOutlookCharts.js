"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';

const MarketOutlookCharts = () => {
  // Data for Key Investment Themes
  const investmentThemesData = [
    { theme: 'AI & Technology', opportunity: 95, risk: 25, growth: 85, color: '#3B82F6' },
    { theme: 'Clean Energy', opportunity: 90, risk: 30, growth: 80, color: '#10B981' },
    { theme: 'Healthcare Innovation', opportunity: 85, risk: 35, growth: 75, color: '#F59E0B' },
    { theme: 'Emerging Markets', opportunity: 80, risk: 40, growth: 70, color: '#EF4444' },
    { theme: 'Financial Services', opportunity: 75, risk: 45, growth: 65, color: '#8B5CF6' },
    { theme: 'Consumer Tech', opportunity: 70, risk: 50, growth: 60, color: '#06B6D4' }
  ];

  // Data for Sector Performance Analysis
  const sectorPerformanceData = [
    { sector: 'Technology', growth: 85, valuation: 70, risk: 30, opportunity: 90 },
    { sector: 'Financial Services', growth: 75, valuation: 65, risk: 40, opportunity: 80 },
    { sector: 'Healthcare', growth: 80, valuation: 75, risk: 35, opportunity: 85 },
    { sector: 'Energy', growth: 70, valuation: 60, risk: 45, opportunity: 75 },
    { sector: 'Consumer', growth: 65, valuation: 55, risk: 50, opportunity: 70 },
    { sector: 'Manufacturing', growth: 60, valuation: 50, risk: 55, opportunity: 65 }
  ];

  // Data for Geographic Opportunities
  const geographicData = [
    { region: 'North America', opportunity: 85, risk: 30, marketSize: 25, growth: 75 },
    { region: 'Asia-Pacific', opportunity: 90, risk: 35, marketSize: 30, growth: 80 },
    { region: 'Europe', opportunity: 80, risk: 40, marketSize: 20, growth: 70 },
    { region: 'Latin America', opportunity: 70, risk: 50, marketSize: 15, growth: 65 },
    { region: 'Middle East', opportunity: 75, risk: 45, marketSize: 12, growth: 70 },
    { region: 'Africa', opportunity: 65, risk: 60, marketSize: 8, growth: 60 }
  ];

  // Data for Risk Factors Analysis
  const riskFactorsData = [
    { risk: 'Geopolitical Tensions', probability: 70, impact: 85, mitigation: 60, color: '#3B82F6' },
    { risk: 'Interest Rate Volatility', probability: 80, impact: 75, mitigation: 70, color: '#10B981' },
    { risk: 'Technology Disruption', probability: 60, impact: 90, mitigation: 65, color: '#F59E0B' },
    { risk: 'Climate Risks', probability: 75, impact: 80, mitigation: 55, color: '#EF4444' },
    { risk: 'Regulatory Changes', probability: 65, impact: 70, mitigation: 75, color: '#8B5CF6' },
    { risk: 'Market Volatility', probability: 85, impact: 60, mitigation: 80, color: '#06B6D4' }
  ];

  // Data for Investment Strategy Performance
  const strategyPerformanceData = [
    { strategy: 'Diversification', returns: 75, risk: 40, consistency: 80, popularity: 85 },
    { strategy: 'Quality Focus', returns: 85, risk: 30, consistency: 90, popularity: 75 },
    { strategy: 'ESG Integration', returns: 80, risk: 35, consistency: 85, popularity: 80 },
    { strategy: 'Technology Adoption', returns: 90, risk: 50, consistency: 70, popularity: 90 },
    { strategy: 'Value Investing', returns: 70, risk: 45, consistency: 75, popularity: 65 },
    { strategy: 'Growth Investing', returns: 85, risk: 60, consistency: 65, popularity: 85 }
  ];

  // Data for Market Trends Timeline
  const marketTrendsData = [
    { quarter: 'Q1 2024', aiAdoption: 25, cleanEnergy: 30, healthcare: 35, fintech: 40 },
    { quarter: 'Q2 2024', aiAdoption: 35, cleanEnergy: 35, healthcare: 40, fintech: 45 },
    { quarter: 'Q3 2024', aiAdoption: 45, cleanEnergy: 40, healthcare: 45, fintech: 50 },
    { quarter: 'Q4 2024', aiAdoption: 55, cleanEnergy: 45, healthcare: 50, fintech: 55 },
    { quarter: 'Q1 2025F', aiAdoption: 65, cleanEnergy: 50, healthcare: 55, fintech: 60 },
    { quarter: 'Q2 2025F', aiAdoption: 75, cleanEnergy: 55, healthcare: 60, fintech: 65 }
  ];

  // Data for Portfolio Allocation Recommendations
  const portfolioAllocationData = [
    { asset: 'Equities', allocation: 60, expectedReturn: 12, risk: 70, color: '#3B82F6' },
    { asset: 'Bonds', allocation: 25, expectedReturn: 6, risk: 30, color: '#10B981' },
    { asset: 'Alternative Investments', allocation: 10, expectedReturn: 15, risk: 80, color: '#F59E0B' },
    { asset: 'Cash', allocation: 5, expectedReturn: 3, risk: 10, color: '#EF4444' }
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
        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Investment Themes 2025</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={investmentThemesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="theme" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="opportunity" fill="#3B82F6" name="Opportunity Score" />
            <Bar dataKey="risk" fill="#EF4444" name="Risk Score" />
            <Bar dataKey="growth" fill="#10B981" name="Growth Potential" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Sector Performance Analysis</h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={sectorPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <PolarGrid />
            <PolarAngleAxis dataKey="sector" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Growth" dataKey="growth" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
            <Radar name="Valuation" dataKey="valuation" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
            <Radar name="Risk" dataKey="risk" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
            <Radar name="Opportunity" dataKey="opportunity" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Geographic Investment Opportunities</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={geographicData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="opportunity" fill="#3B82F6" name="Opportunity Score" />
            <Bar yAxisId="left" dataKey="growth" fill="#10B981" name="Growth %" />
            <Bar yAxisId="right" dataKey="marketSize" fill="#F59E0B" name="Market Size (USD T)" />
            <Bar yAxisId="left" dataKey="risk" fill="#EF4444" name="Risk Score" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Factors Analysis</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={riskFactorsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="risk" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="probability" fill="#3B82F6" name="Probability %" />
            <Bar dataKey="impact" fill="#EF4444" name="Impact %" />
            <Bar dataKey="mitigation" fill="#10B981" name="Mitigation %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Strategy Performance</h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={strategyPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <PolarGrid />
            <PolarAngleAxis dataKey="strategy" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Returns" dataKey="returns" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
            <Radar name="Risk" dataKey="risk" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
            <Radar name="Consistency" dataKey="consistency" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
            <Radar name="Popularity" dataKey="popularity" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Market Trends Timeline</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={marketTrendsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="aiAdoption" stroke="#3B82F6" strokeWidth={3} name="AI Adoption %" />
            <Line type="monotone" dataKey="cleanEnergy" stroke="#10B981" strokeWidth={3} name="Clean Energy %" />
            <Line type="monotone" dataKey="healthcare" stroke="#F59E0B" strokeWidth={3} name="Healthcare %" />
            <Line type="monotone" dataKey="fintech" stroke="#EF4444" strokeWidth={3} name="Fintech %" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Portfolio Allocation</h3>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={portfolioAllocationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ asset, allocation }) => `${asset}: ${allocation}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="allocation"
                >
                  {portfolioAllocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1">
            <div className="space-y-3">
              {portfolioAllocationData.map((asset, index) => (
                <div key={asset.asset} className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm font-medium">{asset.asset}</span>
                  <span className="text-sm text-gray-600">{asset.allocation}%</span>
                  <span className="text-sm text-gray-500">({asset.expectedReturn}% return)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketOutlookCharts;
