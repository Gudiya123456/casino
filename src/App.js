import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './Blogs';
import Events from './Events';
import Blogdetails from './Blogdetails';
import Footer from './Footer';


export default function App() {


  const [settings, setsettings] = useState()

  const [ads, setads] = useState([])

  const settingdata = async () => {
    try {
      const response = await axios.get('http://casinosonlinein.com/1xbet/console/api/settings')
      // console.log(response.data.status)
      if (response.data.status == 'success') {
        setsettings(response.data.settings)
      }
    }
    catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    settingdata()
  }, [])

  if (settings) {
    console.log('addddd', settings)
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter basename="/">
        <Header settings={settings} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:blogid" element={<Blogdetails />} />
          <Route path="events" element={<Events />} />
        </Routes>
        
        <Footer />
        
      </BrowserRouter>

    </div>
  )
}