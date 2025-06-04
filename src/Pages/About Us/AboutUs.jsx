import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// MUI Components
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
// Change these imports
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Button from '@mui/material/Button';

// Icons
// import EcoIcon from '@mui/icons-material/Eco';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SpaIcon from '@mui/icons-material/Spa';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Components
import MenuBar from '../LandingPage/MenuBar';
import Footer from '../LandingPage/Footer';

// Images
import heroImage from '../../Images/LandingPage/Hero/heroA.jpg';
import teaImage from '../../Images/LandingPage/tea-1132529_1280.jpg';

const AboutUs = () => {
  // Animation hooks
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Company values data
  const companyValues = [
    {
      title: "Sustainability",
      description: "We're committed to sustainable sourcing and eco-friendly practices in everything we do.",
      // icon: <EcoIcon sx={{ fontSize: 40, color: "white" }} />,
      color: "#2E6f40"
    },
    {
      title: "Quality",
      description: "We never compromise on quality, ensuring every product meets our high standards.",
      icon: <LocalFloristIcon sx={{ fontSize: 40, color: "white" }} />,
      color: "#3a8c51"
    },
    {
      title: "Wellness",
      description: "We believe in holistic wellness and creating products that nourish body and mind.",
      icon: <SpaIcon sx={{ fontSize: 40, color: "white" }} />,
      color: "#2B3E34"
    },
    {
      title: "Community",
      description: "We support the communities where our ingredients are grown and our customers live.",
      icon: <VolunteerActivismIcon sx={{ fontSize: 40, color: "white" }} />,
      color: "#4a9c61"
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Sarah founded Rodinea Foods with a passion for natural wellness and a vision to make healthy living accessible to everyone.",
      initial: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Head of Product Development",
      bio: "With over 15 years in nutritional science, Michael leads our innovative product development team.",
      initial: "MC"
    },
    {
      name: "Priya Patel",
      role: "Sustainability Director",
      bio: "Priya ensures our commitment to the environment is reflected in every aspect of our business operations.",
      initial: "PP"
    },
    {
      name: "David Okafor",
      role: "Quality Assurance Manager",
      bio: "David's meticulous approach ensures that every Rodinea product meets our exceptional quality standards.",
      initial: "DO"
    }
  ];

  // Company history milestones
  const companyHistory = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Rodinea Foods was founded with a mission to create natural wellness products."
    },
    {
      year: "2017",
      title: "First Product Line",
      description: "We launched our first line of herbal tea blends, focusing on detoxification and wellness."
    },
    {
      year: "2019",
      title: "Expansion",
      description: "Our product range expanded to include specialized wellness formulations and weight management solutions."
    },
    {
      year: "2021",
      title: "Sustainability Initiative",
      description: "We implemented our comprehensive sustainability program, focusing on ethical sourcing and eco-friendly packaging."
    },
    {
      year: "2023",
      title: "Today",
      description: "Rodinea continues to innovate and grow, staying true to our core values while embracing new wellness trends."
    }
  ];

  return (
    <Stack>
      <MenuBar />
      
      {/* Hero Section */}
      <Box
        ref={heroRef}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '60vh' },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1
            }
          }}
        >
          <Box
            component="img"
            src={heroImage}
            alt="Rodinea Foods Hero"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            sx={{ textAlign: 'center', color: 'white' }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 700,
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Our Story
            </Typography>
            
            <Divider sx={{ 
              width: '120px', 
              mx: 'auto', 
              mb: 3, 
              borderColor: 'primary.main', 
              borderWidth: 3,
              opacity: 0.8
            }} />
            
            <Typography
              variant="h5"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
              }}
            >
              Crafting natural wellness solutions since 2015
            </Typography>
          </Box>
        </Container>
      </Box>
      
      {/* Mission Section */}
      <Container maxWidth="lg">
        <Box
          ref={missionRef}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          sx={{ 
            py: { xs: 6, md: 10 },
            textAlign: 'center' 
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600,
              mb: 2,
              color: 'text.primary'
            }}
          >
            Our <span style={{ color: '#2E6f40' }}>Mission</span>
          </Typography>
          
          <Divider sx={{ 
            width: '80px', 
            mx: 'auto', 
            mb: 4, 
            borderColor: 'primary.main', 
            borderWidth: 2 
          }} />
          
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              maxWidth: '900px',
              mx: 'auto',
              mb: 5,
              color: 'text.secondary',
              lineHeight: 1.8
            }}
          >
            At Rodinea Foods, we're on a mission to transform everyday wellness through the power of nature. 
            We believe that true health comes from what we put into our bodies, which is why we create 
            premium quality, plant-based products that support holistic wellbeing without compromising on taste or convenience.
          </Typography>
          
          <Paper
            elevation={0}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              backgroundColor: 'rgba(46, 111, 64, 0.05)',
              border: '1px solid rgba(46, 111, 64, 0.1)',
              maxWidth: '900px',
              mx: 'auto'
            }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontStyle: 'italic',
                color: 'text.primary',
                lineHeight: 1.8,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              "We envision a world where natural wellness is accessible to everyone, 
              where the healing power of plants is harnessed to create products that 
              nourish both body and planet."
            </Typography>
          </Paper>
        </Box>
      </Container>
      
      {/* Values Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            ref={valuesRef}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center', mb: 6 }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 600,
                mb: 2,
                color: 'text.primary'
              }}
            >
              Our <span style={{ color: '#2E6f40' }}>Values</span>
            </Typography>
            
            <Divider sx={{ 
              width: '80px', 
              mx: 'auto', 
              mb: 4, 
              borderColor: 'primary.main', 
              borderWidth: 2 
            }} />
            
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                maxWidth: '800px',
                mx: 'auto',
                mb: 5,
                color: 'text.secondary',
                lineHeight: 1.7
              }}
            >
              Our core values guide everything we do, from sourcing ingredients to designing packaging 
              and creating innovative formulations. These principles are the foundation of our company culture.
            </Typography>
          </Box>
          
          <Box 
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', lg: 'nowrap' }, // Only wrap on smaller screens, never on lg and up
              gap: { xs: 4, lg: 2 }, // Smaller gap on large screens
              justifyContent: 'space-between'
            }}
          >
            {companyValues.map((value, index) => (
              <Box 
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                sx={{
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 16px)',
                    md: 'calc(25% - 16px)',
                    lg: `${100 / companyValues.length}%` // Equal width for each card on lg screens
                  },
                  mb: { xs: 2, lg: 0 }
                }}
              >
                <Card
                  elevation={0}
                  component={motion.div}
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.08)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: value.color,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    {value.icon}
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ 
                        mb: 2,
                        fontWeight: 600,
                        color: 'text.primary' 
                      }}
                    >
                      {value.title}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      
      {/* Our Story Section */}
      <Container maxWidth="lg">
        <Box
          ref={storyRef}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          sx={{ 
            py: { xs: 6, md: 10 },
            textAlign: 'center' 
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600,
              mb: 2,
              color: 'text.primary'
            }}
          >
            Our <span style={{ color: '#2E6f40' }}>Journey</span>
          </Typography>
          
          <Divider sx={{ 
            width: '80px', 
            mx: 'auto', 
            mb: 4, 
            borderColor: 'primary.main', 
            borderWidth: 2 
          }} />
          
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              color: 'text.secondary',
              lineHeight: 1.7
            }}
          >
            From humble beginnings to where we are today, our journey has been guided by a passion for natural wellness 
            and a commitment to quality. Here's how our story has unfolded over the years.
          </Typography>
        </Box>
        
        {/* Timeline */}
        <Timeline position="alternate" sx={{ mb: 8 }}>
          {companyHistory.map((milestone, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="text.secondary">
                <Typography 
                  variant="h6" 
                  component="span" 
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main' 
                  }}
                >
                  {milestone.year}
                </Typography>
              </TimelineOppositeContent>
              
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < companyHistory.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              
              <TimelineContent>
                <Paper 
                  elevation={1}
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  sx={{ 
                    p: 3, 
                    borderRadius: 2,
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}
                >
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    {milestone.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary">
                    {milestone.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
      
      {/* Meet Our Team Section */}
      <Box 
        ref={teamRef}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={teamInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: { xs: 'wrap', lg: 'nowrap' },
          gap: { xs: 4, lg: 3 },
          justifyContent: 'center',
          alignItems: 'stretch'
        }}
      >
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            sx={{
              width: { 
                xs: '100%',
                sm: 'calc(50% - 16px)',
                md: 'calc(25% - 16px)',
                lg: '25%'
              }
            }}
          >
            <Card
              elevation={2}
              component={motion.div}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              sx={{
                height: '100%',
                borderRadius: 3,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  pt: 4,
                  pb: 2
                }}
              >
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 2,
                    backgroundColor: 'primary.main',
                    fontSize: '2rem',
                    fontWeight: 600
                  }}
                >
                  {member.initial}
                </Avatar>
                
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ 
                    fontWeight: 600,
                    color: 'text.primary' 
                  }}
                >
                  {member.name}
                </Typography>
                
                <Typography
                  variant="subtitle1"
                  sx={{ 
                    color: 'primary.main',
                    mb: 1 
                  }}
                >
                  {member.role}
                </Typography>
              </Box>
              
              <CardContent sx={{ flexGrow: 1, p: 3, pt: 0 }}>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      
      {/* CTA Section */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 6, md: 10 },
          overflow: 'hidden',
          backgroundColor: '#2E6f40',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  Ready to Experience Rodinea?
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    mb: 4,
                    opacity: 0.9,
                    lineHeight: 1.7
                  }}
                >
                  Discover our range of natural wellness products and take the first step towards a healthier lifestyle.
                </Typography>
                
                <Button
                  variant="contained"
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.9)'
                    }
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                sx={{
                  display: { xs: 'none', md: 'block' },
                  position: 'relative',
                  height: '300px',
                  width: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                <Box
                  component="img"
                  src={teaImage}
                  alt="Rodinea Tea"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      <Footer />
    </Stack>
  );
};

export default AboutUs;