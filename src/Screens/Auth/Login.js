import React from 'react'
import Header from '../../Components/Header'
import Main from '../../assets/main.png'
import { COLORS, FONTS, SIZES } from '../../Components/Theme'
import { useDispatch } from 'react-redux'
import { LoginAction } from '../../Store/actions'
import { Navigate } from 'react-router-dom'

export default function Login() {
    const[email,setEmail] = React.useState('')
    const[password,setPassword] = React.useState('')
    const dispatch = useDispatch()

    function login(){
        dispatch(LoginAction(email,password))
        return(
            <Navigate to='Home'/>
        )
    }
  return (
    <div>
        <Header active={"Login"}/>
        <div style={{
            display:"inline-flex",
            justifyContent:"space-evenly",
            alignSelf:"center",
        width:"100%",
        }}>
            <div style={{
                alignSelf:"center",
                alignItems:"center",
                
            }}>
                <p style={{
                    ...FONTS.h2,
                    padding:8,
                textAlign:"center"

                }}>Login</p>
                <p style={{
                    ...FONTS.body3,
                textAlign:"center"

                }}>Login To Continue!</p>
        <input style={{
            borderWidth:0,
            borderBottomWidth:1,
            height:30,
            width:230,
            margin:15,
            outline: "none",
        }} type={"email"} placeholder={"Enter your email"} onChange={(event)=>{
            setEmail(event.target.value)
        }}/><br></br>
        <input style={{
            borderWidth:0,
            borderBottomWidth:1,
            height:30,
            width:230,
            margin:15,
            outline: "none",
        }} type={"password"} placeholder={"Enter your Password"} onChange={(event)=>{
            setPassword(event.target.value)
        }}/><br></br>
        <input type={"button"} value={"Login"} onClick={()=>{
           login()
           alert("hi")
        }} style={{
            height:35,
            width:120,
            backgroundColor:COLORS.Primary2,
            borderWidth:0,
            borderRadius:SIZES.radius,
            alignSelf:"center",
            margin:15,
        }}/>
        </div>
        <img style={{
                height:550,
                width:550
            }} src={Main} alt={Main}/>
        </div>
        
    </div>
  )
}
