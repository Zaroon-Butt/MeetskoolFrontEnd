import 'react-native-gesture-handler';
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-paper";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import TeacherSignUp from "../Teacher_Screens/TeacherSignUp";
import StudentSignUp from "../Student_Screens/StudentSignUp";
import { StackNavigationProp } from "@react-navigation/stack";




type StartUpProps = {
  navigation: StackNavigationProp<any, "Home">;
};

const StartUp: React.FC<StartUpProps> = ({ navigation }) => {

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.title}>MEETSKOOL</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.icon} />
          <Text style={styles.cardText}>Teacher Sign Up</Text>
        </TouchableOpacity>
        <Button onPress={() => navigation.navigate('{StudentSignUp}')}>hello</Button>
        <Button>Move</Button>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('{StudentSignUp}')}
        >
          <View style={styles.icon} />
          <Text style={styles.cardText}>Student Sign Up</Text>
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E0BBE4",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    color: "white",
  },
  card: {
    backgroundColor: "white",
    width: "80%",
    height: "auto",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowColor: "black",
  },
  icon: {
    backgroundColor: "#957DAD",
    height: 48,
    width: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default StartUp;