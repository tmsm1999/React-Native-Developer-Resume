import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const MessageStyle = StyleSheet.create({
    
    container: {
        alignSelf: "center",
        marginTop: 60
    }
})

const TitleMessage = ({ navigation }) => {
    return(
        <View style={MessageStyle.container}>
            <Text>Developer Hired!</Text>
        </View>
    );
}

export default function HireDeveloperMessageScreen() {
    return (
      <TitleMessage/>
    );
  }