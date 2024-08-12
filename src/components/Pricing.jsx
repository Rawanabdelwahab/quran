/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./pricing.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
const API_URL = import.meta.env.VITE_API_URL;
export default function Pricing() {
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
        const response = await axios.get(`${API_URL}/subscriptions`);
        setSubscriptions(response.data);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchData();
  }, []);
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
      console.log("Subscription created:", response.data);
    } catch (error) {
      console.error("Error uploading subscription:", error);
    }
  };
  return (
    <article className="pricing">
      <div className="container">
        <h2 className="main__title-1">خطط الاشتراك الشهرية</h2>
        <div className="row-1 gy-3 ng-star-inserted">
          {subscriptions.slice(0, 4).map((subscription, index) => (
            <div
              key={index}
              className="col-12 col-lg-3 col-md-6 ng-star-inserted"
            >
              <div className="card-1 ng-star-inserted">
                <div className="card__header">
                  {subscription.imageUrl ? (
                    <img
                      height="210"
                      width="210"
                      className="card__image ng-lazyloaded"
                      alt="subscriptions Image"
                      src={`${API_URL}${subscription.imageUrl}`}
                    />
                  ) : (
                    <div className="placeholder">No Image Available</div>
                  )}
                </div>
                <div className="card__body">
                  <bdi className="price">
                    {subscription.price
                      ? `${subscription.price} LE`
                      : "No price available"}
                  </bdi>

                  <ul className="card__items__container">
                    <li className="card__item">
                      <svg
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ng-star-inserted"
                      >
                        <g
                          data-name="Layer 2"
                          id="Layer_2"
                          transform="translate(-2.052 -2)"
                        >
                          <g
                            id="checkmark-circle"
                            transform="translate(2.052 2)"
                          >
                            <path
                              d="M9.412,10.375a.829.829,0,0,0-1.173,1.173l2.478,2.478a.8.8,0,0,0,1.181-.041L17.68,7.377a.826.826,0,0,0-1.239-1.09L11.3,12.234Z"
                              data-name="Path 691"
                              fill="#0c8849"
                              id="Path_691"
                              transform="translate(-3.563 -2.911)"
                            ></path>
                            <path
                              d="M17.25,9.2a.8.8,0,0,0-.8.8,6.418,6.418,0,1,1-6.417-6.4,7.068,7.068,0,0,1,1.524.176.8.8,0,1,0,.377-1.552A8.475,8.475,0,0,0,10.031,2a8,8,0,1,0,8.021,8A.8.8,0,0,0,17.25,9.2Z"
                              data-name="Path 692"
                              fill="#0c8849"
                              id="Path_692"
                              transform="translate(-2.052 -2)"
                            ></path>
                          </g>
                        </g>
                      </svg>

                      <bdi className="li-title">
                        {subscription.times
                          ? `${subscription.times} حصص`
                          : "No times available"}
                      </bdi>
                    </li>
                    <li className="card__item">
                      <svg
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ng-star-inserted"
                      >
                        <g
                          data-name="Layer 2"
                          id="Layer_2"
                          transform="translate(-2.052 -2)"
                        >
                          <g
                            id="checkmark-circle"
                            transform="translate(2.052 2)"
                          >
                            <path
                              d="M9.412,10.375a.829.829,0,0,0-1.173,1.173l2.478,2.478a.8.8,0,0,0,1.181-.041L17.68,7.377a.826.826,0,0,0-1.239-1.09L11.3,12.234Z"
                              data-name="Path 691"
                              fill="#0c8849"
                              id="Path_691"
                              transform="translate(-3.563 -2.911)"
                            ></path>
                            <path
                              d="M17.25,9.2a.8.8,0,0,0-.8.8,6.418,6.418,0,1,1-6.417-6.4,7.068,7.068,0,0,1,1.524.176.8.8,0,1,0,.377-1.552A8.475,8.475,0,0,0,10.031,2a8,8,0,1,0,8.021,8A.8.8,0,0,0,17.25,9.2Z"
                              data-name="Path 692"
                              fill="#0c8849"
                              id="Path_692"
                              transform="translate(-2.052 -2)"
                            ></path>
                          </g>
                        </g>
                      </svg>

                      <bdi className="li-title">
                        {subscription.duration
                          ? `${subscription.duration} ساعة`
                          : "No duration available"}
                      </bdi>
                    </li>
                    <li className="card__item">
                      <svg
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ng-star-inserted"
                      >
                        <g
                          data-name="Layer 2"
                          id="Layer_2"
                          transform="translate(-2.052 -2)"
                        >
                          <g
                            id="checkmark-circle"
                            transform="translate(2.052 2)"
                          >
                            <path
                              d="M9.412,10.375a.829.829,0,0,0-1.173,1.173l2.478,2.478a.8.8,0,0,0,1.181-.041L17.68,7.377a.826.826,0,0,0-1.239-1.09L11.3,12.234Z"
                              data-name="Path 691"
                              fill="#0c8849"
                              id="Path_691"
                              transform="translate(-3.563 -2.911)"
                            ></path>
                            <path
                              d="M17.25,9.2a.8.8,0,0,0-.8.8,6.418,6.418,0,1,1-6.417-6.4,7.068,7.068,0,0,1,1.524.176.8.8,0,1,0,.377-1.552A8.475,8.475,0,0,0,10.031,2a8,8,0,1,0,8.021,8A.8.8,0,0,0,17.25,9.2Z"
                              data-name="Path 692"
                              fill="#0c8849"
                              id="Path_692"
                              transform="translate(-2.052 -2)"
                            ></path>
                          </g>
                        </g>
                      </svg>

                      <bdi className="li-title">
                        {subscription.person
                          ? `${subscription.person}`
                          : "No person available"}
                      </bdi>
                    </li>
                    <li className="card__item">
                      <svg
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ng-star-inserted"
                      >
                        <g
                          data-name="Layer 2"
                          id="Layer_2"
                          transform="translate(-2.052 -2)"
                        >
                          <g
                            id="checkmark-circle"
                            transform="translate(2.052 2)"
                          >
                            <path
                              d="M9.412,10.375a.829.829,0,0,0-1.173,1.173l2.478,2.478a.8.8,0,0,0,1.181-.041L17.68,7.377a.826.826,0,0,0-1.239-1.09L11.3,12.234Z"
                              data-name="Path 691"
                              fill="#0c8849"
                              id="Path_691"
                              transform="translate(-3.563 -2.911)"
                            ></path>
                            <path
                              d="M17.25,9.2a.8.8,0,0,0-.8.8,6.418,6.418,0,1,1-6.417-6.4,7.068,7.068,0,0,1,1.524.176.8.8,0,1,0,.377-1.552A8.475,8.475,0,0,0,10.031,2a8,8,0,1,0,8.021,8A.8.8,0,0,0,17.25,9.2Z"
                              data-name="Path 692"
                              fill="#0c8849"
                              id="Path_692"
                              transform="translate(-2.052 -2)"
                            ></path>
                          </g>
                        </g>
                      </svg>

                      <bdi className="li-title">
                        {subscription.number
                          ? `${subscription.number} طالب`
                          : "No number available"}
                      </bdi>
                    </li>
                  </ul>
                  <Link className="subscribe" to={`/PaySubscribe/${subscription._id}`}>
                    {" "}
                    الاشتراك في هذه الدورة{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link className="button-1 raised__button" to="/PricingPagination">
          {" "}
          مشاهدة جميع الخطط{" "}
        </Link>
        <Link className="button-1 raised__button" to="/SubscriptionForm">
          {" "}
          اضافة خطط{" "}
        </Link>
      </div>
    </article>
  );
}
