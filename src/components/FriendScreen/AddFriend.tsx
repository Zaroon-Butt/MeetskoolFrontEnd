import React, {useEffect, useState} from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, StyleSheet, View} from "react-native";
import TopNav from "../AppBars/TopNav";
import {Button, Searchbar} from "react-native-paper";
import {TeacherListCard} from "../InformationCard/TeacherListCard";
import BottomNavigationBar from "../AppBars/BottomNavigationBar";
import {GetTeacherListHook} from "../../hooks/TeacherHooks/GetTeacherListHook";
import {GetStudentListHook} from "../../hooks/StudentHooks/GetStudentListHook";
import {FriendCard} from "../InformationCard/FriendCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AddFriend: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [studentId, setStudentId] = useState<string>("");

    const {studentListResponse, loading, fetchStudentList} = GetStudentListHook();

    const StudentId = async () => {
        let id = await AsyncStorage.getItem('studentId');
        if (id) {
            setStudentId(id);
        }
        console.log(studentId);
    };

    useEffect(() => {
        StudentId();
    }, []);


    useEffect(() => {
        fetchStudentList(searchQuery);
    }, [searchQuery]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TopNav/>
                    </View>
                    <View style={styles.searchContainer}>
                        <Searchbar
                            style={{
                                flex: 1,
                                backgroundColor: "white",
                            }}
                            placeholder="Search Friend"
                            onChangeText={(text) => {
                                setSearchQuery(text);
                            }}
                            value={searchQuery}
                        />
                        <Button
                            mode="contained"
                            onPress={() => {
                            }}
                            style={styles.filterButton}
                        >
                            Filter
                        </Button>
                    </View>
                    <ScrollView>
                        <View style={styles.content}>
                            {studentListResponse && !loading && (

                                <FriendCard friendList={studentListResponse} studentId={studentId}/>

                            )}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.BottomNav}>
                    <BottomNavigationBar/>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
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