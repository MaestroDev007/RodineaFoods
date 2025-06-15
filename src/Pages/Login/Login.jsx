import React from "react"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import {Formik, Form } from "formik"
import InputField from "../../Components/InputField" 
import { SignUpSchema } from "../../ValidationSchema/SignUpSchema"

const onSubmit = (values) => {
    console.log(values)
}

const Login = () => {
    return (
       <Stack sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",  
       }}>
        <Paper>
            <Typography gutterBottom
                        variant="h3"
                        fontWeight={`bold`}
                        sx={{
                            fontSize:{
                                xs: "1.25rem"
                            }
                            
                        }}>
                Welcome to Rodinea
            </Typography>

            <Stack>
            
            </Stack>
        </Paper>
       </Stack>
    )
}

export default Login