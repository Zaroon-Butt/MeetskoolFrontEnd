import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Card, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Card mode="elevated" style={styles.card}>
                <Card.Cover
                    source={{
                        uri: "https://drive.google.com/thumbnail?sz=w1000&id=1qVT9iP4PM-w-lcy5GqNPx1W_qayJXpwG",
                    }}
                    style={styles.cover}
                />
                <Card.Actions style={styles.actions}>
                    <Button mode="contained" onPress={() => navigation.navigate("StartUp")} style={styles.button}>Sign Up</Button>
                    <Button mode="contained" onPress={() => navigation.navigate("StartUp")} style={styles.button}>Sign In</Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3e5f5",},
    card: {
        width: "auto",
        height: "auto",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    cover: {
        width: '100%',
        height: Dimensions.get('window').height * 0.4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    button: {
        marginHorizontal: 10,
        width: '40%',
    },
});

export default Home;
