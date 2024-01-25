import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../component/Cta.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import image1 from "../images/INTERVIEWPREPARATION.jpg";
import image2 from "../images/JAPANESELANGUAGE.jpg";

import image3 from "../images/foodservice.jpg";
import image10 from "../images/foodservice2.jpg";

import image4 from "../images/CAREGIVER.jpg";
import image12 from "../images/caregiver2.jpg";

import image5 from "../images/AGRICULTURE.jpg";
import image11 from "../images/Agriculture2.jpg";

import image6 from "../images/image1.jpg";
import image7 from "../images/image2.jpg";


import image8 from "../images/image3.jpg";
import image9 from "../images/image4.jpg";
import { useNavigate } from "react-router-dom";












function Cta() {
  const [toEmail, setToEmail] = useState("");
  const [fromName, setFromName] = useState("");
  const [message, setMessage] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const navigates=()=>{
    navigate('/coursedetails')
  }

  const sendEmail = () => {
    const notify = (message) => {
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    const notifyError = (message) => {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    if (!toEmail || !fromName || !message) {
      notifyError("Please fill all the fields");
      return;
    }

    const templateParams = {
      to_email: toEmail,
      from_name: fromName,
      message: message,
    };

    emailjs
      .send(
        "service_uynr69g",
        "template_4vrocu5",
        templateParams,
        "Ocdz8MyLPUIf4yCcE"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        notify("Form submitted successfully");
        // Reset the form
        setToEmail("");
        setFromName("");
        setMessage("");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const cardData = [
    { id: 1, text: "Japanese language course n5,n4,n3,n2,n1" },
    { id: 2, text: "Nursing jobs in japan" },
    { id: 3, text: "Food service jobs in japan" },
    { id: 4, text: "Agriculture jobs in japan" },
    { id: 5, text: "It jobs in japan" },
    { id: 6, text: "Mechanical engineering jobs" },
    { id: 7, text: "Architecture jobs" },
    { id: 8, text: "Student visa for japan" },
  ];

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (selectedMessage) => {
    setMessage(selectedMessage);
    setDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div>
      <div className="row" style={{ marginTop: "10px" }}>

        
        <div className="col-md-8">
          <div class="card">
            <div class="card-header">
              <h1 className="fonts" style={{ color: "red", fontSize: "30px" }}>
                COURSES WE PROVIDE
              </h1>
            </div>

            <div class="card-body" style={{ backgroundColor: "black" }}>
              <div
                className="services-container overflow-x-auto custom-scrollbar-container"
                style={{ height: "auto", width: "100%", paddingTop: "-20px" }}
              >
                <div class="row row-cols-1 row-cols-md-3 g-4">
              


                <div class="col">
                    <div class="card h-100">
                      <div className="image-container">
                        <div className="hover-container" onClick={navigates} >
                          <img
                            src={image3}
                            alt="Image 1"
                            className="first-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                          <img
                            src={image10}
                            alt="Image 2"
                            className="second-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col">
                    <div class="card h-100">
                      <div className="image-container">
                        <div className="hover-container">
                          <img
                            src={image5}
                            alt="Image 1"
                            className="first-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                          <img
                            src={image11}
                            alt="Image 2"
                            className="second-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="col">
                    <div class="card h-100">
                      <div className="image-container">
                        <div className="hover-container">
                          <img
                            src={image4}
                            alt="Image 1"
                            className="first-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                          <img
                            src={image12}
                            alt="Image 2"
                            className="second-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>




                  <div class="col">
                    <div class="card h-100">
                      <div className="image-container">
                        <div className="hover-container">
                          <img
                            src={image1}
                            alt="Image 1"
                            className="first-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                          <img
                            src={image6}
                            alt="Image 2"
                            className="second-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="col">
                    <div class="card h-100">
                      <div className="image-container">
                        <div className="hover-container">
                          <img
                            src={image2}
                            alt="Image 1"
                            className="first-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                          <img
                            src={image7}
                            alt="Image 4"
                            className="second-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                
             

                

                  <div class="col">
                    <div class="card h-100">
                      <div className="image-container">
                        <div className="hover-container">
                          <img
                            src={image3}
                            alt="Image 1"
                            className="first-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                          <img
                            src={image4}
                            alt="Image 2"
                            className="second-image"
                            style={{ height: "315px", width: "100.12%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        

        <div className="col-md-4" style={{margin:"auto"}}>
          <div class="card">
            <div class="card-header">
              <h1 className="fonts" style={{ color: "red", fontSize: "30px" }}>
                WHAT IS YOUR QUERY ABOUT?
              </h1>
            </div>

            <div class="card-body" style={{ backgroundColor: "#433e3e" }}>
              <br></br>

              <div
                className="row"
                style={{
                  marginTop: "13px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-field p-2 red-placeholder"
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  style={{ width: "100%", fontSize: "25px" }}
                />
              </div>
              <br></br>

              <div
                className="row"
                style={{
                  marginTop: "13px",
                  marginLeft: "3px",
                  marginRight: "3px",
                }}
              >
                <div
                  class="dropdown"
                  style={{ width: "100%", fontSize: "25px" }}
                >
                  <input
                    type="text"
                    placeholder="Your Query"
                    class="dropdown-toggle p-2 red-placeholder"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      fontSize: "25px",
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onClick={handleDropdownToggle}
                  />
                  <form
                    class={`dropdown-menu p-4${dropdownOpen ? " show" : ""}`}
                    style={{ width: "97%" }}
                  >
                    {cardData.map((item) => (
                      <h3
                        className="fonts"
                        key={item.id}
                        onClick={() => handleOptionClick(item.text)}
                      >
                        {item.id}: {item.text.toUpperCase()}
                      </h3>
                    ))}
                  </form>
                </div>
              </div>
              <br></br>

              <div
                className="row"
                style={{
                  marginTop: "13px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="form-field p-2 red-placeholder"
                  value={toEmail}
                  onChange={(e) => setToEmail(e.target.value)}
                  style={{ fontSize: "25px" }}
                />
              </div>

              <br></br>

              <button
                type="button"
                className="btn btn-danger"
                data-mdb-ripple-init
                onClick={sendEmail}
                style={{
                  width: "200px",
                  display: "block", // Center horizontally
                  margin: "auto", // Center horizontally
                  height: "40px",
                  fontSize: "20px",
                  marginBottom: "10px",
                  marginTop: "14px",
                }}
              >
                {" "}
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Cta;
