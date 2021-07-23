import React, {useState, useEffect} from 'react';
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';

export default function Proprietarios({route, navigation}) {
    
    //const navigation = useNavigation();

    const [imoveis, setImoveis] = useState(route.params.imoveis);
    const [proprietarios, setProprietarios] = useState([]);
    const {rua} = route.params;
    const [search, setSearch] = useState("");

    const loadProprietarios = async () => {
        const response = await api.get('/imoveis');
        setImoveis(response.data);

        imoveis.map((imovel) => {
            const imv = {num: imovel.num, proprietario:imovel.proprietario}
            if (!proprietarios.includes(imv) && imovel.rua === rua) {
                proprietarios.push(imv);
            }
        })

    }

    const searchArray = (prop, search) => {
        return prop.filter((item) => {
            return item.num.toString().toUpperCase().match(search.toUpperCase());
        });
    }

    useEffect(() => {
        loadProprietarios();
    }, []);

    return(
        <>
            
                <View style={styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false}>
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

                    <TouchableOpacity 
                        style={styles.buttonNewImovel} 
                        onPress={() => navigation.navigate("NewImovel", {rua: rua})}
                    >
                        <Text style={styles.textButtonNew}>Novo Imóvel</Text>
                    </TouchableOpacity>

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
                            placeholder={"Buscar número"}
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
                                    onPress={() => navigation.navigate("Imoveis", {proprietario: item.proprietario.toString()})}
                                >
                                    <Text style={styles.textButtonProp}>{item.num.toString()+" - "+item.proprietario.toString()}</Text>
                                </TouchableOpacity>
                        )}
                    /> 

</ScrollView>                 
                </View>
            
        </>
    )
}