import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../../services/api';

export default function Registro({route, navigation}) {
    
    useEffect(() => {
        loadRegistros();
        loadImovel();
    }, []);

    const id_imovel = parseInt(route.params.id);

    const [imovel, setImovel] = useState({});
    const [registros, setRegistros] = useState([]);

    const [ano, setAno] = useState("");
    const [mes, setMes] = useState("");
    const [talao, setTalao] = useState("");
    const [anotacao, setAnotacao] = useState("");

    async function handleRegistrar(){
        try {
            await api.post('/registros', {
                id_imovel,
                ano,
                mes,
                talao,
                anotacao
            });
            Alert.alert("Registrado!")
        } catch (error) {
            Alert.alert(error);
        }
    }

    const loadImovel = async () => {
        const response = await api.post("/imovel", {id: id});
        setImovel(response.data);
        console.log(response.data);
    }

    const loadRegistros = async () => {
        try {
            const response = await api.get("/registros/list", {id_imovel});
            setRegistros(response);
        } catch (error) {
            Alert.alert(error);
        }
    }

    return(
        <View style={styles.container} extraData={imovel}>
            
            <TouchableOpacity 
                style={styles.buttonProp} 
                onPress={() => navigation.navigate("Imoveis")}
            >
                <Text style={styles.textButtonProp}>Voltar</Text>
            </TouchableOpacity>

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.box}> 

                    <Text style={styles.label}>Rua:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{imovel.rua}</Text>
                    </View>
                    <Text style={styles.label}>Nº:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{imovel.num}</Text>
                    </View>
                    <Text style={styles.label}>Local do terreno:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{imovel.local}</Text>
                    </View>
                    <Text style={styles.label}>Tamanho:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{imovel.tamanho}</Text>
                    </View>
                    <Text style={styles.label}>Proprietário:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{imovel.proprietario}</Text>
                    </View>
                    <Text style={styles.label}>Situação:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>Falta os último 10 anos</Text>
                    </View>
                    <Text style={styles.label}>Inicio da dívida:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{imovel.inicio}</Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.buttonEditar} 
                        onPress={() => navigation.navigate('UpdateImovel', { id:id })}
                    >
                        <Text style={styles.textButtonEdit}>Editar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.boxAnot}>
                    <Text style={styles.label}>Anotação:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{imovel.anotacao}</Text>
                    </View>
                </View>

                <View style={styles.box}>
                
                    <Text style={styles.label}>Registros:</Text>

                    <View style={styles.boxNewRegistro}>
                        <View style={styles.newRegis}>
                            <TextInput placeholder={"Ano"} style={styles.ano} value={ano} onChangeText={(text)=>{setAno(text)}}></TextInput>
                            <TextInput placeholder={"Mês"} style={styles.regis} value={mes} onChangeText={(text)=>{setMes(text)}}></TextInput>
                        </View>
                        <View style={styles.newRegis}>
                            <TextInput placeholder={"Talao"} style={styles.regis} value={talao} onChangeText={(text)=>{setTalao(text)}}></TextInput>
                        </View>

                        <Text style={styles.label}>Anotação:</Text>
                        <TextInput placeholder={"Anotação"} style={styles.inputAnot} value={anotacao} onChangeText={(text)=>{setAnotacao(text)}}/>

                        <TouchableOpacity 
                            style={styles.buttonRegis} 
                            onPress={handleRegistrar}
                        >
                            <Text style={styles.textButtonRegis}>Salvar</Text>
                        </TouchableOpacity> 

                    </View>

                            <TouchableOpacity 
                                style={styles.buttonPagamento} 
                                onPress={() => navigation.navigate('Pagamento')}
                            >
                                <Text style={styles.textRegistro}>2019 PAG 41</Text>
                            </TouchableOpacity>
                    
                </View>

                <View style={styles.boxDividas}>
                    <ScrollView  showsHorizontalScrollIndicator={false}>
                    <Text style={styles.label}>Dividas:</Text>

                    <View style={styles.infoRegis}>
                        <Text style={styles.textRegistro}>2019</Text>
                    </View>

                    <View style={styles.infoRegis}>
                        <Text style={styles.textRegistro}>2018</Text>
                    </View>

                    <View style={styles.infoRegis}>
                        <Text style={styles.textRegistro}>2017</Text>
                    </View>

                    <View style={styles.infoRegis}>
                        <Text style={styles.textRegistro}>2016</Text>
                    </View>

                    <View style={styles.infoRegis}>
                        <Text style={styles.textRegistro}>2015</Text>
                    </View>

                    <View style={styles.infoRegis}>
                        <Text style={styles.textRegistro}>2014</Text>
                    </View>

                    <View style={styles.infoRegis}>
                        <Text style={styles.textRegistro}>2013</Text>
                    </View>

                    <View style={styles.infoRegis}>
                        <Text style={styles.textRegistro}>2012</Text>
                    </View>

                    <View style={styles.infoRegis}>
                        <Text style={styles.textRegistro}>2011</Text>
                    </View>

                    <View style={styles.infoRegis}>
                        <Text style={styles.textRegistro}>2010</Text>
                    </View>
                    </ScrollView>
                </View>
            </ScrollView>

        </View>
    )
}