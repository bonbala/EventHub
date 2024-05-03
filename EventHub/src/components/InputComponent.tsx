import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardType } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { globalStyles } from '../styles/globalStyles';
import { appColors } from '../constants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAweSome from 'react-native-vector-icons/FontAwesome'

interface Props {
    value: string;
    onChange:(val:string)=>void;
    affix?: ReactNode;
    placeholder?: string;
    suffix?: ReactNode;
    isPassword?:boolean;
    allowClear?: boolean;
    type?: KeyboardType;
    onEnd?: ()=> void
}

const InputComponent = (props:Props) => {

    const {value,onChange,affix,placeholder,suffix,isPassword,allowClear,type,onEnd}=props;

    const[isShowPass,setIsShowPass]=useState(isPassword ?? false);
  return (
    <View style={[styles.inputContainer]}>
      {affix ?? affix}
        <TextInput 
          style={[styles.input]}
          value={value}
          placeholder={placeholder ?? ''}
          onChangeText={val => onChange(val)}
          secureTextEntry={isShowPass}
          placeholderTextColor={'#747688'}
          keyboardType={type ?? 'default'}
          onEndEditing={onEnd}
        />
      {suffix ?? suffix}
        <TouchableOpacity 
          onPress={ 
            isPassword ? () => setIsShowPass(!isShowPass) : ()=> onChange('')
          }>
        {isPassword ? (
            <FontAweSome 
              name={isShowPass? 'eye-slash':'eye'}
              size={20}
              color={appColors.gray}
            />
        ):(
            value.length > 0 && allowClear&& (
                <AntDesign name='close' size={20} color={appColors.text}/>
            )
        )
        }  
        </TouchableOpacity>
        
    </View>
  );
};

export default InputComponent

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection:'row',
        borderRadius: 12,
        borderWidth:1,
        borderColor: '#FFFDDB',
        width:'100%',
        minHeight:56,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:15,
        backgroundColor:'rgba(233, 202, 183, 1)',
        marginBottom:19, 
        shadowColor: 'rbga(0,0,0,0,5)',
        shadowOffset: {
            width:0,
            height:4
        },
        shadowOpacity:0.25,
        shadowRadius:8,
        elevation:6, 
          
    },

    input:{
        padding: 0,
        margin: 0,
        flex:1,
        paddingHorizontal:14,
    }
})

