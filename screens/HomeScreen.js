import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image 
                style={{
                    width:100,
                    height:100,
                    resizeMode:"contain",
                }}
                source={{
                    uri: "https://admin.antalya.edu.tr/files/139/abu-logo-en.jpg",
                }}            
            />
            <NavOptions/>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});