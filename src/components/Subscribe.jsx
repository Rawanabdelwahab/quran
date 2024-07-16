/* eslint-disable no-unused-vars */
import React from "react";
import pic from "../assets/images/pics.png";
import "./subscribe.css";
export default function Subscribe() {
  return (
    <app-how-to-subscribe>
      <article className="how__to__subscribe">
        <div className="container">
          <div className="holder">
            <h2 className="main__title-3">كيفية الاشتراك ؟</h2>
            <div className="stepper__container">
              <div className="step ng-star-inserted">
                <span className="step__number step__number-active">1</span>
                <p className="step__title step__title-active">
                  اختيار الدورة والخطة
                </p>
              </div>
              <div className="step ng-star-inserted">
                <span className="step__number">2</span>
                <p className="step__title">التسجيل</p>
              </div>
              <div className="step ng-star-inserted">
                <span className="step__number">3</span>
                <p className="step__title">اختيار المعلم</p>
              </div>
              <div className="step ng-star-inserted">
                <span className="step__number">4</span>
                <p className="step__title">جدولة الحصص</p>
              </div>
              <div className="step ng-star-inserted">
                <span className="step__number">5</span>
                <p className="step__title">الدفع</p>
              </div>
            </div>
            <div className="content__container">
              <div className="row g-0">
                <div className="right coll-12 col-md-6">
                  <div className="content">
                    <h3 className="content__title"> إختيار الحلقات و الخطط </h3>
                    <p className="content__paragraph">
                      {" "}
                      ابدأ معنا رحلة تعلم القرآن الكريم بإختيار نظام و نوع
                      الحلقات المناسب لك.(حفظ - تلاوة - تجويد - لغة عربية){" "}
                    </p>
                    <button className="button raised__button">
                      {" "}
                      يمكنك البدء من هنا{" "}
                    </button>
                  </div>
                </div>
                <div className="left col-12 col-md-6">
                  <div className="content">
                    <img
                      alt="قرآن أون لاين دورات اللغة العربية دورات القرآن الكريم"
                      className="  ng-lazyloaded"
                      src={pic}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </app-how-to-subscribe>
  );
}
