import '../styles/App.css';
import {db} from "../firebase/config.js"
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

import ReviewsPreviews from './ReviewsPreviews.jsx';
import Search from "./Search.jsx"

import scrollDown from "../assets/scroll-down.gif"
import logo from "../assets/logo.png"

function App() {

  const [reviews, setReviews] = useState([])
  const reviewsCollectionRef = collection(db, "reviews")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("date")

  useEffect(() => {
    const getReviews = async () => {
      // read data from database
      const data = await getDocs(reviewsCollectionRef)
      let filteredData = data.docs.map(doc => (
        {
          ...doc.data(), 
          id: doc.id
        }
      ))

      
      console.log(search)
      filteredData = filteredData.filter((data) => (data.name.toLowerCase().includes(search.toLowerCase()) || data.title.toLowerCase().includes(search.toLowerCase()) || data.place.toLowerCase().includes(search.toLowerCase())))

      if (sort === "date") filteredData.sort((a, b) => b.date - a.date)
      else if (sort === "Adate") filteredData.sort((a, b) => a.date - b.date)
      else if (sort === "title") filteredData.sort((a, b) => a.title.localeCompare(b.title))
      else if (sort === "Atitle") filteredData.sort((a, b) => b.title.localeCompare(a.title))
      else if (sort === "author") filteredData.sort((a, b) => a.name.localeCompare(b.name))
      else if (sort === "Aauthor") filteredData.sort((a, b) => b.name.localeCompare(a.name))
      else if (sort === "place") filteredData.sort((a, b) => a.place.localeCompare(b.place))
      else if (sort === "Aplace") filteredData.sort((a, b) => b.place.localeCompare(a.place))
      else if (sort === "rate") filteredData.sort((a, b) => b.rate - a.rate)
      else if (sort === "Arate") filteredData.sort((a, b) => a.rate - b.rate)

      setReviews(filteredData)
    }
    getReviews()
  }, [sort, search])

  return <div>
    <div className='title'>
      <img src={logo} alt="AVIS LATRINES" className="logo" />
      <img src={scrollDown} alt="Scroll Down" className="scroll-down"/>  
    </div>
    <Search setSearch={setSearch} setSort={setSort} />
    <ReviewsPreviews reviews={reviews} />
  </div>
}

export default App;
