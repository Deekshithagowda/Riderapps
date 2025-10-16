


import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { responsiveWidth as rw, responsiveHeight as rh } from "react-native-responsive-dimensions";
import { moderateScale as ms } from "react-native-size-matters";



export default function GetStarted() {

    return (
        <View style={{ width: rw(100) }} className='flex-1 bg-primary items-center justify-center'>
             <FastImage source={{uri:'https://images.pexels.com/photos/33806640/pexels-photo-33806640.jpeg'}} resizeMode='cover' style={{width:300,height:300}}/>

            <Text style={{ fontSize: ms(14) }}>Hello this is getstarted page</Text>
        </View>
    )
}