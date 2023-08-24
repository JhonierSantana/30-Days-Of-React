import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const styleC = {
    display: 'inline-block',
    width: '110px',
    height: '110px',
    textAlign: 'center',
    lineHeight: '100px',
    margin:' 1px',
    fontSize: '30px',
    fontWeight: 'bold',
  }

const Header = (
    <div>
      <h1 className='text'>30 days Of React</h1>
      <p className='text'>Number Generator</p>
    </div>
  );

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
};

const NumberList = () => {
    const numbers = [];

    for(let i = 0; i <= 31; i++) {
        const classes = ['number']

        if(i % 2 === 0){
            classes.push('even');
            
        } else {
            classes.push('odd');
           
        }

        if (isPrime(i)) {
            classes.push('prime');
           
        }
        numbers.push(
            <div key={i} className={classes.join(' ')}>
                {i}
            </div>
        )
    }
    return <div 
    className='number-container' style={{ marginBottom: '50px' }}>{numbers}<h1 className='text' style={{marginTop: '30px'}}>Exercise HexaColor</h1></div>;

};

const getRandomHexColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

const HexaColorList = () => {
    const colorBoxes = [];
  
    for (let i = 0; i <= 32; i++) {
    const color = getRandomHexColor();
    const colorBoxStyle = {
        ...styleC,
        backgroundColor: color,
        fontSize: '20px', // Agrega el tamaño de fuente aquí
      };
      colorBoxes.push(
        <div key={i} style={colorBoxStyle}>
          {color}
        </div>
      );
    }
  
    return <div className='color-container'>{colorBoxes}</div>;
  };
  

const App = ( 
    <div className='app'>
        {Header}
        <NumberList />
        <HexaColorList />
    </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(App, rootElement); 
