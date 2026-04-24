import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Term from '@/src/components/term';

const RegisterScreen = ({ navigation }) => {
    const navigation = () => {
        navigation.replace('RegisterForm', { terms: true });
    };

  return <Term isTermEnabled={true} callback={navigate} />;
};

export default RegisterScreen;