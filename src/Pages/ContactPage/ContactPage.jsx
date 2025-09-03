import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { RxInstagramLogo } from "react-icons/rx";
import { Link } from "react-router";
import { LuPhone } from "react-icons/lu";
import "./ContactPage.scss";
import emailjs from "@emailjs/browser";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#ddd",
    },
    "&:hover fieldset": {
      borderColor: "#21295c",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#21295c",
      boxShadow: "0 0 0 3px rgba(33, 41, 92, 0.2)",
    },
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: "rgba(33, 41, 92, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(33, 41, 92, 0.12)",
    },
  },
}));

function ContactPage() {
  const { t: Contact } = useTranslation("translation", {
    keyPrefix: "Contact",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = Contact("NameE");
    if (!formData.email.trim()) {
      newErrors.email = Contact("EmailE");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = Contact("EmailE");
    }
    if (!formData.service) newErrors.service = Contact("ServiceE");
    if (!formData.message.trim()) newErrors.message = Contact("MessageE");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      const serviceId = "service_5803g69";
      const templateId = "template_m9vban9";
      const publicKey = "77IcenM7JS-vY6ZEy";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        from_service: formData.service,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({
            name: "",
            email: "",
            service: "",
            message: "",
          });
          setTimeout(() => setSubmitSuccess(false), 5000);
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="form-section">
          <h1 className="contact-title">{Contact("Head")}</h1>
          <p className="contact-subtitle">{Contact("Desc")}</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <Box>
              <TextField
                fullWidth
                label={Contact("Name")}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={Contact("NameP")}
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{
                  style: {
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                  },
                }}
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                label={Contact("Email")}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={Contact("EmailP")}
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  style: {
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                  },
                }}
              />
            </Box>

            <Box>
              <FormControl fullWidth error={!!errors.service}>
                <InputLabel id="service-label">{Contact("Service")}</InputLabel>
                <StyledSelect
                  labelId="service-label"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  input={<OutlinedInput label={Contact("Service")} />}
                >
                  <StyledMenuItem value={Contact("Service1")}>
                    {Contact("Service1")}
                  </StyledMenuItem>
                  <StyledMenuItem value={Contact("Service2")}>
                    {Contact("Service2")}
                  </StyledMenuItem>
                  <StyledMenuItem value={Contact("Service3")}>
                    {Contact("Service3")}
                  </StyledMenuItem>
                  <StyledMenuItem value={Contact("Service4")}>
                    {Contact("Service4")}
                  </StyledMenuItem>
                  <StyledMenuItem value={Contact("Service5")}>
                    {Contact("Service5")}
                  </StyledMenuItem>
                  <StyledMenuItem value={Contact("Other")}>
                    {Contact("Other")}
                  </StyledMenuItem>
                </StyledSelect>
                {errors.service && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ mt: 1, display: "block" }}
                  >
                    {errors.service}
                  </Typography>
                )}
              </FormControl>
            </Box>

            <Box mb={3}>
              <TextField
                fullWidth
                label={Contact("Message")}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={Contact("Message")}
                variant="outlined"
                multiline
                rows={5}
                error={!!errors.message}
                helperText={errors.message}
                InputProps={{
                  style: {
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                  },
                }}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              sx={{
                py: 1.5,
                textTransform: "uppercase",
                letterSpacing: 1,
                mt: 1,
                background: "#21295c",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                Contact("Button")
              )}
            </Button>

            {submitSuccess && (
              <Box
                mt={2}
                p={2}
                bgcolor="success.main"
                color="white"
                borderRadius={1}
                textAlign="center"
              >
                {Contact("Success")}
              </Box>
            )}
          </form>
        </div>

        <div className="image-section">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/ds42i5esb/image/upload/v1753182192/Ali-Portfolio/contact_wjv2pw.jpg"
              alt="Contact us"
              className="contact-image"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="contact-info">
            <h3>{Contact("Info")}</h3>
            <Link
              to={`mailto:ali.ismayil.681@gmail.com`}
              target="_blank"
              className="link"
            >
              <IoMailOutline /> <p>ali.ismayil.681@gmail.com</p>
            </Link>
            <Link to={`tel:+994998982004`} target="_blank" className="link">
              <LuPhone /> <p>+994 99 898 2004</p>
            </Link>
            <Link
              to={"https://www.instagram.com/ali.ismayil_"}
              target="_blank"
              className="link"
            >
              <RxInstagramLogo /> <p>ali.ismayil_</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;