import React from 'react';
import ReactDOM from 'react-dom';
import imgCreator from './imgs/asabeneh.jpg';

const styleC = {
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign:'center',
  margin: '5px 20px',
  borderRadius: '10px'
}

const roundedImg = {
  width: '200px',
  borderRadius: '50%',
  marginLeft: '40px'
}
const fontsize = {
  fontSize: '25px',
  marginLeft: '20px',
  marginTop: '30px'
}

const boxStyle = {
  width: 'auto',
  height: '50px',
  backgroundColor: '#07569B', 
  margin: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  borderRadius: '10px',
};
const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap'
};

const contentStyle = {
  padding: '5px',
};

const cajasC = (
  <>
  <div style= {{...styleC, backgroundColor: '#518cef'}}>
    <p>#518cef</p>
  </div>
  <div style= {{...styleC, backgroundColor: '#3b10c4'}}>
    <p>#3b10c4</p>
  </div>
  <div style= {{...styleC, backgroundColor: '#9aede6'}}>
    <p>#9aede6</p>
  </div>
  <div style= {{...styleC, backgroundColor: '#8ee763'}}>
    <p>#8ee763</p>
  </div>
  <div style= {{...styleC, backgroundColor: '#a30dd0'}}>
    <p>#a30dd0</p>
  </div>
  </>
)
const skills = [
  'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDb', 
  'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis', 
  'MYSQL', 'GraphSql', 'D3.JS', 'Gatsby', 'Docker', 'Heroku', 'Git'
];

const creator = (
  <>
    <div >
      <img src={imgCreator} style={roundedImg}></img>
      <h1 style={fontsize}>ASABENEH YETAYEH</h1>
      <p style={{fontSize: '15px', marginLeft: '20px', marginTop: '20px'}}>Senior Developer Finland</p>
    </div>
    <h1 style={{...fontsize}}>SKILLS</h1>
    
    <div style={containerStyle}>
    {skills.map((skill, index) => (
      <div style={boxStyle} key={index}>
        <div style={contentStyle}>{skill}</div>
      </div>
    ))}
  </div>
  </>
)

const app = (
  <div className='app'>
      {cajasC}
      {creator}
  </div>
)
const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement)