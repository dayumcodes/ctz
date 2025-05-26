import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://studio--calorie-tracker-7gp6v.us-central1.hosted.app/' }}
      style={{ flex: 1 }}
    />
  );
}
