/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const API_URL = import.meta.env.VITE_API_URL;

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    price: "",
    times: "",
    duration: "",
    person: "",
    number: "",
    image: null,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if the field is one of the numeric fields and ensure the value is numeric
    if (["price", "times", "duration", "number"].includes(name)) {
      if (!isNaN(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    try {
      const response = await axios.post(`${API_URL}/post`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("تم التسجيل بنجاح");
      console.log("Subscription created:", response.data);
    } catch (error) {
      console.error("Error uploading subscription:", error);
      setSuccessMessage("خطأ فى التسجيل");
    }
  };

  return (
    <div>
      <Navbar />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          maxWidth: 400,
          margin: "auto",
          mt: 5,
        }}
      >
        <Typography variant="h4" gutterBottom>
          الاشتراك
        </Typography>
        <TextField
          label="السعر"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="عدد المرات"
          name="times"
          value={formData.times}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="المدة"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="الشخص"
          name="person"
          value={formData.person}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="العدد"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
          fullWidth
        />
        <Button
          variant="contained"
          component="label"
          sx={{
            backgroundColor: "#686e6b",
            color: "white",
            border: "2px solid white",
            "&:hover": {
              backgroundColor: "white",
              border: "2px solid white",
              color: "#686e6b",
            },
            marginRight: 1,
          }}
        >
          تحميل صورة
          <input type="file" name="image" hidden onChange={handleFileChange} />
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#686e6b",
            color: "white",
            border: "2px solid white",
            "&:hover": {
              backgroundColor: "white",
              border: "2px solid white",
              color: "#686e6b",
            },
            marginRight: 1,
            marginBottom:2
          }}
        >
          تسجيل
        </Button>
        {successMessage && (
          <Alert
            severity={
              successMessage.includes("successfully") ? "success" : "error"
            }
            sx={{ mt: 2 }}
          >
            {successMessage}
          </Alert>
        )}
      </Box>
      <Footer />
    </div>
  );
};

export default SubscriptionForm;
