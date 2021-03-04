import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../../services/api';

export default function Registro({route, navigation}) {
    
    useEffect(() => {
        //console.log(parseInt(route.params.id));
        setIdImovel(parseInt(route.params.id));
        loadImovel();
        loadRegistros();
    }, []);

    const [id_imovel, setIdImovel] = useState("");

    const [imovel, setImovel] = useState({});
    const [registros, setRegistros] = useState([]);
    const [dividas, setDividas] = useState([]);

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
        try {
            console.log(id_imovel);
            const response = await api.post("/imovel", {id: id_imovel});
            setImovel(response.data);
            loadRegistros();
            loadRegistros();
            loadDividas();
            loadDividas();
            //window.location.reload();
        } catch (error) {
            Alert.alert(error);
        }
    }

    const loadRegistros = async () => {
        try {
            console.log(id_imovel);
            const response = await api.post("/registros/list", {id_imovel: id_imovel});
            setRegistros(response.data);
        } catch (error) {
            Alert.alert(error);
        }
    }

    const loadDividas = async () => {
        try {
            const ano = new Date().getFullYear();
            let anos = [];
            let pagos = [];
            for (let index = ano; index >= ano-11; index--) {
                anos.push(index);
            }
            
            const response = await api.post("/registros/list", {id_imovel: id_imovel});
            response.data.map((registro) => {
                pagos.push(registro.ano);
            });
            anos = anos.filter((ano) => {
                if (pagos.includes(ano)) {
                    return false;
                }else{
                    return true;
                }
            });
            setDividas(anos);
            console.log(dividas);
        } catch (error) {
            Alert.alert(error);
        }
    }

    return(
        <View style={styles.container} extraData={imovel}>
            
            <TouchableOpacity 
                style={styles.buttonProp} 
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.textButtonProp}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                            style={styles.buttonProp} 
                            onPress={() => {loadImovel(); loadImovel();}}
                        >
                            <Text style={styles.textButtonProp}>Carregar</Text>
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
                        <Text style={styles.infoText}>{imovel.situacao}</Text>
                    </View>
                    <Text style={styles.label}>Inicio da dívida:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{imovel.inicio}</Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.buttonEditar} 
                        onPress={() => navigation.navigate('UpdateImovel', { id:id_imovel })}
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

                    <FlatList 
                        keyExtractor={item => item.id.toString()}
                        data={registros}
                        showsHorizontalScrollIndicator={false} 
                        extraData={registros}
                        renderItem={({item}) => (
                            <TouchableOpacity 
                                style={styles.buttonPagamento} 
                                onPress={() => navigation.navigate('Pagamento', {id_registro: item.id})}
                            >
                                <Text style={styles.textRegistro}>{item.ano} {item.talao}</Text>
                            </TouchableOpacity>
                        )}
                    /> 
                    
                </View>

                <View style={styles.boxDividas}>
                    <ScrollView  showsHorizontalScrollIndicator={false}>
                    <Text style={styles.label}>Dividas:</Text>

                    <FlatList 
                        keyExtractor={item => item.toString()}
                        data={dividas}
                        showsHorizontalScrollIndicator={false} 
                        extraData={dividas}
                        renderItem={({item}) => (
                            <View style={styles.infoRegis}>
                                <Text style={styles.textRegistro}>{item}</Text>
                            </View>
                        )}
                    /> 
                    </ScrollView>
                </View>
            </ScrollView>

        </View>
    )
}