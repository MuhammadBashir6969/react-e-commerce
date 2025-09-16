// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FilterProvider } from './Components/FilterContext.tsx'
import React from 'react'
// import ReactDom from "react-dom/client"

createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
  <FilterProvider>
    <App/>
  </FilterProvider>
 </React.StrictMode>
);
