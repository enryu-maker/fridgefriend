import React from 'react'
import Header from '../../Components/HeaderHome'
import open from '../../assets/open.png'
import close from '../../assets/close.png'
import Content from '../../Components/Content'
import main from '../../assets/main.png'
import { useSelector } from 'react-redux'
export default function Main() {
    const [isOpen,setisOpen] = React.useState(false)
    // const access = useSelector(state=>state.Reducers.access)
    // console.log(access)
  return (
    <div>
        <Header active={"Home"}/>
        <div style={{
            display:"inline-flex",
            justifyContent:"space-evenly",
            alignSelf:"center",
            width:"100%",
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
