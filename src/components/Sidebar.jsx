import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  IconButton,
  Divider,
  Tooltip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon
} from '@mui/icons-material';

const DRAWER_WIDTH = 240;
const DRAWER_WIDTH_COLLAPSED = 60;

const Sidebar = ({ onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // prymcr -removed const use state isCollapsed
  

  const menuItems = [
    { label: 'Overview', path: '/dashboard' },
    { label: 'Transactions', path: '/transactions' },
    { label: 'Configurations', path: '/configurations' },
    { label: 'Settlements', path: '/reports' },
    { label: 'Users & Roles', path: '/users' },
    // { label: 'Developer / API', path: '/developer' },
    { label: 'Settings', path: '/settings' },
    { label: 'Logs / Audit Trail', path: '/logs' },
    { label: 'Support', path: '/support' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (onToggle) onToggle(!isCollapsed);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const getInitials = (label) => {
    return label
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };



  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header/Brand Area */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isCollapsed ? 'center' : 'space-between',
          padding: '16px 12px',
          minHeight: 64,
        }}
      >
        {!isCollapsed ? (
          //prym crs - color changed
          <Typography variant="h6" noWrap sx={{ color: '#4931c1ff', fontWeight: 600 }}> 
            Crunchyroll
          </Typography>
        ) : (
          <Typography variant="h6" noWrap sx={{ color: '#4931c1ff', fontWeight: 700 }}> 
            AC
          </Typography>
          //prym cre
        )}
      </Box>

      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />

      {/* Menu Items */}
      <List
        sx={{
          flex: 1,
          px: 1,
          py: 2,
        }}
      >
        {menuItems.map((item) => {
          const isActive = isActiveRoute(item.path);
          return (
            <Tooltip
              key={item.label}
              title={isCollapsed ? item.label : ''}
              placement="right"
              arrow
            >
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  minHeight: 48,
                  borderRadius: 2,
                  mb: 0.5,
                  bgcolor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                  borderLeft: isActive ? '3px solid ${theme.palette.primary.main}' : '3px solid transparent',
                  color: '#ffffff',//prym cr
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                {isCollapsed ? (
                  <Box
                    sx={{
                      minWidth: 0,
                      justifyContent: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      // color: isActive ? '#4931c1ff' : 'rgba(255, 255, 255, 0.7)',
                      color: isActive ? '#4931c1ff' : 'rgba(101, 134, 185, 0.76)', //prym cr
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {getInitials(item.label)}
                  </Box>
                ) : (
                  <ListItemText
                    primary={item.label}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: '0.95rem',
                        fontWeight: isActive ? 600 : 400,
                        // color: isActive ? '#2196f3' : 'rgba(255, 255, 255, 0.87)',
                        color: isActive ? '#4931c1ff' : 'rgba(101, 134, 185, 0.76)',
                      },
                    }}
                  />
                )}
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>

      {/* Footer with Toggle Button */}
      <Box sx={{ mt: 'auto', px: 1, py: 2 }}>
        <Divider sx={{ mb: 2, borderColor: 'rgba(255, 255, 255, 0.12)' }} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={handleCollapse}
            sx={{
              // color: 'rgba(255, 255, 255, 0.7)',//prym cr 
              color: '#4931c1ff',//prym cr 
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
            display: { md: 'none' },
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer */}
        <Box
          component="nav"
          sx={{
            width: { md: isCollapsed ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH },
            flexShrink: { md: 0 },
          }}
        >
          {/* Temporary drawer for mobile */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                bgcolor: '#004EEB',
                borderRight: '1px solid rgba(255, 255, 255, 0.12)',
              },
            }}
          >
            {drawer}
          </Drawer>

          {/* Permanent drawer for desktop */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': {
                width: isCollapsed ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH,
                boxSizing: 'border-box',
                bgcolor: '#c2c5e1ff',   //prym cr
                borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
    </>
    
  );
};

export default Sidebar;
