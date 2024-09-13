import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [morseCode, setMorseCode] = useState("");

  // Tableau de correspondance lettre -> morse
  const morseMap = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    " ": " ",
    ",": "--..--",
    ".": ".-.-.-",
  };

  // Fonction pour traduire un texte en morse
  const translateToMorse = (inputText: any) => {
    let result = "";
    const upperText = inputText.toUpperCase();

    for (let char of upperText) {
      // @ts-ignore
      result += morseMap[char] ? morseMap[char] + " " : "";
    }

    setMorseCode(result.trim());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Traduction en Morse</Text>

      <TextInput
        style={styles.input}
        placeholder="Entrez le texte (ex: Hello EEMI)"
        value={text}
        onChangeText={(value) => setText(value)}
      />

      <Button
        title="Traduire en Morse"
        onPress={() => translateToMorse(text)}
      />

      {morseCode ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Résultat en Morse :</Text>
          <Text style={styles.morseText}>{morseCode}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  morseText: {
    fontSize: 16,
    marginTop: 10,
    color: "#333",
  },
});
