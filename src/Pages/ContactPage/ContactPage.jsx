import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineNfc, MdOutlineSell } from "react-icons/md";
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
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const fieldSx = {
  "& .MuiInput-root:before": { borderBottom: "1px solid rgba(27,35,80,0.3)" },
  "& .MuiInput-root:hover:not(.Mui-disabled):before": {
    borderBottom: "1px solid var(--clr-base)",
  },
  "& .MuiInput-root:after": { borderBottom: "1px solid var(--clr-base)" },
  "& .MuiInputBase-input": { padding: "10px 0", fontSize: "1.05rem" },
  "& .MuiInputLabel-root": {
    fontSize: "0.8rem",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "rgba(27,35,80,0.55)",
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "var(--clr-base)" },
};

const StyledSelect = styled(Select)(() => ({
  "&:before": { borderBottom: "1px solid rgba(27,35,80,0.3)" },
  "&:hover:not(.Mui-disabled):before": { borderBottom: "1px solid var(--clr-base)" },
  "&:after": { borderBottom: "1px solid var(--clr-base)" },
  "& .MuiSelect-select": { padding: "10px 0", fontSize: "1.05rem" },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: "rgba(27, 35, 80, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(27, 35, 80, 0.12)",
    },
  },
}));

function ContactPage() {
  const { t: Contact } = useTranslation("translation", {
    keyPrefix: "Contact",
  });
  const { t: Pages } = useTranslation("translation", { keyPrefix: "Pages" });

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
                variant="standard"
                error={!!errors.name}
                helperText={errors.name}
                sx={fieldSx}
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
                variant="standard"
                error={!!errors.email}
                helperText={errors.email}
                sx={fieldSx}
              />
            </Box>

            <Box>
              <FormControl fullWidth variant="standard" error={!!errors.service}>
                <InputLabel id="service-label">{Contact("Service")}</InputLabel>
                <StyledSelect
                  labelId="service-label"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  variant="standard"
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
                variant="standard"
                multiline
                rows={5}
                error={!!errors.message}
                helperText={errors.message}
                InputLabelProps={{ shrink: true }}
                sx={fieldSx}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
              disabled={isSubmitting}
              fullWidth
              size="large"
              sx={{
                py: 1.9,
                borderRadius: 0,
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                fontSize: "0.78rem",
                mt: 2,
                background: "var(--clr-base)",
                "&:hover": { background: "var(--clr-tint-5)" },
                transition: "background 0.3s ease",
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
              src="https://res.cloudinary.com/ds42i5esb/image/upload/v1788238645/Ali_2_sftcod.jpg"
              alt="Ali Ismayil"
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
              to={"https://insyde.info/personal/06upZzUpyAx4/"}
              target="_blank"
              className="link"
            >
              <MdOutlineNfc /> <p>Ali Ismayil</p>
            </Link>
            <Link
              to={"https://veb-sayt-qiymet.netlify.app/"}
              target="_blank"
              className="link"
            >
              <MdOutlineSell /> <p>{Pages("Pricing")}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;