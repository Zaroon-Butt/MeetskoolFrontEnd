import React, {useEffect, useState} from "react";
import {View, SafeAreaView, StyleSheet} from "react-native";
import {Button, Card, Text} from "react-native-paper";
import {useNavigation, useRoute} from "@react-navigation/native";
import {verifyEmailHook} from "../../hooks/EmailHooks/VerifyHook";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ResendEmailHook} from "../../hooks/EmailHooks/ResendEmailHook";

const Verify: React.FC = () => {
    const route = useRoute();
    const {isTeacher, id, email, code} = route.params as {
        isTeacher: boolean,
        id: string,
        email: string,
        code: string
    };

    const [resendEmailPayload, setResendEmailPayload] = useState<EmailResendPayLoad>();

    const {emailVerify, verifyingMail, verifyEmailResponse} = verifyEmailHook();
    const {emailResend, sendingMail, resendEmailResponse} = ResendEmailHook();
    const navigation = useNavigation();
    let teacherIs = isTeacher;
    const verifyEmail = async () => {

        if (id) {
            emailVerify(id);
        }

    };

    const resendEmail = async () => {

        if (id && email && code) {
            setResendEmailPayload({
                userId: id,
                email: email,
                code: code,
            });
            if (resendEmailPayload) {
                emailResend(resendEmailPayload);
            }
        }

    }

    useEffect(() => {
        if (verifyEmailResponse) {
            if (verifyEmailResponse === true) {
                if (isTeacher) {
                    navigation.navigate('CreateTeacher' as never);
                } else {
                    navigation.navigate('CreateStudent' as never);
                }
            }
        }
    }, [verifyEmailResponse, verifyingMail]);

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
                    <Text style={styles.cardTitle}>Email Verification</Text>
                    <Card.Content>
                        <Text style={styles.cardText}>
                            An email has been sent to your account. Please click on verify if your email is verified to
                            continue.
                        </Text>

                        {verifyEmailResponse === false &&
                            <Text style={styles.cardText}>Email verification failed. Please resend the email.</Text>}
                        {resendEmailResponse === false &&
                            <Text style={styles.cardText}>Email resend failed. Please try again.</Text>}
                        {resendEmailResponse && <Text style={styles.cardText}>Email is resend.</Text>}

                    </Card.Content>
                    <Card.Actions style={styles.cardActions}>
                        <View style={styles.buttonView}>
                            <Button mode="contained" style={styles.verifyButton} onPress={verifyEmail}>
                                Verify
                            </Button>
                            <Button mode="contained" style={styles.resendButton} onPress={resendEmail}>
                                Resend
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
    cardText: {
        textAlign: "center",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    cardActions: {
        justifyContent: "center",
        marginBottom: 10,
    },
    verifyButton: {
        backgroundColor: "#bbaaee",
        marginBottom: 10,
        marginRight: 10,
    },
    resendButton: {
        backgroundColor: "#bbaaee",
        marginBottom: 10,
    },
    buttonView: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 60,
    },
});

export default Verify;
