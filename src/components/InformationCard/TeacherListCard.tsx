import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp } from '@react-navigation/native';

export const TeacherListCard: React.FC<{
  teacherList: GetTeacherListResponse | undefined;
}> = ({ teacherList }) => {

  const navigation: NavigationProp<any, any> = useNavigation();

  const handleViewProfile = (teacherId: string) => {

    navigation.navigate('TeacherInfoView', { teacherId: teacherId });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {teacherList && teacherList.success ? (
          teacherList.data.map((teacher) => (
            <Card mode="elevated" key={teacher.teacherId} style={{marginBottom:10}}>
              <Card.Title title={teacher.teacherName} />
              <Card.Content>
                <Text>{teacher.teacherName}</Text>
                <Text>{teacher.teacherName}</Text>
                <Text>Teacher Subject</Text>
              </Card.Content>
              <Card.Actions>
                <Button mode="contained"onPress={() => handleViewProfile(teacher.teacherId)}>View Profile</Button>
              </Card.Actions>
            </Card>
          ))
        ) : (
          <Text>No teachers available</Text>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
