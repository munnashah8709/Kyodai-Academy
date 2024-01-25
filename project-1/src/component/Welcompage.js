import React from "react";
import "../component/Welcomepage.css"; // Import your CSS file for styling
import Demo from "../images/Demovedio.mp4";
import { Card, Col, Row } from "react-bootstrap";
import WelcomeVedio from "../images/welcomevedio.mp4";
import Welcomeimage from "../images/Welocmeimage.jpg";
import { FaFacebook, FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Welcompage() {
  return (
    <Card>
      <Row>
        <Col md={8}>
          <div>
            <h1
              className="fonts welcome-containers"
              style={{ color: "black", fontSize: "40px", marginTop: "40px" }}
            >
              Welcome Aboard with Kyodai Academy
            </h1>
            <h1
              className="fonts welcome-containers"
              style={{ color: "red", marginTop: "10px" }}
            >
              A Japanese Language Institute and Culture Center
            </h1>
            <div>
              <h4
                className="fonts"
                style={{
                  fontSize: "20px",
                  padding: "20px",
                  textAlign: "justify",
                  marginLeft: "50px",
                  marginRight: "30px",
                }}
              >
                Kyodai Academy is a dynamic educational institution dedicated to
                empowering individuals with the language and professional
                awareness you need to elevate your career on the global stage.
                Specializing in Japanese language and skill training, we serve
                as the crucial catalyst for those seeking to embark on exciting
                international career journeys, with a particular focus on the
                thriving job opportunities in Japan.
              </h4>
            </div>

            <h1 className="welcome-containers" style={{ marginTop: "10px" }}>
              いらっしゃいませ
            </h1>
            <div
              class="social-icons welcome-containers"
              style={{ marginTop: "47px" }}
            >
              <a href="https://wa.me/+916295247229?" target="_blank">
                <FaWhatsapp
                  className="instagram"
                  style={{ height: "30px", width: "30px", color: "Black" }}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100092428056750&mibextid=LQQJ4d"
                target="_blank"
              >
                <FaFacebook
                  className="instagram"
                  style={{ height: "30px", width: "30px", color: "Black" }}
                />
              </a>

              <a
                href="https://www.instagram.com/kyodaiacademy/?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
              >
                <FaInstagram
                  className="instagram"
                  style={{ height: "30px", width: "30px", color: "Black" }}
                />
              </a>
              <a
                href="https://www.google.com/search?sca_esv=554707076&rlz=1CDGOYI_enIN1050IN1050&hl=en-GB&sxsrf=AB5stBjTl-WVg6uOII-adcBe3p7X2VxS-Q:1691478554844&q=Kyodai+Academy&ludocid=11094374788268816738&lsig=AB86z5UVElquqF6gk-ElinmGBb_1&kgs=6911a75a8acb41db&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3"
                target="_blank"
              >
                <FaGoogle
                  className="instagram"
                  style={{ height: "30px", width: "30px", color: "Black" }}
                />
              </a>
              
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div style={{ borderRadius: "px", padding: "5px", height: "auto" }}>
            <div
              className="bg-image hover-overlay"
              data-mdb-ripple-init
              data-mdb-ripple-color="light"
            >
              <div
                style={{
                  borderRadius: "3px",
                  overflow: "hidden",
                  height: "auto",
                }}
              >
                <video
                  src={WelcomeVedio}
                  loop
                  autoPlay
                  muted
                  style={{ height: "467px", maxWidth: "100%" }}
                ></video>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default Welcompage;
