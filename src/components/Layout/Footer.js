import React,{Component} from 'react';
import styled from 'styled-components';
import Logo from '../lib/img/Logo-Head.png'


const FooterCopy = styled.div`
    width: 100%;
    text-align: center;
    background-color: #57534d;
    color: #fff;
    clear: both;
    padding: 15px 30px;
    font-weight: 200;
    font-size: 14px;
`
const Link = styled.a`
    text-decoration: none;
    color: white;
`
const FooterCtn = styled.div`
    width: 100%;
    margin: 0 auto;
    background: #b8745d;
    color: white;
`
const FooterItem = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    max-width:1064px;
    height: auto;
    width: 100%;
    margin: 0 auto;
    padding: 30px 0 30px 0;

    
`
const FooterItemLeft = styled.div`
    display: flex;

`
const AppLogo = styled.img`
    width: 300;
    height: 300;
    width: 55%;
`

class Footer extends Component {

    render(){
        return(
            <FooterCtn>
                <FooterItem>
                        <FooterItemLeft>
                                <div>      
                                    <AppLogo src={Logo} alt="#"/>     
                                </div>
                                <div>
                                    <p>เวลลาเปิดทำการ</p>
                                    <ul>
                                        <li>วันจันทร์-ศุกร์ เวลา 07.00 - 21.00 น.</li>
                                        <li>วันเสาร์-อาทิตย์ เวลา 08.00 - 21.00 น.</li>
                                    </ul>
                                </div>
                        </FooterItemLeft>
                     <div>
                        <p>ช่องทางการติดต่อ</p>
                        <p></p>
                        <ul>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </FooterItem>
                <FooterCopy>
                    <div>
                        Copyright By <Link href ="#">App-Bit Studio - Digital Marketing Agency Privacy Polic</Link>
                    </div>
                </FooterCopy>
            </FooterCtn>
        )
    }
}

export default Footer;
