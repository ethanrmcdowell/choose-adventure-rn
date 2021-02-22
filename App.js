import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import plot from './utils/plot';

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

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{padding: 20, color: 'white', fontSize: 30}}>{currentNode.title}</Text>
      <Text style={{padding: 20, color: 'white'}}>{currentNode.content}</Text>
      {currentNode.choices.map(choice => <AppButton style={styles.button} title={choice.text} onPress={() => onPress(choice)} /> )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonContainer: {
    width: 300,
    marginTop: 10,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    alignSelf: "center"
  }
});
