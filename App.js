import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import TitleMessage from './HireDeveloperMessageScreen'
import LanguagesList from './ListOfProgrammingLanguages'

const personalDetailItemStyle = StyleSheet.create({
  
  container: {
    flexDirection: "row",
    paddingBottom: 10
  },

  leftSideItem: {
    fontWeight: "bold",
    fontSize: 20
  },

  rightSideItem: {
    fontSize: 20
  }
})

const personalDetailsViewStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingTop: 10,
    paddingLeft: 10
  }
})

const MainTitleStyle = StyleSheet.create({
  
  container: {
    paddingTop: 20,
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold"
  }
})

const profilePictureStyle = StyleSheet.create({
  
  container: {
    alignSelf: "center",
    marginTop: 70,
    borderColor: "#000000",
    borderWidth: 5,
    borderRadius: 30
  }
})

const ButtonsStyle = StyleSheet.create({

  container: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    padding: 5,
    backgroundColor: "#000000",
    borderRadius: 20
  }
})

const PersonalDetail = (props) => {

  const items = props.details

  return(
    <View style={personalDetailItemStyle.container}>
      <View>
        <Text style={personalDetailItemStyle.leftSideItem}>
          {items[0]}
        </Text>
      </View>

      <View>
        <Text style={personalDetailItemStyle.rightSideItem}>
          {items[1]}
        </Text>
      </View>
    </View>
  );
}

const ProfileScreen = ({ navigation }) => {

  return(
    <View>
      <Text style={MainTitleStyle.container}>
        Software Engineer Résumé
      </Text>

      <Image style={profilePictureStyle.container} source={require('./foto_perfil.jpeg')} />

      <View style={{paddingTop: 50}}>
        <Text style={{fontWeight: "bold", fontSize: 25, paddingLeft: 10}}>Personal Information</Text>
        <View style={personalDetailsViewStyle.container}>
          <PersonalDetail details={["Name: ", "Tomás Mamede"]}/>
          <PersonalDetail details={["Age: ", "21"]}/>
          <PersonalDetail details={["Country: ", "Portugal"]}/>
          <PersonalDetail details={["Job: ", "Software Engineer"]}/>
          <PersonalDetail details={["Education: ", "University of Porto"]}/>
          <PersonalDetail details={["Degree: ", "Computer Science"]}/>
          <StatusBar style="auto" />
        </View>
      </View>

      <View style={{marginTop: 45}}>
        <View style={ButtonsStyle.container}>
          <Button 
            onPress={() => {
              navigation.navigate('Programming Languages')
            }}
            title="Languages and Frameworks"
            color="#ffffff"
          />
        </View>

        <View style={ButtonsStyle.container}>
          <Button 
            onPress={() => {
              navigation.navigate('Hiring Message')
            }}
            title="Hire Developer!"
            color="#ffffff"
          />
        </View>
      </View>
    </View>
  );
} 

const Stack = createStackNavigator();
const NavigationStack = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Hiring Message"
          component={TitleMessage}
        />
        <Stack.Screen
          name="Programming Languages"
          component={LanguagesList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default function App() {
  return (
    <NavigationStack/>
  );
}
