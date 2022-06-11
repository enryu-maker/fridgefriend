import React from 'react'
import { COLORS, SIZES, FONTS } from '../../Components/Theme'

export default function AddItem({
    close
}) {
    const [ProductName,setProductName]  = React.useState('')
    const [qty,setQty]  = React.useState(0)
    const [exp,setExp]  = React.useState(null)


  return (
    <div style={{
        display:'flex',
        // height:500,
        width:300,
        backgroundColor:COLORS.Primary,
        alignSelf:'center',
        borderRadius:SIZES.padding,
        flexDirection:"column",
        boxShadow: `1px 3px 1px #9E9E9E`,
    
    }}>
         <input 
        style={{
            borderWidth:0,
            borderBottomWidth:1,
            height:30,
            width:230,
            margin:10,
            outline: "none",
            backgroundColor:'transparent',
            alignSelf:'center',


        }} 
        type={"text"} 
        placeholder={"Enter your Product"} 
        onChange={(event)=>{
            setProductName(event.target.value)
        }}/><br></br>
         <input 
        style={{
            borderWidth:0,
            borderBottomWidth:1,
            height:30,
            width:230,
            margin:10,
            outline: "none",
            backgroundColor:'transparent',
        alignSelf:'center',
        color:COLORS.black

        }} 
        type={"number"} 
        placeholder={"Enter Quantity"} 
        onChange={(event)=>{
            setQty(event.target.value)
        }}/><br></br>
         <input 
        style={{
            borderWidth:0,
            borderBottomWidth:1,
            height:30,
            width:230,
            margin:10,
            outline: "none",
            backgroundColor:'transparent',
        alignSelf:'center',

        }} 
        type={"date"} 
        placeholder={"Enter Expiry Date"} 
        onChange={(event)=>{
            setExp(event.target.value)
        }}/>
        <div style={{
            height:40,
            width:80,
            alignSelf:"center",
            // justifyContent:"center",
            backgroundColor:COLORS.Primary2,
            borderRadius:SIZES.radius,
            paddingInline:8,
            margin:10,
        boxShadow: `1px 3px 1px #9E9E9E`,

        }}
        onClick={()=>{
            alert(true)
        }}
        >
        <p style={{
            ...FONTS.h4,
            color:COLORS.white,
            textAlign:"center",
            
        }}>
            Add
        </p>
        </div>
    </div>
  )
}
