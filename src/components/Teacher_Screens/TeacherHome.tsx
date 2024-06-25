import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { BottomNavigation, Text, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNavigationBar from "../AppBars/BottomNavigationBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TopNav from "../AppBars/TopNav";
import { GetTeacherInfoHook } from "../../hooks/TeacherHooks/GetTeacherInfoHook";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TeacherHome: React.FC = () => {
  const { fetchTeacherInfo, loading, teacherInfo } = GetTeacherInfoHook();
  const [teacherId, setTeacherId] = useState<string | null>(null);

  useEffect(() => {
    const getTeacherId = async () => {
      const id = await AsyncStorage.getItem("TeacherId");
      console.log(id);
      setTeacherId(id);
    };
    getTeacherId();
  }, []);

  useEffect(() => {
    if (teacherId) {
      fetchTeacherInfo(teacherId); // Replace with the actual teacher ID
    }
  }, [teacherId]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>{/* <TopNav /> */}</View>

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
              <Card>
                <Card.Content>
                  <Text style={styles.gridText}>Revenue</Text>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Text style={styles.gridText}>Requests</Text>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Text style={styles.gridText}>Pending</Text>
                </Card.Content>
              </Card>
            </View>
          </View>
        </View>

        <View>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : teacherInfo ? (
            <Card>
              <Card.Content>
                <Text>Description: {teacherInfo.data.descriptions}</Text>
                <Text>Department: {teacherInfo.data.departmentName}</Text>
                <Text>Degree: {teacherInfo.data.degree}</Text>
                <Text>Semester: {teacherInfo.data.semester}</Text>
                <Text>Subject: {teacherInfo.data.subjectName}</Text>
                <Text>Student: {teacherInfo.data.studentName}</Text>
              </Card.Content>
            </Card>
          ) : (
            <Text>No teacher information available</Text>
          )}
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
