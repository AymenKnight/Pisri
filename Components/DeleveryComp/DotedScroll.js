import React from 'react'
import { StyleSheet, View, } from "react-native";
import Svg, { Ellipse, Path } from "react-native-svg";
import * as Animatable from "react-native-animatable";


export default function DotedScroll({fill=1,}) {


    return (
      <View style={styles.container}>
        {fill == 1 && (
          <View
            style={[styles.step1_Container]}
          >
            <Svg
              width={19}
              height={18}
              style={{
                marginRight: 20,
              }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Ellipse cx={9.5} cy={9} rx={9.5} ry={9} fill="#E97854" />
            </Svg>

            <Svg
              width={13}
              height={12}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginRight: 20,
              }}
            >
              <Ellipse cx={6.212} cy={6} rx={6.212} ry={6} fill="#C4C4C4" />
            </Svg>
            <Svg
              width={13}
              height={12}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Ellipse cx={6.636} cy={6} rx={6.212} ry={6} fill="#C4C4C4" />
            </Svg>
          </View>
        )}
        {fill == 2 && (
          <View
           
       
            style={[styles.step1_Container]}
          >
            <Svg
              width={59}
              height={16}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginRight: 18,
              }}
            >
              <Path
                d="M58.99 7.897c-.055 13.041-25.918 2.54-25.918 2.54S-.482 24.506.005 7.897C.491-8.66 32.99 5.958 32.99 5.958s26.055-11.129 26 1.939z"
                fill="#E97854"
              />
            </Svg>
            <Svg
              width={13}
              height={12}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Ellipse cx={6.636} cy={6} rx={6.212} ry={6} fill="#C4C4C4" />
            </Svg>
          </View>
        )}
        {fill == 3 && (
          <View
          
           
            style={[styles.step1_Container]}
          >
            <Svg
              width={89}
              height={16}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M88.033 7.629c.46 18.762-22.298-2.53-31.461 3.441-10.161 6.622-10.774 6.524-22.537 0C22.049 4.423.496 25.16.968 7.63c.469-17.466 21.068 4.078 32.984-2.626 10.73-6.035 12.56-5.697 22.62.415 9.803 5.956 31-16.552 31.46 2.211z"
                fill="#E97854"
              />
            </Svg>
          </View>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
    container :{
      justifyContent:"center",
      alignItems:'center',
       width:"100%",
       marginTop:10,
       marginBottom:20,
       
    },
    step1_Container :{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    },
})
