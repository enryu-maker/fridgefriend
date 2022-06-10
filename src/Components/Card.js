import React from 'react'
import { COLORS, FONTS, SIZES } from './Theme'

export default function Card({
    Product_Name,
    Quantity,
    Expiry_Date,
    containerStyle,
    isExpired,
    onClick
}) {
  return (
    <div style={{
        display:"flex",
        width:"85%",
        height:50,
        backgroundColor:isExpired?COLORS.red : COLORS.Primary2,
        alignSelf:"center",
        justifyContent:"space-evenly",
        borderRadius:SIZES.radius,
        flexDirection:"row",
        margin:8,
        ...containerStyle
      }}
      onClick={onClick}
      >
        <p
        style={{
          ...FONTS.h3,
          textAlign:"center",
          color:COLORS.white
        }}
        >
          {Product_Name}
        </p>
        <p style={{
          ...FONTS.h3,
          textAlign:"center",
          color:COLORS.white
        }}>
          {Quantity}
        </p>
        <p style={{
         ...FONTS.h3,
         textAlign:"center",
         color:COLORS.white
        }}>
          {Expiry_Date}
        </p>
      </div>
  )
}
