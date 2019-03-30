import React from 'react'

export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col">
          <nav className="navbar navbar-expand-lg bg-bg-light shadow-sm p-3 mb-5 ">
            <a className="navbar-brand " href="#">Infokus news</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search news</button>
            </form>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>


                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
              </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>

              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Facebook</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Twitter</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Instagram</a>
                </li>
              </ul>


            </div>
          </nav>
        </div>
      </div>

    </div>
  )
}

