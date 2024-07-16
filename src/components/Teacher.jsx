/* eslint-disable no-unused-vars */
import React from "react";
import a from "../assets/images/a.png";
import b from "../assets/images/b.png";
import c from "../assets/images/c.png";
import "./teacher.css";
export default function Teacher() {
  return (
    <article className="our__teachers">
      <div className="container-1">
        <h2 className="main__title-2">بعض معلمينا</h2>
        <div className="row-2 gy-3 ng-star-inserted">
          <div className="col-12 col-lg-3 col-md-6 ng-star-inserted">
            <div className="card-2 ng-star-inserted">
              <a className="card__header cursorPointer">
                <img
                  className="card__img  ng-lazyloaded"
                  alt="إسلام أبوزهرة"
                  title="إسلام أبوزهرة"
                  src={a}
                />
              </a>
              <div className="card__body">
                <a className="teacher__name h2 cursorPointer">إسلام أبوزهرة</a>
                <p className="h5 country cursorPointer">Egypt</p>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">اللغات:</span>
                  <span className="teacher__specialty tags ng-star-inserted">
                    عربى
                  </span>
                </section>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">يدرس:</span>
                  <a className="teacher__specialty tags ng-star-inserted">
                    كورس القرآن الكريم
                  </a>
                  
                </section>
                <div className="card-actions"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ng-star-inserted">
            <div className="card-2 ng-star-inserted">
              <a className="card__header cursorPointer">
                <img
                  className="card__img  ng-lazyloaded"
                  alt="Test Teacher"
                  title="Test Teacher"
                  src={a}
                />
              </a>
              <div className="card__body">
                <a className="teacher__name h2 cursorPointer">Test Teacher</a>
                <p className="h5 country cursorPointer">Egypt</p>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">اللغات:</span>
                  <span className="teacher__specialty tags ng-star-inserted">
                    عربى
                  </span>
                </section>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">يدرس:</span>
                  <a className="teacher__specialty tags ng-star-inserted">
                    كورس القرآن الكريم
                  </a>
                  
                </section>
                <div className="card-actions"></div>
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////////// */}
        
          <div className="col-12 col-lg-3 col-md-6 ng-star-inserted">
            <div
              className="card-2 ng-star-inserted"
              style={{ transform: "translateY(0px)", boxShadow: "none" }}
            >
              <a className="card__header cursorPointer">
                <img
                  className="card__img  ng-lazyloaded"
                  alt="أحمد علي محمد السراج"
                  title="أحمد علي محمد السراج"
                  src={b}
                />
              </a>
              <div className="card__body">
                <a className="teacher__name h2 cursorPointer">
                  أحمد علي محمد السراج
                </a>
                <p className="h5 country cursorPointer">Egypt</p>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">اللغات:</span>
                  <span className="teacher__specialty tags ng-star-inserted">
                    عربى
                  </span>
                </section>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">يدرس:</span>
                  <a className="teacher__specialty tags ng-star-inserted">
                    كورس القرآن الكريم
                  </a>
                </section>
                <div className="card-actions"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ng-star-inserted">
            <div
              className="card-2 ng-star-inserted"
              style={{ transform: "translateY(0px)", boxShadow: "none" }}
            >
              <a className="card__header cursorPointer">
                <img
                  className="card__img  ng-lazyloaded"
                  alt="محمد ابراهيم خاطر"
                  title="محمد ابراهيم خاطر"
                  src={c}
                />
              </a>
              <div className="card__body">
                <a className="teacher__name h2 cursorPointer">
                  محمد ابراهيم خاطر
                </a>
                <p className="h5 country cursorPointer">Egypt</p>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">اللغات:</span>
                  <span className="teacher__specialty tags ng-star-inserted">
                    عربى
                  </span>
                </section>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">يدرس:</span>
                  <a className="teacher__specialty tags ng-star-inserted">
                    كورس القرآن الكريم
                  </a>
                </section>
                <div className="card-actions"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="actions__button">
        <a className="button-2 raised__button-2" href="#">
          {" "}
          مشاهدة جميع المعلمين{" "}
        </a>
      </section>
    </article>
  );
}
