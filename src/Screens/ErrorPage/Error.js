import React from 'react'
import { COLORS, FONTS } from '../../Components/Theme'
import error from '../../assets/error.png'
export default function Error() {
  return (
    <div>
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

        </div></div>
        <p style={{
            ...FONTS.h1,
            color:COLORS.red,
            textAlign:"center"
        }}>
            404! Page Not Found
        </p>
        <div style={{
            display:"flex",
            alignSelf:"center",
            justifyContent:"center",
            margin:20
        }}>
        <img src={error} alt={error} style={{
            height:400,
            width:400,
            alignSelf:"center"
        }}/>
        </div>
    </div>
  )
}
