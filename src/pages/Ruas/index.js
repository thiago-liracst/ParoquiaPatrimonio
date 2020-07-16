import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function Ruas() {
    
    const navigation = useNavigation();

    return(
        <>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                
                <View style={styles.buttons}>
                    <TouchableOpacity 
                        style={styles.buttonNew} 
                        onPress={() => navigation.navigate('Cobranca')}
                    >
                        <Text style={styles.textButtonNew}>Cobranças do mês</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonNew} 
                        onPress={() => navigation.navigate('NewImovel')}
                    >
                        <Text style={styles.textButtonNew}>Novo Imóvel</Text>
                    </TouchableOpacity>
                </View>

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Amélio Carneiro</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Aderbal Cruz</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Trav. Aderbal Cruz</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Abdias Machado</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Boa vista</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Trav. Boa vista</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Brasiliano da Costa</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Cloves Bezerra</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua 5 de Agosto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Cicero Moura</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Deocleciano Guedes</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Davila Lins</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua 19 de Novembro</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Flávio Ribeiro</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Trav. Flávio Ribeiro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Feliciano Pedrosa</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Francisco Carneiro</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Gregorio Tomaz de Aquino</Text>
                    </TouchableOpacity>                      
                </View>
            </ScrollView>
        </>
    )
}