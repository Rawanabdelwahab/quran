/* eslint-disable no-unused-vars */
import React from "react";
import "./login.css";
import register from "../assets/images/register-icon.svg";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
export default function Login() {
  return (
    <div className="ng-star-inserted">
      <div className="auth__container">
        <div className="overlay"></div>
        <div className="auth__content">
          <h3 className="content__header"> مرحبا بك مجددا ، لنسجل الدخول</h3>
          <div className="auth__card">
            <div className="auth__card__container">
              <div className="auth__card__header">
                <img alt="تسجيل الدخول كمعلم" src={register} />
              </div>
              <div className="auth__card__body">
                <div className="form__container">
                  <form className="ng-dirty ng-touched ng-invalid mat-form-field">
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <TextField
                      className=" mat-form-field"
                        type="email"
                        label="البريد الالكترونى"
                        placeholder="البريد الالكترونى"
                        variant="outlined"
                        fullWidth
                      />
                    </FormControl>

                    <FormControl fullWidth variant="outlined" margin="normal">
                      <TextField
                        label="كلمة المرور"
                        placeholder="كلمة المرور"
                        variant="outlined"
                        fullWidth
                      />
                    </FormControl>

                    <div className="submit-btn text-center m-auto">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="auth__btn--submit"
                      >
                        تسجيل الدخول
                      </Button>
                    </div>
                  </form>
                  <div className="auth__details">
                    <p className="extra__links">
                      <a href="/user/signup">تسجيل حساب جديد</a>
                    </p>
                    <p className="extra__links">
                      <a href="/user/forget-password">هل نسيت كلمة المرور ؟</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
