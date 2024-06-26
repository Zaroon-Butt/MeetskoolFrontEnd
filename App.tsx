import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/components/Extras/Home";
import StudentSignUp from "./src/components/Student_Screens/StudentSignUp";
import StudentHome from "./src/components/Student_Screens/StudentHome";
import TeacherHome from "./src/components/Teacher_Screens/TeacherHome";
import ForgetPassword from "./src/components/Recovery/ForgetPassword";
import StudentSignIn from "./src/components/Student_Screens/StudentSignIn";
import Verify from "./src/components/Extras/Verify";
import SignUp from "./src/components/Student_Screens/StudentSignUp";
import StartUp from "./src/components/Extras/StartUp";
import TeacherSignIn from "./src/components/Teacher_Screens/TeacherSignIn";
import TeacherSignUp from "./src/components/Teacher_Screens/TeacherSignUp";
import CreateStudent from "./src/components/Student_Screens/CreateStudent";
import StudentEducation from "./src/components/Student_Screens/StudentEducation";
import TeacherInfoView from "./src/components/Teacher_Screens/TeacherInfoView";
import CreateTeacher from "./src/components/Teacher_Screens/CreateTeacher";
import TeacherEducation from "./src/components/Teacher_Screens/TeacherEducation";
import TeacherSubject from "./src/components/Teacher_Screens/TeacherSubject";
import StudentSubject from "./src/components/Student_Screens/StudentSubject";
import {StudentInfo} from "./src/components/Student_Screens/StudentViewProfile";

export type RootStackParamList = {
  Home: undefined;
  TeacherSignUp: undefined;
  TeacherSignUp2: undefined;
  StudentSignUp: undefined;
  StudentSignIn: undefined;
  StudentHome: undefined;
  TeacherHome: undefined;
  ForgetPassword: undefined;
  Verify: undefined;
  SignUp: undefined;
  StartUp: undefined;
  SignIn: undefined;
  CreateStudent: undefined;
  StudentEducation: undefined;
  TeacherInfoView: undefined;
  CreateTeacher: undefined;
  TeacherEducation: undefined;
  TeacherSubject: undefined;
  StudentSubject: undefined;
  StudentInfo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StudentInfo">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TeacherSignUp" component={TeacherSignUp} />
        <Stack.Screen name="StudentSignUp" component={StudentSignUp} />
        <Stack.Screen name="StudentSignIn" component={StudentSignIn} />
        <Stack.Screen name="StudentHome" component={StudentHome} />
        <Stack.Screen name="TeacherHome" component={TeacherHome} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="StartUp" component={StartUp} />
        <Stack.Screen name="SignIn" component={StudentSignIn} />
        <Stack.Screen name="StudentEducation" component={StudentEducation} />
        <Stack.Screen name="CreateStudent" component={CreateStudent} />
        <Stack.Screen name="TeacherInfoView" component={TeacherInfoView} />
        <Stack.Screen name="CreateTeacher" component={CreateTeacher} />
        <Stack.Screen name="TeacherEducation" component={TeacherEducation} />
        <Stack.Screen name="TeacherSubject" component={TeacherSubject} />
       <Stack.Screen name="StudentSubject" component={StudentSubject} />
       <Stack.Screen name="StudentInfo" component={StudentInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
