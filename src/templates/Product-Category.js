import React from 'react'
import Layout from '../components/Layout/layout'
import ProductList from '../components/Products/ProductList'
import styled from 'styled-components'

const Title = styled.div`
    position:absolute;
    padding: 300px 0 95px 0 ;
`
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    
`

const ProducCatTemplate = (data) => {
    const {name, description, image, products} = data.pathContext
    return(
        <Layout>
           <LayoutWrapper>
           <Title>
                <h1 dangerouslySetInnerHTML={{__html: name}} />
                <p dangerouslySetInnerHTML={{__html: description}} />
            </Title>
           </LayoutWrapper>
            <div> <img src={image.mediaItemUrl} /> </div>
                {/* <TestGrid id="pc"> {showProduct()}</TestGrid> */}
            <div> <ProductList products = {products} /> </div>
        </Layout>
    )
}
export default ProducCatTemplate;