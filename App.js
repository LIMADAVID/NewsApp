import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import Constants from 'expo-constants';
import { map } from 'lodash';
import New from './src/components/New';
import { getNewsApi } from './src/api/news';

export default function App() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNewsApi().then((response) => {
      setNews(response);
    });
  }, []);

  if (!news) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Últimas Notícias</Text>
      <ScrollView style={styles.scrollView}>
        {map(news, (data) => (
          <New key={data.id} data={data} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 10,
  },
  scrollView: {
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});
