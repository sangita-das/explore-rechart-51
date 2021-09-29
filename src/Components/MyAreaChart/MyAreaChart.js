import React from 'react';
import { AreaChart, CartesianGrid, Area, Tooltip, XAxis, YAxis } from 'recharts';


const MyAreaChart = () => {
  const data = [
    {
      name: "company A",
      mobile: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "company B",
      mobile: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "company C",
      mobile: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "company D",
      mobile: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "company E",
      mobile: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "company F",
      mobile: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "company G",
      mobile: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="mobile" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="amt" />
    </AreaChart>
  );
};

export default MyAreaChart;