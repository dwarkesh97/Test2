import React from 'react';
import {SafeAreaView,StyleSheet,Text,View} from 'react-native';
import Navigation from './src/Navigation/Navigation'

const App = () => {

  return (
    <SafeAreaView style={styles.Container}>
     <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
   flex:1,
   backgroundColor:'#fff'
  }
});

export default App;
