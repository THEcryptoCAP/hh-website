"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ScatterChart, Scatter } from 'recharts';
import { motion } from 'framer-motion';

const InvestmentStrategyCharts = () => {
  // Data for Operational Excellence Framework
  const operationalFrameworkData = [
    { layer: 'Operational Cipher', efficiency: 85, cost: 40, time: 60, color: '#3B82F6' },
    { layer: 'Quantum Decision Matrix', efficiency: 90, cost: 35, time: 70, color: '#10B981' },
    { layer: 'Value Extraction Algorithms', efficiency: 88, cost: 45, time: 65, color: '#F59E0B' }
  ];

  // Data for Operational Transformation Impact
  const transformationImpactData = [
    { element: 'Process Optimization', traditional: 100, transformed: 123, improvement: '23%' },
    { element: 'Decision Velocity', traditional: 100, transformed: 140, improvement: '40%' },
    { element: 'Data Utilization', traditional: 100, transformed: 118, improvement: '18%' },
    { element: 'Asset Utilization', traditional: 100, transformed: 130, improvement: '30%' }
  ];

  // Data for ESG Value Multiplier
  const esgValueData = [
    { metric: 'Operational Performance', withoutESG: 75, withESG: 90, improvement: '20%' },
    { metric: 'Risk Management', withoutESG: 70, withESG: 85, improvement: '21%' },
    { metric: 'Stakeholder Trust', withoutESG: 65, withESG: 88, improvement: '35%' },
    { metric: 'Market Valuation', withoutESG: 80, withESG: 95, improvement: '19%' },
    { metric: 'Long-term Sustainability', withoutESG: 60, withESG: 85, improvement: '42%' }
  ];

  // Data for Case Study Results
  const caseStudyData = [
    { metric: 'Production Efficiency', before: 100, after: 135, improvement: '35%' },
    { metric: 'Operational Costs', before: 100, after: 72, improvement: '28%' },
    { metric: 'EBITDA Margins', before: 100, after: 142, improvement: '42%' },
    { metric: 'Exit Multiple', before: 100, after: 320, improvement: '220%' }
  ];

  // Data for Digital Transformation Impact
  const digitalTransformationData = [
    { year: '2020', digitalAdoption: 25, operationalEfficiency: 60, costReduction: 15 },
    { year: '2021', digitalAdoption: 35, operationalEfficiency: 65, costReduction: 20 },
    { year: '2022', digitalAdoption: 45, operationalEfficiency: 70, costReduction: 25 },
    { year: '2023', digitalAdoption: 55, operationalEfficiency: 75, costReduction: 30 },
    { year: '2024', digitalAdoption: 65, operationalEfficiency: 80, costReduction: 35 },
    { year: '2025F', digitalAdoption: 75, operationalEfficiency: 85, costReduction: 40 }
  ];

  // Data for Value Creation by Industry
  const industryValueData = [
    { industry: 'Manufacturing', operationalGains: 35, costReduction: 28, valueCreation: 42, color: '#3B82F6' },
    { industry: 'Technology', operationalGains: 40, costReduction: 32, valueCreation: 45, color: '#10B981' },
    { industry: 'Healthcare', operationalGains: 30, costReduction: 25, valueCreation: 38, color: '#F59E0B' },
    { industry: 'Financial Services', operationalGains: 38, costReduction: 30, valueCreation: 40, color: '#EF4444' },
    { industry: 'Energy', operationalGains: 32, costReduction: 26, valueCreation: 35, color: '#8B5CF6' },
    { industry: 'Consumer', operationalGains: 28, costReduction: 22, valueCreation: 32, color: '#06B6D4' }
  ];

  // Data for Implementation Timeline
  const implementationTimelineData = [
    { phase: 'Assessment', duration: 2, investment: 5, roi: 0, color: '#3B82F6' },
    { phase: 'Planning', duration: 3, investment: 10, roi: 0, color: '#10B981' },
    { phase: 'Implementation', duration: 6, investment: 25, roi: 15, color: '#F59E0B' },
    { phase: 'Optimization', duration: 4, investment: 15, roi: 35, color: '#EF4444' },
    { phase: 'Scaling', duration: 3, investment: 20, roi: 60, color: '#8B5CF6' }
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
        <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Excellence Framework Performance</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={operationalFrameworkData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="layer" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="efficiency" fill="#3B82F6" name="Efficiency %" />
            <Bar dataKey="cost" fill="#10B981" name="Cost Reduction %" />
            <Bar dataKey="time" fill="#F59E0B" name="Time Savings %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Transformation Impact</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={transformationImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="element" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="traditional" fill="#EF4444" name="Traditional Approach" />
            <Bar dataKey="transformed" fill="#10B981" name="Transformed Approach" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">ESG Value Multiplier Impact</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={esgValueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="withoutESG" fill="#EF4444" name="Without ESG" />
            <Bar dataKey="withESG" fill="#10B981" name="With ESG" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Case Study: Manufacturing Excellence Results</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={caseStudyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="before" fill="#EF4444" name="Before Transformation" />
            <Bar dataKey="after" fill="#10B981" name="After Transformation" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Transformation Impact Over Time</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={digitalTransformationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="digitalAdoption" stroke="#3B82F6" strokeWidth={3} name="Digital Adoption %" />
            <Line yAxisId="left" type="monotone" dataKey="operationalEfficiency" stroke="#10B981" strokeWidth={3} name="Operational Efficiency %" />
            <Line yAxisId="right" type="monotone" dataKey="costReduction" stroke="#F59E0B" strokeWidth={3} name="Cost Reduction %" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Value Creation by Industry</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={industryValueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="industry" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="operationalGains" fill="#3B82F6" name="Operational Gains %" />
            <Bar dataKey="costReduction" fill="#10B981" name="Cost Reduction %" />
            <Bar dataKey="valueCreation" fill="#F59E0B" name="Value Creation %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Timeline & ROI</h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={implementationTimelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="phase" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="investment" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} name="Investment (₹ Cr)" />
            <Area yAxisId="right" type="monotone" dataKey="roi" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.8} name="ROI %" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default InvestmentStrategyCharts;
