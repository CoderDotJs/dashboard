import { Container, Grid } from '@mui/material';
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";

const AnnouncementVisitors = () => {

    const data = [
        {
          name: "Jan",
          new_visitors: 7000,
          returning_visitors: 2400,
          amt: 2400
        },
        {
          name: "Feb",
          new_visitors: 3000,
          returning_visitors: 1398,
          amt: 2210
        },
        {
          name: "Mar",
          new_visitors: 2000,
          returning_visitors: 9800,
          amt: 2290
        },
        {
          name: "Apr",
          new_visitors: 2780,
          returning_visitors: 3908,
          amt: 2000
        },
        {
          name: "May",
          new_visitors: 1890,
          returning_visitors: 4800,
          amt: 2181
        },
        {
          name: "Jun",
          new_visitors: 2390,
          returning_visitors: 3800,
          amt: 2500
        },
        {
          name: "Jul",
          new_visitors: 3490,
          returning_visitors: 4300,
          amt: 2100
        }
      ];

      
    


    return (
        <Container>
        <Grid container style={{gap: '15px', m: '0 auto', display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={12} md={4} sx={{backgroundColor: 'white'}} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px'}} >
            <div style={{width: '90%', padding: '10px'}}>
            <h3 style={{margin: 0}}>Announcements</h3>
            <p style={{margin: 0}}>All Anouncements And Notification</p>
            
            </div>
            
            
            </Grid>
            <Grid item xs={12} md={7} sx={{backgroundColor: 'white', borderRadius: '10px', padding: '10px'}}>
            <h3>Visitors</h3>
            <ResponsiveContainer width='100%' height={200}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="new_visitors" fill="#8884d8" radius={[10, 10, 0, 0]}/>
              <Bar dataKey="returning_visitors" fill="#82ca9d" radius={[10, 10, 0, 0]}/>
            </BarChart>
                </ResponsiveContainer>
            </Grid>
        </Grid>
        </Container>
    );
};

export default AnnouncementVisitors;