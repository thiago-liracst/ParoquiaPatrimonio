import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function Imoveis() {
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.buttonProp} 
                onPress={() => navigation.navigate("Proprietarios")}
            >
                <Text style={styles.textButtonProp}>Voltar</Text>
            </TouchableOpacity> 

            <ScrollView showsHorizontalScrollIndicator={false}>
                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Registros")}
                >
                    <Text style={styles.textButtonProp}>Imovel Nº 141</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>Imovel Imovel Nº 141 1ºA</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}