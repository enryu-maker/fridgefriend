import React from 'react'
import Header from '../../Components/Header'
import Main from '../../assets/main.png'
import { COLORS, FONTS, SIZES } from '../../Components/Theme'
import axios from 'axios'
export default function Signup() {
    const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [first, setFirst] = React.useState('');
  const [last, setLast] = React.useState('');
  const [loading, setLoading] = React.useState(false);

    function isEnableSignIn() {
        return email != '' && password != '' && username != '' && first!="" && last!="";
      }
      async function signup() {
          setLoading(true);
          await axios
            .post(
              'http://127.0.0.1:8000/api/register/',
              {
                username: username,
                password: password,
                email: email,
                first_name:first,
                last_name:last,
                password2:password
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              },
            )
            .then(response => {
              if (response.status === 201) {
                alert("usercreated")
                setLoading(false)
              } else {
                alert("error")

                setLoading(false);
              }
            })
            .catch(error => {
              if (error.response) {
                setLoading(false);    
              }
            });
      }
  return (
    <div><Header active={"Signup"}/>
    <div style={{
        display:"inline-flex",
        justifyContent:"space-evenly",
        alignSelf:"center",
    width:"100%",
    }}>
        <div style={{
            display:"flex",
            alignSelf:"center",
            flexDirection:"column"
        }}>
            <p style={{
                ...FONTS.h2,
                textAlign:"center",
                color:COLORS.black
            }}>Signup</p>
            <p style={{
                    ...FONTS.body3,
                textAlign:"center",
                color:COLORS.black

                }}>Create an Account To Continue!</p>
            
    <input style={{
        borderWidth:0,
        borderBottomWidth:1,
        height:30,
        width:230,
        margin:15,
        alignSelf:"center",
        outline: "none",
    }} type={"email"} value={email} onChange={(e)=>{
        setEmail(e.target.value)
    }} placeholder={"Enter your email"}/><br></br>
    <input style={{
        borderWidth:0,
        borderBottomWidth:1,
        height:30,
        width:230,
        margin:15,
        alignSelf:"center",
        outline: "none",
    }} type={"text"} value={username} onChange={(e)=>{
        setUsername(e.target.value)
    }} placeholder={"Enter your username"}/><br></br>
    <input style={{
        borderWidth:0,
        borderBottomWidth:1,
        height:30,
        width:230,
        margin:15,
        alignSelf:"center",
        outline: "none",
    }} type={"text"} value={first} onChange={(e)=>{
        setFirst(e.target.value)
    }} placeholder={"Enter your firstname"}/><br></br>
     <input style={{
        borderWidth:0,
        borderBottomWidth:1,
        height:30,
        width:230,
        margin:15,
        alignSelf:"center",
        outline: "none",
    }} type={"text"} value={last} onChange={(e)=>{
        setLast(e.target.value)
    }} placeholder={"Enter your lastname"}/><br></br>
    <input style={{
        borderWidth:0,
        borderBottomWidth:1,
        height:30,
        width:230,
        margin:15,
        alignSelf:"center",
        outline: "none",
    }} type={"password"}  value={password} onChange={(e)=>{
        setPassword(e.target.value)
    }}  placeholder={"Enter your Password"}/><br></br>
    <input style={{
        borderWidth:0,
        borderBottomWidth:1,
        height:30,
        width:230,
        margin:15,
        alignSelf:"center",
        outline: "none",
    }} type={"password"} placeholder={"Re-Enter your Password"}/><br></br>
    <input type={"button"} value={"Signup"} onClick={()=>{
            signup()
        }} style={{
            height:35,
            width:120,
            backgroundColor:COLORS.Primary2,
            borderRadius:SIZES.radius,
            alignSelf:"center",
            margin:15,
            borderWidth:0,
            boxShadow: `1px 3px 1px #9E9E9E`,
            
        }}/>
    
    </div>
    <img style={{
            height:550,
            width:550
        }} src={Main} alt={Main}/>
    </div></div>
  )
}
