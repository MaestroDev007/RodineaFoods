import React from 'react'
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import teabag from "../../../src/Images/LandingPage/tea-1132529_1280.jpg"

const TeaBags = () => {
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
            mt: {
              xs: "2rem"
            },
            backgroundColor: "black",
            backgroundImage: `url(${teabag})`,
            backgroundSize:"cover",
            backgroundPosition: "center",
            position: "relative"
            
          }}
          >
        {/* Dim OverlAY */}
        <div className='inset-0 absolute z-10 bg-black/70 size-full'></div>
       {/* overall content */}
        <div className='z-20'>
          <Stack sx={{
            width: {
              xs: "full",
              lg: "50%"
            }
          }}>  
      <Stack>
        <Typography variant="h1"
                    sx={{
                        textAlign: {
                             xs: "Center",
                          lg: "left"
                        },
                        fontSize: {
                          xs: "1.5rem",
                          sm: "1.75rem",
                          md:"2rem"
                        },
                    
                        color: "white"
                    }}>
          Rich Blend  Of <br/> Natural Ingredients
        </Typography>
      </Stack>
                    <Typography variant='body1'sx={{
                        textAlign: {
                          xs: "left",
                          md: "center",
                          lg: "left"
                        },
                        color: "white",
                        fontSize: {
                          xs: "15px",
                          md:"16px",
                          lg:"15px"
                        },
                        fontWeight:"300",
                        pt: {
                          xs: "2rem"
                        },
                        px: {
                          xs: "0",
                          md: "40px",
                          lg:"0"
                        }
                    }}>
                      Rodinea Label Tea Bags is a rich blend of natural ingredients that are carefully selected to provide a unique and flavorful experience. The tea bags are made with high-quality tea leaves, which are ground and processed to create a smooth and flavorful beverage. The tea bags are also made with natural ingredients, such as honey and spices, to add a unique and delicious flavor to the beverage.
                    </Typography>
      <Stack pt={4}>
        <Typography variant='h1'sx={{
                        textAlign: {
                          xs: "Center",
                          lg: "left"
                        },
                        color: "white",
                        fontSize: {
                          xs: "1.5rem",
                          sm: "1.75rem",
                          md:"2rem"
                        },
                        lineHeight: "1.4",
                        pt: {
                          xs: "2rem"
                        }
                    }}>Same Tea, <br/>Different Flavours</Typography>

                    <Typography variant='body1'sx={{
                        textAlign: {
                          xs: "left",
                          md: "center",
                          lg: "left"
                        },  
                        color: "white",
                        fontSize: {
                          xs: "15px",
                          md:"16px",
                          lg:"15px"
                        },
                        fontWeight:"300",
                        pt: {
                          xs: "2rem"
                        },
                         px: {
                          xs: "0",
                          md: "40px",
                          lg: "0"
                        }
                    }}
                    >
                      Rodinea Label Tea Bags are available in different flavours, making it easy for you to choose the perfect size for your needs.
                    </Typography>
      </Stack>
      </Stack>
      </div>

      <figure>
        <img/>
      </figure>
    </Stack>
  )
}

export default TeaBags
