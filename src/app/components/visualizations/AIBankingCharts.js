"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

const AIBankingCharts = () => {
  // Data for AI Impact on Deal Origination
  const dealOriginationData = [
    {
      metric: 'Time to Identify Targets',
      traditional: 3.5,
      withAI: 0.5,
      improvement: '85%'
    },
    {
      metric: 'Companies Screened (per analyst)',
      traditional: 50,
      withAI: 1000,
      improvement: '1900%'
    },
    {
      metric: 'Cost of Origination (index)',
      traditional: 100,
      withAI: 60,
      improvement: '40%'
    },
    {
      metric: 'Mandate Win Probability (%)',
      traditional: 30,
      withAI: 55,
      improvement: '83%'
    }
  ];

  // Data for AI Adoption Timeline
  const adoptionTimelineData = [
    { year: '2020', adoption: 15, deals: 120 },
    { year: '2021', adoption: 25, deals: 180 },
    { year: '2022', adoption: 40, deals: 250 },
    { year: '2023', adoption: 65, deals: 320 },
    { year: '2024', adoption: 80, deals: 400 },
    { year: '2025', adoption: 95, deals: 500 }
  ];

  // Data for AI Impact by Function
  const functionImpactData = [
    { name: 'Deal Origination', efficiency: 85, accuracy: 78, cost: 40 },
    { name: 'Valuation', efficiency: 70, accuracy: 82, cost: 35 },
    { name: 'Due Diligence', efficiency: 90, accuracy: 88, cost: 50 },
    { name: 'Risk Management', efficiency: 75, accuracy: 85, cost: 45 },
    { name: 'Client Advisory', efficiency: 60, accuracy: 72, cost: 25 }
  ];

  // Data for Sector-wise AI Adoption
  const sectorAdoptionData = [
    { name: 'Technology', value: 95, color: '#3B82F6' },
    { name: 'Financial Services', value: 88, color: '#10B981' },
    { name: 'Healthcare', value: 75, color: '#F59E0B' },
    { name: 'Manufacturing', value: 65, color: '#EF4444' },
    { name: 'Energy', value: 70, color: '#8B5CF6' },
    { name: 'Consumer', value: 60, color: '#06B6D4' }
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
        <h3 className="text-xl font-bold text-gray-900 mb-4">AI Impact on Deal Origination</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dealOriginationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="traditional" fill="#EF4444" name="Traditional Banking" />
            <Bar dataKey="withAI" fill="#10B981" name="With AI (2025)" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">AI Adoption Timeline in Indian Banking</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={adoptionTimelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="adoption" fill="#3B82F6" name="AI Adoption %" />
            <Line yAxisId="right" type="monotone" dataKey="deals" stroke="#10B981" strokeWidth={3} name="Deals Processed" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">AI Impact by Banking Function</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={functionImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="efficiency" fill="#3B82F6" name="Efficiency Improvement %" />
            <Bar dataKey="accuracy" fill="#10B981" name="Accuracy Improvement %" />
            <Bar dataKey="cost" fill="#F59E0B" name="Cost Reduction %" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Sector-wise AI Adoption in Banking</h3>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sectorAdoptionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sectorAdoptionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1">
            <div className="space-y-3">
              {sectorAdoptionData.map((sector, index) => (
                <div key={sector.name} className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm font-medium">{sector.name}</span>
                  <span className="text-sm text-gray-600">{sector.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIBankingCharts;
