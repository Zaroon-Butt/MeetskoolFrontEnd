import React from "react";
import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const TeacherListCard: React.FC<{
  teacherList: GetTeacherListResponse | undefined;
}> = ({ teacherList }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {teacherList && teacherList.success ? (
          teacherList.data.map((teacher) => (
            <Card mode="elevated" key={teacher.teacherId}>
              <Card.Title title={teacher.teacherName} />
              <Card.Content>
                <Text>{teacher.teacherName}</Text>
                <Text>{teacher.teacherName}</Text>
                <Text>Teacher Subject</Text>
              </Card.Content>
              <Card.Actions>
                <Button mode="contained">View Profile</Button>
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
