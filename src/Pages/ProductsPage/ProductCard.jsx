import React, {useState} from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from "../../Components/Button"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography, Stack, Box, Divider } from '@mui/material'
import { NavLink } from 'react-router-dom'

const ProductCard = ({title, description , price, img, id, link }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen((prev)=> !prev)
    }
  return (
    <Card sx={{
        width: {
            xs: "150px",
            md: "250px",
          
        }
    }}>
      <CardMedia component={`img`}
                 image= {img}
                 alt= {`${title} image`}
                 sx={{
                    height: {
                        lg: "150px",
                        objectFit: "cover"
                    }
                 }}
      />

      <CardContent>
        <Stack component="div"
               spacing={1}>
        <Typography variant='body1' 
                    component={`p`}
                    textAlign={`left`}
                    fontWeight={500}
                    fontSize={{
                        xs: ".85rem",
                        lg: "1rem"
                    }}>
            {title}
        </Typography>
        <Typography variant='body1' 
                    component={`p`}
                    textAlign={`left`}
                    fontWeight={``}
                    fontSize={{
                        xs: ".7rem"
                    }}
                    sx={{
                        pr: "25%"
                    }}>
            {description}
        </Typography>

        <NavLink className={`text-primary-0`} onClick={handleOpen}>
            <Typography variant='body1' 
                    component={`p`}
                    textAlign={`left`}
                    fontWeight={``}
                    fontSize={`.75rem`}>
            {link}
        </Typography>
        </NavLink>
        

        <Typography variant='body1' 
                    component={`p`}
                    textAlign={`left`}
                    fontWeight={600}
                    fontSize={{
                        xs: "1rem"
                    }}>
            {price}
        </Typography>
        </Stack>

        <Divider sx={{
            pt:2
        }}/>
<Box pt={2}>
  <Button buttonText={`Add To Cart`}
                variant='contained'
                type={`button`}
                // color={`white`}
                endIcon={<ShoppingCartIcon/>} 
                />
</Box>
        
      </CardContent>

    </Card>
  )
}

export default ProductCard
