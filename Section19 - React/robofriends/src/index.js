import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card'; it's not being used anymore
//import CardList from './CardList'; it's now in App.js file
import App from './App' //would be the father of all components
import reportWebVitals from './reportWebVitals';
import 'tachyons';


ReactDOM.render(
  <React.StrictMode>
    {/* <div>
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
        <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
    </div> */}
    {/* Instead of that we can make a CardList.js and render the Card app and return a list */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
