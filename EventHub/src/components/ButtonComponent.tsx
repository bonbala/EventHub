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
 }

const ButtonComponent = (props:Props) => {
    
    const {icon,text,color,type,styles,textcolor,textStyles,onPress,iconFlex,textFont,disable}=props

  return type ==='primary' ? (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity 
        disabled={disable}  
        activeOpacity={0.5} 
        onPress={onPress} 
        style={[
        globalStyles.button,
        globalStyles.shadow,
        {
          backgroundColor:  color ? color : disable ? appColors.gray4 : appColors.primary,
          marginBottom:17,
          width:'85%',
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
          fontSize:16,
          textAlign:'center'
        }
      ]}
      flex={icon && iconFlex==='right' ? 1 : 0}
      font={textFont ?? fontFamiles.medium}
      
      />
      {icon && iconFlex==='right' && icon}

  </TouchableOpacity></View>
    
  ):(

    <TouchableOpacity onPress={onPress}>
      <TextComponent 
      text={text}
      color={type==='link' ? appColors.primary : appColors.link}
      
      />
    </TouchableOpacity>

  )
};

export default ButtonComponent

const styles = StyleSheet.create({})