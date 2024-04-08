import React, { useState } from "react";
import { View, Alert, SafeAreaView, StyleSheet } from "react-native";
import { Button, Card, Checkbox, Text, TextInput } from "react-native-paper";
import { signUpHook } from "../../hooks/UserLoginManagmentHooks/SignUpHook";

const { userSignUp, creatingUser, userSignUpResponse } = signUpHook();

const TeacherSignUp: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [initialSignUpPlayload, setInitialSignUpPayload] = useState<UserSignUpPayload>({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    isTeacher: true,
    isRememberMe: false,
    userImage: "",
  });
  const [signUpPayload, setSignUpPayload] = useState<UserSignUpPayload>(initialSignUpPlayload);

  const handleSignUp = () => {
    // Regular expressions for email and password formats
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (signUpPayload.fullName === "" || signUpPayload.email == "" || signUpPayload.password == "" || signUpPayload.phoneNumber == "") {
      Alert.alert("Empty Fields", "Please fill in all fields.");
      return;
    }
    // Check if email and password formats are valid
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
  
  };

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
            placeholder="FullName"
            onChangeText={(text) => setSignUpPayload({ ...signUpPayload, fullName: text })}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setSignUpPayload({ ...signUpPayload, email: text })}
            keyboardType="email-address"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setSignUpPayload({ ...signUpPayload, password: text })}
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            placeholder="PhoneNumber"
            onChangeText={(text) => setSignUpPayload({ ...signUpPayload, phoneNumber: text })}
            mode="outlined"
            style={styles.input}
          />
          <Card.Actions>
            <View style={styles.RememberText}>
              <Text>Remember Me</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
            <Button mode="contained" onPress={handleSignUp}>
              {" "}
              Sign Up{" "}
            </Button>
            <Button mode="contained"> Cancel </Button>
          </Card.Actions>
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
  RememberText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginRight: 10,
  },
});

export default TeacherSignUp;
