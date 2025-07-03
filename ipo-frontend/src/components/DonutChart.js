// src/components/DonutChart.js
import React, { useEffect, useState, useCallback } from 'react';
import { PieChart, Pie, Cell, Sector } from 'recharts';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/ipo/';
const COLORS = ['#8B5CF6', '#C4B5FD', '#E0E7FF']; // Purple shades to match Figma

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={8}
      />
      <foreignObject x={cx - 75} y={cy - 45} width="150" height="90">
        <div style={{
          background: '#262B42',
          color: 'white',
          borderRadius: '12px',
          padding: '12px',
          textAlign: 'center',
          fontSize: '14px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ fontWeight: 'bold', opacity: 0.8 }}>{payload.name}</div>
          <div style={{ fontSize: '12px', opacity: 0.6, margin: '4px 0' }}>IPO NSE & BSE</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{payload.value}</div>
        </div>
      </foreignObject>
    </g>
  );
};

const DonutChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios.get(API_URL)
      .then((res) => {
        const ipos = res.data;
        const upcoming = ipos.filter(ipo => ipo.status === 'upcoming').length;
        const listed = ipos.filter(ipo => ipo.status === 'listed').length;
        const ongoing = ipos.filter(ipo => ipo.status === 'ongoing').length;

        const formattedData = [
          { name: 'Upcoming', value: upcoming },
          { name: 'New Listed', value: listed },
          { name: 'Ongoing', value: ongoing },
        ];
        setChartData(formattedData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching IPO data for DonutChart:", err);
        setLoading(false);
      });
  }, []);

  const onPieEnter = useCallback((_, index) => {
    setActiveIndex(index);
  }, [setActiveIndex]);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl border border-gray-200 h-full flex items-center justify-center">
        <p className="text-gray-500">Loading Chart...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Main Board IPO</h3>
          <p className="text-sm text-gray-500">From 01 Jan 2024</p>
        </div>
        <button className="text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg">
          View Report
        </button>
      </div>

      <div className="flex-grow flex items-center justify-center -mt-4">
        <PieChart width={250} height={250}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            dataKey="value"
            onMouseEnter={onPieEnter}
            paddingAngle={5}
            cornerRadius={8}
          >
            {chartData.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} className="focus:outline-none" stroke="none" />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="flex justify-center items-center space-x-8 mt-4">
        {chartData.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: COLORS[idx % COLORS.length] }}
            ></div>
            <span className="text-sm text-gray-600">{item.name}</span>
            <span className="text-sm font-bold text-gray-800">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
