import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Formik, Form } from 'formik'
import InputField from '../../Components/InputField'
import Button from '../../Components/Button'
import logo from "../../Images/Logos/logo.jpg"
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider'
import { IconButton } from '@mui/material'
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibiltyOffIcon from "@mui/icons-material/VisibilityOff";
import { SignUpSchema } from '../../ValidationSchema/SignUpSchema'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'
// import { createUserWithEmailAndPassword } from "firebase/auth"



const SignUp = () => {
  const initialValues = {
    email: "",
    password: ""
  }

  const { signUp } = useAuth() //destructuring the signUp functio

 const onSubmit = async (values, { setSubmitting }) => {
  try {
    await signUp(values.email, values.password);
  } catch (err) {
    console.error("Signup failed", err);
  } finally {
    setSubmitting(false);
  }
};

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Paper elevation={0}
      sx={{
       height: "100vh",
        // maxWidth: "617px",
        mx: 'auto',
        // pb: "3rem",
        position: "relative"
    
      }}>
        <Stack sx={
          {
            display: "flex",
            flexDirection: "row",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
            alignItems: "center",
            pt: {
              xs:4,
              lg:1
            },
            px: 2
          }
        }>
           <figure>
          <img src={logo} className='w-[150px]'/>
        </figure>

        <IconButton component={NavLink}
        to="/" >
          <HomeIcon sx={{
          fontSize: "40px",
          color: "primary.main"
        }}/>
          </IconButton>
        </Stack>
       
        <Stack pt={{xs: "4rem", lg: "1rem"}}
               direction="column"
               spacing={1} 
               sx={{
                alignItems: "center"
               }}>
        <Typography gutterBottom
                    variant={`h3`}
                    sx={{
                      fontSize: {
                        xs: "1.5rem",
                        lg: "2rem"
                      },
                      fontWeight: "600"
                    }}>
          Welcome To Rodinea
          </Typography>

          <Typography gutterBottom
                    variant={`h5`}
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        lg: ".8rem"
                      },
                      textAlign: "center",
                      px: {
                        xs: "4rem"
                      }
                    }}>
            Begin Your Body Transformation Today!
            </Typography>
              </Stack>

              <Stack direction={`column`}
                     spacing={2}
                     pt={{xs: "2rem", lg: "1rem"}}
               sx={{
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center"

              }}>

                <Typography gutterBottom
                            variant={`body1`} 
                            sx={{
                              color: "primary.main",
                              fontWeight: "600",
                              textAlign: "center",
                            }}>
                  Kindly Fill In Your Details
                </Typography>
                <Formik initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={SignUpSchema}

                >
                  {
                    (formik) => {
                      return (
                        <Form noValidate >
                          <Stack spacing={4}
                                 direction={`column`}
                                 sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  // border: "1px solid red",
                                  marginX: "auto",
                                  width:{
                                    xs: "80%",
                                    lg: "40%"
                                  }
                                 }}>
                           
                          <InputField name={`email`}
                                      label={`Email`}
                                      type={`email`}
                                      size={`medium`}
                                      />
                          <InputField name={`password`}
                                      label={`Password`}
                                      {
                                        ...showPassword ? formik.type === "text" : formik.type === "password"
                                      }
                                      size={`medium`} 
                                      InputProps={{
                                        endAdornment: <IconButton onClick={() => setShowPassword(!showPassword)}>
                                          {
                                            formik.type === "password" ? <VisibilityIcon/> : <VisibiltyOffIcon/>
                                          }
                                        </IconButton>
                                      }}/>
                          </Stack>
                        




                        <Box sx={{
                          marginX: "auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: {
                            xs: "50%",
                            lg: "20%"
                          },
                          pt: "2rem"
                        }}>
                             <Button
                                buttonText={`Create An Account`}
                                variant='contained'
                                type={`submit`} 
                               />
                        </Box>
                     
                        </Form>
                      )

                    }
                  }
                </Formik>


               <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
               }}>


              
              <Divider sx={{
                pt: {
                  xs: 4,
                  lg: 1
                }
              }}>
                <Typography variant={
                  `body1`
                }
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                }}>
                  OR
                </Typography>
              </Divider>

              <Box sx={{
                          marginX: "auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: {
                            xs: "50%",
                            lg: "20%"
                          },
                          pt: "2rem"
                        }}>
                <Button variant='outlined'
                      buttonText={`Continue With Google`}
                      type={`button`}/>
              </Box>
              </Box>
              

                <Stack>
          
          <Stack direction={`row`} spacing={1} pt= {{xs: 4, lg: 2}} justifyContent={`center`}>
<Typography variant="body1" 
            component={`p`}
            fontSize={`.85rem`}
            fontWeight={`600`}>
              Already Have An Account ? 
            </Typography>

            <NavLink to={`/login`} className={`text-[.85rem] text-primary-0`}>
              Login
            </NavLink>
          </Stack>
            
        
        </Stack>
              </Stack>
      </Paper>
    </>
  )
}

export default SignUp
