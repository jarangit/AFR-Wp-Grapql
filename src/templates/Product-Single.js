import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'


const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    display:flex;
    justify-content: space-around;
    
`
const Img = styled.img`
    max-width: 416;
    width: 100%;
`

const ProductSingleTemplate = (data) =>{
    const { name, galleryImages, regularPrice, description,slug, stockStatus } = data.pathContext
    
    const StatusStock = () => {
        const StatusPro = data.pathContext.stockStatus
        if(StatusPro === "IN_STOCK"){
            return "มีสินค้า"
        }else{
            return "สินค้าหมดแล้ว"
        }
    }


    return(
        <Layout>
            <LayoutWrapper>
            <div>
                {galleryImages.nodes.map(imgItem => {
                   return(
                       <Img src={imgItem.mediaItemUrl} />
                   ) 
                })}
            </div>
            <div>
                <h1> {name} </h1>
                <p dangerouslySetInnerHTML={{__html: description}} />
                <h3> {regularPrice} </h3>
                <p> {StatusStock()} </p>
            </div>
            </LayoutWrapper>
        </Layout>
    )
}
export default ProductSingleTemplate;