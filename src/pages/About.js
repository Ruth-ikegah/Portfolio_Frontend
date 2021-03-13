import React from 'react'
import styled from 'styled-components'
import ruth from '../images/ruth.jpg'
import ruthImg from '../images/ruth.png'
import { linkButton } from '../styles/Buttons'
import { RuthColor } from '../styles/ColorStyles'
import {Largetext, MediumText,MediumHeadertext} from '../styles/TextStyles'
const About = () => {
    return (
       <Aboutbody>
<Container>
    
<Hero>

<Heroh1><span>Hello,</span> I am Ruth Ikegah</Heroh1>
<HeroImag alt="Ruth Ikegah" src={ruth}/>
<Herotext>Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and "No halfway house in the quality of food you serve" is his main motto,says our head-ched Sanjay </Herotext>
</Hero>

<Aboutdec>
<Desccover>
<Topleft>
    <Desctext>Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and "No halfway house in the quality of food you serve" is his main motto,says our head-ched Sanjay </Desctext>
</Topleft>
    <Topright><Image src={ruthImg} alt="Ruth Ikegah" /></Topright>
  
    <Bottomright><Image src={ruthImg} alt="Ruth Ikegah" /></Bottomright>
    <Bottomleft>
    <Desctext>Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and "No halfway house in the quality of food you serve" is his main motto,says our head-ched Sanjay </Desctext>
</Bottomleft>
</Desccover>
<Descbotton>

    <Descbutton to='/contact'>Let’s Talk</Descbutton>
</Descbotton>
</Aboutdec>
<Skills>
    <Skillsheader>
        <Headersmall>My Skill</Headersmall>
        <Headertext>Here are the things I do very well</Headertext>
    </Skillsheader>

    <Skillcover>
        <Skillbody>
            <Skillheader>Speaking</Skillheader>
            <Skilltext>Here are the things I do very well</Skilltext>
        </Skillbody>
        <Skillbody>
            <Skillheader>Speaking</Skillheader>
            <Skilltext>Here are the things I do very well</Skilltext>
        </Skillbody>
        <Skillbody>
            <Skillheader>Speaking</Skillheader>
            <Skilltext>Here are the things I do very well</Skilltext>
        </Skillbody>
        <Skillbody>
            <Skillheader>Speaking</Skillheader>
            <Skilltext>Here are the things I do very well</Skilltext>
        </Skillbody>
       
    </Skillcover>
    <Skillresume>
        <a href="http://">View My Resume</a>
    </Skillresume>
</Skills>

</Container>
       </Aboutbody>
    )
}

const Aboutbody = styled.div`
min-height: 600px;
width: 100%;
`
const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
max-width: 1100px;
margin: 0 auto;
padding: 10px 25px;
`
const Hero = styled.div`
min-height: 600px;
width: 100%;
display: flex;
flex-direction: column;
`
const Heroh1 = styled(Largetext)`
margin: 24px 0;
width: 100%;
max-width: 372px;
min-height: 44px;
color: ${RuthColor.black};
span{
    color: ${RuthColor.primary};

}
`
const HeroImag = styled.img`
margin: 0 ;
height: 660px;
width: 100%;

@media only screen and (max-width: 780px){
    height: 400px;
}

@media only screen and (max-width: 650px){
    height: 300px;
}
`
const Herotext = styled(MediumText)`
margin: 48px 0;
color: rgba(0, 0, 0, 0.67);
`
const Aboutdec = styled.div`
min-height: 500px;
width: 100%;
display: flex;
flex-direction: column;
`
const Desccover = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 40px;
grid-auto-rows: minmax(150px, auto);
grid-template-areas: "Topleft Topright"
"Bottomright BottomLeft";
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    grid-template-areas: "Topright"
    "Topleft"
    "Bottomright"
"BottomLeft";
}
`
const Topleft = styled.div`
grid-area: Topleft;
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100%;
`
const Topright = styled.div`
grid-area: Topright;
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
@media only screen and (max-width: 650px){
    justify-content: center;
align-items: center;
}

`
const Image = styled.img`
width: 300px;
height: 300px;
`
const Bottomright = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
grid-area: Bottomright;
@media only screen and (max-width: 650px){
    justify-content: center;
align-items: center;
}
`
const Bottomleft = styled.div`
grid-area: BottomLeft;
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100%;
`
const Desctext = styled(MediumText)`
color: rgba(0,0,0,0.67);
`
const Descbotton = styled.div`
width: 100%;
min-height: 60px;
display: flex;
justify-content: center;
align-items: center;
margin: 40px 0;
`

const Descbutton = styled(linkButton)``
const Skills = styled.div`
min-height: 300px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Skillsheader = styled.div`
margin: 40px auto;
min-height: 100px;
max-width: 614px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Headersmall = styled(MediumText)`
color: ${RuthColor.primary};
margin: 24px 0;
`
const Headertext = styled(Largetext)`
margin: 0;
text-align: center;
`
const Skillcover = styled.div`
min-height: 300px;
width: 100%;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-auto-rows: minmax(200px,auto);
grid-gap: 10px;
place-items: center;
@media only screen and (max-width: 780px){
    grid-template-columns: repeat(2,1fr);
}

@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
}
`
const Skillbody = styled.div`
width: 250px;
height: 250px;
background: ${RuthColor.white};
box-shadow: 0px 3px 25px rgba(67, 67, 67, 0.05);
border-radius: 10px;
padding: 10px 25px;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
@media only screen and (max-width: 780px){
    align-items: center;
    text-align: center;
}
`
const Skillheader = styled(MediumHeadertext)`
margin: 24px 0;
`
const Skilltext = styled(MediumText)`
margin: 0;
`

const Skillresume = styled.div`
width: 100%;
min-height: 60px;
display: flex;
justify-content: center;
align-items: center;
margin: 40px 0;
transition: 0.3s ease-in;
a{
font-size: 18px;
font-weight: 600;
line-height: 18px;
    color: ${RuthColor.primary};
    position: relative;
    ::after{
        position: absolute;
        width: 100%;
        height: 100%;
content: "";
bottom: -8px;
left: 0;
background: ${RuthColor.primary};
height: 4px;
    }

}
`
export default About
