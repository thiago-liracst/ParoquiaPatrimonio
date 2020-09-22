import React, {useState, useEffect} from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';

export default function Ruas() {
    
    const navigation = useNavigation();

    const [imoveis, setImoveis] = useState([]);
    const [ruas, setRuas] = useState([]);

    const loadRuas = async () => {
        const response = await api.get('/imoveis');
        setImoveis(response.data);
        imoveis.map((imovel) => {
            if (!ruas.includes(imovel.rua)) {
                ruas.push(imovel.rua);
            }
        })
        console.log(ruas);
    }

    useEffect(() => {
        loadRuas();
    }, []);

    return(
        <>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <View style={styles.container}>
                
                    <TouchableOpacity 
                            style={styles.buttonNew} 
                            onPress={() => {loadRuas()}}
                    >
                            <Text style={styles.textButtonNew}>Carregar</Text>
                    </TouchableOpacity>

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

                    <FlatList 
                        keyExtractor={item => item.toString()}
                        data={ruas}
                        showsHorizontalScrollIndicator={false} 
                        extraData={ruas}
                        renderItem={({item}) => (
                                <TouchableOpacity 
                                    style={styles.buttonProp} 
                                    onPress={() => navigation.navigate("Proprietarios")}
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