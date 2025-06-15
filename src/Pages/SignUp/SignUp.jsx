import React from 'react'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Formik, Form } from 'formik'
import InputField from '../../Components/InputField'
import Button from '../../Components/Button'
import logo from "../../Images/Logos/logo.jpg"
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material'
import { SignUpSchema } from '../../ValidationSchema/SignUpSchema'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  const initialValues = {
    email: "",
    password: ""
  }

  const onSubmit = (values) => {
    console.log("form data", values);
  }
  return (
    <>
      <Paper elevation={4}
      sx={{
        height: "100vh"
      }}>
        <Stack sx={
          {
            display: "flex",
            flexDirection: "row",
          justifyContent: "space-between",
            alignItems: "center",
            pt: 4,
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
       
        <Stack pt={`8rem`}
               direction="column"
               spacing={1} 
               sx={{
                alignItems: "center"
               }}>
        <Typography gutterBottom
                    variant={`h3`}
                    sx={{
                      fontSize: {
                        xs: "1.5rem"
                      },
                      fontWeight: "600"
                    }}>
          Welcome To Rodinea
          </Typography>

          <Typography gutterBottom
                    variant={`h5`}
                    sx={{
                      fontSize: {
                        xs: "1rem"
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
                     pt={`4rem`}
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
                  Kinldy Fill In Your Details
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
                                    xs: "80%"
                                  }
                                 }}>
                           
                          <InputField name={`email`}
                                      label={`Email`}
                                      type={`email`}
                                      size={`medium`}
                                      />
                          <InputField name={`password`}
                                      label={`Password`}
                                      type={`password`}
                                      size={`medium`}/>
                          </Stack>
                        




                        <Box sx={{
                          marginX: "auto",
                          width: "50%",
                          pt: "2rem"
                        }}>
                             <Button
                                buttonText={`Create An Account`}
                                variant='contained'
                                type={`submit`} 
                                sx={{
                                  fontSize: "20rem"
                                }}/>
                        </Box>
                     
                        </Form>
                      )

                    }
                  }
                </Formik>

                <Stack>
          
          <Stack direction={`row`} spacing={1} pt= {4} justifyContent={`center`}>
<Typography variant="body1" 
            component={`p`}
            fontSize={`.85rem`}>
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
