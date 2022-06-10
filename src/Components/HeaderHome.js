import React from 'react'
import { COLORS, FONTS, SIZES } from './Theme'
import {Link} from 'react-router-dom' 
import { useDispatch } from 'react-redux'
import { Logout } from '../Store/actions'
export default function Header({
    active
}) {
    const dispatch = useDispatch()
  return (
    <div
    style={{
        flex:1,
        display:"inline-flex",
        width:"100%",
        height:80,
        backgroundColor:COLORS.Primary
    }}
    >
        <div style={{
            display:"inline-flex",
            paddingLeft:30
        }}>
        <p style={{
            ...FONTS.h1
        }}> Fridge </p>
        <p style={{
            ...FONTS.h2
        }}>Friend </p>

        </div>
        <div style={{
        flex:1,
        display:"inline-flex",
        justifyContent:"center",
    }}>
        <Link to={"/home"} style={{
            color:COLORS.black,
            textDecorationLine:"none"
        }}><p style={active==="Home"?{
            padding:18,
            ...FONTS.h3,
            color:COLORS.black,
            borderRadius:12,
            justifyContent:"center"
        }:{
            padding:18,
            ...FONTS.body3
        }}>
            Home
        </p></Link>
        <Link to={"/"} style={{
            color:COLORS.black,
            textDecorationLine:"none"
        }}><p onClick={()=>{
            dispatch(Logout());
        }} style={{
            padding:18,
            ...FONTS.h3,
            color:COLORS.red
        }}>
            Logout
        </p></Link>
        </div>
    </div>
  )
}
