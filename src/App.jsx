import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './Course'
import html from "./assets/html.jpeg"
import css from "./assets/css.jpeg"
import js from "./assets/js.jpeg"
import Courselist from './Courselist'
import { Toaster } from "react-hot-toast";

function App() {
  
  return (
    <div className='card-main'>
      <Toaster position="top-right" />
    <Courselist/>
    </div>
  )
}

export default App
