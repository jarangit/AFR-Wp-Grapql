import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import MenuItem from '../components/Layout/Menus/Mainmenus'

const Img = styled.img`
    margin: 0 0 60px 0;
    background-size: cover;
    background-position: center;
    width:100%;
 `
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    
`



const PageTemplate = (data) => {
  
    const urlTmg = data.pathContext.featuredImage
    const Show = () => {
        if(urlTmg === null){
           return (
               <MenuItem a/>
           )
        }else{
            return(
                <div id="bg-img"><Img src ={data.pathContext.featuredImage.mediaItemUrl} /></div>
                
            )
        }
    } 
   return(
    
    <Layout>
        <div> {Show()} </div>
        <LayoutWrapper>
        <div> {data.pathContext.title} </div>
        <div dangerouslySetInnerHTML={{__html: data.pathContext.content}}/>
    </LayoutWrapper>
    </Layout>
   )
}

export default PageTemplate;




