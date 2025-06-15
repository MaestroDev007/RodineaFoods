import React from 'react';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Button from '../../Components/Button';
import heroImage from "../../../src/Images/LandingPage/Hero/hero.jpg";
// import heroImageB from "../../../src/Images/LandingPage/Hero/chat 1.png";
// import heroImageA from "../../../src/Images/LandingPage/Hero/heroA.jpg";

const Hero = () => {
  return (
    <Stack
      direction="column"
      sx={{
        px: { xs: "1.5rem", md: "3rem", lg: "5rem" },
        pt: { xs: "3rem", md: "4rem", lg: "6rem" },
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#fff",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 6, md: 8 }}
      >
        {/* Text Section */}
        <Stack sx={{ width: { xs: "100%", md: "50%" } }} spacing={3}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", md: "3rem", lg: "3.5rem" },
              fontWeight: 300,
              lineHeight: { xs: "2.75rem", md: "3.5rem", lg: "4.25rem" },
              textAlign: "left",
            }}
          >
            Your Journey To Wellness Begins With{" "}
            <span className="text-primary-1 font-bold">Rodinea</span>.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontSize: "1rem",
              color: "primary.dark",
              textAlign: "left",
            }}
          >
            Natural Products • Personalized Plans • Real Results
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "0.95rem",
              lineHeight: "1.7rem",
              color: "text.secondary",
              textAlign: "left",
            }}
          >
            Our premium blend of organic products helps boost metabolism,
            reduce bloating, and support your weight management journey.
          </Typography>

          {/* Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            pt={2}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <Button
              buttonText="Buy Now"
              type="button"
              variant="contained"
              color="primary"
              endIcon={<ShoppingCartIcon />}
            />
            <Button
              buttonText="Contact Us"
              type="button"
              variant="outlined"
              color="primary"
              endIcon={<ContactSupportIcon />}
            />
          </Stack>
        </Stack>

        {/* Hero Image Section (optional) */}
        <Stack
          sx={{
            width: { xs: "100%", md: "50%" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={heroImage}
            alt="Rodinea wellness hero"
            style={{
              width: "100%",
              maxWidth: "480px",
              borderRadius: "1.25rem",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
              objectFit: "cover",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Hero;
