import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button, Card, TextInput } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { Alert, StyleSheet } from "react-native";
import { UpdateTeacherProfileHook } from "../../../hooks/TeacherHooks/UpdateTeacherProfileHook";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UpdateTeacherProfile: React.FC = () => {
  const route = useRoute();
  const {
    teacherID: routeTeacherId,
    teacherName: initialTeacherName,
    description: initialDescription,
  } = route.params as {
    teacherID: string;
    teacherName: string;
    description: string;
  };

  const [teacherId, setTeacherId] = useState<string>(routeTeacherId);

  const fetchTeacherId = async () => {
    try {
      const id = await AsyncStorage.getItem("TeacherId");
      console.log(id);
      if (id) {
        setTeacherId(id);
      }
    } catch (error) {
      console.error("Error fetching teacher ID", error);
    }
  };

  useEffect(() => {
    fetchTeacherId();
  }, []);

  const [updateProfilePayload, setUpdateProfilePayload] = useState({
    teacherId: routeTeacherId,
    teacherName: initialTeacherName,
    descriptions: initialDescription,
  });

  const [userDescription, setUserDescription] = useState<string>(initialDescription);
  const [name, setName] = useState<string>(initialTeacherName);

  const { updatingProfile, updateProfileResponse, updateProfile } = UpdateTeacherProfileHook();

  const updateTeacherProfile = () => {
    const payload = {
      ...updateProfilePayload,
      teacherId: teacherId || routeTeacherId,
      teacherName: name,
      descriptions: userDescription,
    };

    if (payload.teacherName && payload.descriptions) {
      updateProfile(payload);
    }
  };

  useEffect(() => {
    if (updateProfileResponse && updateProfileResponse.success) {
      Alert.alert("Profile Updated", "Your profile has been updated successfully.");
    }
  }, [updateProfileResponse]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
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
            <Button mode="contained" onPress={updateTeacherProfile}>
              Update
            </Button>
          </Card.Actions>
        </Card>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  field: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});
