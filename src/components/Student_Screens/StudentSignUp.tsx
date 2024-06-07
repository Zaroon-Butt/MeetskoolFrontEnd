import React, { useEffect, useState } from "react";
import { View, Alert, SafeAreaView, StyleSheet } from "react-native";
import { Button, Card, Checkbox, Text, TextInput } from "react-native-paper";
import { signUpHook } from "../../hooks/UserLoginManagmentHooks/SignUpHook";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const StudentSignUp: React.FC = () => {
  const [initialSignUpPayload, setInitialSignUpPayload] =
    useState<UserSignUpPayload>({
      email: "",
      password: "",
      fullName: "",
      phoneNumber: "",
      isTeacher: false,
      isRememberMe: false,
      userImage: "",
    });

  const [signUpPayload, setSignUpPayload] =
    useState<UserSignUpPayload>(initialSignUpPayload);
  const { userSignUp, creatingUser, userSignUpResponse } = signUpHook();
  const [checked, setChecked] = useState(false);
  const navigation: NavigationProp<any, any> = useNavigation();

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(signUpPayload.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    if (!passwordRegex.test(signUpPayload.password)) {
      Alert.alert(
        "Invalid Password",
        "Password must contain at least 8 characters, including at least one number, one lowercase letter, and one uppercase letter."
      );
      return;
    }
    userSignUp(signUpPayload);
  };
  const saveId = async () => {
    if(!creatingUser&& userSignUpResponse)
      {
        await AsyncStorage.setItem('studentId',userSignUpResponse.data.userId);
        let isTeacher = signUpPayload.isTeacher;
        navigation.navigate('Verify', { isTeacher , id: userSignUpResponse.data.userId, email: userSignUpResponse.data.email, code: userSignUpResponse.data.code});
      }
  }
  useEffect(() => {
    saveId()
  }, [userSignUpResponse, creatingUser]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Card mode="elevated" style={styles.card}>
          <Card.Cover
            source={{
              uri: "https://drive.google.com/thumbnail?sz=w1000&id=1qVT9iP4PM-w-lcy5GqNPx1W_qayJXpwG",
            }}
            style={styles.cardCover}
          />
          <Text style={styles.cardTitle}>Student Sign Up</Text>
          <TextInput
            placeholder="Full Name"
            onChangeText={(text) =>
              setSignUpPayload({ ...signUpPayload, fullName: text })
            }
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            onChangeText={(text) =>
              setSignUpPayload({ ...signUpPayload, email: text })
            }
            keyboardType="email-address"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) =>
              setSignUpPayload({ ...signUpPayload, password: text })
            }
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            placeholder="Phone Number"
            onChangeText={(text) =>
              setSignUpPayload({ ...signUpPayload, phoneNumber: text })
            }
            mode="outlined"
            style={styles.input}
          />
          <Card.Actions>
            <View style={styles.rememberMeContainer}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                  setSignUpPayload({
                    ...signUpPayload,
                    isRememberMe: !checked,
                  });
                }}
              />
              <Text>Remember Me</Text>
            </View>
            <Button mode="contained" onPress={handleSignUp}>
              Sign Up
            </Button>
            <Button mode="contained">Cancel</Button>
          </Card.Actions>
          <View style={styles.signInContainer}>
            <Text>Already have an account? </Text>
            <Button
              mode="text"
              onPress={() => navigation.navigate("StudentSignIn" as never)}
            >
              Sign In
            </Button>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6BCFA",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
  },
  cardCover: {
    margin: 10,
  },
  cardTitle: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
  input: {
    margin: 10,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginRight: 10,
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
});

export default StudentSignUp;
