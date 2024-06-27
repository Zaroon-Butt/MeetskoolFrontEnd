import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View } from "react-native";
import TopNav from "../AppBars/TopNav";
import BottomNavigationBar from "../AppBars/BottomNavigationBar";
import { GetStudentFriendsHook } from "../../hooks/FriendHook/GetStudentFriendHook";
import { ShowFriendCard } from "../InformationCard/ShowFriendCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShowStudentFriends: React.FC = () => {
  const { studentFriends, loading, fetchStudentFriends } =
    GetStudentFriendsHook();
  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    let id = await AsyncStorage.getItem("studentId");
    console.log(id)
    if (id) {
      fetchStudentFriends(id);
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TopNav />
          </View>
          <ScrollView>
            <View style={styles.content}>
              {studentFriends && !loading && (
                <ShowFriendCard friendList={studentFriends} />
              )}
            </View>
          </ScrollView>
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
export default ShowStudentFriends;
