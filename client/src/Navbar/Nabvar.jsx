import { Register } from "../Autentication/Register/Register";
import logo from '../assets/logo.png'

export const Nabvar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ background: '#D3D3D3'}}>
        <div className="container-fluid">
          <img src={logo} alt="Logo" style={{ width: '35px', height: '35px', marginRight: '10px' }} />
          <a className="navbar-brand" href="#">
            Sgp-Web
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">             
              <li className="nav-item">
                <a 
                className="nav-link" 
                href="#" 
                data-bs-toggle="modal"
                data-bs-target="#signinModal"
                >
                  Signin
                </a>
              </li>
              <li className="nav-item">
                <a 
                className="nav-link" 
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
                >
                  Signup
                </a>
              </li>           
            </ul>
          </div>
        </div>
      </nav>



{/* Signin Modal */}
<div className="modal fade" id="signinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Signin</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
        <form id="signin-form">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control mb-3" placeholder="Email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control mb-3" placeholder="Password" required />
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>

{/* Signup Modal */}
<div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Signup</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <Register />
      </div>
    </div>
  </div>
</div>


    </div>
  );
};
