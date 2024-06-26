import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Alert } from "react-native";
import { Button, Card, Chip } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { GetSubjectHook } from "../../hooks/SubjectHooks/GetStudentSubjectHook";
import { SubjectCard } from "../InformationCard/SubjectCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const StudentSubject: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const { fetchSubject, loading, subjectList } = GetSubjectHook();
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [studentId, setStudentId] = useState<string | null>(null);
    const navigation = useNavigation();

    

    useEffect(() => {
        const getStudentId = async () => {
            try {
                const id = await AsyncStorage.getItem("studentId");
                console.log("Retrieved student ID:", id);
                setStudentId(id);
            } catch (error) {
                console.error('Error retrieving student ID:', error);
            }
        };
        getStudentId();
    }, []);

    useEffect(() => {
        fetchSubject(searchQuery);
    }, [searchQuery]);
    
    useEffect(() => {
        const saveId = async () => {
            try {
                await AsyncStorage.setItem('studentId',studentId as string);
                console.log("Saved student ID:", studentId);
            } catch (error) {
                console.error('Error saving student ID:', error);
            }
        }
        saveId();
    }, []);

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
                        <SubjectCard
                            subjectList={subjectList}
                            onAddSubject={handleAddSubject}
                            studentId={studentId || ""} // Pass studentId to SubjectCard
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
                    <Button mode="contained" onPress={() => navigation.navigate("StudentHome" as never)}>Next</Button>
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

export default StudentSubject;
