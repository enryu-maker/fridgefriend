import React from 'react'
import { COLORS, SIZES, FONTS } from '../../Components/Theme'
import axiosIns from '../../Helper/Helper'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { GetInventory } from '../../Store/actions'
export default function AddItem({
    close
}) {
    const [ProductName,setProductName]  = React.useState('')
    const [qty,setQty]  = React.useState(0)
    const [exp,setExp]  = React.useState(null)
    const [loading, setLoading] = React.useState(false);
    const token = useSelector(state=>state.Reducers.access)
    const dispatch= useDispatch()
    async function add() {
        setLoading(true);
        await axios
          .post(
            'http://127.0.0.1:8000/api/inventory/',
            {
              name: ProductName,
              qty: qty,
              expiry: exp,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
              },
            },
          )
          .then(response => {
            if (response.status === 201) {
              alert("product added")
              dispatch(GetInventory(token))
              setLoading(false)
            } else {
              alert("error occured")
              setLoading(false);
            }
          })
          .catch(error => {
            if (error.response) {
              alert("error occured")
              setLoading(false);    
            }
          });
    }

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
            add()
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
