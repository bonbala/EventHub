import { StyleSheet } from "react-native";
import { appColors } from "../constants/appColors";
import { fontFamiles } from "../constants/fontFamiles";

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: appColors.white,   
    },
    text:{
        fontFamily: fontFamiles.spartan,
        fontSize:14,
        color: appColors.text,
    },
    title:{
        fontFamily: fontFamiles.lecker, 
        fontSize:40,
        color: appColors.title,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 5,
    },
    button:{
        borderRadius: 12,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: appColors.primary,
        paddingHorizontal: 16,
        paddingVertical: 16,
        minHeight: 56,
        flexDirection: 'row',
    },
    shadow:{
        shadowColor: 'rbga(0,0,0,0,5)',
        
        shadowOpacity: 0.25,
        shadowRadius:8,
        elevation:6,
    },
    shadowtext:{
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 5,
    },
    border:{
        borderRadius: 12,
        borderWidth:1,
        borderColor: '#FFFDDB',
    },
    section:{
        paddingHorizontal:16,
        paddingBottom:20,
    },
    row:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'

    }
});