import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Alert } from "react-native";
import { Button, Card, Chip } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { SubjectCard } from "../InformationCard/SubjectCard";
import { GetSubjectHook } from "../../hooks/SubjectHooks/GetTeacherSubjectsHook";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


type NavigationProp = {
  navigate(arg0: never, arg1: { teacherId: string; }): unknown;
  teacherId: { teacherId: string };
};

const StudentSubject: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { fetchSubject, loading, subjectList } = GetSubjectHook();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [teacherId, setTeacherId] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const getTeacherId = async () => {
      const id = await AsyncStorage.getItem("TeacherId");
      console.log(id);
      setTeacherId(id);
    };
    getTeacherId();
  }, []);

  useEffect(() => {
    fetchSubject(searchQuery);
  }, [searchQuery]);

  const handleAddSubject = (subjectId: string) => {
    if (!selectedSubjects.includes(subjectId)) {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    } else {
      Alert.alert("Subject already selected");
    }
  };

  const handleNext = () => {
    if (teacherId) {
      navigation.navigate("TeacherHome"as  never , { teacherId: teacherId} );
    } else {
      Alert.alert("Teacher ID not found");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <Searchbar
              style={styles.searchbar}
              placeholder="Search"
              onChangeText={(text) => {
                setSearchQuery(text);
              }}
              value={searchQuery}
            />
          </View>
          <View style={styles.scrollCard}>
            <ScrollView style={styles.content}>
              {loading ? (
                <Text>Loading...</Text>
              ) : subjectList && subjectList.success ? (
                <SubjectCard
                  subjectList={subjectList}
                  onAddSubject={handleAddSubject}
                  studentId={teacherId || ""} // make this generic in the subject card, sending the ID of teacher or student from here
                />
              ) : (
                <Text>No subjects found.</Text>
              )}
            </ScrollView>
          </View>
          <Card style={styles.SubjectCard}>
            <Card.Content>
              <Text style={styles.chipsTitle}>Selected Subjects:</Text>
              <View style={styles.chips}>
                {selectedSubjects.map((subjectName, index) => (
                  <Chip
                    key={index}
                    icon="information"
                    onPress={() => console.log("Pressed")}
                  >
                    {subjectName}
                  </Chip>
                ))}
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.nextButtonContainer}>
          <Button mode="contained" onPress={handleNext}>Next</Button>
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
  },
  searchbar: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollCard: {
    flex: 0.75, // Allocate 60% of the container's height
  },
  content: {
    flex: 1,
    padding: 16,
    paddingBottom: 10,
  },
  SubjectCard: {
    margin: 10,
  },
  chipsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  nextButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default StudentSubject;
