"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';

const PhilosophyCharts = () => {
  // Data for Three Lenses Framework
  const threeLensesData = [
    { lens: 'Financial Strength', score: 85, importance: 90, impact: 88 },
    { lens: 'Strategic Growth', score: 80, importance: 85, impact: 82 },
    { lens: 'Governance Maturity', score: 90, importance: 95, impact: 92 }
  ];

  // Data for Four Stages of Growth
  const growthStagesData = [
    { stage: 'Early Foundations', duration: 2, investment: 5, governance: 60, value: 20 },
    { stage: 'Growth & Expansion', duration: 3, investment: 15, governance: 75, value: 40 },
    { stage: 'Institutionalization', duration: 4, investment: 25, governance: 90, value: 70 },
    { stage: 'Transition & Exit', duration: 2, investment: 10, governance: 95, value: 100 }
  ];

  // Data for Partnership vs Transaction Comparison
  const partnershipComparisonData = [
    { metric: 'Duration (years)', partnership: 7, transaction: 2, improvement: '250%' },
    { metric: 'Value Creation', partnership: 85, transaction: 45, improvement: '89%' },
    { metric: 'Governance Score', partnership: 90, transaction: 60, improvement: '50%' },
    { metric: 'Success Rate', partnership: 78, transaction: 52, improvement: '50%' },
    { metric: 'Long-term Sustainability', partnership: 88, transaction: 35, improvement: '151%' }
  ];

  // Data for Sector Specialization
  const sectorSpecializationData = [
    { sector: 'Healthcare', partnerships: 25, value: 85, governance: 90, color: '#3B82F6' },
    { sector: 'Financial Services', partnerships: 20, value: 80, governance: 85, color: '#10B981' },
    { sector: 'Renewable Energy', partnerships: 18, value: 75, governance: 88, color: '#F59E0B' },
    { sector: 'Technology', partnerships: 22, value: 82, governance: 87, color: '#EF4444' },
    { sector: 'Consumer', partnerships: 15, value: 70, governance: 80, color: '#8B5CF6' },
    { sector: 'Manufacturing', partnerships: 12, value: 65, governance: 75, color: '#06B6D4' }
  ];

  // Data for Value Creation Framework
  const valueCreationData = [
    { pillar: 'Sustainable Growth', current: 75, target: 90, achievement: 83 },
    { pillar: 'Strategic Resilience', current: 70, target: 85, achievement: 82 },
    { pillar: 'Institutional Excellence', current: 80, target: 95, achievement: 84 }
  ];

  // Data for Global Benchmarking
  const globalBenchmarkData = [
    { region: 'India', partnerships: 65, governance: 70, value: 75, innovation: 80 },
    { region: 'US', partnerships: 85, governance: 90, value: 88, innovation: 85 },
    { region: 'Europe', partnerships: 80, governance: 88, value: 82, innovation: 78 },
    { region: 'Southeast Asia', partnerships: 60, governance: 65, value: 70, innovation: 75 },
    { region: 'Middle East', partnerships: 55, governance: 60, value: 65, innovation: 70 }
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
        <h3 className="text-xl font-bold text-gray-900 mb-4">Three Lenses Framework Performance</h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={threeLensesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <PolarGrid />
            <PolarAngleAxis dataKey="lens" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Score" dataKey="score" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
            <Radar name="Importance" dataKey="importance" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
            <Radar name="Impact" dataKey="impact" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Four Stages of Growth Journey</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={growthStagesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership vs Transaction Approach</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={partnershipComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="partnership" fill="#3B82F6" name="Partnership Approach" />
            <Bar dataKey="transaction" fill="#EF4444" name="Transaction Approach" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Sector Specialization Performance</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={sectorSpecializationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sector" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="partnerships" fill="#3B82F6" name="Active Partnerships" />
            <Bar dataKey="value" fill="#10B981" name="Value Creation %" />
            <Bar dataKey="governance" fill="#F59E0B" name="Governance Score" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Value Creation Framework Progress</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={valueCreationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="pillar" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" fill="#3B82F6" name="Current Score" />
            <Bar dataKey="target" fill="#10B981" name="Target Score" />
            <Bar dataKey="achievement" fill="#F59E0B" name="Achievement %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Global Benchmarking Comparison</h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={globalBenchmarkData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <PolarGrid />
            <PolarAngleAxis dataKey="region" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Partnerships" dataKey="partnerships" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
            <Radar name="Governance" dataKey="governance" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
            <Radar name="Value" dataKey="value" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
            <Radar name="Innovation" dataKey="innovation" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default PhilosophyCharts;
