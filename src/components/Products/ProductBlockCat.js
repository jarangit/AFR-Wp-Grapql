import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import gql from 'graphql-tag'
import { useQuery } from "@apollo/react-hooks";

const QUERY_PRODUCTCAT = gql`
  query MyQuery ($slug: [String]) {
  wordPress {
    productCategories(where: {slug: $slug}) {
      nodes {
        name
      }
    }
  }
}

`
const BlockCat = (props) => {
  // console.log(props.parentSlug)
  const parentSlug = decodeURI(props.parentSlug)
  console.log(parentSlug)
  const {data} = useQuery(QUERY_PRODUCTCAT, {variables:{slug: parentSlug}});
  console.log(data)


  return(
    <div>
      this block
     {/* {data.wordPress.productCategories.nodes.map(edge=> {
       return(
         <div> {edge.name} </div>
       )
     })} */}
   </div>
 )
}

export default BlockCat;
