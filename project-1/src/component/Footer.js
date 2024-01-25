import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaWhatsapp } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Make sure to import FontAwesome if you're using it
// import '@fortawesome/fontawesome-free/css/all.css'; // Add this line if you're using FontAwesome

const Footer = () => {
  return (
    <>
     <footer className="text-center text-lg-start text-white" style={{ backgroundColor: 'rgb(195, 7, 7)' }}
>
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h2 className="text-uppercase mb-4 font-weight-bold">
                KYODAI ACADEMY
                </h2>
                <h5>
                Kyodai Academy is a premier institution that offers comprehensive Japanese language training and skill development courses. Our courses are designed to cater to the needs of students, professionals, and anyone who is interested in learning Japanese language and culture.
                </h5>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h2 className="text-uppercase mb-4 font-weight-bold">What We Do</h2>
                <h5>
                  <a href="#" className="text-white"> Japanese Language Classes- N5, N4, N3 N2 and N1 Course</a>
                </h5>
                <h5>
                  <a href="#" className="text-white">  Skill Development Course for Nursing-Caregiving </a>
                </h5>
                <h5>
                  <a href="#" className="text-white"> Skill Development Course in Food Service</a>
                </h5>
                <h5>
                  <a href="#" className="text-white">Skill Development Course for Accomodation Industry</a>
                </h5>
                <h5>
                  <a href="#" className="text-white">Skill Development Course for Agriculture </a>
                </h5>


                <h5>
                  <a href="#" className="text-white">Visa Processing and Documentations </a>
                </h5>
                <h5>
                  <a href="#" className="text-white">Job Placement Consultation  </a>
                </h5>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h2 className="text-uppercase mb-4 font-weight-bold">
                Job Placement in Japan
                </h2>
                <h5>
                  <a href="#" className="text-white">Your Account</a>
                </h5>
                <h5>
                  <a href="#" className="text-white">Become an Affiliate</a>
                </h5>
                <h5>
                  <a href="#" className="text-white">Shipping Rates</a>
                </h5>
                <h5>
                  <a href="#" className="text-white">Help</a>
                </h5>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-2">
                <h2 className="text-uppercase mb-4 font-weight-bold">Contact</h2>
                <h5><i className="fas fa-home mr-3"></i> Pragya Bhavan Holding No. 9/2,Shaheed Durga Malla Path Salbari</h5>
                <h5><i className="fas fa-envelope mr-3"></i> academykyodai@gmail.com</h5>
                <h5><i className="fas fa-phone mr-3"></i> + 91-850 9428 362</h5>
                <h5><i className="fas fa-print mr-3"></i> + 0353 13638999</h5>
              </div>
            </div> 
          </section>
          <hr className="my-3" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">   
              <div className="p-3">
                  <a href="https://mdbootstrap.com/" className="text-white">info.kyodai@kyodaiacademy.com</a>
                </div>    
              </div>  
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                href="https://www.facebook.com/profile.php?id=100092428056750&mibextid=LQQJ4d"
                target="_blank"
              >
                <FaFacebook
                  className="instagram"
                  style={{ height: "30px", width: "30px", color: "white" , marginRight:"10px"}}
                />
              </a>
              <a href="https://wa.me/+916295247229?" target="_blank">
                <FaWhatsapp
                  className="instagram"
                  style={{ height: "30px", width: "30px", color: "white"  , marginRight:"10px" }}
                />
              </a>

              <a
                href="https://www.instagram.com/kyodaiacademy/?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
              >
                <FaInstagram
                  className="instagram"
                  style={{ height: "30px", width: "30px", color: "white" , marginRight:"10px"  }}
                />
              </a>
              <a
                href="https://www.google.com/search?sca_esv=554707076&rlz=1CDGOYI_enIN1050IN1050&hl=en-GB&sxsrf=AB5stBjTl-WVg6uOII-adcBe3p7X2VxS-Q:1691478554844&q=Kyodai+Academy&ludocid=11094374788268816738&lsig=AB86z5UVElquqF6gk-ElinmGBb_1&kgs=6911a75a8acb41db&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3"
                target="_blank"
              >
                <FaGoogle
                  className="instagram"
                  style={{ height: "30px", width: "30px", color: "white"  }}
                />
              </a>
              </div>
              </div>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
