import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomNavigation, Text, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNavigationBar from "../AppBars/BottomNavigationBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TopNav from "../AppBars/TopNav";

 function TeacherHome() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TopNav />
          </View>

          <View style={styles.content}>
            <View style={styles.avatarContainer} />
            <View style={styles.ratingContainer}>
              <Icon name="star" size={20} color="yellow" />
              <Icon name="star" size={20} color="yellow" />
              <Icon name="star" size={20} color="yellow" />
              <Icon name="star" size={20} color="yellow" />
              <Icon name="star-o" size={20} color="yellow" />
            </View>
            <View style={styles.gridContainer}>
              <View style={styles.gridItem}>
                <Text style={styles.gridText}>Revenue</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridText}>Requests</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridText}>Pending</Text>
              </View>
            </View>

            <Card mode="elevated" style={styles.card}>
              <Card.Title>Subject</Card.Title>
              <Card.Content>
                <Text>Maths</Text>
              </Card.Content>
            </Card>

            <Card mode="elevated" style={styles.card}>
              <Card.Title>Subject</Card.Title>
              <Card.Content>
                <Text>Maths</Text>
              </Card.Content>
            </Card>

            <Card mode="elevated" style={styles.card}>
              <Card.Title>Subject</Card.Title>
              <Card.Content>
                <Text>Maths</Text>
              </Card.Content>
            </Card>
          </View>
        </View>
        <View style={styles.BottomNav}>
          <BottomNavigationBar />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3e5f5",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
   
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#ce93d8",
    borderRadius: 40,
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  gridItem: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  gridText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
  BottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default TeacherHome;