/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./teacher.css";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function TeacherPagination() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    languages: "",
    teach: "",
    image: null,
  });
  const [teachers, setTeachers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/paginatedTeachers`, {
          params: { page: currentPage, limit: 10 },
        });
        setTeachers(response.data.teachers);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching Teachers:", error);
      }
    };

    fetchData();
  }, [currentPage]);

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

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <article className="our__teachers">
      <div className="container-1">
        <h2 className="main__title-2"> معلمينا</h2>
        <div className="row-2 gy-3 ng-star-inserted">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="col-12 col-lg-3 col-md-6 ng-star-inserted"
            >
              <div className="card-2 ng-star-inserted">
                <a className="card__header cursorPointer">
                  {teacher.imageUrl ? (
                    <img
                      className="card__img ng-lazyloaded"
                      alt={teacher.name}
                      title={teacher.name}
                      src={`${API_URL}${teacher.imageUrl}`}
                    />
                  ) : (
                    <div className="placeholder">No Image Available</div>
                  )}
                </a>
                <div className="card__body">
                  <a className="teacher__name h2 cursorPointer">
                    {teacher.name ? teacher.name : "No name available"}
                  </a>
                  <p className="h5 country cursorPointer">
                    {teacher.country ? teacher.country : "No country available"}
                  </p>
                  <section className="specialty cursorPointer">
                    <span className="specialty__title">اللغات:</span>
                    <span className="teacher__specialty tags ng-star-inserted">
                      {teacher.languages
                        ? teacher.languages
                        : "No languages available"}
                    </span>
                  </section>
                  <section className="specialty cursorPointer">
                    <span className="specialty__title">يدرس:</span>
                    <a className="teacher__specialty tags ng-star-inserted">
                      {teacher.teach ? teacher.teach : "No teach available"}
                    </a>
                  </section>
                  <div className="card-actions"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            السابق
          </button>
          <span>
            صفحة {currentPage} من {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            التالى
          </button>
        </div>
      </div>
      <section className="actions__button">
        <Link className="button-2 raised__button-2" to="/TeacherForm">
          اضافة معلمين
        </Link>
      </section>
    </article>
  );
}
