import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, YellowBox } from 'react-native';
import plot from './utils/plot';
import * as Linking from 'expo-linking';

export default function App() {
  const [node, setNode] = React.useState(0);
  const [target, setTarget] = React.useState(plot[0].target);
  
  var currentNode = plot[node];

  function getCurrentNode() {
      return currentNode;
  }

  function setCurrentNode(targetId) {
      currentNode = plot.find(x => x.id === targetId);
      return currentNode;
  }

  function onPress(choice) {
      setNode(choice.target);
      setCurrentNode(choice.target);
      setTarget(currentNode.id);
      getCurrentNode();
  }

  function githubLink() {
    Linking.openURL('https://github.com/ethanrmcdowell/choose-adventure-rn');
  }

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/main_bg.jpg")} style={styles.backgroundImage}>
        <View style={styles.textbox}>
          <Text style={{padding: 20, color: 'pink', fontSize: 30}}>{currentNode.title}</Text>
          <Text style={{padding: 20, color: 'white'}}>{currentNode.content}</Text>
          {currentNode.choices.map(choice => <AppButton key={currentNode.id + choice.target} title={choice.text} onPress={() => onPress(choice)} /> )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 5
  },
  appButtonContainer: {
    marginTop: 10,
    elevation: 8,
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 5,
    borderBottomColor: "#36dede",
    borderRadius: 30

  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  backgroundImage: {
    flex: 1
  },
  textbox: {
    padding: 7,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#7F0EEF",
    borderRadius: 20,
    marginTop: "25%",
    backgroundColor: "#503D88",
    width: "75%",
    maxHeight: "98%",
    minHeight: "55%",
    justifyContent: "center",
    alignSelf: "center"
  }
});