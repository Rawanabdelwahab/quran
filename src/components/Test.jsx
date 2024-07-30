/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    price: "",
    times: "",
    duration: "",
    person: "",
    number: "",
    image: null,
  });
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/subscriptions");
        setSubscriptions(response.data);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchData();
  }, []);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    try {
      const response = await axios.post("http://localhost:3000/post", form, {
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
     
 {/* ******************** */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Subscriptions
        </Typography>
        <Grid container spacing={2}>
          {subscriptions.map((subscription) => (
            <Grid item key={subscription._id} xs={12} sm={6}>
              <Box sx={{ border: "1px solid gray", borderRadius: "8px", p: 2 }}>
                <Typography variant="body1">
                  Price: {subscription.price}
                </Typography>
                <Typography variant="body1">
                  Times: {subscription.times}
                </Typography>
                <Typography variant="body1">
                  Duration: {subscription.duration}
                </Typography>
                <Typography variant="body1">
                  Person: {subscription.person}
                </Typography>
                <Typography variant="body1">
                  Number: {subscription.number}
                </Typography>
                {subscription.imageUrl && (
                  <img
                    src={subscription.imageUrl}
                    alt="Subscription"
                    style={{ width: "100%", marginTop: "10px" }}
                  />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SubscriptionForm;
