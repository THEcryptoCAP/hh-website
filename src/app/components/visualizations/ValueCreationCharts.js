"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ScatterChart, Scatter } from 'recharts';
import { motion } from 'framer-motion';

const ValueCreationCharts = () => {
  // Data for Four Stages of Value Creation
  const stagesData = [
    { stage: 'Seed/Early', duration: 2, investment: 5, governance: 60, value: 20, partnerships: 15 },
    { stage: 'Growth/Expansion', duration: 3, investment: 15, governance: 75, value: 40, partnerships: 25 },
    { stage: 'Maturity/Leadership', duration: 4, investment: 25, governance: 90, value: 70, partnerships: 35 },
    { stage: 'Transition/Exit', duration: 2, investment: 10, governance: 95, value: 100, partnerships: 20 }
  ];

  // Data for Three Pillars Framework
  const pillarsData = [
    { pillar: 'Sustainable Growth', current: 75, target: 90, achievement: 83, impact: 85 },
    { pillar: 'Strategic Resilience', current: 70, target: 85, achievement: 82, impact: 80 },
    { pillar: 'Institutional Excellence', current: 80, target: 95, achievement: 84, impact: 90 }
  ];

  // Data for Sector-wise Value Creation
  const sectorValueData = [
    { sector: 'Healthcare', partnerships: 25, value: 85, governance: 90, innovation: 80, color: '#3B82F6' },
    { sector: 'Technology', partnerships: 22, value: 82, governance: 87, innovation: 85, color: '#10B981' },
    { sector: 'Financial Services', partnerships: 20, value: 80, governance: 85, innovation: 75, color: '#F59E0B' },
    { sector: 'Renewable Energy', partnerships: 18, value: 75, governance: 88, innovation: 90, color: '#EF4444' },
    { sector: 'Consumer', partnerships: 15, value: 70, governance: 80, innovation: 70, color: '#8B5CF6' },
    { sector: 'Manufacturing', partnerships: 12, value: 65, governance: 75, innovation: 65, color: '#06B6D4' }
  ];

  // Data for Value Creation Metrics
  const valueMetricsData = [
    { metric: 'Revenue Growth', domestic: 25, international: 45, target: 50, achievement: 85 },
    { metric: 'Market Penetration', domestic: 60, international: 25, target: 40, achievement: 80 },
    { metric: 'Customer Acquisition', domestic: 40, international: 30, target: 50, achievement: 75 },
    { metric: 'Brand Recognition', domestic: 70, international: 35, target: 60, achievement: 90 },
    { metric: 'Operational Efficiency', domestic: 55, international: 40, target: 65, achievement: 88 }
  ];

  // Data for Global Benchmarking
  const globalBenchmarkData = [
    { region: 'India', partnerships: 65, governance: 70, value: 75, innovation: 80, sustainability: 75 },
    { region: 'US', partnerships: 85, governance: 90, value: 88, innovation: 85, sustainability: 80 },
    { region: 'Europe', partnerships: 80, governance: 88, value: 82, innovation: 78, sustainability: 85 },
    { region: 'Southeast Asia', partnerships: 60, governance: 65, value: 70, innovation: 75, sustainability: 70 },
    { region: 'Middle East', partnerships: 55, governance: 60, value: 65, innovation: 70, sustainability: 65 }
  ];

  // Data for Value Creation Timeline
  const timelineData = [
    { year: '2020', partnerships: 30, value: 40, governance: 50, sustainability: 45 },
    { year: '2021', partnerships: 35, value: 45, governance: 55, sustainability: 50 },
    { year: '2022', partnerships: 40, value: 50, governance: 60, sustainability: 55 },
    { year: '2023', partnerships: 45, value: 55, governance: 65, sustainability: 60 },
    { year: '2024', partnerships: 50, value: 60, governance: 70, sustainability: 65 },
    { year: '2025F', partnerships: 55, value: 65, governance: 75, sustainability: 70 },
    { year: '2026F', partnerships: 60, value: 70, governance: 80, sustainability: 75 }
  ];

  // Data for Success Case Studies
  const caseStudiesData = [
    { company: 'Healthcare Chain A', value: 85, governance: 90, innovation: 80, sustainability: 85, color: '#3B82F6' },
    { company: 'Tech Startup B', value: 82, governance: 87, innovation: 85, sustainability: 80, color: '#10B981' },
    { company: 'Fintech C', value: 80, governance: 85, innovation: 75, sustainability: 75, color: '#F59E0B' },
    { company: 'Energy D', value: 75, governance: 88, innovation: 90, sustainability: 90, color: '#EF4444' },
    { company: 'Consumer E', value: 70, governance: 80, innovation: 70, sustainability: 70, color: '#8B5CF6' }
  ];

  // Data for Investment Allocation by Stage
  const investmentAllocationData = [
    { stage: 'Early Stage', allocation: 20, expectedReturn: 25, risk: 80, duration: 2 },
    { stage: 'Growth Stage', allocation: 35, expectedReturn: 20, risk: 60, duration: 3 },
    { stage: 'Maturity Stage', allocation: 30, expectedReturn: 15, risk: 40, duration: 4 },
    { stage: 'Exit Stage', allocation: 15, expectedReturn: 30, risk: 20, duration: 1 }
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
        <h3 className="text-xl font-bold text-gray-900 mb-4">Four Stages of Value Creation</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={stagesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stage" angle={-45} textAnchor="end" height={100} />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="duration" fill="#3B82F6" name="Duration (years)" />
            <Bar yAxisId="left" dataKey="investment" fill="#10B981" name="Investment (₹ Cr)" />
            <Bar yAxisId="right" dataKey="governance" fill="#F59E0B" name="Governance Score" />
            <Bar yAxisId="right" dataKey="value" fill="#EF4444" name="Value Creation %" />
            <Bar yAxisId="right" dataKey="partnerships" fill="#8B5CF6" name="Partnerships" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Three Pillars Framework Progress</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={pillarsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="pillar" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" fill="#3B82F6" name="Current Score" />
            <Bar dataKey="target" fill="#10B981" name="Target Score" />
            <Bar dataKey="achievement" fill="#F59E0B" name="Achievement %" />
            <Bar dataKey="impact" fill="#EF4444" name="Impact %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Sector-wise Value Creation Performance</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={sectorValueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sector" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="partnerships" fill="#3B82F6" name="Partnerships" />
            <Bar dataKey="value" fill="#10B981" name="Value Creation %" />
            <Bar dataKey="governance" fill="#F59E0B" name="Governance Score" />
            <Bar dataKey="innovation" fill="#EF4444" name="Innovation Score" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Value Creation Metrics: Domestic vs International</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={valueMetricsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="domestic" fill="#3B82F6" name="Domestic %" />
            <Bar dataKey="international" fill="#10B981" name="International %" />
            <Bar dataKey="target" fill="#F59E0B" name="Target %" />
            <Bar dataKey="achievement" fill="#EF4444" name="Achievement %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Value Creation Evolution Timeline</h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={timelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="partnerships" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} name="Partnerships %" />
            <Area type="monotone" dataKey="value" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} name="Value Creation %" />
            <Area type="monotone" dataKey="governance" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} name="Governance %" />
            <Area type="monotone" dataKey="sustainability" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} name="Sustainability %" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Success Case Studies</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={caseStudiesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="company" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#3B82F6" name="Value Creation %" />
            <Bar dataKey="governance" fill="#10B981" name="Governance Score" />
            <Bar dataKey="innovation" fill="#F59E0B" name="Innovation Score" />
            <Bar dataKey="sustainability" fill="#EF4444" name="Sustainability Score" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Allocation by Stage</h3>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={investmentAllocationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ stage, allocation }) => `${stage}: ${allocation}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="allocation"
                >
                  {investmentAllocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1">
            <div className="space-y-3">
              {investmentAllocationData.map((stage, index) => (
                <div key={stage.stage} className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm font-medium">{stage.stage}</span>
                  <span className="text-sm text-gray-600">{stage.allocation}%</span>
                  <span className="text-sm text-gray-500">({stage.expectedReturn}% return)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ValueCreationCharts;
