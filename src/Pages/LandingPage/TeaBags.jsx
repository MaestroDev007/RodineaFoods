import React from 'react'
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid'; // Correct import for Grid
import Divider from "@mui/material/Divider"
import Fade from "@mui/material/Fade"
import { useInView } from 'react-intersection-observer'
import teabag from "../../../src/Images/LandingPage/tea-1132529_1280.jpg"
import LocalCafeIcon from '@mui/icons-material/LocalCafe'
import SpaIcon from '@mui/icons-material/Spa';
import RecyclingIcon from '@mui/icons-material/Recycling'
import Button from '@mui/material/Button'

const TeaBags = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  }) || { ref: null, inView: false };

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 300
  }) || { ref: null, inView: false };

  const teaFlavors = [
    { name: "Honey Lemon", color: "#f9a825" },
    { name: "Mint Fresh", color: "#66bb6a" },
    { name: "Ginger Spice", color: "#ef6c00" },
    { name: "Chamomile", color: "#ffd54f" }
  ];

  return (
    <Stack sx={{
            px: {
                xs: "1.5rem",
                md: "3rem", 
                lg: "5rem"
            },
            py: {
                xs: "3rem", 
                lg: "5rem"
            }, 
            backgroundColor: "black",
            backgroundImage: `url(${teabag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
            minHeight: "80vh",
            display: "flex",
            alignItems: "center"
          }}
          >
        {/* Animated Gradient Overlay */}
        <Box className='inset-0 absolute z-10' sx={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 100%)',
          width: '100%',
          height: '100%',
          animation: 'gradientShift 15s ease infinite',
          '@keyframes gradientShift': {
            '0%': { opacity: 0.7 },
            '50%': { opacity: 0.8 },
            '100%': { opacity: 0.7 }
          }
        }}></Box>
        
        {/* Content Container */}
        <Grid container spacing={4} className='z-20'>
          <Grid xs={12} lg={6}>
            <Box ref={titleRef} sx={{
              transform: titleInView ? 'translateY(0)' : 'translateY(50px)',
              opacity: titleInView ? 1 : 0,
              transition: 'all 0.8s ease-out',
              mb: 4
            }}>
              <Typography 
                variant="h2"
                sx={{
                  textAlign: {
                    xs: "Center",
                    lg: "left"
                  },
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.75rem",
                    md: "2.5rem"
                  },
                  fontWeight: 700,
                  color: "white",
                  position: "relative",
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-15px',
                    left: {
                      xs: '50%',
                      lg: '0'
                    },
                    transform: {
                      xs: 'translateX(-50%)',
                      lg: 'translateX(0)'
                    },
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #f9a825, #66bb6a)',
                    borderRadius: '2px'
                  }
                }}>
                Rich Blend Of <br/> 
                <Box component="span" sx={{ 
                  color: 'primary.main',
                  textShadow: '0 0 15px rgba(255,255,255,0.3)'
                }}>
                  Natural Ingredients
                </Box>
              </Typography>
            </Box>
            
            <Box ref={contentRef} sx={{
              transform: contentInView ? 'translateY(0)' : 'translateY(30px)',
              opacity: contentInView ? 1 : 0,
              transition: 'all 0.8s ease-out',
              transitionDelay: '0.3s'
            }}>
              <Typography 
                variant='body1'
                sx={{
                  textAlign: {
                    xs: "left",
                    md: "center",
                    lg: "left"
                  },
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: {
                    xs: "15px",
                    md: "16px",
                    lg: "15px"
                  },
                  fontWeight: "400",
                  pt: {
                    xs: "2rem"
                  },
                  px: {
                    xs: "0",
                    md: "40px",
                    lg: "0"
                  },
                  lineHeight: 1.8
                }}>
                Rodinea Label Tea Bags is a rich blend of natural ingredients that are carefully selected to provide a unique and flavorful experience. The tea bags are made with high-quality tea leaves, which are ground and processed to create a smooth and flavorful beverage.
              </Typography>
              
              {/* Benefits Icons */}
              <Grid container spacing={2} sx={{ mt: 4 }}>
                {[
                  { icon: <LocalCafeIcon />, text: "Premium Quality" },
                  { icon: <SpaIcon />, text: "Natural Ingredients" },
                  { icon: <RecyclingIcon />, text: "Eco-Friendly" }
                ].map((benefit, index) => (
                  <Grid xs={4} key={index}>
                    <Fade in={contentInView} style={{ transitionDelay: `${300 + (index * 150)}ms` }}>
                      <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center'
                      }}>
                        <Box sx={{
                          color: 'primary.main',
                          fontSize: '2rem',
                          mb: 1,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(5px)'
                        }}>
                          {benefit.icon}
                        </Box>
                        <Typography variant="body2" sx={{ color: 'white' }}>
                          {benefit.text}
                        </Typography>
                      </Box>
                    </Fade>
                  </Grid>
                ))}
              </Grid>
            </Box>
            
            <Box sx={{ mt: 6 }}>
              <Typography 
                variant='h2'
                sx={{
                  textAlign: {
                    xs: "Center",
                    lg: "left"
                  },
                  color: "white",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.75rem",
                    md: "2rem"
                  },
                  lineHeight: "1.4",
                  fontWeight: 600
                }}>
                Same Tea, <br/>
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Different Flavours
                </Box>
              </Typography>

              <Typography 
                variant='body1'
                sx={{
                  textAlign: {
                    xs: "left",
                    md: "center",
                    lg: "left"
                  },  
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: {
                    xs: "15px",
                    md: "16px",
                    lg: "15px"
                  },
                  fontWeight: "400",
                  pt: {
                    xs: "1rem"
                  },
                  px: {
                    xs: "0",
                    md: "40px",
                    lg: "0"
                  },
                  mb: 3
                }}>
                Rodinea Label Tea Bags are available in different flavours, making it easy for you to choose the perfect taste for your needs.
              </Typography>
              
              {/* Flavor Pills */}
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2,
                justifyContent: {
                  xs: 'center',
                  lg: 'flex-start'
                },
                mt: 3
              }}>
                {teaFlavors.map((flavor, index) => (
                  <Fade 
                    key={index} 
                    in={contentInView} 
                    style={{ transitionDelay: `${600 + (index * 150)}ms` }}
                  >
                    <Box sx={{
                      backgroundColor: `${flavor.color}20`,
                      border: `1px solid ${flavor.color}`,
                      borderRadius: '30px',
                      px: 2,
                      py: 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1
                    }}>
                      <Box sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: flavor.color
                      }}></Box>
                      <Typography sx={{ color: 'white', fontSize: '0.9rem' }}>
                        {flavor.name}
                      </Typography>
                    </Box>
                  </Fade>
                ))}
              </Box>
              
              <Button 
                variant="contained" 
                color="primary"
                sx={{
                  mt: 4,
                  borderRadius: '30px',
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 25px rgba(0,0,0,0.4)'
                  }
                }}
              >
                Explore Our Teas
              </Button>
            </Box>
          </Grid>
          
          {/* Right side - Tea Bag Showcase */}
          <Grid xs={12} lg={6} sx={{ 
            display: { xs: 'none', lg: 'flex' },
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Box sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* This would be a good place to add product images or 3D elements */}
              <Box sx={{
                width: '300px',
                height: '300px',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: '150%',
                  height: '150%',
                  background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                  transform: 'rotate(45deg)',
                  animation: 'shine 3s infinite',
                },
                '@keyframes shine': {
                  '0%': { left: '-50%', top: '-50%' },
                  '100%': { left: '150%', top: '150%' }
                }
              }}>
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 300 }}>
                  Premium Tea Collection
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
    </Stack>
  )
}

export default TeaBags;
