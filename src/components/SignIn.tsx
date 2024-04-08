// import React, { useState } from "react";
// import { View, Alert, SafeAreaView, StyleSheet } from "react-native";
// import { Button, Card, Text, TextInput } from "react-native-paper";
// import { signInHook } from "../hooks/UserLoginManagmentHooks/SignInHook";

// const SignIn: React.FC = () => {
//   const [initialSignInPlayload, setInitialSignInPayload] =
//     useState<UserSignInPayload>({
//       email: "",
//       password: "",
//     });
//   const [signInPayload, setSignInPayload] = useState<UserSignInPayload>(
//     initialSignInPlayload
//   );

//   const { userSignIn, userLoading, userSignInResponse } = signInHook();

//   const handleSignIn = () => {
//     if (signInPayload.email && signInPayload.password) {
//       console.log("hello bsdk ");
//       userSignIn(signInPayload);
//     }
//   };


//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.cardContainer}>
//         <Card mode="elevated" style={styles.card}>
//           <Card.Cover
//             source={{
//               uri: "https://drive.google.com/thumbnail?sz=w1000&id=1qVT9iP4PM-w-lcy5GqNPx1W_qayJXpwG",
//             }}
//             style={styles.cardCover}
//           />
//           <Text style={styles.cardTitle}>Teacher Sign In</Text>
//           <TextInput
//             placeholder="Email"
//             inputMode="email"
//             onChangeText={(text) =>
//               setSignInPayload({ ...signInPayload, email: text })
//             }
//             mode="outlined"
//             style={styles.input}
//           />

//           <TextInput
//             placeholder="Password"
//             onChangeText={(text) =>
//               setSignInPayload({
//                 ...signInPayload,
//                 password: text,
//               })
//             }
            
//             secureTextEntry
//             mode="outlined"
//             style={styles.input}
//           />
//           <Card.Actions>
//             <Button mode="contained" onPress={handleSignIn}>
//               {" "}
//               Sign In{" "}
//             </Button>
//             <Button mode="contained"> Cancel </Button>
//           </Card.Actions>
//         </Card>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#D6BCFA",
//   },
//   cardContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     width: "90%",
//   },
//   cardCover: {
//     margin: 10,
//   },
//   cardTitle: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 20,
//   },
//   input: {
//     margin: 10,
//   },
// });

// export default SignIn;
