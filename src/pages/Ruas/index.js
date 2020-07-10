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
                <TouchableOpacity 
                    style={styles.buttonNew} 
                    onPress={() => navigation.navigate('NewImovel')}
                >
                    <Text style={styles.textButtonNew}>Novo Imóvel</Text>
                </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Fulano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Ciclano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Beltrano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Fulano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Ciclano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Beltrano</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Fulano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Ciclano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Beltrano</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Fulano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Ciclano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Beltrano</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Fulano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Ciclano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Beltrano</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Fulano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Ciclano</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.buttonProp} 
                        onPress={() => navigation.navigate("Proprietarios")}
                    >
                        <Text style={styles.textButtonProp}>Rua Beltrano</Text>
                    </TouchableOpacity>                      
                </View>
            </ScrollView>
        </>
    )
}