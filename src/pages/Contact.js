import React, {useState} from 'react'
import styled from 'styled-components'
import { RuthColor } from '../styles/ColorStyles'
import { Largetext, Smalltext } from '../styles/TextStyles'
import bg from '../images/bg.jpg'
import { mainButton } from '../styles/Buttons'
import {FiGithub,FiTwitter,FiMail} from 'react-icons/fi'
import Loader from '../components/Loader'
const Contact = () => {

    const initial={

        name:"",
        email:"",
        subject: "",
        message: ""
    }
    const [form, setForm ]=useState(initial)
    const [loading, setLoading ]=useState(false)
const {
    name,
    email,
    subject,
    message
}=form


const onChange = e =>{
    const {name, value}=e.target;
    setForm({...form, [name]:value })
}

const onSubmit = e =>{
    e.preventDefault()
    setLoading(true)
}
    return (
       <Contactbody>
           <Container>
               <Hero>
                   <Heroimg src={bg} alt="Ruth Ikegah Portfolio Image"/>
                   <Overlay/>
                   <Herotext>Contact Me</Herotext>
               </Hero>

               <Formwrap>
                   <Formtext>
<Textheader>
<Texth1>Get in touch with Me</Texth1>
</Textheader>
<Formcontact>

        <Formwrapcover>
            <Mailicon/>
            <Formcovertext><a href="mailto:">bhi@example.com</a></Formcovertext>
        </Formwrapcover>
        <Formwrapcover>
            <TwitterIcon/>
            <Formcovertext><a href="mailto:">bhi@example.com</a></Formcovertext>
        </Formwrapcover>
        <Formwrapcover>
            <GithubIcon/>
            <Formcovertext><a href="mailto:">bhi@example.com</a></Formcovertext>
        </Formwrapcover>

</Formcontact>
                   </Formtext>
                   <Formcover>
                       <Form onSubmit={onSubmit}>
                       <Formrow>
                           <Formlabel>
                               <Formtitle>Name</Formtitle>
                               <Forminput name="name" value={name} onChange={onChange} placeholder="John Doe" type="text" required/>
                           </Formlabel>
                       </Formrow>
                       <Formrow>
                           <Formlabel>
                               <Formtitle>Email</Formtitle>
                               <Forminput name="email" value={email} onChange={onChange}  placeholder="Example@gmail.com" type="email" required/>
                           </Formlabel>
                       </Formrow>
                       <Formrow>
                           <Formlabel>
                               <Formtitle>Subject</Formtitle>
                               <Forminput name="subject" value={subject} onChange={onChange}  placeholder="We would like to talk" type="text" required/>
                           </Formlabel>
                       </Formrow>
                       <Formrow>
                           <Formlabel>
                               <Formtitle>Message</Formtitle>
                               <Formtextarea name="message" value={message} onChange={onChange} required />
                           </Formlabel>
                       </Formrow>

<Formrow>
<Submittbtn>{loading? <Loader/>: "Send"}</Submittbtn>

</Formrow>                       </Form>
                   </Formcover>
               </Formwrap>
           </Container>
       </Contactbody>
    )
}


const Contactbody = styled.div`
width: 100%;
min-height: 600px;

`
const Container = styled.div`
width: 100%;
height: 100%;
max-width: 1100px;
margin: 0 auto;
`
const Hero = styled.div`
height: 550px;
max-width: 1000px;
position: relative;
display: flex;
margin: 0 auto;
justify-content: center;
align-items: center;
@media only screen and (max-width: 650px){
    height: 450px;
}
`
const Heroimg = styled.img`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
object-fit: cover;
z-index: 2;
`
const Herotext = styled(Largetext)`
color: ${RuthColor.white};
position: relative;
z-index: 3;
`
const Overlay = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
object-fit: cover;
z-index: 3;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 106.27%);
`
const Formwrap = styled.div`
width: 100%;
min-height: 600px;
max-width: 1000px;
margin: 40px auto;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-auto-rows: minmax(30px,auto);
grid-gap: 20px;
padding: 10px 20px;

justify-content: center;
align-items: center;
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);

}
`
const Formtext = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;

@media only screen and (max-width:650px){
    align-items: center;
}
`

const Textheader = styled.div`
min-height: 30px;
max-width: 353px;
width: 100%;
margin:20px 0;
justify-content: center;
align-items: flex-start;
flex-direction: column;
@media only screen and (max-width:650px){
    align-items: center;
    margin:20px auto;
    text-align: center;
}
`

const Texth1 = styled(Largetext)`
color: ${RuthColor.black};
`
const Formcontact = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
@media only screen and (max-width:650px){
    align-items: center;
}
`


const Formwrapcover = styled.div`
max-width: 260px;
height: 55px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 16px 0;
transition: 0.3s ease-in;
background: #FFFFFF;
box-shadow: 0px 3px 25px rgba(67, 67, 67, 0.05);
border-radius: 10px;
transition: 0.3s ease-in;
:hover a{
    color: ${RuthColor.primary};
    }
a{
    color: ${RuthColor.black};
    transition: 0.3s ease-in;
    :hover{
        color: ${RuthColor.primary};
    }


}

@media only screen and (max-width:650px){
    margin: 16px auto;
}
`
const Mailicon = styled(FiMail)`
flex: 0 0 20%;
width: 24px;
height: 24px;
transition: 0.3s ease-in;
${Formwrapcover}:hover & {
    color: ${RuthColor.primary};
}
`
const TwitterIcon = styled(FiTwitter)`
flex: 0 0 20%;
width: 24px;
height: 24px;
transition: 0.3s ease-in;
${Formwrapcover}:hover & {
    color: ${RuthColor.primary};
}
`
const GithubIcon = styled(FiGithub)`
flex: 0 0 20%;
width: 24px;
height: 24px;
transition: 0.3s ease-in;
${Formwrapcover}:hover & {
    color: ${RuthColor.primary};
}
`
const Formcovertext = styled(Smalltext)`
flex: 1;
`

const Formcover = styled.div`
width: 100%;
height: 100%;
`
const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 10px 15px;
`

const Formrow = styled.div`
width: 100%;
min-height: 60px;
margin: 16px 0;
`
const Formlabel = styled.label`
width: 100%;
height: 100%;
`
const Formtitle = styled(Smalltext)`
color: ${RuthColor.black};
margin: 16px 0;

`
const Forminput = styled.input`
max-width: 500px;
width: 100%;
height: 56px;
border: 1px solid ${RuthColor.black};
border-radius: 10px;
outline: none;
padding: 10px 30px;

::placeholder{

font-weight: 600;
font-size: 14px;
line-height: 1.1;
color: #CACACA;
}

`

const Formtextarea = styled.textarea`
max-width: 500px;
width: 100%;
height: 300px;
border: 1px solid ${RuthColor.black};
border-radius: 10px;
outline: none;
padding: 10px 30px;
resize: none;
::placeholder{

font-weight: 600;
font-size: 14px;
line-height: 1.1;
color: #CACACA;
}
`

const Submittbtn = styled(mainButton)``


export default Contact
