import React from 'react'
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '../../Components/Button';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/material/styles';
import tSlim from "../../../src/Images/LandingPage/FeatureProducts/tslim.jpg"
import pSlim from "../../../src/Images/LandingPage/FeatureProducts/pslim.jpg"
import mangoJuice from "../../../src/Images/LandingPage/FeatureProducts/mangojuice.jpg"


const StyledSlider = styled(Slider)`
  & .slick-prev, 
  & .slick-next {
   &:before {
      color: black;
    }
  }
`;
const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: "PureSlim",
            description: "Our signature weight management tea blend with natural herbs to boost metabolism and reduce bloating. Enjoy a cup daily for best results.",
           price: "$19.99",
            image: pSlim
        },
        {
            id: 2,
            name: "Tummy Trim Powder",
            description: "A delicious powder supplement that supports digestive health and helps reduce belly fat. Mix with water or add to smoothies.",
            price: "$24.99",
            image: mangoJuice
        },
        {
            id: 3,
            name: "WaterMelon Juice",
            description: "Refreshing watermelon juice packed with antioxidants and natural electrolytes. Perfect for hydration and detoxification.",
           price: "$12.99",
            image: pSlim
        },
        {
            id: 4,
            name: "WellNess Bundle",
            description: "Our complete wellness package featuring PureSlim tea, Tummy Trim powder, and your choice of juice. Save 15% with this bundle.",
            price: "$49.99",
            image: mangoJuice
        },
        {
            id: 5,
            name: "Orange Juice",
            description: "Vitamin C-rich orange juice that boosts immunity and energy levels. Made from freshly squeezed organic oranges.",
            price: "$12.99",
            image: mangoJuice
        },
        {
            id: 6,
            name: "Mango Juice",
            description: "Tropical mango juice loaded with vitamins and fiber. Supports digestion and provides a natural energy boost.",
            price: "$13.99",
            image: mangoJuice
        },
    ];

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrow: true,
      prevArrow: <button style={{ color: 'black', fontSize: '24px' }}>&lt;</button>,
    nextArrow: <button style={{ color: 'black', fontSize: '24px' }}>&gt;</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
  <Stack sx={{
            px: {
                xs: "1.5rem",
                md: "3rem", 
                lg: "5rem"
            },
            pt: {
                xs: "7rem", 
               
            },}}>
        <Stack direction={`row`}
               justifyContent={`space-between`}
               alignItems={`center`}>
            <Typography variant='h3'
                        color= "black"
                        fontWeight={`400`}
                        sx={{
                            fontSize: {
                                xs: "16px",
                                sm: "25px"
                            }
                        }}>
                Featured Products
            </Typography>

            <NavLink to={``}>
                <Box  sx={{
                    display: "flex",
                    gap: "2rem",
                    flexDirection: "row",
                    alignItems: "center",
                    cursor: "pointer"
                }}>
                      <Typography variant="h4"
                        color="primary.dark"
                        fontWeight={`500`}
                        sx={{
                            fontSize: {
                                xs: "12px",
                                sm: "16px"
                            }
                        }}>
                Explore More Products
            </Typography>
            <IconButton >
                <ArrowRightAltIcon sx={{
                    fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "16px"
                    }
                }}/>
            </IconButton>
                </Box>
            </NavLink>
        </Stack>


            
        <Stack spacing={4}
               sx={{
                py: {
                    xs: "3rem",
                    sm: "4rem",
                    lg: "5rem"
                }
               }}

               >
                <StyledSlider {...settings}>   
            {
                products.map((product, index) => (
                    
                    <Card  key={product.id} 
                    component={`div`}
                    sx={{
                        pb: "2rem",
                        borderRadius: {
                            xs: "0rem",
                            lg: "10px"
                        },
                        height: {
                            xs: "350px",
                            sm: "380px",
                            md: "400px",
                            lg: "450px"
                        }
                       
                    }}>
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={`${product.name} - ${product.description.split('.')[0]}`}
                     sx={{
        height: {
            xs: "150px",
            sm: "180px", 
            md: "200px",
            lg: "220px"
        },
        objectFit: "cover"
    }}
                    />
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    height: "calc(100% - 200px)",
                    px: {
                        // xs: "2rem"
                    },
                    // width: "150px",
                    // height: "150px"
                }}>
                    <Stack direction={`column`}
                           spacing={2}
                           justifyContent={`flex-start`}
                           sx={{ width: "100%" }}>
                    <Typography gutterBottom 
                                variant="h5" 
                                component="p"
                                sx={{
                                    fontWeight: "500",
                                    textAlign: "left",
                                    fontSize: "16px",
                                }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" 
                                gutterBottom
                                sx={{
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    textAlign: "left",
                                    display: {
                                    xs: "none",
                                    md: "block"
                                
                                },
                                   display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                     overflow: "hidden",
                    textOverflow: "ellipsis",
                            }
                                }>
                        {product.description}
                    </Typography>
                    </Stack>
                    <Stack direction={`row`}
                           justifyContent={`space-between`}
                           spacing={2}
                           alignItems={`center`}
                           sx={{
                               pt: "2rem",
                                mt: "auto", // Push to bottom
               width: "100%"
                           }}>
                        <Typography variant="h5"
                                    color="primary.dark"
                                    sx={{
                                        fontSize: {
                                            xs: "18px",
                                            md: "24px"
                                        }
                                    }}>
                            {product.price}
                        </Typography>
                        <Button buttonText="Add"
                                variant='contained'
                                // icon={<ShoppingCartIcon/>}
                                sx={{
                                    width: "100%",
                                    fontSize: "14px",
                                }}/>
                    </Stack>
                </CardContent>
            </Card>
                ))
            }
        </StyledSlider>    
        </Stack>
  </Stack>
  )
}

export default FeaturedProducts
