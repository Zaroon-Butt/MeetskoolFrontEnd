import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, Alert } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { CreateStudentHook } from "../../hooks/StudentHooks/CreateStudentHook";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateStudent: React.FC = () => {

    const[initialCreateStudent,setInitialCreateStudent]=useState<CreateStudentPayLoad>({
        studentId: "",
        studentName: "",
        descriptions: "",
        totalOrders: "0"
    })
    const[CreateStudentPayLoad,setCreateStudentPayload]=useState<CreateStudentPayLoad>(initialCreateStudent)
    const navigation = useNavigation();
    const {addStudent,creatingStudent,createStudentResponse}=CreateStudentHook();

    const createStudent = async () =>{
        if(CreateStudentPayLoad.studentName && CreateStudentPayLoad.descriptions && CreateStudentPayLoad.studentId){
            addStudent(CreateStudentPayLoad);
        }
        else{
            Alert.alert("Please fill all the fields");
        }

    }

    const moveToEducation = () => {
      if(createStudentResponse && !creatingStudent && createStudentResponse.success){
        navigation.navigate('StudentEducation' as never);
    }
    }
    useEffect(()=>{
      if(createStudentResponse && !creatingStudent && createStudentResponse.success){
          moveToEducation();
      }

    },[createStudentResponse, creatingStudent])

    const setId = async () => {
      let id = await AsyncStorage.getItem("studentId");
      if(id)
        {
          setCreateStudentPayload({
            ...CreateStudentPayLoad,
            studentId:id,
          })

        }
  
    }
  useEffect(() => {
    setId()
  }, []);




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Card mode="elevated">
          <Card.Cover
            source={{
              uri: "https://drive.google.com/thumbnail?sz=w1000&id=1qVT9iP4PM-w-lcy5GqNPx1W_qayJXpwG",
            }}
            style={styles.cardCover}
          />
        </Card>
        <Card>
          <Card.Content>
            <TextInput
              label="Student Name"
              placeholder="Enter student name"
              mode="outlined"
              onChangeText={(text) => setCreateStudentPayload({...CreateStudentPayLoad, studentName: text})}
              style={styles.input}
            />
            <TextInput
              label="Description"
              placeholder="Enter description"
              mode="outlined"
              style={[styles.input, styles.description]}
              onChangeText={(text) => setCreateStudentPayload({...CreateStudentPayLoad, descriptions: text})}
              multiline
            />
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button mode="contained" style={styles.button} onPress={createStudent} disabled={creatingStudent} >
              Next
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6BCFA",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: "90%",
  },

  cardCover: {
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  input: {
    marginVertical: 5,
  },
  description: {
    height: 100,
  },
  cardActions: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  button: {
    marginHorizontal: 5,
  },
});

export default CreateStudent;
