import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView, Alert } from 'react-native';

import styles from './styles';

import api from '../../../services/api';

export default function UpdateImovel({route, navigation}) {
    
    useEffect(() => {
        loadImovel();
    }, []);

    const [imovel, setImovel] = useState([]);

    const {id} = route.params;
    const [rua, setRua] = useState(imovel.rua);
    const [num, setNumero] = useState(imovel.num);
    const [local, setLocal] = useState(imovel.local);
    const [tamanho, setTamanho] = useState(imovel.tamanho);
    const [proprietario, setProprietario] = useState(imovel.proprietario);
    const [situacao, setSituacao] = useState(imovel.situacao);
    const [inicio, setInicio] = useState(imovel.inicio);
    const [anotacao, setAnot] = useState(imovel.anotacao);

    const loadImovel = async () => {
        const response = await api.post("/imovel", {id: id});
        setImovel(response.data);
    }

    async function handleUpdate(){
        try {
            await api.post('/imoveis/updateAll', {
                id,
                rua,
                num,
                local,
                tamanho,
                proprietario,
                situacao,
                inicio,
                anotacao,
            });
            Alert.alert("Atualizado!");
        } catch (error) {
            Alert.alert(error);
        }
    }

    return(
        <View style={styles.container}>
            
            <TouchableOpacity 
                style={styles.buttonProp} 
                onPress={() => navigation.navigate("Registros")}
            >
                <Text style={styles.textButtonProp}>Voltar</Text>
            </TouchableOpacity>

            
            <View style={styles.box}> 
            <ScrollView  showsHorizontalScrollIndicator={false}>
                    <Text style={styles.label}>Rua:</Text>
                    <TextInput onChangeText={(rua)=>{setRua(rua)}} 
                    value={rua} style={styles.inputLabel}/>

                    <Text style={styles.label}>Nº:</Text>
                    <TextInput onChangeText={(num)=>{setNumero(num)}} 
                    value={num} style={styles.inputLabel}/>

                    <Text style={styles.label}>Local do terreno:</Text>
                    <TextInput onChangeText={(local)=>{setLocal(local)}} 
                    value={local} style={styles.inputLabel}/>

                    <Text style={styles.label}>Tamanho:</Text>
                    <TextInput onChangeText={(tamanho)=>{setTamanho(tamanho)}} 
                    value={tamanho} style={styles.inputLabel}/>

                    <Text style={styles.label}>Proprietário:</Text>
                    <TextInput onChangeText={(proprietario)=>{setProprietario(proprietario)}} 
                    value={proprietario} style={styles.inputLabel}/>

                    <Text style={styles.label}>Situação:</Text>
                    <TextInput onChangeText={(situacao)=>{setSituacao(situacao)}} 
                    value={situacao} style={styles.inputLabel}/>

                    <Text style={styles.label}>Início da dívida:</Text>
                    <TextInput onChangeText={(inicio)=>{setInicio(inicio)}} 
                    value={inicio} style={styles.inputLabel}/>

                    <Text style={styles.label}>Anotação:</Text>
                    <TextInput onChangeText={(anotacao)=>{setAnot(anotacao)}} 
                    value={anotacao} style={styles.inputAnot}/>

                    <TouchableOpacity 
                        style={styles.buttonEditar} 
                        onPress={handleUpdate}
                    >
                        <Text style={styles.textButtonEdit}>Salvar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            

        </View>
    )
}