import React, { Component } from 'react'
import ProductItem from './ProductItem'
import styled from 'styled-components'


class ProductList extends Component {
    render(){
        //Style
        const TestGrid = styled.div`
            max-width: 1064px;
            display: grid;
            grid-template-columns: auto auto auto;
            margin: 0 auto;
            grid-gap: 35px;
        `



        //Function
           const showProduct = () => {
        return (
            this.props.products.nodes.map(productsMap=>(
                <ProductItem products = {productsMap}/>
            ))
        )
    }

    
        //Display
        return(
                <TestGrid> {showProduct()} </TestGrid>
        )
    }
}

export default ProductList;