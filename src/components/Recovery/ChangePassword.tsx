import React, {useEffect, useState} from "react";
import {ForgotPasswordHook} from "../../hooks/PasswordHooks/ForgetPasswordHook";
import {Alert, SafeAreaView, StyleSheet, View} from "react-native";
import {ActivityIndicator, Button, Card, MD2Colors, Text, TextInput} from "react-native-paper";
import {ChangePasswordPayLoad} from "../../interface/Password";
import {ChangePasswordHook} from "../../hooks/PasswordHooks/ChangePasswordHook";

const ChangePassword: React.FC = () => {

    const [changePasswordPayload, setChangePasswordPayload] = useState<ChangePasswordPayLoad>();
    const [password, setPassword] = useState<string>();
    const [oldPassword, setOldPassword] = useState<string>();
    const [email, setEmail] = useState<string>();

    const {changePassword, changePasswordResponse, changingPassword} = ChangePasswordHook();

    const handleChangePassword = () => {
        if (email && password && oldPassword) {
            setChangePasswordPayload({
                email: email,
                newPassword: password,
                oldPassword: oldPassword
            });
            if(changePasswordPayload){
                changePassword(changePasswordPayload);
            }
        }
    }
    useEffect(() => {
        if (changePasswordResponse) {
            if (changePasswordResponse.success) {
                Alert.alert(
                    "Password Changed",
                    "Your password has been changed successfully."
                );
            } else {
                Alert.alert(
                    "There was an error changing password."
                );
            }
        }
    }, []);
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
                    <Text style={styles.cardTitle}>Forget Password</Text>
                    <TextInput
                        placeholder="Old Password"
                        mode="outlined"
                        style={styles.input}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TextInput
                        placeholder="New Password"
                        mode="outlined"
                        style={styles.input}
                        onChangeText={(text) => setOldPassword(text)}
                    />
                    <TextInput
                        placeholder="Email"
                        mode="outlined"
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <Card.Actions
                        style={{
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                marginRight: 65,
                                marginBottom: 10,
                            }}
                        >
                            <Button
                                mode="contained"
                                style={{marginRight: 15, backgroundColor: "#bbaaee"}}
                                onPress={handleChangePassword}
                            >
                                Change Password
                            </Button>
                            {changingPassword && (
                                <ActivityIndicator animating={true} color={MD2Colors.red800}/>
                            )}
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
        backgroundColor: "#D6BCFA",
    },
    card: {
        width: "90%",
        textAlign: "center",
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
});

export default ChangePassword;