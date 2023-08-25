import React from 'react';
import ReactDOM from 'react-dom';
import cssImage from './imgs/css.png';
import htmlImage from './imgs/html.png';
import jsImage from './imgs/js.webp';
import reactImage from './imgs/react.png';
import './style.css';

class Header extends React.Component {
  render() {
    const img = this.props.img;
    return (
      <div className='containerStyle'>
        <div className='info'>
          <h1>{img.main}</h1>
        </div>
        <div className='Container'>
          <img src={img.htmlPng} alt="HTML" className='imgStyle
          '/>
          <img src={img.cssPng} alt="CSS" className='imgStyle
          '/>
          <img src={img.jsWebp} alt="JavaScript" className='imgStyle
          '/>
          <img src={img.reactPng} alt="React" className='imgStyle
          '/>
        </div>
      </div>
    )
  }
}

class Form extends React.Component {
  render() {
    const text = this.props.text;
    const form = this.props.form;
    const formButton = this.props.formButton;
    return (
      <div className='containerStyle'>
        <div>
          <h1 className='info'>{text.title}</h1>
          <p>{text.info}</p>
        </div>
        <div className='inputContainerStyle'>
          <input type='text' placeholder={form.firstName} className='inputStyle' />
          <input type='text' placeholder={form.lastName} className='inputStyle' />
          <input type='email' placeholder={form.email} className='inputStyle' />
        </div>
        <button className='buttonStyle'>{formButton.button}</button>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    const img = {
      main: 'Front End technologies',
      htmlPng: htmlImage,
      cssPng: cssImage,
      jsWebp: jsImage,
      reactPng: reactImage,
    }
    const text = {
      title: 'SUBSCRIBE',
      info: 'Sign up with your email address to receive news and updates.',
    }
    const formData = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email'
    }
    const formButton = {
      button: 'Subscribe'
    }
    return (
      <div className='app'>
        <Header img={img} />
        <Form text={text} form={formData} formButton={formButton} />
      </div>
    )
  }
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
