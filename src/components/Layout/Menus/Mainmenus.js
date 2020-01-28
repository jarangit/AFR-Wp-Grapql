import React, {Component} from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../../lib/img/Logo-Head.png'

//Style
const HeaderLogo = styled.img`
    width: 120px; 
    height: 120px;
`
const MenusItem = styled.div`
   ${props => (
     props.a ? 
     'max-width:1064px; margin: 0 auto; display: flex; width: 100%;  height: auto; justify-content: space-between; align-items: center; position:initial;' : 
     'max-width:1064px; margin: 0 auto 0 -532px; display: flex; width: 100%;  height: auto; justify-content: space-between; align-items: center; position:absolute;left: 50%;')};
`
const LinkDw = styled.li`
  list-style-type: none;
  text-align: left;
  background: white;
  width: 200px;


`
const LiDrop = styled.li`
    text-decoration:none;
    display: none;
    position: absolute;
    z-index: 1;
`
const Li = styled.li`
    display:inline-block;
    position: relative;
    list-style-type: none;

     &:hover ${LiDrop} {
      display: block;
    }

  
`
const MenuLink = styled(Link)`
  color: #273842;
  text-decoration: none;
  margin: 10px;
  font-size: 16px;
`

 
class MainMenu extends Component {
  render(){

    function checkURLToChengeStyle() {
      const nowURL = window.location.href
      if(nowURL === 'http://localhost:8000/%E0%B8%AB%E0%B8%A1%E0%B8%A7%E0%B8%94/%E0%B8%9A%E0%B8%97%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1/'){
        return(
          <MenusItem a />
          )
      } else {
        return false;
      }
    }   

  return(
    <StaticQuery  query={ graphql`
    {
  wordPress {
    menu(id: "TWVudToyMQ==") {
      name
      menuItems {
        edges {
          node {
            label
            url
            id
            childItems {
              edges {
                node {
                  url
                  label
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
` } render = { porps => {
  return(
    <MenusItem a>
    <div>
        <Link to="/">
            <HeaderLogo src={Logo} alt="#"/>
        </Link>    
            
    </div>
    <div>
      <div> {this.props.test} </div>
        <ul>
            { porps.wordPress.menu.menuItems.edges.map(item => {
              const wpUrl = `http://localhost/WebDev/afr/afr-gatsby/afr/`
              const onlyPath = decodeURI( item.node.url.replace(wpUrl,``))
               return(
                 <Li>
                <MenuLink key= {item.id} to = {`/${onlyPath}/`}> {item.node.label} </MenuLink>
                   <LiDrop>
                     
                    <ul>
                        {item.node.childItems.edges && item.node.childItems.edges.map(subItem => {
                           const onlyPathSub = decodeURI( subItem.node.url.replace(wpUrl,``))
                          
                          return(
                            <LinkDw> <MenuLink key={ subItem.node.id } to = {`/${onlyPathSub}/`}> {subItem.node.label} </MenuLink> </LinkDw>
                          )
                        })}
                    </ul>
                   </LiDrop>
                </Li>
               )
              })} 
        </ul>
    </div>
</MenusItem>
  )
}} />
)
  }
}

export default MainMenu;