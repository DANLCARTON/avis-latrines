import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import Form from "./components/Form.jsx"
import Footer from './components/Footer.jsx';
import reportWebVitals from './reportWebVitals'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode >
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/submit/:placeid" element={<Form />} />
        </Routes>
      </div>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();