import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function UpdateImovel() {
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            
            <TouchableOpacity 
                style={styles.buttonProp} 
                onPress={() => navigation.navigate("Registros")}
            >
                <Text style={styles.textButtonProp}>Voltar</Text>
            </TouchableOpacity>

            
            <View style={styles.box}> 
                <ScrollView  showsHorizontalScrollIndicator={false}>
                    <Text style={styles.label}>Rua:</Text>
                    <TextInput style={styles.inputLabel}/>

                    <Text style={styles.label}>Nº:</Text>
                    <TextInput style={styles.inputLabel}/>

                    <Text style={styles.label}>Local do terreno:</Text>
                    <TextInput style={styles.inputLabel}/>

                    <Text style={styles.label}>Tamanho:</Text>
                    <TextInput style={styles.inputLabel}/>

                    <Text style={styles.label}>Proprietário:</Text>
                    <TextInput style={styles.inputLabel}/>

                    <Text style={styles.label}>Situação:</Text>
                    <TextInput style={styles.inputLabel}/>

                    <Text style={styles.label}>Anotação:</Text>
                    <TextInput style={styles.inputAnot}/>

                    <TouchableOpacity 
                        style={styles.buttonEditar} 
                        onPress={() => {}}
                    >
                        <Text style={styles.textButtonEdit}>Salvar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            

        </View>
    )
}