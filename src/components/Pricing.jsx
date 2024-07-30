/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./pricing.css";
import f from "../assets/images/f.png";
import s from "../assets/images/s.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

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
        const response = await axios.get("http://localhost:3000/subscriptions");
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
    <article className="pricing">
      <div className="container">
        <h2 className="main__title-1">خطط الاشتراك الشهرية</h2>
        <div className="row-1 gy-3 ng-star-inserted">
          <div className="col-12 col-lg-3 col-md-6 ng-star-inserted">
            <app-package-card>
              <div className="card-1 ng-star-inserted">
                <div className="card__header">
                {subscriptions.length ? (
                    <img
                      height="210"
                      width="210"
                      className="card__image ng-lazyloaded"
                      alt="subscriptions Image"
                      src={`http://localhost:3000${subscriptions[0].imageUrl}`}
                    />
                  ) : (
                    <div className="placeholder">No Image Available</div>
                  )}
                </div>
                <div className="card__body">
                  {subscriptions.length > 0 && (
                    <>
                      <bdi className="price">
                        {subscriptions[0].price
                          ? `${subscriptions[0].price} LE`
                          : "No price available"}
                      </bdi>
                    </>
                  )}

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

                      {subscriptions.length > 0 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[0].times
                              ? `${subscriptions[0].times} `
                              : "No times available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 0 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[0].duration
                              ? `${subscriptions[0].duration} `
                              : "No duration available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 0 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[0].person
                              ? `${subscriptions[0].person} `
                              : "No person available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 0 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[0].number
                              ? `${subscriptions[0].number} `
                              : "No number available"}
                          </bdi>
                        </>
                      )}
                    </li>
                  </ul>
                  <a className="subscribe" href="/payment?plan_id=54">
                    {" "}
                    الاشتراك في هذه الدورة{" "}
                  </a>
                </div>
              </div>
            </app-package-card>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ng-star-inserted">
            <app-package-card>
              <div className="card-1 ng-star-inserted">
                <div className="card__header">
                {subscriptions.length ? (
                    <img
                      height="210"
                      width="210"
                      className="card__image ng-lazyloaded"
                      alt="subscriptions Image"
                      src={`http://localhost:3000${subscriptions[1].imageUrl}`}
                    />
                  ) : (
                    <div className="placeholder">No Image Available</div>
                  )}
                </div>
                <div className="card__body">
                  {subscriptions.length > 1 && (
                    <>
                      <bdi className="price">
                        {subscriptions[1].price
                          ? `${subscriptions[1].price} LE`
                          : "No price available"}
                      </bdi>
                    </>
                  )}
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
                      {subscriptions.length > 1 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[1].times
                              ? `${subscriptions[1].times} `
                              : "No times available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 1 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[1].duration
                              ? `${subscriptions[1].duration} `
                              : "No duration available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 1 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[1].person
                              ? `${subscriptions[1].person} `
                              : "No person available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 1 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[1].number
                              ? `${subscriptions[1].number} `
                              : "No number available"}
                          </bdi>
                        </>
                      )}
                    </li>
                  </ul>
                  <a className="subscribe" href="/payment?plan_id=52">
                    {" "}
                    الاشتراك في هذه الدورة{" "}
                  </a>
                </div>
              </div>
            </app-package-card>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ng-star-inserted">
            <app-package-card>
              <div className="card-1 ng-star-inserted">
                <div className="card__header">
                {subscriptions.length ? (
                    <img
                      height="210"
                      width="210"
                      className="card__image ng-lazyloaded"
                      alt="subscriptions Image"
                      src={`http://localhost:3000${subscriptions[2].imageUrl}`}
                    />
                  ) : (
                    <div className="placeholder">No Image Available</div>
                  )}
                </div>
                <div className="card__body">
                  {subscriptions.length > 2 && (
                    <>
                      <bdi className="price">
                        {subscriptions[2].price
                          ? `${subscriptions[2].price} LE`
                          : "No price available"}
                      </bdi>
                    </>
                  )}
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
                      {subscriptions.length > 2 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[2].times
                              ? `${subscriptions[2].times} `
                              : "No times available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 2 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[2].duration
                              ? `${subscriptions[2].duration} `
                              : "No duration available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 2 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[2].person
                              ? `${subscriptions[2].person} `
                              : "No person available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 2 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[2].number
                              ? `${subscriptions[2].number} `
                              : "No number available"}
                          </bdi>
                        </>
                      )}
                    </li>
                  </ul>
                  <a className="subscribe" href="/payment?plan_id=37">
                    {" "}
                    الاشتراك في هذه الدورة{" "}
                  </a>
                </div>
              </div>
            </app-package-card>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ng-star-inserted">
            <app-package-card>
              <div className="card-1 ng-star-inserted">
                <div className="card__header">
                {subscriptions.length ? (
                    <img
                      height="210"
                      width="210"
                      className="card__image ng-lazyloaded"
                      alt="subscriptions Image"
                      src={`http://localhost:3000${subscriptions[3].imageUrl}`}
                    />
                  ) : (
                    <div className="placeholder">No Image Available</div>
                  )}
                </div>
                <div className="card__body">
                  {subscriptions.length > 3 && (
                    <>
                      <bdi className="price">
                        {subscriptions[3].price
                          ? `${subscriptions[3].price} LE`
                          : "No price available"}
                      </bdi>
                    </>
                  )}
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
                      {subscriptions.length > 3 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[3].times
                              ? `${subscriptions[3].times} `
                              : "No times available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 3 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[3].duration
                              ? `${subscriptions[3].duration} `
                              : "No duration available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 3 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[3].person
                              ? `${subscriptions[3].person} `
                              : "No person available"}
                          </bdi>
                        </>
                      )}
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
                      {subscriptions.length > 3 && (
                        <>
                          <bdi className="li-title">
                            {subscriptions[3].number
                              ? `${subscriptions[3].number} `
                              : "No number available"}
                          </bdi>
                        </>
                      )}
                    </li>
                  </ul>
                  <a className="subscribe" href="/payment?plan_id=66">
                    {" "}
                    الاشتراك في هذه الدورة{" "}
                  </a>
                </div>
              </div>
            </app-package-card>
          </div>
        </div>
        <a className="button-1 raised__button" href="/our-courses">
          {" "}
          مشاهدة جميع الخطط{" "}
        </a>
        <Link className="button-1 raised__button" to="/Upload">
          {" "}
          اضافة خطط{" "}
        </Link>
      </div>
    </article>
  );
}
