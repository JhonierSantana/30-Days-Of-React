import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

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
    return <div className='number-container'>{numbers}</div>
};

const App = ( 
    <div className='app'>
        {Header}
        <NumberList />
    </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(App, rootElement); 
