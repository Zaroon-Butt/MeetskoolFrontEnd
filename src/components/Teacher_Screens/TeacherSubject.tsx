import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Alert } from "react-native";
import { Button, Card, Chip } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { GetSubjectHook } from "../../hooks/SubjectHooks/GetTeacherSubjectsHook";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { TeacherSubjectCard } from "../InformationCard/TeacherSubjectCard";

const TeacherSubject: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const { fetchSubject, loading, subjectList } = GetSubjectHook();
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [teacherId, setTeacherId] = useState<string | null>(null);
    const navigation = useNavigation();

    useEffect(() => {
        const getTeacherId = async () => {
            try {
                const id = await AsyncStorage.getItem("TeacherId");
                console.log("Retrieved teacher ID:", id);
                setTeacherId(id);
            } catch (error) {
                console.error('Error retrieving teacher ID:', error);
            }
        };
        getTeacherId();
    }, []);

    useEffect(() => {
        fetchSubject(searchQuery);
    }, [searchQuery]);
    
    useEffect(() => {
        if (teacherId) {
            const saveId = async () => {
                try {
                    await AsyncStorage.setItem('TeacherId', teacherId);
                    console.log("Saved teacher ID:", teacherId);
                } catch (error) {
                    console.error('Error saving teacher ID:', error);
                }
            }
            saveId();
        }
    }, [teacherId]);

    const handleAddSubject = (subjectId: string) => {
        if (!selectedSubjects.includes(subjectId)) {
            setSelectedSubjects([...selectedSubjects, subjectId]);
        } else {
            Alert.alert("Subject already selected");
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
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
                <ScrollView style={styles.scrollCard}>
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : subjectList && subjectList.success ? (
                        <TeacherSubjectCard
                            subjectList={subjectList}
                            onAddSubject={handleAddSubject}
                            teacherId={teacherId || ""} // Pass teacherId to SubjectCard
                        />
                    ) : (
                        <Text>No subjects found.</Text>
                    )}
                </ScrollView>
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
                <View style={styles.nextButtonContainer}>
                    <Button mode="contained" onPress={() => navigation.navigate("TeacherHome" as never)}>Next</Button>
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
        flex: 1,
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

export default TeacherSubject;
