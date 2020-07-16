import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Proprietarios() {
    
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
                    <Text style={styles.textButtonProp}>ALICE MARIA DA CONCEIÇÃO</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>JOSÉ JACINTO DE OLIVEIRA</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>ANDERSO CLEITON BATISTA DE OLIVEIRA</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>JOSÉ FIDELIS FILHO</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>MARIA CRISTINA BARBOSA DA SILVA</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>ANTONIO RAMALHO DE FREITAS</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>ANTONIO MENDONÇA DA COSTA</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>PEDRO FERREIRA DE LIMA </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>MARIA FELIX DA SILVA</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>MANOEL TEODOSIO DA SILVA</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>JOSÉ AVELINO DA SILVA</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonProp} 
                    onPress={() => navigation.navigate("Imoveis")}
                >
                    <Text style={styles.textButtonProp}>LUIS DOS SANTOS</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>    
    )
}