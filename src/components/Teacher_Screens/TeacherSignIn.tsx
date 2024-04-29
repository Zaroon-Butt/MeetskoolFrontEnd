import React, { useState } from "react";
import { Alert } from "react-native";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";

const TeacherSignUp = () => {
  const [signInPayload, setSignInPayload] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = () => {
    // Regular expressions for email and password formats
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


    if (!emailRegex.test(signInPayload.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    // Check if email and password formats are valid
    if (!emailRegex.test(signInPayload.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(signInPayload.password)) {
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
          <Text style={styles.cardTitle}>Teacher Sign In</Text>
          <TextInput
            placeholder="Email"
            onChangeText={(text) =>
              setSignInPayload({ ...signInPayload, email: text })
            }
            mode="outlined"
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            onChangeText={(text) =>
              setSignInPayload({
                ...signInPayload,
                password: text,
              })
            }
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />
          <Card.Actions>
            <Button mode="contained" onPress={handleSignIn}>
              {" "}
              Sign In{" "}
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
});

export default TeacherSignUp;
