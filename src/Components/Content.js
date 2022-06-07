import React from 'react'
import { COLORS, SIZES } from './Theme'

export default function Content() {
  return (
    <div style={{
        height:500,
        width:650,
        backgroundColor:COLORS.Primary,
        justifyContent:"center",
        marginTop:50,
        borderRadius:SIZES.padding
    }}></div>
  )
}
