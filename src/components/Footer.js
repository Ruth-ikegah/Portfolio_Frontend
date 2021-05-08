import React from 'react'
import styled from 'styled-components'
import { Smalltext } from '../styles/TextStyles'
import FooterSocial from './FooterSocial'


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
<FooterSocial/>
              
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

export default Footer
