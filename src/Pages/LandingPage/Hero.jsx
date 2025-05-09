import React from 'react'
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Button from '../../Components/Button';


const Hero = () => {
  return (
   <Stack 
          sx={{
            px: {
                xs: "1.5rem",
                md: "3rem", 
                lg: "5rem"
            },
            pt: {
                xs: "4rem", 
               
            }
          }}
   >
      <Stack  >
         <Typography variant="h1"
         sx={{
              textAlign: "left",
              fontSize:  "clamp(1rem, 5vw + 0.5rem, 3rem)",
              fontWeight: "300",
              lineHeight: "clamp(2.25rem,  , 5rem)" 
               

         }}>
             Transform Your Body <br/> Naturally With <span className='font-[500] md:font-[600] text-primary-1'> <br/> Rodinea</span> Slim Tea
         </Typography>

         <Stack direction="column"
                spacing={1}
                mt={2}
                pr={{xs:8, sm: 20, md: 40, lg:80}}>
               <Typography variant="body1"
                            sx={{
                                fontWeight: "300",
                                lineHeight: "24px",
                                textAlign: "left",
                                fontSize: {
                                  xs: "15px"
                                },
                            }}
                            >
                Our Premium blend of organic herbs helps boost metabolism, reduce bloating, and support your weight managmenet journey. 
         </Typography>
         <Typography variant="body1"
                     sx={{
                                fontWeight: "300",
                                lineHeight: "24px",
                                textAlign: "left",
                                fontSize: {
                                  xs: "15px"
                                },
                            }}>
               100% natural ingredients for a healthier, slimmer you. 
         </Typography>
         </Stack>
      </Stack>

      <Stack mt={4}
             direction={"row"}
             spacing={3}
             sx={{
               display: {
                xs: "block",
                
               },
               justifyContent: "center",
               alignItems:"flex-start"
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
  )
}

export default Hero
