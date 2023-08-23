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

const getRandomHexColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color;
}
const cajasC = (
  <>
    <div style={{ ...styleC, backgroundColor: getRandomHexColor() }}>
      <p>{getRandomHexColor()}</p>
    </div>
    <div style={{ ...styleC, backgroundColor: getRandomHexColor() }}>
      <p>{getRandomHexColor()}</p>
    </div>
    <div style={{ ...styleC, backgroundColor: getRandomHexColor() }}>
      <p>{getRandomHexColor()}</p>
    </div>
    <div style={{ ...styleC, backgroundColor: getRandomHexColor() }}>
      <p>{getRandomHexColor()}</p>
    </div>
    <div style={{ ...styleC, backgroundColor: getRandomHexColor() }}>
      <p>{getRandomHexColor()}</p>
    </div>
  </>
);

const skills = [
  'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDb', 
  'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis', 
  'MYSQL', 'GraphSql', 'D3.JS', 'Gatsby', 'Docker', 'Heroku', 'Git'
];

const Creator = (props) => {
  return (
    <>
      <div>
        <img src={props.img.creator} style={roundedImg}></img>
        <h1 style={fontsize}>{props.text.name}</h1>
        <p style={{fontSize: '15px', marginLeft: '20px', marginTop: '20px'}}>{props.text.info}</p>
      </div>

      <h1 style={fontsize}>{props.title.skills}</h1>

      <div style={containerStyle}>
      {skills.map((skill, index) => (
          <div style={boxStyle} key={index}>
          <div style={contentStyle}>{skill}</div>
      </div>
    ))}
      </div>
    </>
  )
}
const App = () => {
  const img = {
    creator: imgCreator,
  };
  const text = {
    name: 'Asabeneh Yetayeh',
    info: 'Fullstack Developer, Educator',
  };
  const title = 'Skills';

  return (
    <div className='app'>
      {cajasC}
      <Creator img={img} text={text} title={title} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);