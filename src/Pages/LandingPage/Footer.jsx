import React from 'react'
import Stack from "@mui/material/Stack";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

// Logo
import logo from "../../Images/Logos/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  
  const productCategories = [
    { name: "Tea Bags", path: "/products/tea-bags" },
    { name: "Detox Drinks", path: "/products/detox-drinks" },
    { name: "Weight Management", path: "/products/weight-management" },
    { name: "Wellness Bundles", path: "/products/wellness-bundles" },
  ];

  return (
    <Stack sx={{
      px: {
        xs: "1.5rem",
        md: "3rem", 
        lg: "5rem"
      },
      pt: {
        xs: "3rem",
        md: "4rem"
      },
      pb: "2rem",
      mt: {
        xs: "2rem",
      },
      backgroundColor: "black", 
      color: "white",
    }}>
      <Grid container spacing={4}>
        {/* Company Info & Logo */}
        <Grid  xs={12} md={4}>
          {/* <Box sx={{ mb: 2 }}>
            <img 
              src={logo} 
              alt="Rodinea Foods Logo" 
              style={{ 
                maxWidth: '150px',
                marginBottom: '1rem'
              }} 
            />
          </Box> */}
        <Typography variant="body2" sx={{ mb: 2, opacity: 0.8, pr:{xs: 10, xl:20} }}>
            Rodinea Foods provides premium natural products to support your wellness journey. Our unique formulas help boost metabolism, reduce bloating, and support your weight management goals naturally.
          </Typography>
          
          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
            <IconButton 
              aria-label="Facebook" 
              sx={{ 
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                '&:hover': { backgroundColor: 'primary.main' }
              }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton 
              aria-label="Instagram" 
              sx={{ 
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                '&:hover': { backgroundColor: 'primary.main' }
              }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton 
              aria-label="Twitter" 
              sx={{ 
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                '&:hover': { backgroundColor: 'primary.main' }
              }}
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton 
              aria-label="LinkedIn" 
              sx={{ 
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                '&:hover': { backgroundColor: 'primary.main' }
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Box>
        </Grid>
        
        {/* Quick Links */}
        <Grid xs={6} md={2}>
          <Typography variant="h6" sx={{ 
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 600,
            mb: 2,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '30px',
              height: '2px',
              bottom: '-8px',
              left: '0',
              backgroundColor: 'primary.main',
            }
          }}>
            Quick Links
          </Typography>
          <Stack spacing={1.5}>
            {quickLinks.map((link, index) => (
              <NavLink 
                key={index} 
                to={link.path}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  opacity: 0.8,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                    paddingLeft: '5px'
                  }
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Grid>
        
        {/* Products */}
        <Grid xs={6} md={2}>
          <Typography variant="h6" sx={{ 
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 600,
            mb: 2,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '30px',
              height: '2px',
              bottom: '-8px',
              left: '0',
              backgroundColor: 'primary.main',
            }
          }}>
            Products
          </Typography>
          <Stack spacing={1.5}>
            {productCategories.map((category, index) => (
              <NavLink 
                key={index} 
                to={category.path}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  opacity: 0.8,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                    paddingLeft: '5px'
                  }
                }}
              >
                {category.name}
              </NavLink>
            ))}
          </Stack>
        </Grid>
        
        {/* Contact & Newsletter */}
        <Grid xs={12} md={4}>
          <Typography variant="h6" sx={{ 
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 600,
            mb: 2,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '30px',
              height: '2px',
              bottom: '-8px',
              left: '0',
              backgroundColor: 'primary.main',
            }
          }}>
            Contact Us
          </Typography>
          
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <LocationOnIcon sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                123 Wellness Street, Lagos, Nigeria
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <PhoneIcon sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                +234 987 654 3210
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <EmailIcon sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                info@rodineafoods.com
              </Typography>
            </Box>
          </Stack>
          
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" sx={{ mb: 1.5 }}>
              Subscribe to our newsletter
            </Typography>
            <Box sx={{ 
              display: 'flex',
              gap: 1
            }}>
              <TextField
                placeholder="Your email"
                variant="outlined"
                size="small"
                sx={{
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255,255,255,0.5)',
                    opacity: 1,
                  },
                }}
              />
              <Button 
                variant="contained" 
                color="primary"
                sx={{ minWidth: 'auto' }}
              >
                <SendIcon fontSize="small" />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      
      {/* Copyright */}
      <Divider sx={{ 
        my: 4, 
        backgroundColor: 'rgba(255,255,255,0.1)' 
      }} />
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'center', sm: 'center' },
        gap: { xs: 2, sm: 0 }
      }}>
        <Typography variant="body2" sx={{ opacity: 0.7, textAlign: { xs: 'center', sm: 'left' } }}>
          © {currentYear} Rodinea Foods. All rights reserved.
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          opacity: 0.7,
          fontSize: '0.85rem'
        }}>
          <NavLink to="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>
            Privacy Policy
          </NavLink>
          <NavLink to="/terms" style={{ color: 'white', textDecoration: 'none' }}>
            Terms of Service
          </NavLink>
        </Box>
      </Box>
    </Stack>
  )
}

export default Footer
