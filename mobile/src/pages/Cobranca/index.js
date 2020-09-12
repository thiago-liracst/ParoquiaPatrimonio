import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Cobranca() {
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            
            <TouchableOpacity 
                style={styles.buttonProp} 
                onPress={() => navigation.navigate("Ruas")}
            >
                <Text style={styles.textButtonProp}>Voltar</Text>
            </TouchableOpacity> 

            <ScrollView showsHorizontalScrollIndicator={false}>
                
                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>Fulano</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>Ciclano</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>Beltrano</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>Fulano</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}