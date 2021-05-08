import React from 'react'
import styled from 'styled-components'
import { RuthColor } from '../styles/ColorStyles'
import { LargeMediumtext,MediumText } from '../styles/TextStyles'
import FooterSocial from './FooterSocial'
import TalkButtons from './TalkButtons'

const Talk = () => {
    return (
        <Talkbody>

            <Container>
      
                <Talkh1>Get in touch</Talkh1>
                <Talktext>Sanjay is the head-chef here.</Talktext>
               <TalkButtons/>
                <Talksocial>
                <FooterSocial/>
                                </Talksocial>
            </Container>
        </Talkbody>
    )
}


const Talkbody = styled.div`
width: 100%;
min-height: 500px;
display: flex;
justify-content: center;
align-items: center;
margin: 24px 0;
`
const Container = styled.div`
min-height: 478px;
max-width: 1100px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: ${RuthColor.light};
padding: 10px 25px;

`
const Talkh1 = styled(LargeMediumtext)`
margin: 24px 0;
`
const Talktext = styled(MediumText)`
margin: 0;
color: ${RuthColor.grey};
`


const Talksocial = styled.div`
min-height: 50px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
max-width: 350px;
margin: 0;
`

export default Talk
