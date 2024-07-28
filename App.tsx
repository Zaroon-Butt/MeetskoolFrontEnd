import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Header, createStackNavigator} from "@react-navigation/stack";
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
import {StudentInfo} from "./src/components/Student_Screens/StudentInfo";
import Chatting from "./src/components/Chatting/Chatting";
import Order from "./src/components/Order/Order";
import ShowStudentFriends from "./src/components/FriendScreen/ShowStudentFriends";
import UpdatePage from "./src/components/Teacher_Screens/UpdateTeacherScreens/UpdatePage";
import {UpdateEducation} from "./src/components/Student_Screens/UpdateStudentInfoScreens/UpdateEducation";
import {UpdateProfile} from "./src/components/Student_Screens/UpdateStudentInfoScreens/UpdateProfile";
import FriendOptionPage from "./src/components/FriendScreen/FriendOptionPage";
import {AddFriend} from "./src/components/FriendScreen/AddFriend";
import StartSignIn from "./src/components/Extras/StartSignIn";

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
    TeacherSignIn: undefined;
    Chatting: undefined;
    Order: undefined;
    ShowStudentFriends: undefined;
    UpdatePage: undefined;
    UpdateEducation: undefined;
    UpdateProfile: undefined;
    AddFriend: undefined;
    FriendOptionPage: undefined;
    StartSignIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="TeacherSignUp" component={TeacherSignUp} options={{headerShown: false}}/>
                <Stack.Screen name="StudentSignUp" component={StudentSignUp} options={{headerShown: false}}/>
                <Stack.Screen name="StudentSignIn" component={StudentSignIn} options={{headerShown: false}}/>
                <Stack.Screen name="TeacherSignIn" component={TeacherSignIn} options={{headerShown: false}}/>
                <Stack.Screen name="StudentHome" component={StudentHome} options={{headerShown: false}}/>
                <Stack.Screen name="TeacherHome" component={TeacherHome} options={{headerShown: false}}/>
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown: false}}/>
                <Stack.Screen name="Verify" component={Verify} options={{headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                <Stack.Screen name="StartUp" component={StartUp} options={{headerShown: false}}/>
                <Stack.Screen name="StudentEducation" component={StudentEducation} options={{headerShown: false}}/>
                <Stack.Screen name="CreateStudent" component={CreateStudent} options={{headerShown: false}}/>
                <Stack.Screen name="TeacherInfoView" component={TeacherInfoView} options={{headerShown: false}}/>
                <Stack.Screen name="CreateTeacher" component={CreateTeacher} options={{headerShown: false}}/>
                <Stack.Screen name="TeacherEducation" component={TeacherEducation} options={{headerShown: false}}/>
                <Stack.Screen name="TeacherSubject" component={TeacherSubject} options={{headerShown: false}}/>
                <Stack.Screen name="StudentSubject" component={StudentSubject} options={{headerShown: false}}/>
                <Stack.Screen name="StudentInfo" component={StudentInfo} options={{headerShown: false}}/>
                <Stack.Screen name="Chatting" component={Chatting} options={{headerShown: false}}/>
                <Stack.Screen name="Order" component={Order} options={{headerShown: false}}/>
                <Stack.Screen name="UpdatePage" component={UpdatePage} options={{headerShown: false}}/>
                <Stack.Screen name="UpdateEducation" component={UpdateEducation} options={{headerShown: false}}/>
                <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{headerShown: false}}/>
                <Stack.Screen name="ShowStudentFriends" component={ShowStudentFriends} options={{headerShown: false}}/>
                <Stack.Screen name="AddFriend" component={AddFriend} options={{headerShown: false}}/>
                <Stack.Screen name="StartSignIn" component={StartSignIn} options={{headerShown: false}}/>
                <Stack.Screen name="FriendOptionPage" component={FriendOptionPage} options={{headerShown: false}}/>


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
