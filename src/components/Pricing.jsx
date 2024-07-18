/* eslint-disable no-unused-vars */
import React from "react";
import "./pricing.css";
import f from "../assets/images/f.png";
import s from "../assets/images/s.png";
export default function Pricing() {
  return (
    
      <article className="pricing">
        <div className="container">
          <h2 className="main__title-1">خطط الاشتراك الشهرية</h2>
          <div className="row-1 gy-3 ng-star-inserted">
            <div className="col-12 col-lg-3 col-md-6 ng-star-inserted">
              <app-package-card>
                <div className="card-1 ng-star-inserted">
                  <div className="card__header">
                    <img
                      height="210"
                      width="210"
                      className="card__image  ng-lazyloaded"
                      alt="اثنى عشر محاضرة  (في الشهر)  - عربي - طالب واحد  -  نصف ساعة"
                      src={f}
                    />
                  </div>
                  <div className="card__body">
                    <bdi className="price">550.00 LE</bdi>
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
                        <p className="li-title">اثنى عشر محاضرة </p>
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
                        <p className="li-title">نصف ساعة للمحاضرة</p>
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
                        <p className="li-title">للأطفال</p>
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
                        <p className="li-title"> طالب واحد </p>
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
                    <img
                      height="210"
                      width="210"
                      className="card__image  ng-lazyloaded"
                      alt="ثمان حصص  (في الشهر)  - عربي - طالب واحد  - نصف ساعة"
                      src={s}
                    />
                  </div>
                  <div className="card__body">
                    <bdi className="price">350.00 LE</bdi>
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
                        <p className="li-title">ثمان حصص (في الشهر)</p>
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
                        <p className="li-title">نصف ساعة للمحاضرة</p>
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
                        <p className="li-title">للأطفال</p>
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
                        <p className="li-title"> طالب واحد </p>
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
                    <img
                      height="210"
                      width="210"
                      className="card__image  ng-lazyloaded"
                      alt="أربع حصص (في الشهر) - قرآن - طالبين - ساعة"
                      src={f}
                    />
                  </div>
                  <div className="card__body">
                    <bdi className="price">450.00 LE</bdi>
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
                        <p className="li-title">أربع حصص (في الشهر)</p>
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
                        <p className="li-title">ساعة للمحاضرة</p>
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
                        <p className="li-title">للبالغين</p>
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
                        <p className="li-title"> طالبين </p>
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
                    <img
                      height="210"
                      width="210"
                      className="card__image  ng-lazyloaded"
                      alt="أربع حصص (في الشهر) - عربي - ثلاثة طلاب  - ساعة ونصف"
                      src={f}
                    />
                  </div>
                  <div className="card__body">
                    <bdi className="price">500.00 LE</bdi>
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
                        <p className="li-title">أربع حصص (في الشهر)</p>
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
                        <p className="li-title">ساعة ونصف للمحاضرة</p>
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
                        <p className="li-title">للأطفال</p>
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
                        <p className="li-title"> ثلاثة طلاب </p>
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
        </div>
      </article>
   
  );
}
