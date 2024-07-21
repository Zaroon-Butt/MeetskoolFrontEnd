import React, { useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Card, Button } from "react-native-paper";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UpdateStudentPage: React.FC = () => {
  const navigation: NavigationProp<any, any> = useNavigation();

  const StudentId = async () => {
    let studentId = await AsyncStorage.getItem('studentId');
    console.log(studentId);
    };
  
    useEffect(() => {
      StudentId();
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEETSKOOL</Text>
      <Card mode="elevated" style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://drive.google.com/thumbnail?sz=w1000&id=1qVT9iP4PM-w-lcy5GqNPx1W_qayJXpwG",
          }}
          style={styles.cover}
        />
        <Card.Actions style={styles.actions}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("UpdateEducation" as never)}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Education
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("UpdateProfile" as never)}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Profile
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3e5f5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%", // Adjust card width if needed
    maxWidth: 400, // Set a maximum width
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  cover: {
    width: "100%",
    height: Dimensions.get("window").height * 0.4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around", // Distribute buttons evenly
    padding: 10, // Add padding for better spacing
  },
  button: {
    flex: 1,
    margin: 5, 
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333", // Darker color for better contrast
  },
});

export default UpdateStudentPage;
