import React from 'react';
import Stack from "@mui/material/Stack";
import MenuBar from './MenuBar';
import Hero from './Hero';
import TeaBags from './TeaBags';
import WhyRodinea from './WhyRodinea';
import FeaturedProducts from './FeaturedProducts';
import ProductCategory from './ProductCategory';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <Stack>
     <MenuBar/>
     <Hero/>
     <ProductCategory/>
     <FeaturedProducts/>
     <TeaBags/>
     <WhyRodinea/>
     <Footer/>
    </Stack>
  )
}

export default LandingPage
