import React from 'react'
import Layout from '../components/Layout/layout'
import ProductList from '../components/Products/ProductList'
import ProductBlokCat from '../components/Products/ProductBlockCat'
import styled from 'styled-components'

const Title = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    left: 15%;

    position:absolute;
    padding: 300px 0 95px 0 ;
    font-weight: 600;
    ${props => (props.R ? `text-align:right; right: 15%;`: `text-align:left`)};

`
const LayoutWrapper = styled.div`
    ${props => (props.R? '': 'margin: 0 auto;')}; 
    width: 100%;
`
const BoderLeft = styled.div`
    padding: 15px;
    ${props => (props.R? 'border-right: solid 8px #273842;': 'border-left: solid 8px #273842;')};
`

const ProducCatChilTemplate = (data) => {
    // const {name, description, image, products, id} = data.pathContext
    // const checkSlugPage = () => {
    //     if(id === "cHJvZHVjdF9jYXQ6MTc=" || id === "cHJvZHVjdF9jYXQ6ODM="){
    //         return(
    //            <LayoutWrapper R>
    //                 <Title R>
    //                 <div>
                       
    //                 </div>
    //                     <div>
    //                     <h1 dangerouslySetInnerHTML={{__html: name}} />
    //                         <BoderLeft R>
    //                             <p dangerouslySetInnerHTML={{__html: description}} />
    //                         </BoderLeft>
    //                 </div>
    //             </Title>
    //            </LayoutWrapper>
    //         )
    //     } else {
    //         return(
    //            <LayoutWrapper>
    //                 <Title>
    //                 <div>
    //                     <h1 dangerouslySetInnerHTML={{__html: name}} />
    //                         <BoderLeft>
    //                             <p dangerouslySetInnerHTML={{__html: description}} />
    //                         </BoderLeft>
    //                     </div>
    //                 <div></div>
    //             </Title>
    //            </LayoutWrapper>
    //         )
    //     }
    // }


    return(
        <Layout>
           <div>this chill </div>
        </Layout>
    )
}
export default ProducCatChilTemplate;