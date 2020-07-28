
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import employeeData from "./employeeData";

const employeeForm = (props) => {

    const [, setState] = useState();
    const [editAble, setEditAble] = useState();
    const [employeeId, setEmployeeId] = useState();
    const [employeeName, setEmployeeName] = useState();
    const [employeeLastName, setEmployeeLastName] = useState();

    useEffect(() => {
        const { params } = props.route;
        if (params && params.editAble) {
            setEmployeeId(params.item.id);
            setEmployeeName(params.item.employeeName);
            setEmployeeLastName(params.item.employeeLastName)
        }
        setEditAble(params.editAble);
    }, [])

    const handleEmployeeName = (text) => {
        setEmployeeName(text);
    }

    const handleEmployeeLastName = (text) => {
        setEmployeeLastName(text);
    }

    const onAddEmployee = () => {
        if (employeeName && employeeLastName) {
            var randomNumber = Math.floor(Math.random() * 100) + 1;
            let employee = {
                id: randomNumber, employeeName, employeeLastName
            }
            props.route.params && props.route.params.onAddEmployee(employee);
            props.navigation.goBack();
        } else {
            alert('Please all fields required')
        }
    }

    const onEditEmployee = () => {
        if (employeeName && employeeLastName) {
            let employee = {
                id: employeeId, employeeName, employeeLastName
            }
            props.route.params && props.route.params.onEditEmployee(employee);
            props.navigation.goBack();
        } else {
            alert('Please all fields required')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Enter Employee name"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                value={employeeName}
                onChangeText={(text) => handleEmployeeName(text)} />

            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Enter Employee Last Name"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                value={employeeLastName}
                onChangeText={(text) => handleEmployeeLastName(text)} />

            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => editAble ? onEditEmployee() : onAddEmployee()}>
                <Text style={styles.submitButtonText}>{editAble ? 'Edit' : 'Add' } Employee</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    input: {
        margin: 15,
        height: 40,
        paddingLeft: 15,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',        
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
});

export default employeeForm;