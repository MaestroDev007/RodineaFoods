import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// MUI Components
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

// Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Components
import MenuBar from '../LandingPage/MenuBar';
import Footer from '../LandingPage/Footer';

const Contact = () => {
  // Animation hooks
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Contact info items with enhanced details
  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: "Visit Our Office",
      details: "123 Green Avenue, Lagos, Nigeria",
      subDetails: "Open for walk-in consultations",
      action: "Get Directions",
      link: "https://maps.google.com",
      color: "#2E6F40",
      bgGradient: "linear-gradient(135deg, #2E6F40 0%, #3a8a50 100%)"
    },
    {
      icon: <PhoneIcon />,
      title: "Call Our Team",
      details: "+234 123 456 7890",
      subDetails: "Mon-Fri, 9AM-5PM",
      action: "Call Now",
      link: "tel:+2341234567890",
      color: "#2B3E34",
      bgGradient: "linear-gradient(135deg, #2B3E34 0%, #3d5549 100%)"
    },
    {
      icon: <EmailIcon />,
      title: "Email Us",
      details: "info@rodineafoods.com",
      subDetails: "We respond within 24 hours",
      action: "Send Email",
      link: "mailto:info@rodineafoods.com",
      color: "#4a7c59",
      bgGradient: "linear-gradient(135deg, #4a7c59 0%, #5d9c6f 100%)"
    },
    {
      icon: <AccessTimeIcon />,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 5PM",
      subDetails: "Weekends: 10AM - 2PM",
      action: "View Schedule",
      link: "#",
      color: "#1d4d28",
      bgGradient: "linear-gradient(135deg, #1d4d28 0%, #2a6e3a 100%)"
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: <FacebookIcon />, name: "Facebook", url: "#" },
    { icon: <InstagramIcon />, name: "Instagram", url: "#" },
    { icon: <TwitterIcon />, name: "Twitter", url: "#" },
    { icon: <LinkedInIcon />, name: "LinkedIn", url: "#" }
  ];

  return (
    <Stack>
      <MenuBar />
      
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          px: { xs: '1.5rem', md: '3rem', lg: '5rem' },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Box
            ref={titleRef}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
          >
            <Typography 
              variant="h2" 
              component="h1"
              sx={{
                fontSize: { xs: '2.2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2
              }}
            >
              Get In Touch With Us
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.9,
                mb: 4
              }}
            >
              Have questions about our products or services? We're here to help you on your wellness journey.
            </Typography>
          </Box>
        </Container>
        
        {/* Background decorative elements */}
        <Box 
          component={motion.div}
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            zIndex: 0
          }}
        />
        <Box 
          component={motion.div}
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          sx={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            zIndex: 0
          }}
        />
      </Box>

      {/* Contact Cards Section - COMPLETELY REDESIGNED */}
      <Box 
        sx={{
          px: { xs: '1.5rem', md: '3rem', lg: '5rem' },
          py: { xs: 8, md: 10 },
          bgcolor: '#f8f9fa',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'radial-gradient(rgba(46, 111, 64, 0.05) 2px, transparent 2px)',
            backgroundSize: '30px 30px',
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h4" 
            component="h2"
            align="center"
            sx={{ 
              mb: 6,
              fontWeight: 700,
              color: 'primary.main',
              position: 'relative',
              display: 'inline-block',
              mx: 'auto',
              width: '100%',
              textAlign: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                bgcolor: 'primary.main',
                borderRadius: 2
              }
            }}
          >
            How to Reach Us
          </Typography>
          
          {/* Fixed width container to ensure cards stay in one row */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: 3,
              flexWrap: 'nowrap',
              width: '100%',
              overflowX: { xs: 'hidden', md: 'visible' }
            }}
            ref={cardsRef}
          >
            {contactInfo.map((item, index) => (
              <Box
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={cardsInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5, 
                    delay: index * 0.15 
                  }
                } : {}}
                sx={{
                  flex: '1 1 0',
                  minWidth: { md: '220px' },
                  maxWidth: { md: '280px' }
                }}
              >
                <motion.div
                  whileHover={{ 
                    y: -12,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ height: '100%' }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 15px 35px rgba(46,111,64,0.15)'
                      }
                    }}
                  >
                    {/* Card Header with Gradient */}
                    <Box
                      sx={{
                        background: item.bgGradient,
                        pt: 5,
                        pb: 3,
                        px: 3,
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Decorative circles */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -20,
                          right: -20,
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.1)'
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: -30,
                          left: -30,
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.1)'
                        }}
                      />
                      
                      {/* Icon */}
                      <Avatar
                        component={motion.div}
                        whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                        transition={{ duration: 0.5 }}
                        sx={{
                          width: 70,
                          height: 70,
                          bgcolor: 'white',
                          color: item.color,
                          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                          mb: 2,
                          '& svg': {
                            fontSize: 35
                          }
                        }}
                      >
                        {item.icon}
                      </Avatar>
                      
                      {/* Title */}
                      <Typography 
                        variant="h6" 
                        component="h3"
                        sx={{ 
                          fontWeight: 600,
                          color: 'white',
                          mb: 0.5
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    
                    {/* Card Content */}
                    <Box 
                      sx={{ 
                        p: 3, 
                        bgcolor: 'white',
                        height: '180px', // Fixed height for content area
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontWeight: 500,
                            mb: 1,
                            fontSize: '1rem'
                          }}
                        >
                          {item.details}
                        </Typography>
                        
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ 
                            mb: 3,
                            fontSize: '0.875rem',
                            opacity: 0.8
                          }}
                        >
                          {item.subDetails}
                        </Typography>
                      </Box>
                      
                      <Button
                        component="a"
                        href={item.link}
                        variant="contained"
                        size="medium"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          bgcolor: item.color,
                          borderRadius: 6,
                          px: 2,
                          py: 1,
                          textTransform: 'none',
                          fontWeight: 500,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                          '&:hover': {
                            bgcolor: item.color,
                            filter: 'brightness(110%)',
                            boxShadow: '0 6px 15px rgba(0,0,0,0.15)'
                          }
                        }}
                      >
                        {item.action}
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ height: '400px', width: '100%' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932537!2d3.1191195!3d6.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1623159507318!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Rodinea Foods Location"
        />
      </Box>

      {/* Social Media Section */}
      <Box 
        sx={{
          py: 5,
          px: { xs: '1.5rem', md: '3rem', lg: '5rem' },
          textAlign: 'center',
          bgcolor: 'white'
        }}
      >
        <Typography 
          variant="h4" 
          component="h2"
          sx={{ 
            mb: 3,
            fontWeight: 600,
            color: 'primary.main'
          }}
        >
          Connect With Us
        </Typography>
        <Typography 
          variant="body1"
          sx={{ 
            mb: 4,
            maxWidth: '700px',
            mx: 'auto',
            color: 'text.secondary'
          }}
        >
          Follow us on social media to stay updated with our latest products, wellness tips, and special promotions.
        </Typography>
        <Box 
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: 2
          }}
        >
          {socialLinks.map((social, index) => (
            <IconButton 
              key={index}
              aria-label={social.name}
              href={social.url}
              sx={{ 
                color: 'white',
                bgcolor: 'primary.main',
                '&:hover': { 
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-3px)'
                },
                transition: 'transform 0.2s',
                p: 2
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
      
      <Footer />
    </Stack>
  )
}

export default Contact