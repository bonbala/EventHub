import { StyleProp ,StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { appColors } from '../constants/appColors'
import { fontFamiles } from '../constants/fontFamiles';
import { globalStyles } from '../styles/globalStyles';

    interface Props {
        text: string;
        color?: string;
        size?: number;
        flex?: number;
        font?: string;
        styles?: StyleProp<TextStyle>;
        title?: boolean;
    }

const TextComponent = (props:Props) => {
    
    const{text,size,flex,font,color,title,styles}=props

    return <Text style={[
        globalStyles.text,
        {
            color: color ?? appColors.text,
            flex: flex ?? 0,
            fontSize: size ? size : title ? 24 : 16,
            fontFamily: font 
             ? font 
             : title 
             ? fontFamiles.medium 
             : fontFamiles.regular 
        },
        styles,
    ]}>{text}</Text>
}

export default TextComponent

const styles = StyleSheet.create({})