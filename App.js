import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './components/Grid';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class App extends react.Component {
  render(){
    return (
      <GestureRecognizer
      style={styles.container}
      onSwipeLeft={()=>Grid.moveLeft()}
      onSwipeRight={()=>Grid.moveRight()}
      onSwipeUp={()=>Grid.moveUp()}
      onSwipeDown={()=>Grid.moveDown()}
      
      >

          <Grid/>
          <StatusBar style="auto" />

      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
