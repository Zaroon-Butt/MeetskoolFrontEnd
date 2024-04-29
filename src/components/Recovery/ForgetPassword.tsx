import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, Alert } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { ForgotPasswordHook } from "../../hooks/PasswordHooks/ForgetPasswordHook";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const ForgetPassword: React.FC = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [email, setEmail] = useState("");

  const { recoveryPassword, sendingMail, forgetPasswordResponse } =
    ForgotPasswordHook();

  const handleForgetPassword = () => {
    if (email) {
      if (!emailRegex.test(email)) {
        Alert.alert("Invalid Email", "Please enter a valid email address.");
      } else {
        recoveryPassword(email);
      }
    } else {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
    }
  };

  useEffect(() => {
    if (forgetPasswordResponse) {
      if (forgetPasswordResponse.success) {
        Alert.alert(
          "Email sent to the mentioned email address",
          "Please check your email for further instructions."
        );
      } else {
        Alert.alert(
          "There was an error sending email please check the mentioned email."
        );
      }
    }
  }, [forgetPasswordResponse]);

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
          <Text style={styles.cardTitle}>Forget Password</Text>
          <TextInput
            placeholder="example@gmail.com"
            mode="outlined"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />

          <Card.Actions
            style={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginRight: 65,
                marginBottom: 10,
              }}
            >
              <Button
                mode="contained"
                style={{ marginRight: 15, backgroundColor: "#bbaaee" }}
                onPress={handleForgetPassword}
              >
                Send
              </Button>
              {sendingMail && (
                <ActivityIndicator animating={true} color={MD2Colors.red800} />
              )}
              <Button mode="contained" style={{ backgroundColor: "#bbaaee" }}>
                {" "}
                Resend{" "}
              </Button>
            </View>
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
    backgroundColor: "#D6BCFA",
  },
  card: {
    width: "90%",
    textAlign: "center",
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

export default ForgetPassword;
