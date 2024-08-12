/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./paySubscribe.css";
import a from "../assets/images/a.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const API_URL = import.meta.env.VITE_API_URL;
export default function PaySubscribe() {
  const { id } = useParams(); // Extract the ID from the URL
  const [subscription, setSubscription] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axios.get(`${API_URL}/subscriptions/${id}`);
        setSubscription(response.data);
      } catch (error) {
        console.error("Error fetching subscription:", error);
        setError("Failed to fetch subscription data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [id]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const increaseNumber = async () => {
    if (subscription) {
      try {
        // Send a PUT request to update the subscription number in the backend
        const updatedSubscription = {
          ...subscription,
          number: subscription.number + 1,
        };

        const response = await axios.put(
          `${API_URL}/subscriptions/${id}`,
          updatedSubscription
        );

        // Update the frontend state with the new number
        setSubscription(response.data);
      } catch (error) {
        console.error("Error updating subscription:", error);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <section className="payment__container container ng-star-inserted">
        <div className="holder row5">
          <div className="col-15">
            <div className="package__container card__main5">
              {subscription ? (
                <div>
                  <h1 className="semi__title5">
                    {subscription.price
                      ? `  ${subscription.price} LE`
                      : "No price available"}
                  </h1>

                  <section className="row5">
                    <div className="col-15 col-md-3">
                      {subscription.imageUrl ? (
                        <img
                          className="package__img  ng-lazyloaded"
                          alt={subscription.price}
                          title={
                            `${subscription.price} LE` +
                            " " +
                            `${subscription.times} حصص` +
                            " " +
                            `${subscription.duration} ساعة` +
                            " " +
                            `${subscription.person}` +
                            " " +
                            `${subscription.number} طالب`
                          }
                          src={`${API_URL}${subscription.imageUrl}`}
                        />
                      ) : (
                        <div className="placeholder">No Image Available</div>
                      )}
                    </div>
                    <div className="col-15 col-md-9">
                      <ul className="card__items__container">
                        <li className="card__item">
                          <svg
                            height="16"
                            viewBox="0 0 16 16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
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
                          <p className="li-title">
                            {subscription.times
                              ? `${subscription.times} حصص`
                              : "No times available"}
                          </p>
                        </li>
                        <li className="card__item">
                          <svg
                            height="16"
                            viewBox="0 0 16 16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
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
                          <p className="li-title">
                            {subscription.duration
                              ? `${subscription.duration} ساعة`
                              : "No duration available"}
                          </p>
                        </li>
                        <li className="card__item">
                          <svg
                            height="16"
                            viewBox="0 0 16 16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
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
                          <p className="li-title">
                            {subscription.person
                              ? `${subscription.person}`
                              : "No person available"}
                          </p>
                        </li>
                        <li className="card__item">
                          <svg
                            height="16"
                            viewBox="0 0 16 16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
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
                          <p dir="rtl" className="li-title">
                            {subscription.number
                              ? `${subscription.number} طالب`
                              : "No number available"}{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
          <div className="col-15">
            <div className="coupons__container card__main5">
              <h2 className="semi__title5">تنويه</h2>
              <section className="bottom">
                <p>
                  {" "}
                  طالبنا العزيز: عند الاشتراك معنا تكون مدة باقتك مفعلة ومتاحة
                  لمدة 30 يوماً فقط، يمكنك خلالها حضور وإنهاء كافة الحصص المتاحة
                  في باقتك، وفي حالة الاعتذار والتأجيل الطارئ لبعض الحصص تتيح
                  الإدارة مد تفعيل الباقة لمدة 15 يوماً إضافياً، بعدها تصبح
                  الباقة غير متاحة.{" "}
                </p>
              </section>
            </div>
          </div>

          <div className="col-15">
            <div className="payment__methods__container card__main5">
              <h2 className="semi__title5">اختر طريقة الدفع</h2>
              <div
                dir="ltr"
                className="row5 justify-content-between mt-4 gap-3"
              >
                {/* ///////////////////// */}
                <Container maxWidth="sm">
                  <Box mt={5}>
                    <form>
                      <TextField
                        label="الاسم"
                        fullWidth
                        margin="normal"
                        required
                      />
                      <TextField
                        label="البريد الالكترونى"
                        type="email"
                        fullWidth
                        margin="normal"
                        required
                      />
                      <Box mt={3}></Box>
                      <button
                        type="button"
                        className="raised__button_white button5"
                        onClick={increaseNumber}
                      >
                        أدفع
                      </button>
                    </form>
                  </Box>
                </Container>
              </div>
            </div>
          </div>
          <div className="col-15">
            <div className="overall__container card__main5">
              <h2 className="semi__title5">الإجمالي</h2>
              <div className="row5">
                <div className="col-15">
                  <div dir="ltr" className="price__overall">
                    <p>
                      <span>الإجمالي النهائي : </span>
                      <span className="price__value">
                        {subscription.price
                          ? `  ${subscription.price} جنية مصري `
                          : "No price available"}
                      </span>
                    </p>

                    <p>
                      <span>الإجمالي : </span>
                      <span className="price__value">
                        {" "}
                        {subscription.price
                          ? `  ${subscription.price} جنية مصري `
                          : "No price available"}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-15"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
