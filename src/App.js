import React from 'react'
import Navbar from "./components/Navbar"
import Heading from './components/Heading';
import Footer from './components/Footer';
import Slide from './components/Slide';
import Card from './components/Card';

export const App = () =>{
  
    return(
        <>
        <Heading/>
        <Navbar/>
        <Slide/>
        <Card/>
        {/* <Footer/> */}
        </>
    )
  
};
export default App;


