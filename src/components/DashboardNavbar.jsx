import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Badge,
  Avatar,
  Divider,
  Typography,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  NotificationsOutlined,
  SettingsOutlined,
  HelpOutline,
  Person,
  Logout,
  AccountCircle,
  Business
} from '@mui/icons-material';
import './DashboardNavbar.css';

const DashboardNavbar = ({ isCollapsed }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const [tenantAnchor, setTenantAnchor] = useState(null);
  const [notifications] = useState([
    { id: 1, title: 'New payment received', message: 'Payment from Acme Corp', time: '5 min ago' },
    { id: 2, title: 'Webhook failure', message: 'Failed to deliver to endpoint', time: '1 hour ago' },
    { id: 3, title: 'API key rotated', message: 'New API key activated', time: '2 hours ago' },
  ]);

  const tenants = [
    { name: '<tenant>-P', type: 'Production', status: 'active' },
    { name: '<tenant>-D', type: 'Development', status: 'inactive' },
    { name: '<tenant>-T', type: 'Testing', status: 'inactive' }
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchor(null);
  };

  const handleTenantClick = (event) => {
    setTenantAnchor(event.currentTarget);
  };

  const handleTenantClose = () => {
    setTenantAnchor(null);
  };

  const handleSettingsClick = () => {
    navigate('/settings');
    handleMenuClose();
  };

  const handleLogout = () => {
    // Handle logout logic
    navigate('/login');
  };

  return (
    <Box className="dashboard-navbar"
      sx={{
        width: isCollapsed ? "calc(100vw - 60px)" : "calc(100vw - 240px)",
        // marginLeft: isCollapsed ? "32px" : "240px",
        transition: "all 0.3s ease",
        }}
      >
      <Box className="navbar-content">
        <Box className="navbar-left">
          <Box className="search-container">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search transactions, customers, and more..." className="search-input" />
          </Box>
        </Box>
        
      
        <Box className="navbar-right">
          {/* Tenant Switcher */}
          <Tooltip title="Switch line">
            <Box 
              className="tenant-selector"
              onClick={handleTenantClick}
              sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 0.5, borderRadius: 1, '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' } }}
            >
              <Business sx={{ fontSize: 20 }} />
              <Typography variant="body2" fontWeight={600}>CR-Pline</Typography>
            </Box>
          </Tooltip>

          <Menu
            anchorEl={tenantAnchor}
            open={Boolean(tenantAnchor)}
            onClose={handleTenantClose}
            MenuListProps={{
              'aria-labelledby': 'tenant-button',
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {tenants.map((tenant) => (
              <MenuItem 
                key={tenant.name} 
                onClick={handleTenantClose}
                sx={{ minWidth: 250 }}
              >
                <ListItemIcon>
                  <Business />
                </ListItemIcon>
                <ListItemText 
                  primary={tenant.name}
                  secondary={tenant.type}
                />
                {tenant.status === 'active' && (
                  <Box 
                    sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: '#4caf50',
                      ml: 1 
                    }} 
                  />
                )}
              </MenuItem>
            ))}
            <Divider />
            <MenuItem onClick={handleTenantClose}>
              <ListItemIcon>
                <SettingsOutlined />
              </ListItemIcon>
              <ListItemText primary="Manage lines" />
            </MenuItem>
          </Menu>

          {/* Notifications */}
          <Tooltip title="Notifications">
            <IconButton onClick={handleNotificationClick} color="inherit">
              <Badge badgeContent={3} color="error">
                <NotificationsOutlined />
              </Badge>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={notificationAnchor}
            open={Boolean(notificationAnchor)}
            onClose={handleNotificationClose}
            MenuListProps={{
              'aria-labelledby': 'notification-button',
            }}
            sx={{ width: 320 }}
          >
            <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
              <Typography variant="h6" fontWeight="bold">Notifications</Typography>
            </Box>
            {notifications.map((notification) => (
              <MenuItem key={notification.id} onClick={handleNotificationClose}>
                <Box>
                  <Typography variant="body2" fontWeight="600">{notification.title}</Typography>
                  <Typography variant="caption" color="textSecondary">{notification.message}</Typography>
                  <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mt: 0.5 }}>
                    {notification.time}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
            <Divider />
            <MenuItem onClick={handleNotificationClose}>
              <Typography variant="body2" color="primary" sx={{ textAlign: 'center', width: '100%' }}>
                View all notifications
              </Typography>
            </MenuItem>
          </Menu>

          {/* Help */}
          <Tooltip title="Help & Support">
            <IconButton color="inherit">
              <HelpOutline />
            </IconButton>
          </Tooltip>

          {/* Settings */}
          <Tooltip title="Settings">
            <IconButton onClick={handleSettingsClick} color="inherit">
              <SettingsOutlined />
            </IconButton>
          </Tooltip>

          {/* User Menu */}
          <Tooltip title="Account menu">
            <IconButton onClick={handleMenuOpen} color="inherit">
              <Avatar sx={{ width: 32, height: 32, bgcolor: '#2196f3' }}>U</Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'user-button',
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid #e0e0e0' }}>
              <Typography variant="body2" fontWeight="600">John Doe</Typography>
              <Typography variant="caption" color="textSecondary">john@crunchyroll.com</Typography>
            </Box>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Person fontSize="small" />
              </ListItemIcon>
              <ListItemText>My Profile</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleSettingsClick}>
              <ListItemIcon>
                <SettingsOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText>Sign Out</ListItemText>
            </MenuItem>
          </Menu>

          
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardNavbar;
