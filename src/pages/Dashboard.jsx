import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/DashboardNavbar';
import './Dashboard.css';

const Dashboard = () => {

  //prym crs
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };
   
  //prym cre

  // Metrics data
  const metrics = [
    {
      title: 'Total Transactions',
      value: '12,458',
      change: '+12.5%',
      trend: 'up',
      description: 'Last 30 days'
    },
    {
      title: 'Success Rate',
      value: '98.2%',
      change: '+0.3%',
      trend: 'up',
      description: 'Transaction success'
    },
    {
      title: 'Total Revenue',
      value: '$342,890',
      change: '+18.7%',
      trend: 'up',
      description: 'This month'
    },
    {
      title: 'API Calls',
      value: '1.2M',
      change: '+8.4%',
      trend: 'up',
      description: 'Last 30 days'
    }
  ];

  // Chart data - Transactions Over Time
  const transactionsOverTime = [
    { day: 'Mon', transactions: 420 },
    { day: 'Tue', transactions: 580 },
    { day: 'Wed', transactions: 650 },
    { day: 'Thu', transactions: 720 },
    { day: 'Fri', transactions: 890 },
    { day: 'Sat', transactions: 540 },
    { day: 'Sun', transactions: 380 }
  ];

  // Chart data - Payment Method Distribution
  const paymentMethods = [
    { name: 'Credit Card', value: 45, color: '#2196f3' },
    { name: 'Debit Card', value: 28, color: '#4caf50' },
    { name: 'Bank Transfer', value: 15, color: '#ff9800' },
    { name: 'Digital Wallet', value: 12, color: '#9c27b0' }
  ];

  // Recent transactions data
  const recentTransactions = [
    { id: 'TXN-2024-001', amount: 129.99, status: 'Success', date: '2024-01-15', method: 'Credit Card' },
    { id: 'TXN-2024-002', amount: 89.50, status: 'Success', date: '2024-01-15', method: 'Debit Card' },
    { id: 'TXN-2024-003', amount: 450.00, status: 'Pending', date: '2024-01-14', method: 'Bank Transfer' },
    { id: 'TXN-2024-004', amount: 234.75, status: 'Success', date: '2024-01-14', method: 'Credit Card' },
    { id: 'TXN-2024-005', amount: 67.99, status: 'Failed', date: '2024-01-13', method: 'Digital Wallet' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Success': '#4caf50',
      'Pending': '#ff9800',
      'Failed': '#f44336'
    };
    return colors[status] || '#9e9e9e';
  };

  const MetricCard = ({ title, value, change, trend, description }) => (
    <Card
      elevation={2}
      sx={{
        height: '100%',
        transition: 'all 0.3s ease',
        '&:hover': {
          elevation: 4,
          transform: 'translateY(-4px)'
        }
      }}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom variant="body2" fontWeight="500">
          {title}
        </Typography>
        <Typography variant="h4" fontWeight="700" sx={{ mb: 1 }}>
          {value}
        </Typography>
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Typography
            variant="body2"
            sx={{
              color: trend === 'up' ? '#4caf50' : '#f44336',
              fontWeight: 600
            }}
          >
            {change}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <div className="dashboard-page">
      <Sidebar onToggle={handleSidebarToggle} />
      <div
        className="main-content"
        style={{
          marginLeft: isCollapsed ? "64px" : "244px",
          paddingTop: "64px",
          width: isCollapsed ? "calc(100vw - 64px)" : "calc(100vw - 244px)",
          transition: "all 0.3s ease",
        }}
      >
      
        <DashboardNavbar isCollapsed={isCollapsed} />

        <div 
          className="dashboard-content-wrapper"
          style={{
            padding: "32px",
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#f9fafb",
            minHeight: "calc(100vh - 64px)",
            position: "relative",
          }}
        >
            {/* Header */}
            <Box sx={{ mb: 4, pb: 3, borderBottom: '1px solid #e5e7eb' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box>
                  <Typography variant="h4" fontWeight="600" sx={{ color: '#111827', mb: 1, fontSize: '28px' }}>
                    Overview
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6b7280', fontSize: '16px' }}>
                    Overview of your payment operations and analytics
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ 
                    px: 3, py: 1.5, 
                    backgroundColor: '#f3f4f6', 
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <Typography variant="body2" sx={{ color: '#374151', fontWeight: 500 }}>
                      Last updated: {new Date().toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Metrics Section */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {metrics.map((metric, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <MetricCard {...metric} />
                </Grid>
              ))}
            </Grid>

            {/* Charts Section */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {/* Transactions Over Time - Line Chart */}
              <Grid item xs={6} lg={8}>
                <Card 
                  elevation={2}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" fontWeight="600" gutterBottom>
                        Transactions Over Time
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Daily transaction volume (Last 7 days)
                      </Typography>
                    </Box>
                    <Box sx={{ flex: 1, minHeight: 400 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={transactionsOverTime}>
                          <defs>
                            <linearGradient id="colorTransactions" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#2196f3" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#2196f3" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e8eaf6" vertical={false} />
                          <XAxis 
                            dataKey="day" 
                            stroke="#666" 
                            tick={{ fill: '#666' }}
                            style={{ fontSize: '0.875rem' }}
                          />
                          <YAxis 
                            stroke="#666"
                            tick={{ fill: '#666' }}
                            style={{ fontSize: '0.875rem' }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#fff',
                              border: '1px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '8px 12px',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                            labelStyle={{ fontWeight: 600, color: '#333' }}
                          />
                          <Legend 
                            wrapperStyle={{ paddingTop: '20px' }}
                            iconType="line"
                          />
                          <Line
                            type="monotone"
                            dataKey="transactions"
                            stroke="#2196f3"
                            strokeWidth={3}
                            dot={{ fill: '#2196f3', r: 6, strokeWidth: 2 }}
                            activeDot={{ r: 8 }}
                            name="Transactions"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Payment Method Distribution - Pie Chart */}
              <Grid item xs={6} lg={8}>
                <Card 
                  elevation={2}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" fontWeight="600" gutterBottom>
                        Payment Methods
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Distribution by payment type
                      </Typography>
                    </Box>
                    <Box sx={{ flex: 1, minHeight: 400 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={paymentMethods}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {paymentMethods.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#fff',
                              border: '1px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '8px 12px',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                    {/* Legend for pie chart */}
                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                      {paymentMethods.map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box
                            sx={{
                              width: 12,
                              height: 12,
                              borderRadius: '50%',
                              bgcolor: item.color
                            }}
                          />
                          <Typography variant="body2" color="textSecondary">
                            {item.name}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Recent Transactions Table */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={2} sx={{ width: '100%' }}>
              <Box sx={{ p: 3 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Recent Transactions
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Latest payment transactions
                  </Typography>
                </Box>
                    
                <TableContainer sx={{ borderRadius: 1, overflow: 'hidden' }}>
                  <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f8f9fa' }}>
                        <TableCell sx={{ fontWeight: 700, color: '#495057', fontSize: '0.875rem' }}>
                          Transaction ID
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700, color: '#495057', fontSize: '0.875rem' }}>
                          Amount
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700, color: '#495057', fontSize: '0.875rem' }}>
                          Status
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700, color: '#495057', fontSize: '0.875rem' }}>
                          Date
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700, color: '#495057', fontSize: '0.875rem' }}>
                          Payment Method
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentTransactions.map((transaction, index) => (
                        <TableRow
                          key={transaction.id}
                          sx={{
                            '&:hover': { bgcolor: '#f8f9fa' },
                            transition: 'background-color 0.2s',
                            borderBottom: index < recentTransactions.length - 1 ? '1px solid #e9ecef' : 'none'
                          }}
                        >
                          <TableCell sx={{ fontWeight: 500, color: '#212529' }}>
                            {transaction.id}
                          </TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#212529' }}>
                            ${transaction.amount.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <Box
                              component="span"
                              sx={{
                                bgcolor: getStatusColor(transaction.status) + '15',
                                color: getStatusColor(transaction.status),
                                px: 1.5,
                                py: 0.75,
                                borderRadius: 1,
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                display: 'inline-block'
                              }}
                            >
                              {transaction.status}
                            </Box>
                          </TableCell>
                          <TableCell sx={{ color: '#6c757d', fontWeight: 500 }}>
                            {transaction.date}
                          </TableCell>
                          <TableCell sx={{ color: '#6c757d', fontWeight: 500 }}>
                            {transaction.method}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Paper>
              </Grid>
            </Grid>
        </div>
      </div>
    </div>
    
  );
};

export default Dashboard;
