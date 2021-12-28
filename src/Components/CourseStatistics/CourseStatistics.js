import { Container, Grid } from '@mui/material';
import React from 'react';
import { Pie, Cell, PieChart, CartesianGrid, XAxis, YAxis, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const CourseStatistics = () => {

    const RADIAN = Math.PI / 180;
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 }
      ];
      const data2 = [
        {
          name: "Sun",
          active_user: 4000,
          attendence: 2400,
          amt: 2400
        },
        {
          name: "Mon",
          active_user: 3000,
          attendence: 1398,
          amt: 2210
        },
        {
          name: "Tue",
          active_user: 2000,
          attendence: 9800,
          amt: 2290
        },
        {
          name: "Wed",
          active_user: 2780,
          attendence: 3908,
          amt: 2000
        },
        {
          name: "Thi",
          active_user: 1890,
          attendence: 4800,
          amt: 2181
        },
        {
          name: "Fri",
          active_user: 2390,
          attendence: 3800,
          amt: 2500
        },
        {
          name: "Sat",
          active_user: 3490,
          attendence: 4300,
          amt: 2100
        }
      ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };


    return (
        <Container>
        <Grid container style={{gap: '15px', margin: '15px auto', display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={12} md={4} sx={{backgroundColor: 'white'}} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px'}} >
            <div style={{width: '90%', padding: '10px'}}>
            <h3 style={{margin: 0}}>Courses</h3>
            <p style={{margin: 0}}>Total Course Assigned</p>
            
            </div>
            <PieChart width={300} height={200} >
              <Pie
                data={data}
                cx={150}
                cy={100}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '90%', margin: '20px auto'}}>
                <p style={{margin: 0, color: '#00C49F'}}> <span style={{display: 'inline-block', height: '10px', width: '10px', backgroundColor: '#00C49F', borderRadius: '50%'}}></span> Course Completed</p>
                <p style={{margin: 0, color: '#0088FE'}}> <span style={{display: 'inline-block', height: '10px', width: '10px', backgroundColor: '#0088FE', borderRadius: '50%'}}></span> Course Ongoing</p>
                <p style={{margin: 0, color: '#FFBB28'}}> <span style={{display: 'inline-block', height: '10px', width: '10px', backgroundColor: '#FFBB28', borderRadius: '50%'}}></span> Not Started</p>
            </div>
            </Grid>
            <Grid item xs={12} md={7} sx={{backgroundColor: 'white', borderRadius: '10px', padding: '10px'}}>
            <h3>Your Statistics</h3>
            <ResponsiveContainer width='100%' height={200}>
                <LineChart
                  width={650}
                  height={200}
                  data={data2}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                  }}
                >
                  <CartesianGrid />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="active_user" strokeWidth={2} stroke="#8884d8" fill="#8884d8" />
                </LineChart>
                </ResponsiveContainer>
            </Grid>
        </Grid>
        </Container>
    );
};

export default CourseStatistics;