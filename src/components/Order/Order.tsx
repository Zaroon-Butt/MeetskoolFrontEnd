import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View ,Text } from "react-native";
import TopNav from "../AppBars/TopNav";
import BottomNavigationBar from "../AppBars/BottomNavigationBar";

const Order: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TopNav />
          </View>
          <Text>This is order PAge </Text>
          <ScrollView>{/* add order list here  */}</ScrollView>
        </View>
        <View style={styles.BottomNav}>
          <BottomNavigationBar />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3e5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3e5f5",
  },
  content: {
    flex: 1,
    padding: 16,
    paddingBottom: 10,
  },

  BottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
  },
  filterButton: {
    marginLeft: 10,
  },
});
export default Order;
