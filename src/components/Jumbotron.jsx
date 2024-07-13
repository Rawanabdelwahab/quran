/* eslint-disable no-unused-vars */
import React from "react";
import img from "../assets/images/Mask-Group-12.png";
import "./jumbotron.css";
import Grid from "@mui/material/Grid";
export default function Jumbotron() {
  return (
    <div>
      <header className="header">
        <section className="header__top">
        <h3 className="top__content__description description-top d-sm-block"> أكبر منصة تحفيظ وتدريس علوم القرآن في مصر والوطن العربي للكبار والأطفال </h3>

          <img
            alt="qooran home page landing section image"
            src={img}
            className="header__top__img"
          />
          <section className="top__content">
            <h3 className="top__content__description d-sm-none">
              <Grid item xs={8}>
                {" "}
                أكبر منصة لتعليم القرآن الكريم واللغة العربية أونلاين في مصر{" "}
              </Grid>
            </h3>

            <section className="top__content__btns">
              <a href="/user/signup" className="button experimental-lecture">
                {" "}
                انضم كطالب{" "}
              </a>

              <a href="/user/login" className="button join-teacher">
                {" "}
                تسجيل الدخول
              </a>
            </section>
          </section>
        </section>

        <section className="header__bottom">
          <button className="header__bottom__scrolldown">
            <svg
              height="18.212"
              viewBox="0 0 18.22 18.212"
              width="18.22"
              xmlns="http://www.w3.org/2000/svg"
              className="scrolldown__img"
            >
              <g
                data-name="Layer 2"
                id="Layer_2"
                transform="translate(-4.999 -4.999)"
              >
                <g id="arrowhead-down" transform="translate(4.999 4.999)">
                  <path
                    d="M21.093,12.508l-6.986,5.62L7.134,12.3a1.3,1.3,0,1,0-1.665,2l7.806,6.5a1.3,1.3,0,0,0,1.652,0l7.806-6.284a1.3,1.3,0,1,0-1.639-2.016Z"
                    data-name="Path 638"
                    fill="#0c8849"
                    id="Path_638"
                    transform="translate(-4.999 -2.892)"
                  ></path>
                  <path
                    d="M13.275,13.808a1.3,1.3,0,0,0,1.652,0l7.806-6.284a1.3,1.3,0,1,0-1.639-2.03l-6.986,5.633L7.134,5.3a1.3,1.3,0,1,0-1.665,2Z"
                    data-name="Path 639"
                    fill="#0c8849"
                    id="Path_639"
                    transform="translate(-4.999 -4.999)"
                  ></path>
                </g>
              </g>
            </svg>
            <svg
              height="18.212"
              viewBox="0 0 18.22 18.212"
              width="18.22"
              xmlns="http://www.w3.org/2000/svg"
              className="scrolldown__img-fixed"
            >
              <g
                data-name="Layer 2"
                id="Layer_2"
                transform="translate(-4.999 -4.999)"
              >
                <g id="arrowhead-down" transform="translate(4.999 4.999)">
                  <path
                    d="M21.093,12.508l-6.986,5.62L7.134,12.3a1.3,1.3,0,1,0-1.665,2l7.806,6.5a1.3,1.3,0,0,0,1.652,0l7.806-6.284a1.3,1.3,0,1,0-1.639-2.016Z"
                    data-name="Path 638"
                    fill="#0c8849"
                    id="Path_638"
                    transform="translate(-4.999 -2.892)"
                  ></path>
                  <path
                    d="M13.275,13.808a1.3,1.3,0,0,0,1.652,0l7.806-6.284a1.3,1.3,0,1,0-1.639-2.03l-6.986,5.633L7.134,5.3a1.3,1.3,0,1,0-1.665,2Z"
                    data-name="Path 639"
                    fill="#0c8849"
                    id="Path_639"
                    transform="translate(-4.999 -4.999)"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </section>
      </header>
    </div>
  );
}