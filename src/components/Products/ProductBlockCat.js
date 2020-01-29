import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const BlockCat = () => {
    const test = "กระเช้าดอกไม้"
    return(
        <StaticQuery query={graphql`
            query MyQuery {
  wordPress {
    productCategories(where: {name: "กระเช้าดอกไม้"}) {
      nodes {
        children {
          nodes {
            name
            parent {
              name
            }
          }
        }
      }
    }
  }
}
        `} render = {props => {
            return(
                <div>
                    { props.wordPress.productCategories.nodes.map(edge=>{
                       return(
                           <di>
                               { edge.children.nodes.map(chil=>{
                            return(
                                <div> {chil.name} </div>
                                )
                                })}
                           </di>
                       )
                    })}
                </div>
            )
        }} />
    )
}

export default BlockCat;
