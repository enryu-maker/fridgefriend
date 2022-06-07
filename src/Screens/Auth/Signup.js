import React from 'react'
import Header from '../../Components/Header'
import Main from '../../assets/main.png'
import { COLORS, FONTS, SIZES } from '../../Components/Theme'

export default function Signup() {
  return (
    <div><Header active={"Signup"}/>
    <div style={{
        display:"inline-flex",
        justifyContent:"space-evenly",
        alignSelf:"center",
    width:"100%",
    }}>
        <div style={{
            alignSelf:"center",
            alignItems:"center"
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
    }} type={"email"} placeholder={"Enter your email"}/><br></br>
    <input style={{
        borderWidth:0,
        borderBottomWidth:1,
        height:30,
        width:230,
        margin:15,
        alignSelf:"center",
        outline: "none",
    }} type={"password"} placeholder={"Enter your Password"}/><br></br>
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
            alert("hi")
        }} style={{
            height:35,
            width:120,
            backgroundColor:COLORS.Primary2,
            borderRadius:SIZES.radius,
            alignSelf:"center",
            margin:15,
            borderWidth:0
        }}/>
    
    </div>
    <img style={{
            height:550,
            width:550
        }} src={Main} alt={Main}/>
    </div></div>
  )
}
