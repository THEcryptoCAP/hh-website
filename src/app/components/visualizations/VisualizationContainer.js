"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIBankingCharts from './AIBankingCharts';
import MATrendsCharts from './MATrendsCharts';
import PrivateCapitalCharts from './PrivateCapitalCharts';
import GlobalScalingCharts from './GlobalScalingCharts';
import CSRCharts from './CSRCharts';
import PhilosophyCharts from './PhilosophyCharts';
import InvestmentStrategyCharts from './InvestmentStrategyCharts';
import MarketOutlookCharts from './MarketOutlookCharts';
import ValueCreationCharts from './ValueCreationCharts';

const VisualizationContainer = ({ articleType, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderCharts = () => {
    switch (articleType) {
      case 'ai-banking':
        return <AIBankingCharts />;
      case 'ma-trends':
        return <MATrendsCharts />;
      case 'private-capital':
        return <PrivateCapitalCharts />;
      case 'global-scaling':
        return <GlobalScalingCharts />;
      case 'csr-compliance':
        return <CSRCharts />;
      case 'philosophy':
        return <PhilosophyCharts />;
      case 'investment-strategy':
        return <InvestmentStrategyCharts />;
      case 'market-outlook':
        return <MarketOutlookCharts />;
      case 'value-creation':
        return <ValueCreationCharts />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 border border-blue-200 dark:border-gray-600"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {title || 'Data Visualizations'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {description || 'Interactive charts and graphs based on the latest data and trends'}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <span>{isExpanded ? 'Hide Charts' : 'Show Charts'}</span>
            <motion.svg
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="border-t border-blue-200 dark:border-gray-600 pt-6">
                {renderCharts()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default VisualizationContainer;
