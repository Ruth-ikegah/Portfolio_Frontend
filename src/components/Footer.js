import React from 'react'
import styled from 'styled-components'
import {FiGithub,FiTwitter,FiMail} from 'react-icons/fi'
import { Smalltext } from '../styles/TextStyles'
import { RuthColor } from '../styles/ColorStyles'

const Footer = () => {
    return (
        <Footercover>
           <Container>
               <Footerlogo>
                   <Logo/>
               </Footerlogo>
               <Footerdate>
                <Footertext>&copy; {new Date().getFullYear()}</Footertext>
               </Footerdate>

               <FooterLinks>
                   <Footerlinkul>
                    <a href="http://" target="_blank" rel="noopener noreferrer">   <Footerlinkli>
                    <Twitter/>
                           
                           </Footerlinkli></a>
                           <a href="http://" target="_blank" rel="noopener noreferrer">   <Footerlinkli>
                    <Email/>
                           
                           </Footerlinkli></a>
                           <a href="http://" target="_blank" rel="noopener noreferrer">   <Footerlinkli>
                    <Github/>
                           
                           </Footerlinkli></a>

                   </Footerlinkul>
               </FooterLinks>
           </Container>
       </Footercover>
    )
}

const Footercover = styled.div`
width: 100%;
min-height: 130px;
display: flex;
justify-content: center;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 100%;
max-width: 1100px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-auto-rows: minmax(30px,auto);
grid-gap: 20px;
padding: 10px 20px;
justify-content: center;
align-items: center;
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    place-items: center;
}
`
const Footerlogo = styled.div`
height: 24px;
width: 100px;

`
const Logo = styled.img`
width: 100%;
height: 100%;
`
const Footerdate = styled.div`
width: 100%;
height: 100%;

`
const Footertext = styled(Smalltext)`
text-align: center;
width: 100%;
height: 100%;
`
const FooterLinks = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Footerlinkul = styled.ul`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
a{
    color: ${RuthColor.black};
    transition: 0.3s ease-in;
    :hover{
        color: ${RuthColor.primary};
    }
}
`
const Footerlinkli = styled.li`
width: 100%;
height: 100%;
margin: 0 20px;

` 
const Github = styled(FiGithub)`
height: 24px;
width: 24px;
`
const Twitter = styled(FiTwitter)`
height: 24px;
width: 24px;
`

const Email = styled(FiMail)`
height: 24px;
width: 24px;


`
export default Footer
