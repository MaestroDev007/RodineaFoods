import React from 'react'
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { CardMedia } from '@mui/material';
import freshStartImg from "../../../src/Images/LandingPage/FeatureProducts/tslim.jpg"


const ProductCategory = () => {
  const productCategory = [
    {
      image: freshStartImg,
      title: "Fresh Start Cleanse",
      description: "Simple and budget-friendly for a new start to life. ",
      price: "N295,000,000",
      tagline: "Beginner Body Reset",
      cta: "Start Reset",
      summaryBullets: [
        "4 Meal Replacement Smoothies",  
       " 1 Detox Drink",
        "2 Drinks + 1 Powder",
        "Meal Plan",
        "Waist Trainer",
      "Weight Tracker"

      ]
    },
    {
      image: freshStartImg,
      title: "Signature Body Sculpt",
      description: "For that personal signature touch and detailed body sculpt .",
      price: "N450,000,000",
      tagline: "Sculpt, cleanse, and tone.",
      cta: "Start Sculpt",
      summaryBullets: [
      "fresh start cleans plus",
      "2weeks of professional support"

      ]
    },
    {
      image: freshStartImg,
      title: "Elite Body Reset",
      description: " For those who want a more intense transformation.",
      price: "N850,000,000",
      tagline: "Beginner Body Reset",
      cta: "Start Reset",
      summaryBullets: [
        "signature body sculpt plus",
        "1-on-1 Coaching for 1 Month",
        "Weekly Progress Analysis + Body Stats Review",
        "1 Personal Training Session (optional)",
        "VIP Client Support Access (priority chat/calls)",

      ]
    },
  ]

  return (
    <Stack sx={{
            px: {
                xs: "1.5rem",
                md: "3rem", 
                lg: "5rem"
            },

            pb: "4rem",
           
            mt: {
                xs: "2rem",
            },
            backgroundColor: "black", 
            color: "white",
            }}>
        <Stack>
            <Divider 
  textAlign="center"
  sx={{
    my: 4,
    mx: { 
      xs: 4,    // No margin on extra small screens
      sm: 8,    // Some margin on small screens
      md: 16,    // More margin on medium screens
      lg: 32,   // Large margin on large screens
      xl: 40    // Extra large margin on extra large screens
    }, // margin top and bottom
    "&::before, &::after": {
      borderColor: "primary.main", // customize the line color
    }
  }}
>
  <Typography variant="body2" color="gray">
    Product Categories
  </Typography>
</Divider>

            <Typography variant='h3' gutterBottom 
            
            sx={{
                            textAlign: "center",
                            fontWeight: "semibold",
                            fontSize: {
                                xs: "20px",
                                sm: "28px",
                                md: "36px", 
                            },
                            px: {
                                xs: "2rem"
                            }
                        }}>
                Choose  Your Transformation 
            </Typography>

            <Typography variant='body2'
                        textAlign="center"
                        sx={{
                            fontSize: {
                                xs: "12px",
                                sm: "14px",


                            },
                            fontWeight: 300,
                            color: "rgba(255, 255, 255, 0.7)",
                            px: {
                                xs: "2rem",
                                lg: "15rem",
                                xl: "25rem"
                            }
                        }}
                        >
                            Get Your Transformation Package From Our Different Bundles That Is Tailored To Suit Your Needs.
                        </Typography>
        </Stack>


        <Stack direction={{xs: "column", md: "row"}}
               justifyContent={{xs: "center", lg: "space-between"}}
               alignItems={{xs: "center", md: "flex-start"}}
               spacing={{xs: 6, sm: 10}}
               pt={{xs: 4, md: 8, lg:10}} >
          {
            productCategory.map((category, index) => (
              <Card key={index} sx={{
    
                 backgroundColor: 'rgba(255, 255, 255, 0.05)',  
                 width: {
                    xs: "300px",
                    sm: "350px",
                
                },
               
  backdropFilter: 'blur(10px)',               
  boxShadow: (theme) => `0 8px 32px 0 ${theme.palette.primary.main}60`,
  borderRadius: '10px',
  color: 'white',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    transform: 'translateY(-5px)'
  }
              }}>
                        <CardContent>
                            <Box   padding= {{
                              xs: "10px",
                              sm: "15px",
                              md: "20px",
                            }}>
                              <Typography variant='h5' 
                                          gutterBottom
                                          textAlign={`left`}
                                          sx={{
                                            fontSize: {
                                              xs: "14px",
                                              md: "16px",
                                              xl: "20px"
                                        
                                            },
                                            color: "white",
                                            fontWeight: 700,
                                            textWrap: "nowrap"
                                          }}>
                                {category.title}
                              </Typography>
                              <Typography variant='body2'
                                          textAlign={`left`}
                                          gutterBottom
                                          sx={{
                                            fontSize: {
                                              xs: "11px",
                                              lg: "14px",
                                              xl: "13px",
                                            },
                                            color: "rgba(255, 255, 255, 0.7)",
                                            fontWeight: 300,
                                            pt: {
                                              md: ".75rem",
                                              lg: ".5rem"
                                            }
                                          }}>
                                {category.description}
                              </Typography>
                            </Box>

                            <CardMedia component={`img`}
                                       image={category.image}
                                       height="50px"
                                       width="50px"
                                       alt={` this is an image of ${category.title}`}/>
                        </CardContent>

                        <Box   paddingX= '20px'
                              paddingY={{
                                xs: "10px",
                                sm: "15px",
                                md: "20px",
                              }}>
                          <Typography gutterBottom
                                      variant='body1'
                                      textAlign={`left`}
                                      sx={{
                                        fontSize: {
                                          xs: "20px",
                                          md: "24px",
                                        },
                                        fontWeight: 600,
                                      }}>
                              {category.price}
                          </Typography>

                          <Divider sx={{ 
  backgroundColor: 'rgba(255, 255, 255, 0.3)', 
  my: 1 
}}/>
                        </Box>

                        <Box  paddingX= '20px'
                              paddingY="10px">
                                <Typography variant='subtext'
                                            gutterBottom
                                            sx={{
                                              fontSize: {
                                                xs: "15px",
                                              },
                                              fontWeight: 500,
                                              color: "primary.main",
                                              textAlign: "left",
                                              
                                             }
                                          }
                                            >
                                    {category.tagline}
                                </Typography>

                                <Box>
                                    <Typography variant="body2" 
                                                sx={{ 
                                                    fontSize: {
                                                        xs: "13px",
                                                        sm: "14px",
                                                        md: "15px",
                                                    },
                                                    fontWeight: 500,
                                                    color: "rgba(255, 255, 255, 0.8)",
                                                    mb: 1,
                                                    paddingTop:"1rem"
                                                }}>
                                        Package Includes: 
                                    </Typography>
                                
                                    <Box component="ul" sx={{ 
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}>
                                        {category.summaryBullets.map((bullet, index) => (
                                            <Box component="li" 
                                                 key={index} 
                                                 sx={{
                                                     display: 'flex',
                                                     alignItems: 'flex-start',
                                                     marginBottom: '8px',
                                                     position: 'relative',
                                                     paddingLeft: '20px'
                                                 }}>
                                                <Box sx={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: '6px',
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'primary.main',
                                                }}>
                                                </Box>
                                                {index !== category.summaryBullets.length - 1 && (
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        left: '4px',
                                                        top: '14px',
                                                        width: '1px',
                                                        height: 'calc(100% - 6px)',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                                    }} />
                                                )}
                                                <Typography variant="body2" 
                                                            sx={{ 
                                                                fontSize: {
                                                                    xs: "12px",
                                                                   
                                                                },
                                                                color: "rgba(255, 255, 255, 0.7)",
                                                                fontWeight: 300
                                                            }}>
                                                    {bullet}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                        </Box>
            </Card>
            ))
          }
            
        </Stack>
    </Stack>
  )
}

export default ProductCategory
