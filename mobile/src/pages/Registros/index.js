import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../../services/api';
export default function Registro({route, navigation}) {
    
    useEffect(() => {
        loadImovel();
    }, []);
    //const navigation = useNavigation();
    const {id} = route.params;

    const [imovel, setImovel] = useState({rua: "="});

    const [ano, setAno] = useState();
    const [regis, setRegis] = useState();

    const loadImovel = async () => {
        const response = await api.post("/imovel", {id: id});
        setImovel(response.data);
        console.log(response.data);
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
                        onPress={() => navigation.navigate('UpdateImovel')}
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
                            <TextInput placeholder={"Ano"} style={styles.ano} value={ano} onChange={(text)=>{setAno(text)}}></TextInput>
                            <TextInput placeholder={"Registro"} style={styles.regis} value={regis} onChange={(text)=>{setRegis(text)}}></TextInput>
                            <TouchableOpacity 
                                style={styles.buttonRegis} 
                                onPress={() => {}}
                            >
                                <Text style={styles.textButtonRegis}>Salvar</Text>
                            </TouchableOpacity> 
                        </View>

                        <Text style={styles.label}>Anotação:</Text>
                        <TextInput style={styles.inputAnot}/>

                    </View>

                    <TouchableOpacity 
                        style={styles.buttonPagamento} 
                        onPress={() => navigation.navigate('Pagamento')}
                    >
                        <Text style={styles.textRegistro}>2009: PAG 41 T</Text>
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