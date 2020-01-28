import React from 'react'
import Layout from '../components/Layout/layout'
import ProductList from '../components/Products/ProductList'
import styled from 'styled-components'

const ProducCatTemplate = (data) => {
    const {name, description, image, products} = data.pathContext
    return(
        <Layout>
            <div dangerouslySetInnerHTML={{__html: name}} />
            <div dangerouslySetInnerHTML={{__html: description}} />
            <div> <img src={image.mediaItemUrl} /> </div>
                {/* <TestGrid id="pc"> {showProduct()}</TestGrid> */}
            <div> <ProductList products = {products} /> </div>
        </Layout>
    )
}
export default ProducCatTemplate;