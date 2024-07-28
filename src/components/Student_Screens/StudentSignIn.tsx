import React, {useState, useEffect} from "react";
import {View, SafeAreaView, StyleSheet, Alert} from "react-native";
import {Button, Card, Text, TextInput} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {SignInHook} from "../../hooks/UserLoginManagmentHooks/SignInHook";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StudentSignIn: React.FC = () => {

    const navigation = useNavigation();

    const [signInPayload, setSignInPayload] = useState<UserSignInPayload>({
        email: "",
        password: "",
    });

    const {userSignIn, signInResponse, signingIn} = SignInHook();

    const handleSignIn = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (!emailRegex.test(signInPayload.email)) {
            Alert.alert("Invalid Email", "Please enter a valid email address.");
            return;
        }
        if (!passwordRegex.test(signInPayload.password)) {
            Alert.alert(
                "Invalid Password",
                "Password must contain at least 8 characters, including at least one number, one lowercase letter, and one uppercase letter."
            );
            return;
        }

        userSignIn(signInPayload);
    };
    const saveId = async () => {

        if (!signingIn && signInResponse) {
            await AsyncStorage.setItem('studentId', signInResponse.data.userInfo.id);
        }
    }

    useEffect(() => {
        if (signInResponse) {
            if (signInResponse.success === true) {
                console.log("Sign In Successful");
                saveId();
                navigation.navigate('StudentHome' as never);
            }
        }
    }, [signInResponse]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardContainer}>
                <Card mode="elevated" style={styles.card}>
                    <Card.Cover
                        source={{
                            uri: "https://drive.google.com/thumbnail?sz=w1000&id=1qVT9iP4PM-w-lcy5GqNPx1W_qayJXpwG",
                        }}
                        style={styles.cardCover}
                    />
                    <Text style={styles.cardTitle}>Student Sign In</Text>
                    <TextInput
                        placeholder="Email"
                        value={signInPayload.email}
                        onChangeText={(text) =>
                            setSignInPayload({...signInPayload, email: text})
                        }
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={signInPayload.password}
                        onChangeText={(text) =>
                            setSignInPayload({
                                ...signInPayload,
                                password: text,
                            })
                        }
                        secureTextEntry
                        mode="outlined"
                        style={styles.input}
                    />
                    <Card.Actions style={styles.actions}>
                        <Button
                            mode="text"
                            onPress={() => navigation.navigate("ForgotPassword" as never)}
                            style={styles.forgotPasswordButton}
                        >
                            Forgot Password?
                        </Button>
                        <View style={styles.rightActions}>
                            <Button mode="contained" onPress={handleSignIn}>
                                Sign In
                            </Button>
                            <Button mode="contained" onPress={() => navigation.goBack()} style={styles.cancelButton}>
                                Cancel
                            </Button>
                        </View>
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
    },
    cardContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: "90%",
    },
    cardCover: {
        margin: 10,
    },
    cardTitle: {
        fontSize: 20,
        textAlign: "center",
        margin: 20,
    },
    input: {
        margin: 10,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    rightActions: {
        flexDirection: "row",
    },
    forgotPasswordButton: {
        marginLeft: 10
    },

    cancelButton: {
        marginLeft: 5,
    },
});

export default StudentSignIn;
