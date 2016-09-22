import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Contents.js';

window.onload = function(){
  ReactDOM.render(<Main />, document.getElementById("contents"));
}
