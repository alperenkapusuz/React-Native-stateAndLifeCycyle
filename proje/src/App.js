import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function App() {
  const [number, setNumber] = useState(0);
 
  useEffect(() => {
    console.log('number updated: ' + number);
  }, [number]);

  function updateCounter() {
    console.log('1. State value: ' + number);
    setNumber(number + 1);
    console.log('1. State value: ' + number);
  }

  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <Text>Number {number}</Text>
      <Button title="Up!" onPress={updateCounter} />
    </SafeAreaView>
  );
}

export default App;
