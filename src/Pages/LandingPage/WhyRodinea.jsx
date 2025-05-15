import React from 'react'
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Nutrition from "../../../src/Images/LandingPage/fruits-jannis-why.png";
import Detox from "../../../src/Images/LandingPage/detox.png";
import Meta from "../../../src/Images/LandingPage/meta.jpg"


const WhyRodinea = () => {
  return (
    <Stack sx={{
               px: {
                xs: "1.5rem",
                md: "3rem", 
                lg: "5rem"
            },
            py: {
                xs: "1rem", 
                lg: "5rem"
               
            }, 
            mt: {
              xs: "2rem"
            },
    }}>
            {/* Headline */}
            <Stack>
                <Typography variant='h2' sx={{
                                             fontSize: {
                          xs: "1.5rem",
                          sm: "1.75rem",
                          md:"2rem"
                        },
                        textAlign: {
                          xs: "Center",
                         
                        },
                        fontWeight: "500",}}>
                    Why <span className='text-primary-0'>Rodinea</span> Works ?
                </Typography>

                <Typography variant='body1' sx={{
                                               textAlign: {
                          xs: "left",
                          md: "center",
                          lg: "left"
                        },
                        fontSize: {
                          xs: "15px",
                          md:"16px",
                          lg:"15px"
                        },
                        fontWeight:"400",
                        pt: {
                          xs: "2rem"
                        },
                        px: {
                          xs: "0",
                          md: "40px",
                          lg:"0"
                        } ,
                }}>
                    Our unique formula helps to jumpstart your metabolism, reduce bloating, and gently detox your system, all without harsh chemicals or caffeine crashes. With every cup, you’re nourishing your body, supporting digestion, and taking a step closer to your wellness goals — naturally and effortlessly.
                </Typography>
            </Stack>

            {/* Cards */}

            <Stack spacing={0} sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row"
              },
              alignItems: "center",
              justifyContent: "center",
              pt: {
                xs: "4rem"
              },
              gap: {
                xs: "4rem",
                md: "8rem"
              }
            }}>
                <Card sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",

                }}>
                  <CardMedia component={`img`}
                  image={Nutrition}
                  alt='nutrition'
                  sx={{
                    height: {
                      xs: "70%"
                    },
                    width: {
                      xs: "70%",
                      md: "40%",
                      lg: "70%"
                    }
                  }}/>

                  <CardContent sx={{
                    backgroundColor: "",
                    color: "black",
                  }}>
                    <Typography gutterBottom variant="h3" sx={{
                      fontSize: {
                        xs: "1.5rem",
                        // sm: "1.5rem",
                        // md:"2rem"
                      },
                      textAlign: {
                        xs: "Center",
                      },
                      fontWeight: "500",
                    }}>
                      Good Nutrition
                    </Typography>

                    <Typography variant="body1" sx={{
                      textAlign: {
                        xs: "center",
                      
                      },  
                       fontSize: {
                        xs: "15px",
                        md:"16px",
                        lg:"14px"
                      }, 
                      px: {
                        xs: "2rem",
                        md: "0rem"
                      }
                    }}>
                      Rodinea provides a range of essential nutrients, including vitamins, minerals, and antioxidants, that support overall health and well-being.
                    </Typography>
                  </CardContent>
                  </Card>
                <Card sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",

                }}>
                  <CardMedia component={`img`}
                  image={Nutrition}
                  alt='nutrition'
                  sx={{
                    height: {
                      xs: "70%"
                    },
                    width: {
                      xs: "70%",
                      md: "40%",
                      lg: "70%"
                    }
                  }}/>

                  <CardContent sx={{
                    backgroundColor: "",
                    color: "black",
                  }}>
                    <Typography gutterBottom variant="h3" sx={{
                      fontSize: {
                        xs: "1.5rem",
                        // sm: "1.5rem",
                        // md:"2rem"
                      },
                      textAlign: {
                        xs: "Center",
                      },
                      fontWeight: "500",
                    }}>
                      Metabolism
                    </Typography>

                    <Typography variant="body1" sx={{
                      textAlign: {
                        xs: "center",
                      
                      },  
                       fontSize: {
                        xs: "15px",
                        md:"16px",
                        lg:"14px"
                      }, 
                      px: {
                        xs: "2rem",
                        md: "0rem"
                      }
                    }}>
                      Rodinea is a natural supplement that helps to jumpstart your metabolism, reducing bloating and improving digestion.
                    </Typography>
                  </CardContent>
                  </Card>
                <Card sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",

                }}>
                  <CardMedia component={`img`}
                  image={Nutrition}
                  alt='nutrition'
                  sx={{
                    height: {
                      xs: "70%"
                    },
                    width: {
                      xs: "70%",
                      md: "40%",
                      lg: "70%"
                    }
                  }}/>

                  <CardContent sx={{
                    backgroundColor: "",
                    color: "black",
                  }}>
                    <Typography gutterBottom variant="h3" sx={{
                      fontSize: {
                        xs: "1.5rem",
                        // sm: "1.5rem",
                        // md:"2rem"
                      },
                      textAlign: {
                        xs: "Center",
                      },
                      fontWeight: "500",
                    }}>
                      Detoxification
                    </Typography>

                    <Typography variant="body1" sx={{
                      textAlign: {
                        xs: "center",
                      
                      }, 
                      fontSize: {
                        xs: "15px",
                        md:"16px",
                        lg:"14px"
                      }, 
                      px: {
                        xs: "2rem",
                        md: "0rem"
                      }
                    }}>
                      Let your body thank you for using Rodinea today!
                      Rodinea is a natural detoxifier that helps to reduce inflammation, improve digestion, and support overall health.
                    </Typography>
                  </CardContent>
                  </Card>
            </Stack>
    </Stack>
  )
}

export default WhyRodinea;
