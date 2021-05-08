import React from 'react'
import styled from 'styled-components'
import {FiGithub,FiTwitter,FiMail} from 'react-icons/fi'
import { RuthColor } from '../styles/ColorStyles'
const FooterSocial = () => {
    return (
      <>
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
      </>
    )
}

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
export default FooterSocial
