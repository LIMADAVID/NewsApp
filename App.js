import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Últimas Notícias</Text>
      <ScrollView style={styles.scrollView}>
        <Text>Lista de Notícias</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 10
  },
  scrollView: {
    height: '100%'
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
});
