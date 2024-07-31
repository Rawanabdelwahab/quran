/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      <Button variant="contained" component="label">
        تحميل صورة
        <input type="file" name="image" hidden onChange={handleFileChange} />
      </Button>
      <Button type="submit" variant="contained" color="primary">
        تسجيل
      </Button>
      {successMessage && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {successMessage}
        </Alert>
      )}
    </Box>
  );
};

export default SubscriptionForm;
