import React from 'react'
import Header from '../../Components/Header'
import Main from '../../assets/main.png'
import { COLORS, FONTS, SIZES } from '../../Components/Theme'
export default function Home() {
  return (
    <div>
        <Header active='Home'/>
        <div style={{
            // flex:1,
            display:"inline-flex",
            justifyContent:"space-evenly",
            alignSelf:"center",
        width:"100%",

        }}>
            <img style={{
                height:550,
                width:550
            }} src={Main} alt={Main}/>
            <div style={{

                alignSelf:"center"
            }}>
            <p style={{
                ...FONTS.h2,
                color:COLORS.Primary2,
                // backgroundColor:COLORS.Primary,
                borderRadius:SIZES.radius,
                alignSelf:"center",
                justifyContent:"center",
                fontFamily:"Courier"
            }}>FRIDGE FRIEND</p>
            <p style={{
                ...FONTS.body3
            }}>
                Fridge Friend is an Inventory management tool that helps user to keep track of there <br></br>
                Fridge content. Easy to use yet the most powerful Fridge Management Tool out in market <br></br>
                <strong style={{
                    ...FONTS.h3
                }}>Give it a shot</strong>
            </p>
            <p style={{
                ...FONTS.h3,
                color:COLORS.black
            }}>
                Features
            </p>
            <ul>
                <li style={{
                    ...FONTS.body3
                }}>Easy To Use</li>
                <li style={{
                    ...FONTS.body3
                }}>Real Time Data Update</li>
                <li style={{
                    ...FONTS.body3
                }}>Expiry Alerts</li>
                <li style={{
                    ...FONTS.body3
                }}>Interactive Design</li>
                <li style={{
                    ...FONTS.body3
                }}>Secure Data</li>
            </ul>
            </div>
        </div>
    </div>
  )
}
