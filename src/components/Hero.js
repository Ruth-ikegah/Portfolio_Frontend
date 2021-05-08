import React from 'react'
import styled from 'styled-components'
import { RuthColor } from '../styles/ColorStyles'
import { Largetext, MediumText } from '../styles/TextStyles'
import TalkButtons from './TalkButtons'

const Hero = () => {
    return (
     <Herobody>
         <Container>
<Herotext>
<Heroh1>
<span>Hello,</span> I am Ruth Ikegah
</Heroh1>
<Herop>A Developer Advocate and GitHub Star</Herop>
<TalkButtons/>
</Herotext>
<Heroimage>
    <Image/>
</Heroimage>
         </Container>
     </Herobody>
    )
}

const Herobody = styled.div`
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
display: grid;
grid-gap: 40px;
grid-template-columns: repeat(2,1fr);
background: ${RuthColor.light};
padding: 10px 80px;

@media only screen and (max-width: 800px){
    grid-template-columns: repeat(1,1fr);
}
@media only screen and (max-width: 650px){
    padding: 10px 20px;
}
`

const Herotext = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;

@media only screen and (max-width: 800px){
    align-items: center;
}
`
const Heroh1 = styled(Largetext)`
max-width: 400px;
width: 100%;
margin: 24px 0;

span{
    color: ${RuthColor.primary};
}

`

const Herop = styled(MediumText)`
margin: 0;
color: ${RuthColor.grey};
`
const Heroimage = styled.div`
width: 100%;
height: 100%;
max-width: 400px;
margin: 0 auto;
`
const Image = styled.img`
width: 100%;
height: 100%;
`
export default Hero
