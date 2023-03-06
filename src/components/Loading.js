import React from "react";
import  {View,StyleSheet,ActivityIndicator,Text} from "react-native";
import LottieView from 'lottie-react-native';
 function Loading(){
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            {/* <ActivityIndicator/> */}
            <LottieView
        autoPlay
      
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#fff',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/load.json')}
      />
        </View>
    )
}

export default Loading