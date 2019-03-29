import React from 'react'

export default function Header() {
  return (
    <nav className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}
