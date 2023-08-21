import React from 'react';
import ReactDOM from 'react-dom';

const styleC = {
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign:'center',
  margin: '5px 20px',
  borderRadius: '10px'
}

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

const app = (
  <div className='app'>
      {cajasC}
  </div>
)
const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement)