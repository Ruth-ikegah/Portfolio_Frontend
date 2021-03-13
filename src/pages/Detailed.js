import React from 'react'
import styled from 'styled-components'
import { LargeMediumtext, MediumText } from '../styles/TextStyles'

const Detailed = () => {
    return (
  <Body>

      <Container>
          <Hero>
              <Heroimg/>
              <Herooverlay/>
              <Heroheader>
                  <Heroh1>My Latest projects </Heroh1>
                  <Herotext>Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and "No halfway house in the quality of food you serve" is his main motto,says our head-ched Sanjay </Herotext>
              </Heroheader>
          </Hero>

          <Project>
              <Projectcover>
<Projecttitle>My Latest projects </Projecttitle>
<Projecttext>Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,t</Projecttext>

              </Projectcover>
              <Projectcover>
<Projecttitle>My Latest projects </Projecttitle>
<Projecttext>Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,t</Projecttext>

              </Projectcover>
          </Project>

          <Projectphotos>
<Photosheader>
    <Photoh1>Photos</Photoh1>
</Photosheader>
<Photoscover>


    <Photoimg src="https://images.unsplash.com/photo-1615578036503-58af7d0470d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Ruth Ikegah"/>
    <Photoimg src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" alt="Ruth Ikegah"/>
    
    <Photoimg src="https://images.unsplash.com/photo-1615578036503-58af7d0470d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Ruth Ikegah"/>
    <Photoimg src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" alt="Ruth Ikegah"/>
    
    <Photoimg src="https://images.unsplash.com/photo-1615578036503-58af7d0470d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Ruth Ikegah"/>
    <Photoimg src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" alt="Ruth Ikegah"/>
</Photoscover>

          </Projectphotos>
      </Container>
  </Body>
    )
}


const Body = styled.div`
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
width: 100%;
height: 550px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`
const Heroimg = styled.img`
position: absolute;
height: 100%;
width: 100%;
`
const Herooverlay = styled.div`

background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`
const Heroheader = styled.div``
const Heroh1 = styled.div``
const Herotext = styled.div``
const Project = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
max-width: 1000px;
margin: 40px auto;
`
const Projectcover = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
margin: 24px 0;
`
const Projecttitle = styled(LargeMediumtext)`
margin: 0;
`
const Projecttext = styled(MediumText)`
margin: 16px 0;
`
const Projectphotos = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`
const Photosheader = styled.div`
min-height: 30px;
max-width: 170px;
width: 100%;
display: flex;
flex-direction: column;
margin: 24px auto;
`
const Photoh1 = styled(LargeMediumtext)``
const Photoscover = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 22px;
grid-auto-rows: minmax(250px,auto);

@media only screen and (max-width: 780px){
    grid-template-columns: repeat(2,1fr);
}

@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
}
`
const Photoimg = styled.img`
max-width: 380px;
width: 100%;
height: 314px;
`
export default Detailed
