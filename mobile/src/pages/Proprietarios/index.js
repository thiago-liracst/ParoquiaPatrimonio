import React, {useState, useEffect} from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';

export default function Proprietarios({route, navigation}) {
    
    //const navigation = useNavigation();

    const [imoveis, setImoveis] = useState([]);
    const [proprietarios, setProprietarios] = useState([]);
    const {rua} = route.params;

    const loadProprietarios = async () => {
        const response = await api.get('/imoveis');
        setImoveis(response.data);
        imoveis.map((imovel) => {
            if (!proprietarios.includes(imovel.proprietario) && imovel.rua === rua) {
                proprietarios.push(imovel.proprietario);
            }
        })
        console.log(proprietarios);
    }

    useEffect(() => {
        loadProprietarios();
    }, []);

    return(
        <>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <View style={styles.container}>

                    <View style={styles.buttons}>
                        <TouchableOpacity 
                            style={styles.buttonNew} 
                            onPress={() => navigation.navigate("Ruas")}
                        >
                            <Text style={styles.textButtonNew}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonNew} 
                            onPress={() => {loadProprietarios(); loadProprietarios();}}
                        >
                            <Text style={styles.textButtonNew}>Carregar</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList 
                        keyExtractor={item => item.toString()}
                        data={proprietarios}
                        showsHorizontalScrollIndicator={false} 
                        extraData={proprietarios}
                        renderItem={({item}) => (
                                <TouchableOpacity 
                                    style={styles.buttonProp} 
                                    onPress={() => navigation.navigate("Imoveis", {proprietario: item.toString()})}
                                >
                                    <Text style={styles.textButtonProp}>{item.toString()}</Text>
                                </TouchableOpacity>
                        )}
                    /> 

                                       
                </View>
            </ScrollView>
        </>
    )
}