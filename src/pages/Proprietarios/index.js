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
            </ScrollView>
        </View>    
    )
}