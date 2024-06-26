import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TopNav from "../AppBars/TopNav";
import BottomNavigationBar from "../AppBars/BottomNavigationBar";
import { TeacherListCard } from "../InformationCard/TeacherListCard";
import { Searchbar } from "react-native-paper";
import { GetTeacherListHook } from "../../hooks/TeacherHooks/GetTeacherListHook";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StudentHome: React.FC = () => {
  const [getTeacherInitialPayLoad, setGetTeacherInitialPayLoad] =
    useState<GetTeacherListPayLoad>({
      searchTerm: "",
      page: 1,
      pageSize: 10,
    });

  const [searchQuery, setSearchQuery] = useState<string>("");

  const [getTeacherPayload, setGetTeacherPayload] =
    useState<GetTeacherListPayLoad>(getTeacherInitialPayLoad);

  const { teacherList, loading, fetchTeacherList } = GetTeacherListHook();

  const StudentId = async () => {
  let studentId = await AsyncStorage.getItem('studentId');
  console.log(studentId);
  };

  useEffect(() => {
    StudentId();
  }, []);



  useEffect(() => {
    fetchTeacherList(getTeacherPayload);
  }, [getTeacherPayload]);

  useEffect(() => {
    setGetTeacherPayload({
      ...getTeacherPayload,
      searchTerm: searchQuery,
    });
  }, [searchQuery]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TopNav />
          </View>
          <View style={styles.searchContainer}>
            <Searchbar
              style={{
                flex: 1,
                backgroundColor: "white",
              }}
              placeholder="Search"
              onChangeText={(text) => {
                setSearchQuery(text);
              }}
              value={searchQuery}
            />
            <Button
              mode="contained"
              onPress={() => {}}
              style={styles.filterButton}
            >
              Filter
            </Button>
          </View>
          <ScrollView>
            <View style={styles.content}>
              {teacherList && !loading && (
                <TeacherListCard teacherList={teacherList} />
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
export default StudentHome;
