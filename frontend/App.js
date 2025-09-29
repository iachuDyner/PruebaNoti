import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SendEmailButton from './sendEmailButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SendEmailButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});