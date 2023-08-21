// EXCERSICE LEVEL2


import React from 'react';
import ReactDOM from 'react-dom';
import cssImage from './imgs/css.png';
import htmlImage from './imgs/html.png';
import jsImage from './imgs/js.webp';
import reactImage from './imgs/react.png';


const Container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0'
}

const imgStyle = {
  maxWidth: '200px',
  height: 'auto',
  marginRight: '40px'
}
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputContainerStyle = {
  display: 'flex',
};

const inputStyle = {
  marginRight: '5px', 
  borderRadius: '10px',
  height: '35px'
};

const buttonStyle = {
  marginTop: '10px',
  height: '35px',
  width: '30%',
  borderRadius: '10px',
  backgroundColor: 'red'
}
const info ={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const icons = (
  <div style={Container}>
    <img src={htmlImage} alt="Icono de HTML" style={imgStyle}/>
    <img src={cssImage} alt="Icono de HTML" style={imgStyle}/>
    <img src={jsImage} alt="Icono de HTML" style={imgStyle}/>
    <img src={reactImage} alt="Icono de HTML" style={imgStyle}/>
  </div>
);
const formS = (
  <div style={containerStyle}>
  <div>
    <h1 style={info}>Suscribe</h1>
    <p>Sign up with your email address to receive news and updates.</p>
  </div>
  <div style={inputContainerStyle}>
    <input type="text" placeholder="First Name" style={inputStyle} />
    <input type="text" placeholder="Last Name" style={inputStyle} />
    <input type="email" placeholder="Email" style={inputStyle} />
  </div>
  <button style={buttonStyle}>Suscribe</button>
</div>
)
const app = (
  <div className='app'> 
    {icons}
    {formS}
  </div>
)
const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)