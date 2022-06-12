import React from 'react'
import Header from '../../Components/Header'
import Main from '../../assets/main.png'
import { COLORS, FONTS, SIZES } from '../../Components/Theme'
import { useDispatch } from 'react-redux'
import { LoginAction } from '../../Store/actions'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
    const[email,setEmail] = React.useState('')
    const[password,setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false);
    const [EmailError, setEmailError] = React.useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function isEnableSignIn() {
        return email != '' && password != '';
      }
    async function login() {
        if (isEnableSignIn()) {
          setLoading(true);
          await axios.post('http://127.0.0.1:8000/api/login/',
              {
                username: email,
                password: password,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              },
            )
            .then(response => {
              if (response.status == 200) {
                alert("loggedin")
                  dispatch(LoginAction(response.data.access,response.data.access))
                  navigate("/home")
                  setLoading(false)            
              } else {
                alert('User Not Registered');
                setLoading(false);
              }
            })
            .catch(error => {
              if (error.response) {
                console.log(error)
                alert('Invalid Email & Password');
                setLoading(false);
              }
            });
        } else {
            alert('Invalid Input');
          setLoading(false);
        }
      }
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
                display:"flex",
                alignSelf:"center",
                flexDirection:"column"
                // alignItems:"center",
                
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
        <input 
        style={{
            borderWidth:0,
            borderBottomWidth:1,
            height:30,
            width:230,
            margin:15,
            outline: "none",
        }} 
        type={"text"} 
        placeholder={"Enter your username"} 
        onChange={(event)=>{
            setEmail(event.target.value)
        }}/><br></br>
        <input 
        style={{
            borderWidth:0,
            borderBottomWidth:1,
            height:30,
            width:230,
            margin:15,
            outline: "none",
        }} 
        type={"password"} 
        placeholder={"Enter your Password"} 
        onChange={(event)=>{
            setPassword(event.target.value)
        }}/><br></br>
        <input 
        type={"button"} 
        value={"Login"} 
        onClick={()=>{
           login()
        }} 
        style={{
            height:35,
            width:120,
            backgroundColor:COLORS.Primary2,
            borderWidth:0,
            borderRadius:SIZES.radius,
            alignSelf:"center",
            margin:15,
            boxShadow: `1px 3px 1px #9E9E9E`,

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
