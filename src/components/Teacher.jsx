/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./teacher.css";
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export default function Teacher() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    languages: "",
    teach: "",
    image: null,
  });
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/Teachers`);
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching Teachers:", error);
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
      const response = await axios.post(`${API_URL}/postTeacher`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Teachers created:", response.data);
    } catch (error) {
      console.error("Error uploading teachers:", error);
    }
  };

  return (
    <article className="our__teachers">
      <div className="container-1">
        <h2 className="main__title-2">بعض معلمينا</h2>
        <div className="row-2 gy-3 ng-star-inserted">
          <div className="col-12 col-lg-3 col-md-6 ng-star-inserted">
            <div className="card-2 ng-star-inserted">
              <a className="card__header cursorPointer">
                {teachers.length ? (
                  <img
                    className="card__img  ng-lazyloaded"
                    alt="إسلام أبوزهرة"
                    title="إسلام أبوزهرة"
                    src={`${API_URL}${teachers[0].imageUrl}`}
                  />
                ) : (
                  <div className="placeholder">No Image Available</div>
                )}
              </a>
              <div className="card__body">
                <a className="teacher__name h2 cursorPointer">
                  {" "}
                  {teachers.length > 0 && (
                    <>
                      {teachers[0].name
                        ? `${teachers[0].name} `
                        : "No name available"}
                    </>
                  )}
                </a>
                <p className="h5 country cursorPointer">
                  {teachers.length > 0 && (
                    <>
                      {teachers[0].country
                        ? `${teachers[0].country} `
                        : "No country available"}
                    </>
                  )}
                </p>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">اللغات:</span>
                  <span className="teacher__specialty tags ng-star-inserted">
                    {teachers.length > 0 && (
                      <>
                        {teachers[0].languages
                          ? `${teachers[0].languages} `
                          : "No languages available"}
                      </>
                    )}
                  </span>
                </section>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">يدرس:</span>
                  <a className="teacher__specialty tags ng-star-inserted">
                    {teachers.length > 0 && (
                      <>
                        {teachers[0].teach
                          ? `${teachers[0].teach} `
                          : "No teach available"}
                      </>
                    )}
                  </a>
                </section>
                <div className="card-actions"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ng-star-inserted">
            <div className="card-2 ng-star-inserted">
              <a className="card__header cursorPointer">
                {teachers.length ? (
                  <img
                    className="card__img  ng-lazyloaded"
                    alt="Test Teacher"
                    title="Test Teacher"
                    src={`${API_URL}${teachers[1].imageUrl}`}
                  />
                ) : (
                  <div className="placeholder">No Image Available</div>
                )}
              </a>
              <div className="card__body">
                <a className="teacher__name h2 cursorPointer">
                  {" "}
                  {teachers.length > 1 && (
                    <>
                      {teachers[1].name
                        ? `${teachers[1].name} `
                        : "No name available"}
                    </>
                  )}
                </a>
                <p className="h5 country cursorPointer">
                  {" "}
                  {teachers.length > 1 && (
                    <>
                      {teachers[1].country
                        ? `${teachers[1].country} `
                        : "No country available"}
                    </>
                  )}
                </p>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">اللغات:</span>
                  <span className="teacher__specialty tags ng-star-inserted">
                    {teachers.length > 1 && (
                      <>
                        {teachers[1].languages
                          ? `${teachers[1].languages} `
                          : "No languages available"}
                      </>
                    )}
                  </span>
                </section>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">يدرس:</span>
                  <a className="teacher__specialty tags ng-star-inserted">
                    {teachers.length > 1 && (
                      <>
                        {teachers[1].teach
                          ? `${teachers[1].teach} `
                          : "No teach available"}
                      </>
                    )}
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
                {teachers.length ? (
                  <img
                    className="card__img  ng-lazyloaded"
                    alt="أحمد علي محمد السراج"
                    title="أحمد علي محمد السراج"
                    src={`${API_URL}${teachers[2].imageUrl}`}
                  />
                ) : (
                  <div className="placeholder">No Image Available</div>
                )}
              </a>
              <div className="card__body">
                <a className="teacher__name h2 cursorPointer">
                  {teachers.length > 2 && (
                    <>
                      {teachers[2].name
                        ? `${teachers[2].name} `
                        : "No name available"}
                    </>
                  )}
                </a>
                <p className="h5 country cursorPointer">
                  {" "}
                  {teachers.length > 2 && (
                    <>
                      {teachers[2].country
                        ? `${teachers[2].country} `
                        : "No country available"}
                    </>
                  )}
                </p>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">اللغات:</span>
                  <span className="teacher__specialty tags ng-star-inserted">
                    {teachers.length > 2 && (
                      <>
                        {teachers[2].languages
                          ? `${teachers[2].languages} `
                          : "No languages available"}
                      </>
                    )}
                  </span>
                </section>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">يدرس:</span>
                  <a className="teacher__specialty tags ng-star-inserted">
                    {teachers.length > 2 && (
                      <>
                        {teachers[2].teach
                          ? `${teachers[2].teach} `
                          : "No teach available"}
                      </>
                    )}
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
                {teachers.length ? (
                  <img
                    className="card__img  ng-lazyloaded"
                    alt="أحمد علي محمد السراج"
                    title="أحمد علي محمد السراج"
                    src={`${API_URL}${teachers[3].imageUrl}`}
                  />
                ) : (
                  <div className="placeholder">No Image Available</div>
                )}
              </a>
              <div className="card__body">
                <a className="teacher__name h2 cursorPointer">
                  {teachers.length > 3 && (
                    <>
                      {teachers[3].name
                        ? `${teachers[3].name} `
                        : "No name available"}
                    </>
                  )}
                </a>
                <p className="h5 country cursorPointer">
                  {" "}
                  {teachers.length > 2 && (
                    <>
                      {teachers[3].country
                        ? `${teachers[3].country} `
                        : "No country available"}
                    </>
                  )}
                </p>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">اللغات:</span>
                  <span className="teacher__specialty tags ng-star-inserted">
                    {teachers.length > 3 && (
                      <>
                        {teachers[3].languages
                          ? `${teachers[3].languages} `
                          : "No languages available"}
                      </>
                    )}
                  </span>
                </section>
                <section className="specialty cursorPointer">
                  <span className="specialty__title">يدرس:</span>
                  <a className="teacher__specialty tags ng-star-inserted">
                    {teachers.length > 3 && (
                      <>
                        {teachers[3].teach
                          ? `${teachers[3].teach} `
                          : "No teach available"}
                      </>
                    )}
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
        <Link className="button-2 raised__button-2" to="/TeacherForm">
          {" "}
          اضافة معلمين{" "}
        </Link>
      </section>
    </article>
  );
}
