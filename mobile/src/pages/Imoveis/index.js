import React, {useState, useEffect} from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';

export default function Imoveis({route, navigation}) {
    
    //const navigation = useNavigation();
    const proprietario = route.params.proprietario;

    const [imoveis, setImoveis] = useState([]);
    const [imoveisEspecificos, setImoveisEspecificos] = useState([]);
    const [ids, setIds] = useState([]);

    const loadImoveis = async () => {
        const response = await api.get('/imoveis');
        setImoveis(response.data);
        imoveis.map((imovel) => {
            if (!ids.includes(imovel.id) && imovel.proprietario==proprietario) {
                imoveisEspecificos.push(imovel);
                ids.push(imovel.id);
            }
        })
        console.log(imoveisEspecificos);
    }

    useEffect(() => {
        loadImoveis();
    }, []);

    return(
        <>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <View style={styles.container}>

                    <View style={styles.buttons}>
                        <TouchableOpacity 
                            style={styles.buttonNew} 
                            onPress={() => navigation.navigate("Proprietarios")}
                        >
                            <Text style={styles.textButtonNew}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonNew} 
                            onPress={() => {loadImoveis(); loadImoveis();}}
                        >
                            <Text style={styles.textButtonNew}>Carregar</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList 
                        keyExtractor={item => item.id.toString()}
                        data={imoveisEspecificos}
                        showsHorizontalScrollIndicator={false} 
                        extraData={imoveisEspecificos}
                        renderItem={({item}) => (
                                <TouchableOpacity 
                                    style={styles.buttonProp} 
                                    onPress={() => navigation.navigate("Registros", {id: item.id})}
                                >
                                    <Text style={styles.textButtonProp}>{item.num.toString()}</Text>
                                </TouchableOpacity>
                        )}
                    /> 

                                       
                </View>
            </ScrollView>
        </>
    )
}