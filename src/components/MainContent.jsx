/* eslint-disable no-unused-vars */
// MainContent.js
import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Subscribe from "./Subscribe";
import Pricing from "./Pricing";
import Teacher from "./Teacher";
import Footer from "./Footer";
import Slide from "./Slide"
import SubscriptionForm from "./Upload";
import TeacherForm from "./TeacherForm";

export default function MainContent() {
  return (
    <div>
      <Navbar />
      
      {/* <Jumbotron />
      <Cards />
      <Subscribe />
      <Pricing />
      <Teacher/>
      <Footer/> */}
      {/* <SubscriptionForm/> */}
      <TeacherForm/>
     
    </div>
  );
}
