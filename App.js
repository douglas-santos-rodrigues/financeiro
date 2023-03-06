import React,{useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Firebase   from "./src/config/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default function App() {
  useEffect(() => {
    const email = 'douglasss.santos.rodriguez@gmail.com';
    const  password = "123456";
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((Firebase) => {
        // Signed in
        const user = Firebase.user;
        // ...
        console.log("------", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("------", error);
        // ..
      });

  },[])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
