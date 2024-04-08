import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";




const TeacherSignUp2 = () => {

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
          <Text style={styles.cardTitle}>Teacher Sign Up 2</Text>
          <TextInput
            placeholder="Skill 1"
            onChangeText={(text) =>
              setSignUpPayload({ ...signUpPayload, Skill_1: text })
            }
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            placeholder="Skill 2"
            onChangeText={(text) =>
              setSignUpPayload({ ...signUpPayload, Skill_2: text })
            }
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            placeholder="Skill 3"
            onChangeText={(text) =>
              setSignUpPayload({ ...signUpPayload, Skill_3: text })
            }
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />

          <TextInput
            placeholder="Skill 4"
            onChangeText={(text) =>
              setSignUpPayload({ ...signUpPayload, Skill_4: text })
            }
            mode="outlined"
            style={styles.input}
          />
          <Card.Actions>
            <Button mode="contained" >
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

export default TeacherSignUp2;
