import React, { useState } from "react";
import { View, Alert, SafeAreaView, StyleSheet } from "react-native";
import { Button, Card, Checkbox, Text, TextInput } from "react-native-paper";

const Verify: React.FC = () => {
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
          <Text style={styles.cardTitle}>Email Verification</Text>

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
              >
                Verify
              </Button>
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
});

export default Verify;
