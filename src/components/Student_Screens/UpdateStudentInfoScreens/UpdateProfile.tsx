import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {  Button, Card, TextInput } from "react-native-paper";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Alert, StyleSheet, View } from "react-native";
import { UpdateStudentProfileHook } from "../../../hooks/StudentHooks/UpdateStudentProfileHook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomNavigationBar from "../../AppBars/BottomNavigationBar";
import TopNav from "../../AppBars/TopNav";

type RouteParams = {
  params: {
    studentId: string;
    studentName: string;
    description: string;
  };
};

export const UpdateProfile: React.FC = () => {
  const [studentId, setStudentId] = useState<string | undefined>();

  const fetchStudentId = async () => {
    try {
      const Id = await AsyncStorage.getItem("studentId");
      console.log(Id);
      if (Id) {
        setStudentId(Id);
      }
    } catch (error) {
      console.error("Error fetching student ID", error);
    }
  };

  useEffect(() => {
    fetchStudentId();
  }, []);

  const route = useRoute<RouteProp<RouteParams, "params">>();

  const {
    studentId: routeStudentId = "",
    studentName: initialStudentName = "",
    description: initialDescription = "",
  } = route.params || {};

  const [updateProfilePayload, setUpdateProfilePayload] = useState({
    studentId: routeStudentId,
    studentName: initialStudentName,
    descriptions: initialDescription,
  });

  const [userDescription, setUserDescription] = useState(initialDescription);
  const [name, setName] = useState(initialStudentName);

  const { updatingProfile, updateProfileResponse, updateProfile } =
    UpdateStudentProfileHook();

  const updateStudentProfile = () => {
    const payload = {
      ...updateProfilePayload,
      studentId: studentId || routeStudentId,
      studentName: name,
      descriptions: userDescription,
    };

    if (payload.studentName && payload.descriptions) {
      updateProfile(payload);
    }
  };

  useEffect(() => {
    if (updateProfileResponse && updateProfileResponse.success) {
      Alert.alert(
        "Profile Updated",
        "Your profile has been updated successfully."
      );
    }
  }, [updateProfileResponse]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "#f3e5f5", flex: 1 }}>
        <View style={styles.header}>
          <TopNav />
        </View>
        <View style={styles.container}>
          <Card mode="elevated" style={styles.card}>
            <Card.Title title="Update Profile" />
            <Card.Content>
              <TextInput
                label="Name"
                value={name}
                onChangeText={(text) => setName(text)}
                mode="outlined"
              />
              <TextInput
                label="Description"
                mode="outlined"
                multiline
                numberOfLines={5}
                value={userDescription}
                onChangeText={(text) => setUserDescription(text)}
              />
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={updateStudentProfile}>
                Update
              </Button>
            </Card.Actions>
          </Card>
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
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    maxWidth: 400,
  },
  field: {
    marginBottom: 10,
  },
  BottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3e5f5",
  },
});
