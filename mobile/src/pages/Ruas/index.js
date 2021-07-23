import React, {useState, useEffect} from 'react';
import { View, ScrollView, TouchableOpacity, Text, Alert, TextInput } from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';

export default function Ruas() {
    
    useEffect(() => {
        loadRuas();
    }, []);

    const navigation = useNavigation();

    const [imoveis, setImoveis] = useState([]);
    const [ruas, setRuas] = useState([]);
    const [search, setSearch] = useState("");

    const loadRuas = async () => {
        try {
            const response = await api.get('/imoveis');
            setImoveis(await response.data);
            imoveis.map((imovel) => {
                if (!ruas.includes(imovel.rua)) {
                    ruas.push(imovel.rua);
                }
            })
        } catch (error) {
            Alert.alert(error);
        }
        
    }

    const searchArray = (prop, search) => {
        return prop.filter((item) => {
            return item.toUpperCase().match(search.toUpperCase());
        });
    }

    return(
        <>
            <TouchableOpacity 
                style={styles.buttonLoad} 
                onPress={() => {loadRuas()}}
            >
                <Text style={styles.textButtonNew}>Carregar</Text>
            </TouchableOpacity>

                <View style={styles.container}>
                    <ScrollView showsHorizontalScrollIndicator={false}>    
                    

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

                    <View style={{
                        marginLeft: 12,
                        backgroundColor: "white",
                        borderRadius: 8,
                        height: 40,
                        justifyContent: 'center',
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                        <TextInput 
                            style={{marginLeft: 10}} 
                            placeholder={"Buscar rua"}
                            onChangeText={(e) => setSearch(e)}
                            value={search}
                        />
                    </View>

                    <FlatList 
                        keyExtractor={item => item.toString()}
                        data={searchArray(ruas, search)}
                        showsHorizontalScrollIndicator={false} 
                        extraData={ruas}
                        renderItem={({item}) => (
                                <TouchableOpacity 
                                    style={styles.buttonProp} 
                                    onPress={() => navigation.navigate("Proprietarios", {rua:item.toString(), imoveis:imoveis})}
                                >
                                    <Text style={styles.textButtonProp}>{item.toString()}</Text>
                                </TouchableOpacity>
                        )}
                    /> 

</ScrollView>                           
                </View>
            
        </>
    )

    /*

    */
}