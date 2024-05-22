import 'react-native-gesture-handler';
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./src/components/Extras/Home";
import TeacherSignUp from "./src/components/Teacher_Screens/TeacherSignIn";
import TeacherSignUp2 from "./src/components/Teacher_Screens/TeacherSignUp2";
import StudentSignUp from "./src/components/Student_Screens/StudentSignUp";
import StudentHome from "./src/components/Student_Screens/StudentHome";
import TeacherHome from "./src/components/Teacher_Screens/TeacherHome";
import ForgetPassword from "./src/components/Recovery/ForgetPassword";
import StudentSignIn from "./src/components/Student_Screens/StudentSignIn";
import Verify from "./src/components/Extras/Verify";
import SignUp from "./src/components/Student_Screens/StudentSignUp";
import StartUp from "./src/components/Extras/StartUp";

export type RootStackParamList = {
    Home: undefined;
    TeacherSignUp: undefined;
    TeacherSignUp2: undefined;
    StudentSignUp: undefined;
    StudentHome: undefined;
    TeacherHome: undefined;
    ForgetPassword: undefined;
    Verify: undefined;
    SignUp: undefined;
    StartUp: undefined;
    SignIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="TeacherSignUp" component={TeacherSignUp}/>
                <Stack.Screen name="TeacherSignUp2" component={TeacherSignUp2}/>
                <Stack.Screen name="StudentSignUp" component={StudentSignUp}/>
                <Stack.Screen name="StudentHome" component={StudentHome}/>
                <Stack.Screen name="TeacherHome" component={TeacherHome}/>
                <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
                <Stack.Screen name="Verify" component={Verify}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="StartUp" component={StartUp}/>
                <Stack.Screen name="SignIn" component={StudentSignIn}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
