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
           price: "N19.99",
            image: pSlim
        },
        {
            id: 2,
            name: "Tummy Trim Powder",
            description: "A delicious powder supplement that supports digestive health and helps reduce belly fat. Mix with water or add to smoothies.",
            price: "N24.99",
            image: mangoJuice
        },
        {
            id: 3,
            name: "WaterMelon Juice",
            description: "Refreshing watermelon juice packed with antioxidants and natural electrolytes. Perfect for hydration and detoxification.",
           price: "N12.99",
            image: pSlim
        },
        {
            id: 4,
            name: "WellNess Bundle",
            description: "Our complete wellness package featuring PureSlim tea, Tummy Trim powder, and your choice of juice. Save 15% with this bundle.",
            price: "N49.99",
            image: mangoJuice
        },
        {
            id: 5,
            name: "Orange Juice",
            description: "Vitamin C-rich orange juice that boosts immunity and energy levels. Made from freshly squeezed organic oranges.",
            price: "N12.99",
            image: mangoJuice
        },
        {
            id: 6,
            name: "Mango Juice",
            description: "Tropical mango juice loaded with vitamins and fiber. Supports digestion and provides a natural energy boost.",
            price: "N13.99",
            image: mangoJuice
        },
    ];

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,  // Changed from 4 to 1 for smoother scrolling
    initialSlide: 0,
    autoplay: true,     // Added autoplay
    autoplaySpeed: 4000, // 4 seconds per slide
    pauseOnHover: true,
    arrow: true,
    prevArrow: <button style={{ color: 'black', fontSize: '24px' }}>&lt;</button>,
    nextArrow: <button style={{ color: 'black', fontSize: '24px' }}>&gt;</button>,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false  // Hide arrows on mobile
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
                        fontWeight={`500`}
                        sx={{
                            fontSize: {
                                xs: "18px",
                                sm: "25px",
                                md: "28px"
                            },
                            position: 'relative',
                            display: 'inline-block',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                width: '10%',
                                height: '3px',
                                bottom: '-8px',
                                left: '0',
                                backgroundColor: 'primary.main',
                                transition: 'width 0.3s ease',
                            },
                            '&:hover:after': {
                                width: '100%'
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
                        color="primary.main"
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
                        },
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
                        },
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.18)'
                    }}>
                <Box sx={{ 
                    position: 'relative',
                    overflow: 'hidden'
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
                            objectFit: "cover",
                            transition: 'transform 0.5s ease',
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                    />
                    <Box sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                    }}>
                        <Typography variant="body2" sx={{ fontSize: '12px' }}>
                            New
                        </Typography>
                    </Box>
                </Box>
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
                            fontWeight: "600",
                            textAlign: "left",
                            fontSize: {
                                xs: "14px",
                                sm: "16px",
                                md: "18px"
                            },
                            letterSpacing: '0.5px',
                            color: 'rgba(0, 0, 0, 0.87)',
                            mb: 1
                        }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" 
                        gutterBottom
                        sx={{
                            fontWeight: "400",
                            fontSize: {
                                xs: "11px",
                                sm: "12px",
                                md: "13px"
                            },
                            lineHeight: 1.5,
                            textAlign: "left",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: 'rgba(0, 0, 0, 0.6)',
                            height: {
                                xs: "50px",
                                sm: "60px"
                            }
                        }}>
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
                                        },
                                        fontWeight: 600,
                                        position: 'relative',
                                        display: 'inline-block',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.03)',
                                    }}>
                                    {product.price}
                                </Typography>
                        <Button 
                            buttonText="Add to Cart"
                            variant='contained'
                            startIcon={<ShoppingCartIcon sx={{ fontSize: '16px' }} />}
                            sx={{
                                width: "100%",
                                fontSize: {
                                    xs: "12px",
                                    sm: "14px"
                                },
                                py: 1,
                                borderRadius: '25px',
                                textTransform: 'none',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
                                }
                            }}
                        />
                    </Stack>
                </CardContent>
            </Card>
                ))
            }
        </StyledSlider>    
        </Stack>
  <Stack sx={{
      px: {
          xs: "1rem",
          sm: "1.5rem",
          md: "3rem", 
          lg: "5rem"
      },
      pt: {
          xs: "4rem",
          sm: "5rem",
          md: "7rem", 
      },
      maxWidth: "1440px",
      mx: "auto"
  }}>
        </Stack>
        </Stack>
  )
}

export default FeaturedProducts
