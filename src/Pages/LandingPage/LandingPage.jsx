import React from 'react';
import Stack from "@mui/material/Stack";
import MenuBar from './MenuBar';
import Hero from './Hero';
import TeaBags from './TeaBags';
import WhyRodinea from './WhyRodinea';
import FeaturedProducts from './FeaturedProducts';
import ProductCategory from './ProductCategory';

const LandingPage = () => {
  return (
    <Stack>
     <MenuBar/>
     <Hero/>
     <ProductCategory/>
     <FeaturedProducts/>
     <TeaBags/>
     <WhyRodinea/>
    </Stack>
  )
}

export default LandingPage
