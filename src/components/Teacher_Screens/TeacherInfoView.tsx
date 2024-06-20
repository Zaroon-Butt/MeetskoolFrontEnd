import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from '@react-navigation/native';
import { GetTeacherInfoHook } from "../../hooks/TeacherHooks/GetTeacherInfoHook";
import { TeacherInfoCard } from "../InformationCard/TeacherInfoCard";

const TeacherInfoView = () => {
  const route = useRoute();
  const { teacherId } = route.params as { teacherId: string };
  const { fetchTeacherInfo, loading, teacherInfo } = GetTeacherInfoHook();

  useEffect(() => {
    if (teacherId) {
      fetchTeacherInfo(teacherId);
    }
  }, [teacherId]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <TeacherInfoCard teacherInfo={teacherInfo} />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TeacherInfoView;
