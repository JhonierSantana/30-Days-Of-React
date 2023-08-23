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

const Header = (props) => {
  return (
    <div style={containerStyle}>
      <div style={info}>
        <h1>{props.img.main}</h1>
      </div>
      <div style={Container}>
        <img src={props.img.htmlPng} alt={props.img.alt} style={imgStyle}></img>
        <img src={props.img.cssPng} alt={props.img.alt} style={imgStyle}></img>
        <img src={props.img.jsWebp} alt={props.img.alt} style={imgStyle}></img>
        <img src={props.img.reactPng} alt={props.img.alt} style={imgStyle}></img>
      </div>
    </div>
  )
}

const Form = (props) => {
  return (
    <div style={containerStyle}>
      <div>
        <h1 style={info}>{props.text.title}</h1>
        <p>{props.text.info}</p>
      </div>
      <div style={inputContainerStyle}>
      <input type='text' placeholder={props.form.firstName} style={inputStyle}/>
      <input type='text' placeholder={props.form.lastName} style={inputStyle}/>
      <input type='email' placeholder={props.form.email} style={inputStyle}/>
      </div>
      <button style={buttonStyle}>{props.formButton.button}</button>
    </div>
  )
}

const App = () => {
  const img = {
    main: 'Front End techonologies',
    htmlPng: htmlImage,
    cssPng: cssImage,
    jsWebp: jsImage,
    reactPng: reactImage,
  }
  const text = {
    title: 'SUSCRIBE',
    info: 'Sign up with your email address to receive news and updates.',

  }
  const formData = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email'
  }
  const formButton = {
    button: 'Suscribe'
  }
  return (
    <div className='app'>
      <Header img={img} />
      <Form text={text}  form={formData} formButton={formButton}/>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)