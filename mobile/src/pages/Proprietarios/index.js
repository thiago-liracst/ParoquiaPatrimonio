import React, {useState, useEffect} from 'react';
import { View, ScrollView, TouchableOpacity, TextInput, Text } from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';

import api from '../../../services/api';

export default function Proprietarios({route, navigation}) {
    
    //const navigation = useNavigation();

    const [imoveis, setImoveis] = useState([]);
    const [proprietarios, setProprietarios] = useState([]);
    const {rua} = route.params;
    const [search, setSearch] = useState("");

    
    const loadProprietarios = async () => {
        const response = await api.get('/imoveis');
        setImoveis(response.data);
        imoveis.map((imovel) => {
            if (!proprietarios.includes(imovel.proprietario) && imovel.rua === rua) {
                proprietarios.push(imovel.proprietario);
            }
        })
    }
    
    useEffect(() => {
        loadProprietarios();
    }, []);
    
    const searchArray = (prop, search) => {
        return prop.filter((item) => {
            return item.toUpperCase().match(search.toUpperCase());
        });
    }
    
    return(
        <>
            
                <View style={styles.container}>
                <Text style={{
                    fontSize: 30,
                    alignSelf: 'center',
                    marginTop: 10,
                }}>Proprietários</Text>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <View style={styles.buttons}>
                        <TouchableOpacity 
                            style={styles.buttonNew} 
                            onPress={() => navigation.navigate("Ruas")}
                        >
                            <Text style={styles.textButtonNew}>Ruas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonNew} 
                            onPress={() => {loadProprietarios(); loadProprietarios();}}
                        >
                            <Text style={styles.textButtonNew}>Carregar</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{
                        marginLeft: 12,
                        backgroundColor: "white",
                        borderRadius: 8,
                        height: "0.5%",
                        justifyContent: 'center',
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                        <TextInput 
                            style={{marginLeft: 10}} 
                            placeholder={"Buscar usuário"}
                            onChangeText={(e) => setSearch(e)}
                            value={search}
                        />
                    </View>

                    <FlatList 
                        keyExtractor={item => item.toString()}
                        data={searchArray(proprietarios, search)}
                        showsHorizontalScrollIndicator={false} 
                        extraData={proprietarios}
                        renderItem={({item}) => (
                            <TouchableOpacity 
                                style={styles.buttonProp} 
                                onPress={
                                    () => {
                                        setSearch("");
                                        navigation.navigate("Imoveis", {proprietario: item.toString()})
                                    }
                                }
                            >
                                <Text style={styles.textButtonProp}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    /> 
                    </ScrollView>                 
                </View>
            
        </>
    )
}