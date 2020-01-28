
import React from "react"
import MainMenu from './Menus/Mainmenus'
import Footer from './Footer'
import styled, { createGlobalStyle } from 'styled-components'
import '../lib/elementor/css/all.css'
import '../lib/css/awesomplete.css'
import '../lib/css/child-style.css'
import '../lib/css/light.css'
import '../lib/css/pack.css'
import '../lib/css/simple-grid.css'
import '../lib/css/child-style.min.css'
import '../lib/css/jquery.datetimepicker.min.css'
import '../lib/css/swiper.css'
import '../lib/css/swiper.min.css'
import '../lib/css/bootstrap-datetimepicker.min.css'
import '../lib/css/bootstrap-datepicker3.min.css'


// const GlobalStyles = createGlobalStyle`
// /* @import url('https://fonts.googleapis.com/css?family=Prompt|Source+Code+Pro&display=swap');  
// body {
//     font-family: 'Prompt', sans-serif;
//     /* padding: 0 ;
//     margin: 0 ; */
//   } */
// `

const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    
`


const Layout = ({ children }) => {
  return (
    <div>
      {/* <GlobalStyles/> */}
      <div>
        <MainMenu/>
        {children}
      </div>
        <Footer/>   
    </div>
  )
} 

export default Layout
