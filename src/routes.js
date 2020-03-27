import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './screens/Incidents';
import Details from './screens/Details';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="incidents" component={Incidents} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
}
