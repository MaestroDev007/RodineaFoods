import React from 'react'
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '../../Components/Button';
import heroImage from  "../../../src/Images/LandingPage/Hero/hero.jpg"
import heroImageB from  "../../../src/Images/LandingPage/Hero/chat 1.png"
import heroImageA from  "../../../src/Images/LandingPage/Hero/heroA.jpg"


const Hero = () => {
  return (
   <Stack direction={"column"}
          
          
          sx={{
            px: {
                xs: "1.5rem",
                md: "3rem", 
                lg: "5rem"
            },
            pt: {
                xs: "3rem", 
               
            },
            width: "100%",
            height: {
              xl: "100vh"
            }
      
          }}
   >

    <Stack 
           direction={
            {
              xs: "column",
              md: "row"
            }
           }
           justifyContent="space-between"
           alignItems="center"
            sx={{
        width: "100%",
        pt: {
          lg: "2.5rem"
        }
      }}
     >
      <Stack sx={{
        width: {
                xs: "100%",
                md: "50%"
              }
      }} >

         <Typography variant="h1"
         sx={{
              textAlign: "left",
              // fontSize:  "clamp(1rem, 5vw + 0.5rem, 3rem)",
              fontSize:  {
                xs: "2rem",
                md: "2.75rem",
                lg: "3.15rem"
              },
              fontWeight: "300",
              lineHeight: {
                xs: "2.45rem",
                md: "3rem",
                lg: "3.75rem"
              },
              pr: {
                xs: "0rem",
                md: "1rem",
                lg: "2rem"

              }
              
              // lineHeight: "clamp(2.25rem,  , 5rem)" 
               

         }}>
             Your Journey To Wellness Begins With <span className='text-primary-1 font-bold'>Rodinea</span>.
         </Typography>

         <Stack direction="column"
                spacing={2}
                mt={3}
                pr={{xs:4,
                //  sm: 20,
                  // md: 40,
                  //  lg:80
                   }}>
                   <Typography variant="body1"
                     sx={{
                                fontWeight: "500",
                                lineHeight: "24px",
                                textAlign: "left",
                                fontSize: {
                                  xs: "16px"
                                },
                                color: "primary.dark",
                                
                            }}>
                 Natural Products • Personalized Plans • Real Results
         </Typography>

               <Typography variant="body1"
                            sx={{
                                fontWeight: "400",
                                lineHeight: "24px",
                                textAlign: "left",
                                fontSize: {
                                  xs: "15px"
                                },
                            }}
                            >
                Our Premium blend of organic products help boost metabolism, reduce bloating, and support your weight managmenet journey. 
         </Typography>
        

        <Stack pt={3}
             direction={"row"}
             spacing={3}
             sx={{
               display: {
                xs: "flex",
                sm: "block"
                
               },
               justifyContent: "center",
              //  alignItems:"center"
             }}
            >
          <Button buttonText={`Buy Now`}
                  type={"button"}
                  variant={"contained"}
                  color={"primary"}
                  endIcon={<ShoppingCartIcon/>}
                  />
          <Button buttonText={`Contact Us`}
                  type={"button"}
                  variant={"outlined"}
                  color={"primary"}
                  endIcon={<ContactSupportIcon/>}
                  />
      </Stack>
         </Stack>
      </Stack>
        {/* <figure className=' size-[50%]'>
            <img src={heroImageB}
                 alt="hero-image"
                 className=' hidden md:flex'
                />
         </figure> */}
      </Stack>
   </Stack>
  )
}

export default Hero
