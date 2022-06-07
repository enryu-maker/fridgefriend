import React from 'react'
import Header from '../../Components/Header'
import Main from '../../assets/main.png'
import { COLORS, FONTS, SIZES } from '../../Components/Theme'

export default function Login() {
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
        }} type={"email"} placeholder={"Enter your email"}/><br></br>
        <input style={{
            borderWidth:0,
            borderBottomWidth:1,
            height:30,
            width:230,
            margin:15,
            outline: "none",
        }} type={"password"} placeholder={"Enter your Password"}/><br></br>
        <input type={"button"} value={"Login"} onClick={()=>{
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
