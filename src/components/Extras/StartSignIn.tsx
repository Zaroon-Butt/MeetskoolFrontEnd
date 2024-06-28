import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Card, Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";


const StartSignIn: React.FC= () => {
    const navigation = useNavigation();

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
            onPress={() => navigation.navigate('TeacherSignIn' as never)}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Teacher SignIn
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("StudentSignIn" as never)}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Student SignIn
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
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around", // Distribute buttons evenly
    padding: 10,  // Add padding for better spacing
  },
  button: {
    flex: 1, 
    margin: 5,   // Add margin between buttons
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333", // Darker color for better contrast
  },
});

export default StartSignIn;
