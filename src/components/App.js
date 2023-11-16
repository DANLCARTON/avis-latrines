import '../styles/App.css';
import {db} from "../firebase/config.js"
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ReviewsPreviews from './ReviewsPreviews.js';
import Form from './Form.js';

import scrollDown from "../assets/scroll-down.gif"
import logo from "../assets/logo.png"

function App() {

  const [reviews, setReviews] = useState([])
  const reviewsCollectionRef = collection(db, "reviews")

  useEffect(() => {
    const getReviews = async () => {
      // read data from database
      const data = await getDocs(reviewsCollectionRef)
      const filteredData = data.docs.map(doc => (
        {
          ...doc.data(), 
          id: doc.id
        }
      ))
      setReviews(filteredData)
    }
    getReviews()
  }, [])

  return <Router>
    <div className="App">
      <Routes>

        <Route path="/" element={
          <div>
            <div className='title'>
              <img src={logo} alt="AVIS LATRINES" className="logo" />
              <img src={scrollDown} alt="Scroll Down" className="scroll-down"/>  
            </div>
            <ReviewsPreviews reviews={reviews} />
          </div>
        } />

        <Route path="/submit/:placeid" element={<Form />} />

      </Routes>
    </div>
  </Router>
}

export default App;
