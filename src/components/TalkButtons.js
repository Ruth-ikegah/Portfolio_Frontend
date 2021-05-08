import React from 'react'
import styled from 'styled-components'
import { linkButton } from '../styles/Buttons'
import { RuthColor } from '../styles/ColorStyles'

const TalkButtons = () => {
    return (
        <Talkbutton>

                    <Letstalk to='/contact'>Let’s Talk</Letstalk>
                    <Skillresume>    <a href="http://">View My Resume</a></Skillresume>


                </Talkbutton>
    )
}

const Talkbutton = styled.div`
min-height: 50px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
max-width: 350px;
margin: 24px 0;
`
const Letstalk = styled(linkButton)`
margin:  0 24px 0 0;
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

export default TalkButtons
