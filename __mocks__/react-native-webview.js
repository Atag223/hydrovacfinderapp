import React from 'react';
import { View } from 'react-native';

export const WebView = (props) => {
  return React.createElement(View, { testID: 'webview-mock', ...props });
};

export default WebView;
