import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import StartUp from "./src/components/StartUp";
import React from "react";
import Home from "./src/components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./src/components/Student_Screens/StudentSignUp";
import Verify from "./src/components/Verify";
import TeacherSignUp from "./src/components/Teacher_Screens/TeacherSignIn";
import TeacherSignUp2 from "./src/components/Teacher_Screens/TeacherSignUp2";
import StudentSignUp from "./src/components/Student_Screens/StudentSignUp";
import StudentHome from "./src/components/Student_Screens/StudentHome";
import TeacherHome from "./src/components/Teacher_Screens/TeacherHome";
import ForgetPassword from "./src/components/Recovery/ForgetPassword";
import StudentSignIn from "./src/components/Student_Screens/StudentSignIn";

const Stack = createStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen name="StartUp" component={StartUp} />
    //     <Stack.Screen name="SignIn" component={SignIn} />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //<Verify/>
    //<TeacherSignUp2/>
    //<StudentSignIn />
    //<TeacherHome />
    //<ForgetPassword />
    //<StudentSignIn/>
    //<StudentSignUp/>
    <ForgetPassword/>
  );
}
export default App;
