import React from "react";
import {Card, Button} from "react-native-paper";
import {useNavigation, CompositeNavigationProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <Card mode="elevated">
            <Card.Cover
                source={{
                    uri: "https://drive.google.com/thumbnail?sz=w1000&id=1qVT9iP4PM-w-lcy5GqNPx1W_qayJXpwG",
                }}
            />
            <Card.Actions>
                <Button onPress={() => navigation.navigate("SignUp")}>Sign Up</Button>
                <Button onPress={() => navigation.navigate("SignIn")}>Sign In</Button>
            </Card.Actions>
        </Card>
    );
};

export default Home;
