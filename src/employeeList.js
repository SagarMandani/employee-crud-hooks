
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import employeeData from "./employeeData";

const employeeList = (props) => {

  const [employeeList, setEmployeeList] = useState(employeeData);

  const onAddEmployee = (payload) => {
    setEmployeeList([...employeeList, payload]);
  }

  const onDeleteEmployee = (id) => {
    const employees = employeeList.filter(
      employee => employee.id !== id
    );
    setEmployeeList(employees);
  }

  const onEditEmployee = (payload) => {
    const updatedEmployees = employeeList.map(employee => {
      if (employee.id === payload.id) {
        return payload;
      }
      return employee;
    });
    setEmployeeList(updatedEmployees);
  }

  return (
    <View style={{ padding: 20 }}>
      <TouchableOpacity
        style={styles.addemp}
        onPress={() => props.navigation.navigate('EmployeeForm', { onAddEmployee: (employee) => onAddEmployee(employee), editAble: false })}>
        <Text style={styles.submitButtonText}>Add Employee</Text>
      </TouchableOpacity>
      <Text style={styles.viewMargin}>Employee List</Text>
      <FlatList
        style={styles.viewMargin}
        data={employeeList}
        extraData={employeeList}
        renderItem={({ item, index }) => (
          <View key={index} style={{ justifyContent: 'center', marginBottom: 10 }}>
            <Text>{item.id}</Text>
            <Text>{item.employeeName} {item.employeeLastName}</Text>
            <View style={styles.btnView}>
              <TouchableOpacity
                style={[styles.editDeleteBtn, { marginRight: 10 }]}
                onPress={() => props.navigation.navigate('EmployeeForm', { onEditEmployee: (employee) => onEditEmployee(employee), editAble: true, item })}>
                <Text style={styles.submitButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.editDeleteBtn}
                onPress={() => onDeleteEmployee(item.id)}>
                <Text style={styles.submitButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addemp: {
    backgroundColor: '#7a42f4',
    padding: 10,
    height: 40,
  },
  viewMargin: {
    marginTop: 10
  },
  btnView: {
    flexDirection: 'row',
    marginTop: 10
  },
  editDeleteBtn: {
    flex: 0.5,
    backgroundColor: '#7a42f4',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default employeeList;