import { StyleProp, StyleSheet, Text, TextStyle, Touchable, View, ViewStyle,TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent';
import { globalStyles } from '../styles/globalStyles';
import { appColors } from '../constants/appColors';
import { fontFamiles } from '../constants/fontFamiles';


interface Props {
    icon?: ReactNode;
    text: string;
    type?: 'primary' | 'text' | 'link';
    color?: string;
    styles?: StyleProp<ViewStyle>;
    textcolor?:  string;
    textStyles?: StyleProp<TextStyle>;
    onPress?:() => void;
    iconFlex?: 'left'|'right';
    textFont?: string,
    disable?: boolean,
    size?: number;
 }

const ButtonComponent = (props:Props) => {
    
    const {icon,text,color,type,styles,textcolor,textStyles,onPress,iconFlex,textFont,disable,size}=props

  return type ==='primary' ? (
    <View style={[{alignItems:'center'}]}>
      <TouchableOpacity 
        disabled={disable}  
        activeOpacity={0.5} 
        onPress={onPress} 
        style={[
        globalStyles.button,
        globalStyles.shadow,
        globalStyles.border,
        {
          backgroundColor:  color ? color : disable ? appColors.gray4 : appColors.primary,
          marginBottom:17,
          width:'60%',
        },
        styles]}
      >
      
      {icon&& iconFlex === 'left' && icon}
      <TextComponent 
      text={text} 
      color={textcolor?? appColors.white} 
      styles={[
        textStyles, 
        {
          marginLeft: icon ? 12:0,
          fontSize: size !== undefined ? size : 16,
          textAlign:'center',
        },
        styles,
      ]}
      flex={icon && iconFlex==='right' ? 1 : 0}
      font={textFont ?? fontFamiles.medium}
      
      />
      {icon && iconFlex==='right' && icon}

  </TouchableOpacity></View>
    
  ):(

    <TouchableOpacity onPress={onPress}>
      <TextComponent 
      flex={0}
      text={text}
      color={appColors.title}
      styles={[textStyles,
        {
          fontFamily:fontFamiles.spartan,
          fontSize:20,
          fontWeight:'800',
          
        }]}
      />
    </TouchableOpacity>

  )
};

export default ButtonComponent

const styles = StyleSheet.create({})