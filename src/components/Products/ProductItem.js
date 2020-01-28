import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

class ProductItem extends Component {
    render(){
        //Style
        const Img = styled.img`
            max-width: 325px;
            width: 100%;
        `
        //Fucntion
        const { name, slug, id, regularPrice, image, productCategories } = this.props.products
        const url = productCategories.nodes.map(catProduct=>{
            return(
                decodeURI(catProduct.slug + '/' + slug)
            )
        })
        
        //Display
        return(
            <div>
                <Link key={id} to = {url}>
                    <Img src={image.mediaItemUrl} alt={image.altText}/>
                    <div> {name} </div>
                    <div> {regularPrice} </div>
                </Link>
            </div>
        )
    }
}


export default ProductItem