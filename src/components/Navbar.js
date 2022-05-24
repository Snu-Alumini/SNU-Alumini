import React from 'react';

export default function Navbar() {
    {
    let changeStyle={ 
        backgroundColor:"#fdf4d6",
    }
  return (
    <>
            
            <nav className="navbar navbar-expand-lg" style={changeStyle}>
            <div className="container-fluid" >
                <a className="navbar-brand px-2" href="#" style={{fontFamily:"Roman",fontSize:"1.35rem",fontWeight:"450"}}>School Of Engineering</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ }}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                    <li class="nav-item"style={{paddingRight:"1rem"}}>
                        <a class="nav-link active" aria-current="page" href="#">HOME</a>
                    </li>
                    <li className="nav-item dropdown"style={{paddingRight:"1rem"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        FACULTY
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item"style={{paddingRight:"1rem"}}>
                        <a class="nav-link active" aria-current="page" href="#">ALUMNI</a>
                    </li>
                    <li className="nav-item dropdown"style={{paddingRight:"1rem"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        COMPANIES
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item"style={{paddingRight:"1rem"}}>
                        <a class="nav-link active" aria-current="page" href="#">BLOGS</a>
                    </li>
                    <li class="nav-item"style={{paddingRight:"1rem"}}>
                        <a class="nav-link active" aria-current="page" href="#">CONTACTS</a>
                    </li>
                    <li className="nav-item dropdown"style={{paddingRight:"0.1rem"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ABOUT US
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
</>
  )
}
}
