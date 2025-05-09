import React from 'react'
import {Button as MuiButton} from '@mui/material'

const Button = ({
                 buttonText,
                 onClick,
                 variant = "ccontained", 
                 color, 
                 type, 
                 endIcon, 
                 StartIcon,
                 ...props}) => {
  return (
    <MuiButton variant={variant}
               color={color}
               type={type}
               onClick={onClick}
               endIcon={endIcon}
               startIcon={StartIcon}
               disableRipple
               sx={{
                 textTransform: "none",
                 borderRadius: "10px",
                 fontSize: "13px",
                 fontWeight: "bold",
                 padding: "10px 20px",
                 "&:hover": {
                   backgroundColor: "#000",
                   color: "#fff"
                 },
               }}
              
               >

      {buttonText}
    </MuiButton>
  )
}
 

export default Button
