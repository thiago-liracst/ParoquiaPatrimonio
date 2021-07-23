import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';

import styles from './styles';

import api from '../../../services/api.js';

export default function Pagamento({route, navigation}) {

    const [id_registro, setIdRegistro] = useState("");
    const [registro, setRegistro] = useState({});

    useEffect(() => {
        setIdRegistro(parseInt(route.params.id_registro));
        //console.log(id_registro)
        loadRegistro();
    }, []);

    const loadRegistro = async () => {
        try {
            //console.log(id_registro);
            const response = await api.post("/registro", {id_registro});
            //console.log(response.data);
            setRegistro(response.data);
        } catch (error) {
            Alert.alert(error);
        }
    }

    const deletarRegistro = async (id) => {
        try {
            await api.post("/registros/delete", {id}).then(() => {
                Alert.alert("Registro deletado!");
            }).catch(() => {
                throw new Error("Falha ao deletar regsitro");
            })
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <View style={styles.container}>
            
            <TouchableOpacity 
                style={styles.buttonProp} 
                onPress={() => navigation.navigate("Registros")}
            >
                <Text style={styles.textButtonProp}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.buttons}>
                        <TouchableOpacity 
                            style={styles.buttonNew} 
                            onPress={() => {loadRegistro(); loadRegistro();}}
                        >
                            <Text style={styles.textButtonNew}>Carregar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.buttonNew} 
                            onPress={() => {deletarRegistro(registro.id)}}
                        >
                            <Text style={styles.textButtonNew}>Deletar</Text>
                        </TouchableOpacity>
                    </View>

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.box}> 
                    <Text style={styles.label}>ID Registro:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{registro.id}</Text>
                    </View>
                    <Text style={styles.label}>ID Terreno:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{registro.id_imovel}</Text>
                    </View>
                    <Text style={styles.label}>Ano:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{registro.ano}</Text>
                    </View>
                    <Text style={styles.label}>Mês:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{registro.mes}</Text>
                    </View>
                    <Text style={styles.label}>Talão:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{registro.talao}</Text>
                    </View>
                </View>

                <View style={styles.boxAnot}>
                    <Text style={styles.label}>Anotação:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{registro.anotacao}</Text>
                    </View>
                </View>

            </ScrollView>

        </View>
    )
}