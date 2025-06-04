import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Icons
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SpeedIcon from '@mui/icons-material/Speed';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

// Images
import Nutrition from "../../../src/Images/LandingPage/fruits-jannis-why.png";
import Detox from "../../../src/Images/LandingPage/detox.png";
import Meta from "../../../src/Images/LandingPage/meta.jpg";

const WhyRodinea = () => {
  // Animation hooks for scroll reveal effects
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300
  });

  // Card data for better maintainability
  const benefitCards = [
    {
      title: "Good Nutrition",
      description: "Rodinea provides a range of essential nutrients, including vitamins, minerals, and antioxidants, that support overall health and well-being.",
      image: Nutrition,
      icon: <LocalDiningIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      alt: "nutrition"
    },
    {
      title: "Metabolism",
      description: "Rodinea is a natural supplement that helps to jumpstart your metabolism, reducing bloating and improving digestion.",
      image: Meta,
      icon: <SpeedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      alt: "metabolism"
    },
    {
      title: "Detoxification",
      description: "Rodinea is a natural detoxifier that helps to reduce inflammation, improve digestion, and support overall health.",
      image: Detox,
      icon: <WaterDropIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      alt: "detoxification"
    }
  ];

  return (
    <Stack 
      component="section"
      id="why-rodinea"
      sx={{
        px: { xs: "1.5rem", md: "3rem", lg: "5rem" },
        py: { xs: "3rem", md: "5rem", lg: "6rem" },
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Section Header with Animation */}
      <Box 
        ref={titleRef}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        sx={{ mb: 6, textAlign: "center" }}
      >
        <Typography 
          variant="h2" 
          component="h2"
          sx={{
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
            fontWeight: 600,
            mb: 2
          }}
        >
          Why <span style={{ color: "#2E6f40" }}>Rodinea</span> Works
        </Typography>
        
        <Divider sx={{ 
          width: "80px", 
          mx: "auto", 
          mb: 3, 
          borderColor: "primary.main", 
          borderWidth: 2 
        }} />
        
        <Typography 
          variant="body1" 
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            maxWidth: "800px",
            mx: "auto",
            color: "text.secondary",
            lineHeight: 1.7
          }}
        >
          Our unique formula helps to jumpstart your metabolism, reduce bloating, and gently detox your system, 
          all without harsh chemicals or caffeine crashes. With every cup, you're nourishing your body, supporting digestion, 
          and taking a step closer to your wellness goals — naturally and effortlessly.
        </Typography>
      </Box>

      {/* Benefits Cards with Grid Layout and Animation */}
      <Grid 
        container 
        spacing={4} 
        ref={cardsRef}
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {benefitCards.map((card, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6}
            md={4} 
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card 
              elevation={2}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8
                }
              }}
            >
              <Box sx={{ position: "relative", pt: "56.25%", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.alt}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                <Box 
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))"
                  }}
                />
              </Box>
              
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {card.icon}
                  <Typography 
                    variant="h5" 
                    component="h3"
                    sx={{ 
                      ml: 1.5,
                      fontWeight: 600,
                      color: "text.primary" 
                    }}
                  >
                    {card.title}
                  </Typography>
                </Box>
                
                <Divider sx={{ mb: 2 }} />
                
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default WhyRodinea;
