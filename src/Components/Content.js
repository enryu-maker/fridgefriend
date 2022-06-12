import React from 'react'
import Card from './Card'
import { COLORS, FONTS, SIZES } from './Theme'
export default function Content({
  product
}) {
  
  return (
    <div style={{
      display:"flex",
        height:500,
        width:750,
        backgroundColor:COLORS.Primary,
        // justifyContent:"center",
        marginTop:50,
        borderRadius:SIZES.padding,
        alignItems:"center",
        flexDirection:"column",
        overflowY:"scroll",
        whiteSpace:"nowrap",
        boxShadow: `1px 3px 1px #9E9E9E`,

    }}>
      <p style={{
        ...FONTS.h2,
        
      }}>Inventory</p>
      <Card Quantity={'Quantity'} Product_Name={'Product Name'} Expiry_Date={'Expiry Date'} containerStyle={{
        marginBottom:15
      }}/>

      <div style={{
      display:"flex",
        height:500,
        width:750,
        alignItems:"center",
        flexDirection:"column",
        overflowY:"scroll",
        whiteSpace:"nowrap",
        paddingBottom:20
    }}>
      {
        product?.map(item=>(
          <Card Quantity={item.qty} Product_Name={item.name} Expiry_Date={item.expiry} isExpired={item.is_expired}
          />
        ))
      }
      </div>
    </div>
  )
}
