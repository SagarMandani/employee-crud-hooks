
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeList from './src/employeeList';
import EmployeeForm from './src/employeeForm';

const Stack = createStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator initialRouteName="EmployeeList">
        <Stack.Screen name="EmployeeList" component={EmployeeList} />
        <Stack.Screen name="EmployeeForm" component={EmployeeForm} />
      </Stack.Navigator>
  );
}

export default Router;