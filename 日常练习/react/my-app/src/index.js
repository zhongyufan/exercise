import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tick from './tick'
import Switch from './switch'
import Form from './form'
import Calculator from "./状态提升/calculator";
import Box from './组合';
import Example from './hook';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Tick /> */}
    {/* <Switch /> */}
    {/* <Form /> */}
    {/* <Calculator /> */}
    {/* <React.Fragment>
      <Switch />
      <Switch />
    </React.Fragment> */}
    {/* <Box>
      <h2>有我啊</h2>
    </Box> */}
    <Example />
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();