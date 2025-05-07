import React, {useState} from 'react'
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import logo from "../../Images/Logos/logo.jpg"
import { NavLink } from 'react-router-dom';




const MenuBar = () => {
  
  const menu = [
      {
        menu: "Home",
        icon: <HomeIcon/>,
        path: "/"
      },
      {
        menu: "Shop",
        icon: <ShoppingCartIcon/>,
        path: ""
      },
      {
        menu: "Contact Us ",
        icon: <ContactSupportIcon/>,
        path: ""
      },
      {
        menu: "About Us",
        icon: < InfoIcon />,
        path: ""
      },
      {
        menu: "Login",
        icon: <LoginIcon/>,
        path: ""
      },
  ]
  const [isOpen, setIsOpen] = useState(false);


  return (

    <Stack>
      <div className="bg-primary-0 w-full py-4 px-20  text-white flex items-center justify-between">
        <Typography fontSize={`12px`}>
          Delivery Service Available
        </Typography>

        <Stack direction={`row`}
               spacing={8}>
        <Typography fontSize={`12px`}>
          Call Us: +91 9876543210
        </Typography>
        <Typography fontSize={`12px`}>
          Monday-Sunday: 9am-11pm
        </Typography>
        </Stack>
      </div>
    
    <div className='flex px-4 pt-5 gap-8 justify-between items-center sm:px-8 sm:pt-8 lg:px-16 lg:pt-8'>
      <NavLink to={`/`} className={`size-[32%] pt-2 sm:pt-0 sm:size-[25%] lg:size-[20%] xl:size-[20%] `}>
        <figure >
            <img src={logo } alt='logo'/>
        </figure>
      </NavLink>

        <Drawer anchor='right'
                open={isOpen}
                onClose={()=>(setIsOpen(false))}
                >

                    <IconButton color='primary.main'
                                disableElevation
                                      disableFocusRipple
                                      disableRipple
                                 sx={{
                                  display: "flex",
                                  
                                 }}>
                           <MenuOpenIcon/>
                       </IconButton>
            <Stack spacing={4}
                   direction={`column`}
                   paddingRight="10rem"
                   paddingLeft="0rem"
                   paddingTop="2rem">

                   
              {
                  menu.map((item, index)=>(
                      <Box key={index}
                            sx={{
                              display: "flex", 
                              flexDirection: "row",
                              gap: 1,
                              alignItems: "center",
                            }}>
                          <IconButton color='primary.main'
                                      disableElevation
                                      disableFocusRipple
                                      disableRipple>
                              {item.icon}
                          </IconButton>
                          <Typography variant='body1'
                                      fontWeight={`600`}
                                      sx={{
                                        color: "black",
                                       
                                      }}>
                              {item.menu}
                          </Typography>
                      </Box> 
                  ))
              }
            </Stack>
        </Drawer>

        <Stack spacing={6}
               direction={`row`}
               sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
               }}
               >
        {
            menu.map((item, index)=>(
              <NavLink to={item.path}
                       key={`index`}>
                <Typography variant='body1'
                            fontWeight={`500`}
                              fontSize= "15px"
                            >
                    {item.menu}
                </Typography>
                </NavLink>
            ))
        }
        </Stack>

          <Stack direction={`row`}
                 spacing={1}>
               <IconButton  disableElevation
                    disableFocusRipple
                    disableRipple>
              <ShoppingCartIcon sx={{
                      color:'primary.main',
                      fontSize: {
                        xs: "20px",
                        sm: "24px"
                      }}}
                   />
        </IconButton>

        <IconButton onClick={()=>(setIsOpen(true))}
                    size='large'
                    edge="start"
                    disableElevation
                    disableFocusRipple
                    disableRipple
                    >
            <MenuIcon  sx={{
                      display: {
                        xs: "flex",
                        lg: "none",
                      },
                      color:'primary.main',
                      fontSize: {
                        xs: "26px",
                        sm: "28px"
                      }}}/>
        </IconButton>
          </Stack>
       
       </div>
       </Stack>
 
  )
}

export default MenuBar;





