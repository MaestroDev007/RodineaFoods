import React from 'react';
import Stack from "@mui/material/Stack";
import MenuBar from './MenuBar';
import Hero from './Hero';
import TeaBags from './TeaBags';

const LandingPage = () => {
  return (
    <Stack>
     <MenuBar/>
     <Hero/>
     <TeaBags/>
    </Stack>
  )
}

export default LandingPage
