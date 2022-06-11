import React from 'react'
import Header from '../../Components/HeaderHome'
import open from '../../assets/open.png'
import close from '../../assets/close.png'
import Content from '../../Components/Content'
import { COLORS, FONTS, SIZES } from '../../Components/Theme'
import Popup from 'reactjs-popup'
import AddItem from './AddItem'
export default function Main() {
    const [isOpen,setisOpen] = React.useState(false)
  return (
    <div>
        <Header active={"Home"}/>
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around"
        }}>
        <p style={{
            ...FONTS.h2,
            color:COLORS.Primary2
        }}>
            Click on Fridge to open
        </p>
        <Popup overlayStyle={{
            backdropFilter:'blur(1px) grayscale(5%)'
        }}  modal trigger={<div style={{
            height:50,
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
            ...FONTS.h3,
            color:COLORS.white,
            textAlign:"center",
            
        }}>
            Add Inventory
        </p>
        </div>}>
        {close => <AddItem close={close} />}
      </Popup>
        
        </div>
        <div style={{
            display:"inline-flex",
            justifyContent:"space-evenly",
            alignSelf:"center",
            paddingLeft:30
        }}>
        <img 
        onClick={()=>{
            setisOpen(!isOpen)
        }} 
        src={isOpen?open:close} alt={open} style={
            isOpen?{
            height:565,
            width:565,
            alignSelf:"center",
            margin:20,
        }:{
            height:560,
            width:320,
            alignSelf:"center",
            margin:20

        }
    }/>
    {
        isOpen?<Content/>:null
    }
    
    
    </div>
    </div>
  )
}
