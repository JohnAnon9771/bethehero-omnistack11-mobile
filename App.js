import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
