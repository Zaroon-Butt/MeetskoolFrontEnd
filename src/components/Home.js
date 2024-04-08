import React, { useState } from "react";
import { View, Alert, SafeAreaView, StyleSheet, Navigation } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";
const Home = () => {
  return (
    <Card mode="elevated">
    <Card.Cover
        source={{
          uri: "https://drive.google.com/thumbnail?sz=w1000&id=1qVT9iP4PM-w-lcy5GqNPx1W_qayJXpwG",
        }}
      />
      <Card.Actions>
        <Button onPress={Navigation.navigate('SignUp')}>Sign Up</Button>
        <Button onPress={Navigation.navigate('SignIn')}>Sign In</Button>
      </Card.Actions>
    </Card>
  );
};
export default Home;
