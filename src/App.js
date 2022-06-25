import React from "react"
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import Pricing from "./routes/Pricing";
import Training from "./routes/Training";
import Contacts from "./routes/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
