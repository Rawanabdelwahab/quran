/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
const API_URL = import.meta.env.VITE_API_URL;
const TeacherForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    languages: "",
    teach: "",
    image: null,
  });

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
      const response = await axios.post(`${API_URL}/postTeacher`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Subscription created:", response.data);
    } catch (error) {
      console.error("Error uploading subscription:", error);
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
        Add Teacher
      </Typography>
      <TextField
        label="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="languages"
        name="languages"
        value={formData.languages}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="teach"
        name="teach"
        value={formData.teach}
        onChange={handleChange}
        required
        fullWidth
      />

      <Button variant="contained" component="label">
        Upload Image
        <input type="file" name="image" hidden onChange={handleFileChange} />
      </Button>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default TeacherForm;
