import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'


//Style
const Img = styled.img`
    width:100%;
 `
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
`

const BlockItem = styled.div`
    max-width: 350px;
    /* border: 1px solid; */
`
const BlockImgItem = styled.div`
    max-width: 350px;
    height: 170px;
    overflow: hidden;

    /* border: 1px solid; */
`

const GridBlock = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 15px;
    padding-top: 30px;

`

const LinkTitle = styled(Link)`
    text-decoration: none;
    margin: 10px;
    font-size: 1.2em;
    color: #333333;

`


const CatTemplate = (data) => {
    const {name, slug, posts} = data.pathContext
    return (
     <Layout>
         <LayoutWrapper>
         <h1>{name}</h1>
         <GridBlock>
             {posts.nodes.map(catItem => (
                 <BlockItem>
                        <BlockImgItem>
                            <Img src =  {catItem.featuredImage.mediaItemUrl} />
                        </BlockImgItem>
                        <LinkTitle key={catItem.id} to = {decodeURI(slug+'/'+catItem.slug)}> <h3 className="entry-title" dangerouslySetInnerHTML= {{__html: catItem.title}}/> </LinkTitle>
                        <p dangerouslySetInnerHTML= {{__html: catItem.excerpt}} />
                 </BlockItem>
             ))}
         </GridBlock>
         </LayoutWrapper>
     </Layout>
    )
}


export default CatTemplate;





