import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, Alert } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { createTeacherHook } from "../../hooks/TeacherHooks/CreateTeacherHook";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateTeacher: React.FC = () => {

    const[initialCreateTeacher,setInitialCreateTeacher]=useState<CreateTeacherPayLoad>({
        TeacherId: "",
        TeacherName: "",
        descriptions: "",
        totalOrders: "0"
    })
    const[CreateTeacherPayLoad,setCreateTeacherPayload]=useState<CreateTeacherPayLoad>(initialCreateTeacher)
    const navigation = useNavigation();
    const {addTeacher,creatingTeacher,createTeacherResponse}=createTeacherHook();

    const createTeacher = async () =>{
        if(CreateTeacherPayLoad.TeacherName && CreateTeacherPayLoad.descriptions && CreateTeacherPayLoad.TeacherId){
            addTeacher(CreateTeacherPayLoad);
        }
        else{
            Alert.alert("Please fill all the fields");
        }

    }

    const moveToEducation = () => {
      if(createTeacherResponse && !creatingTeacher && createTeacherResponse.success){
        navigation.navigate('TeacherEducation' as never);
    }
    }
    useEffect(()=>{
      if(createTeacherResponse && !creatingTeacher && createTeacherResponse.success){
          moveToEducation();
      }

    },[createTeacherResponse, creatingTeacher])

    const setId = async () => {
      let id = await AsyncStorage.getItem("TeacherId");
      console.log(id,"ID IN CREATE TEACHER SCREEN ")
      if(id)
        {
          setCreateTeacherPayload({
            ...CreateTeacherPayLoad,
            TeacherId:id,
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
              label="Teacher Name"
              placeholder="Enter Teacher name"
              mode="outlined"
              onChangeText={(text) => setCreateTeacherPayload({...CreateTeacherPayLoad, TeacherName: text})}
              style={styles.input}
            />
            <TextInput
              label="Description"
              placeholder="Enter description"
              mode="outlined"
              style={[styles.input, styles.description]}
              onChangeText={(text) => setCreateTeacherPayload({...CreateTeacherPayLoad, descriptions: text})}
              multiline
            />
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button mode="contained" style={styles.button} onPress={createTeacher} disabled={creatingTeacher} >
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

export default CreateTeacher;
