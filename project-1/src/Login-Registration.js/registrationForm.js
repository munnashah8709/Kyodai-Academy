import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate= useNavigate(); 
  const [data, setname]=useState({});

  const handel=(e)=>{
    const ke=e.target.name;
    const val=e.target.value;
    setname({...data, [ke]:val})

  }
  const handleRoutes = () => {
    navigate("/");
  }

  const fun=(e)=>{
    e.preventDefault(); 
    console.log(data)
  }

  return (
    <div>
     <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="Sample image" />
          </div>
          
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Register Here</p>
              </div>
            <form>
            
              <div className="form-outline mb-4">
              <input type="text" required className="form-control form-control-lg" placeholder="Username" name='UserName' onChange={handel} autoComplete="off" style={{"lineHeight":" 4.15"}}/>
                <label className="form-label" htmlFor="form3Example3">UserName</label>
              </div>

              <div className="form-outline mb-4">
                <input type="email"  className="form-control form-control-lg" placeholder="Enter a valid email address" name='Email' onChange={handel} style={{"lineHeight":" 4.15"}} />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>

              <div className="form-outline mb-3">
                <input type="password"  className="form-control form-control-lg" name='Password'
                  placeholder="Enter password" onChange={handel} style={{"lineHeight":" 4.15"}} />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>

              <div className="form-outline mb-3">
                <input type="password"  className="form-control form-control-lg" name='Comform-Password'
                  placeholder="Enter password" onChange={handel} style={{"lineHeight":" 4.15"}} />
                <label className="form-label" htmlFor="form3Example4">Conform Password</label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem'  }} onClick={handleRoutes} >Go Back</button>
                <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem',marginLeft:"5px" }} onClick={fun}>Submit</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
    </div>
  )
}

export default RegistrationForm
