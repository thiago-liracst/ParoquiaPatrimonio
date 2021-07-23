import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView, Alert } from 'react-native';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';

export default function NewImovel({route, navigation}) {
    
    //const navigation = useNavigation();

    const [rua, setRua] = useState("");
    const [num, setNumero] = useState("");
    const [local, setLocal] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [proprietario, setProprietario] = useState("");
    const [situacao, setSituacao] = useState("");
    const [inicio, setInicio] = useState("")
    const [anotacao, setAnot] = useState("");

    useEffect(() => {
        try {
            const ruaaux = route.params.rua;
            setRua(ruaaux)
        } catch (error) {
            console.log(error)
        }
    }, []);

    async function handleCreate(){
        try {
            await api.post('/imoveis', {
                rua: rua.toUpperCase(),
                num,
                local,
                tamanho,
                proprietario: proprietario.toUpperCase(),
                situacao,
                inicio,
                anotacao,
            });
            navigation.navigate("Ruas");
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
                        onPress={handleCreate}
                    >
                        <Text style={styles.textButtonEdit}>Salvar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            

        </View>
    )
}