import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import api from '../../../services/api';

export default function Cobranca() {
    
    const navigation = useNavigation();

    const [registros, setRegistros] = useState([]);

    const imoveisASeremCobrados = [];
    const cobrancas = [];

    useEffect(() => {
        loadRegistros();
    }, []);

    async function loadRegistros() {
        try {

            var month = new Date().getMonth()+1;
            var year = new Date().getFullYear();

            await api.get('/registros').then((response) => {
                response.data.map((registro) => {
                    if (!imoveisASeremCobrados.includes(registro.id_imovel) && registro.mes === month && registro.ano != year) {
                        imoveisASeremCobrados.push(registro.id_imovel); 
                    }
                });
            });
            
            //console.log(imoveisASeremCobrados)
            await loadImoveis();

        } catch (error) {
            Alert.alert(error);
        }
    }

    async function loadImoveis() {
        try {
            //console.log("Chegouuu")
            imoveisASeremCobrados.map(async (imovel) => {
                //console.log(imovel)
                await api.post("/imovel", {id: imovel}).then((response) => {
                    //console.log(response.data)
                    if (!registros.includes(response.data)) {
                        cobrancas.push(response.data)
                        setRegistros(cobrancas)    
                    }
                    
                });
            })
            
            //console.log(registros)    
        } catch (error) {
            Alert.alert(error);
        }
    }

    return(
        <View style={styles.container}>
            
            <TouchableOpacity 
                style={styles.buttonProp} 
                onPress={() => navigation.navigate("Ruas")}
            >
                <Text style={styles.textButtonProp}>Voltar</Text>
            </TouchableOpacity> 

            <ScrollView showsHorizontalScrollIndicator={false}>
                
                <FlatList 
                        keyExtractor={item => item.id.toString()}
                        data={registros}
                        showsHorizontalScrollIndicator={false} 
                        extraData={registros}
                        renderItem={({item}) => (
                                <TouchableOpacity 
                                    style={styles.buttonProp} 
                                    onPress={() => navigation.navigate("Registros", {id: item.id})}
                                >
                                    <Text style={styles.textButtonProp}>{item.rua +" | "+item.proprietario+" | "+item.num}</Text>
                                </TouchableOpacity>
                        )}
                    />

            </ScrollView>
        </View>
    )
}