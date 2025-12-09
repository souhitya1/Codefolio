import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from "react-router-dom";
import Compiler from './compiler/compiler.jsx'
import Home from './home/home.jsx'
import Dashboard from './dashboard/dashboard.jsx'
import Htmlqna from './dashboard/htmlqna.jsx'
import Cssqna from './dashboard/cssqna.jsx'
import Jsqna from './dashboard/jsqna.jsx'
import Htmlcssjsqna from './dashboard/htmlcssjsqna.jsx'
import Question from './dashboard/question.jsx'
import Roadmapmain from './roadmap/roadmapmain.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/compile' element={<Compiler/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/htmlqna' element={<Htmlqna/>}/>
    <Route path='/cssqna' element={<Cssqna/>}/>
    <Route path='/jsqna' element={<Jsqna/>}/>
    <Route path='/htmlcssjs' element={<Htmlcssjsqna/>}/>
    <Route path='/question' element= {<Question/>}/>
    <Route path='/roadmap' element= {<Roadmapmain/>}/>
  </Routes>
  </BrowserRouter>
)
