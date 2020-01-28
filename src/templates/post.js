import React, {Component} from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'

const Img = styled.img`
   background-size: cover;
    background-position: center;
    width:100%;
 `
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    
`


const PostTemplate = (data) => {
    return (
     <div>
        <Layout>
        {/* <div> {show()} </div> */}
    {/* <Img src ={data.pathContext.featuredImage.mediaItemUrl} /> */}
        <LayoutWrapper>
        <div>this postTem</div>
        <div dangerouslySetInnerHTML= {{__html: data.pathContext.title}} />
        <div dangerouslySetInnerHTML={{__html: data.pathContext.content}}/>
    </LayoutWrapper>
    </Layout>
     </div>
    )
}


export default PostTemplate;





