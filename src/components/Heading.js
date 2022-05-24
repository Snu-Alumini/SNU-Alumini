import React from 'react';
import logo from './CSS/IMAGE/LOGO.png'

export default function Heading() {
  let changeStyle={ 
    backgroundColor:"#5c1414",
}
let logoStyle={
  textAlign:"center",
  fontFamily:"Roman",
  fontSize:"22px"
}
let spanStyle={
  color:"#fccf3d",
  fontSize:"14px",
  marginTop:"-4px",
  marginLeft:"-16px"
}
  return (
    <nav class="navbar" style={changeStyle}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:"white"}}>
      {/* <img src={logo} alt="" width="40" height="38" class="d-inline-block align-text-top"/> */}
      <div style={{textAlign:"center"}}>
      <div className='name' style={logoStyle}> Sister Nivedita University</div>
      <div style={spanStyle}>www.snuiv.ac.in</div>
      </div>
    </a>
  </div>
</nav>
  )
}
