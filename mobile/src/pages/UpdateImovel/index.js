import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView, Alert } from 'react-native';

import styles from './styles';

import api from '../../../services/api';

export default function UpdateImovel({route, navigation}) {
    
    useEffect(() => {
        setId(parseInt(route.params.id));
        loadImovel();
        loadImovel();
        loadImovel();
    }, []);

    const [imovel, setImovel] = useState({});

    const [id, setId] = useState("");
    const [rua, setRua] = useState(imovel.rua);
    const [num, setNumero] = useState(imovel.num);
    const [local, setLocal] = useState(imovel.local);
    const [tamanho, setTamanho] = useState(imovel.tamanho);
    const [proprietario, setProprietario] = useState(imovel.proprietario);
    const [situacao, setSituacao] = useState(imovel.situacao);
    const [inicio, setInicio] = useState(imovel.inicio);
    const [anotacao, setAnot] = useState(imovel.anotacao);

    const loadImovel = async () => {
        try {
            console.log(id);
            const response = await api.post("/imovel", {id: id});
            setImovel(response.data);
        } catch (error) {
            Alert.alert(error);
        }
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

            <TouchableOpacity 
                            style={styles.buttonProp} 
                            onPress={() => {loadImovel(); loadImovel();}}
                        >
                            <Text style={styles.textButtonProp}>Carregar</Text>
                        </TouchableOpacity>

            
            <View style={styles.box}> 
            <ScrollView  showsHorizontalScrollIndicator={false}>
                    <Text style={styles.label}>Rua:</Text>
                    <TextInput onChangeText={(rua)=>{setRua(rua)}} 
                    defaultValue={imovel.rua} style={styles.inputLabel}/>

                    <Text style={styles.label}>Nº:</Text>
                    <TextInput onChangeText={(num)=>{setNumero(num)}} 
                    defaultValue={imovel.num} style={styles.inputLabel}/>

                    <Text style={styles.label}>Local do terreno:</Text>
                    <TextInput onChangeText={(local)=>{setLocal(local)}} 
                    defaultValue={imovel.local} style={styles.inputLabel}/>

                    <Text style={styles.label}>Tamanho:</Text>
                    <TextInput onChangeText={(tamanho)=>{setTamanho(tamanho)}} 
                    defaultValue={imovel.tamanho} style={styles.inputLabel}/>

                    <Text style={styles.label}>Proprietário:</Text>
                    <TextInput onChangeText={(proprietario)=>{setProprietario(proprietario)}} 
                    defaultValue={imovel.proprietario} style={styles.inputLabel}/>

                    <Text style={styles.label}>Situação:</Text>
                    <TextInput onChangeText={(situacao)=>{setSituacao(situacao)}} 
                    defaultValue={imovel.situacao} style={styles.inputLabel}/>

                    <Text style={styles.label}>Início da dívida:</Text>
                    <TextInput onChangeText={(inicio)=>{setInicio(inicio)}} 
                    defaultValue={imovel.inicio} style={styles.inputLabel}/>

                    <Text style={styles.label}>Anotação:</Text>
                    <TextInput onChangeText={(anotacao)=>{setAnot(anotacao)}} 
                    defaultValue={imovel.anotacao} style={styles.inputAnot}/>

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