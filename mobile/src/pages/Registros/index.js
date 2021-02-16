import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../../services/api';
import { set } from 'react-native-reanimated';

export default function Registro({route, navigation}) {
    
    useEffect(() => {
        //console.log(parseInt(route.params.id));
        setIdImovel(parseInt(route.params.id));
        loadImovel();
        loadRegistros();
        loadRegistros();
        loadRegistros();
    }, []);

    const [id_imovel, setIdImovel] = useState("");

    const [imovel, setImovel] = useState({});
    const [registros, setRegistros] = useState([]);
    const [dividas, setDividas] = useState([]);

    const a2011 = "2011";
    const a2012 = "2012";
    const a2013 = "2013";
    const a2014 = "2014";
    const a2015 = "2015";
    const a2016 = "2016";
    const a2017 = "2017";
    const a2018 = "2018";
    const a2019 = "2019";
    const a2020 = "2020";

    const [talao2011, setTalao2011] = useState(null);
    const [talao2012, setTalao2012] = useState(null);
    const [talao2013, setTalao2013] = useState(null);
    const [talao2014, setTalao2014] = useState(null);
    const [talao2015, setTalao2015] = useState(null);
    const [talao2016, setTalao2016] = useState(null);
    const [talao2017, setTalao2017] = useState(null);
    const [talao2018, setTalao2018] = useState(null);
    const [talao2019, setTalao2019] = useState(null);
    const [talao2020, setTalao2020] = useState(null);

    const [anotacao2011, setAnotacao2011] = useState("");
    const [anotacao2012, setAnotacao2012] = useState("");
    const [anotacao2013, setAnotacao2013] = useState("");
    const [anotacao2014, setAnotacao2014] = useState("");
    const [anotacao2015, setAnotacao2015] = useState("");
    const [anotacao2016, setAnotacao2016] = useState("");
    const [anotacao2017, setAnotacao2017] = useState("");
    const [anotacao2018, setAnotacao2018] = useState("");
    const [anotacao2019, setAnotacao2019] = useState("");
    const [anotacao2020, setAnotacao2020] = useState("");

    const [destrinchador, setDestrinchador] = useState("");

    const cleanAll = () => {
        setTalao2011(null);
        setTalao2012(null);
        setTalao2013(null);
        setTalao2014(null);
        setTalao2015(null);
        setTalao2016(null);
        setTalao2017(null);
        setTalao2018(null);
        setTalao2019(null);
        setTalao2020(null);
    }

    const destrinche = (string) => {
        if(string.split('T').length.toString() === "2"){
            const splitted = string.split('T');
            setTalao2011(splitted[0] + 'T' + splitted[1]);
        }

        if(string.split('T').length.toString() === "3"){
            const splitted = string.split('T');
            setTalao2011(splitted[0] + 'T' + splitted[1].split('P')[0]);
            setTalao2012(splitted[0] + 'T' + splitted[2].split('P')[0]);
        }

        if(string.split('T').length.toString() === "4"){
            const splitted = string.split('T');
            setTalao2011(splitted[0] + 'T' + splitted[1].split('P')[0]);
            setTalao2012(splitted[0] + 'T' + splitted[2].split('P')[0]);
            setTalao2013(splitted[0] + 'T' + splitted[3].split('P')[0]);
        }

        if(string.split('T').length.toString() === "5"){
            const splitted = string.split('T');
            setTalao2011(splitted[0] + 'T' + splitted[1].split('P')[0]);
            setTalao2012(splitted[0] + 'T' + splitted[2].split('P')[0]);
            setTalao2013(splitted[0] + 'T' + splitted[3].split('P')[0]);
            setTalao2014(splitted[0] + 'T' + splitted[4].split('P')[0]);
        }
        if(string.split('T').length.toString() === "6"){
            const splitted = string.split('T');
            setTalao2011(splitted[0] + 'T' + splitted[1].split('P')[0]);
            setTalao2012(splitted[0] + 'T' + splitted[2].split('P')[0]);
            setTalao2013(splitted[0] + 'T' + splitted[3].split('P')[0]);
            setTalao2014(splitted[0] + 'T' + splitted[4].split('P')[0]);
            setTalao2015(splitted[0] + 'T' + splitted[5].split('P')[0]);
        }
        if(string.split('T').length.toString() === "7"){
            const splitted = string.split('T');
            setTalao2011(splitted[0] + 'T' + splitted[1].split('P')[0]);
            setTalao2012(splitted[0] + 'T' + splitted[2].split('P')[0]);
            setTalao2013(splitted[0] + 'T' + splitted[3].split('P')[0]);
            setTalao2014(splitted[0] + 'T' + splitted[4].split('P')[0]);
            setTalao2015(splitted[0] + 'T' + splitted[5].split('P')[0]);
            setTalao2016(splitted[0] + 'T' + splitted[6].split('P')[0]);
        }
        if(string.split('T').length.toString() === "8"){
            const splitted = string.split('T');
            setTalao2011(splitted[0] + 'T' + splitted[1].split('P')[0]);
            setTalao2012(splitted[0] + 'T' + splitted[2].split('P')[0]);
            setTalao2013(splitted[0] + 'T' + splitted[3].split('P')[0]);
            setTalao2014(splitted[0] + 'T' + splitted[4].split('P')[0]);
            setTalao2015(splitted[0] + 'T' + splitted[5].split('P')[0]);
            setTalao2016(splitted[0] + 'T' + splitted[6].split('P')[0]);
            setTalao2017(splitted[0] + 'T' + splitted[7].split('P')[0]);
        }
        if(string.split('T').length.toString() === "9"){
            const splitted = string.split('T');
            setTalao2011(splitted[0] + 'T' + splitted[1].split('P')[0]);
            setTalao2012(splitted[0] + 'T' + splitted[2].split('P')[0]);
            setTalao2013(splitted[0] + 'T' + splitted[3].split('P')[0]);
            setTalao2014(splitted[0] + 'T' + splitted[4].split('P')[0]);
            setTalao2015(splitted[0] + 'T' + splitted[5].split('P')[0]);
            setTalao2016(splitted[0] + 'T' + splitted[6].split('P')[0]);
            setTalao2017(splitted[0] + 'T' + splitted[7].split('P')[0]);
            setTalao2018(splitted[0] + 'T' + splitted[8].split('P')[0]);
        }
        if(string.split('T').length.toString() === "10"){
            const splitted = string.split('T');
            setTalao2011(splitted[0] + 'T' + splitted[1].split('P')[0]);
            setTalao2012(splitted[0] + 'T' + splitted[2].split('P')[0]);
            setTalao2013(splitted[0] + 'T' + splitted[3].split('P')[0]);
            setTalao2014(splitted[0] + 'T' + splitted[4].split('P')[0]);
            setTalao2015(splitted[0] + 'T' + splitted[5].split('P')[0]);
            setTalao2016(splitted[0] + 'T' + splitted[6].split('P')[0]);
            setTalao2017(splitted[0] + 'T' + splitted[7].split('P')[0]);
            setTalao2018(splitted[0] + 'T' + splitted[8].split('P')[0]);
            setTalao2019(splitted[0] + 'T' + splitted[9].split('P')[0]);
        }
    }

    async function handleRegistrar(){
        try {
            await api.post('/registros', {
                id_imovel: id_imovel,
                ano: a2011,
                mes: "1",
                talao: talao2011,
                anotacao: anotacao2011
            }).then(async () => {
                await api.post('/registros', {
                    id_imovel: id_imovel,
                    ano: a2012,
                    mes: "1",
                    talao: talao2012,
                    anotacao: anotacao2012
                }).then(async () => {
                    await api.post('/registros', {
                        id_imovel: id_imovel,
                        ano: a2013,
                        mes: "1",
                        talao: talao2013,
                        anotacao: anotacao2013
                    }).then(async () => {
                        await api.post('/registros', {
                            id_imovel: id_imovel,
                            ano: a2014,
                            mes: "1",
                            talao: talao2014,
                            anotacao: anotacao2014
                        }).then(async () => {
                            await api.post('/registros', {
                                id_imovel: id_imovel,
                                ano: a2015,
                                mes: "1",
                                talao: talao2015,
                                anotacao: anotacao2015
                            }).then(async () => {
                                await api.post('/registros', {
                                    id_imovel: id_imovel,
                                    ano: a2016,
                                    mes: "1",
                                    talao: talao2016,
                                    anotacao: anotacao2016
                                }).then(async () => {
                                    await api.post('/registros', {
                                        id_imovel: id_imovel,
                                        ano: a2017,
                                        mes: "1",
                                        talao: talao2017,
                                        anotacao: anotacao2017
                                    }).then(async () => {
                                        await api.post('/registros', {
                                            id_imovel: id_imovel,
                                            ano: a2018,
                                            mes: "1",
                                            talao: talao2018,
                                            anotacao: anotacao2018
                                        }).then(async () => {
                                            await api.post('/registros', {
                                                id_imovel: id_imovel,
                                                ano: a2019,
                                                mes: "1",
                                                talao: talao2019,
                                                anotacao: anotacao2019
                                            }).then(async () => {
                                                await api.post('/registros', {
                                                    id_imovel: id_imovel,
                                                    ano: a2020,
                                                    mes: "1",
                                                    talao: talao2020,
                                                    anotacao: anotacao2020
                                                });
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })

            setTalao2011("PAG T");
            setTalao2012("PAG T");
            setTalao2013("PAG T");
            setTalao2014("PAG T");
            setTalao2015("PAG T");
            setTalao2016("PAG T");
            setTalao2017("PAG T");
            setTalao2018("PAG T");
            setTalao2019("PAG T");
            setTalao2020("");
            setAnotacao2011("");
            setAnotacao2012("");
            setAnotacao2013("");
            setAnotacao2014("");
            setAnotacao2015("");
            setAnotacao2016("");
            setAnotacao2017("");
            setAnotacao2018("");
            setAnotacao2019("");
            setAnotacao2020("");
            loadRegistros();
            Alert.alert("Registrado!");
            navigation.goBack();
        } catch (error) {
            Alert.alert(error.message);
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
                <Text style={styles.textButtonProp}>Imoveis</Text>
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
                    {/* <Text style={styles.label}>Local do terreno:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{imovel.local}</Text>
                    </View>
                    <Text style={styles.label}>Tamanho:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>{imovel.tamanho}</Text>
                    </View> */}
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

                        <Text style={styles.label}>Anotação:</Text>
                        <View style={styles.infoView}>
                            <Text style={styles.infoText}>{imovel.anotacao}</Text>
                        </View>

                    <TouchableOpacity 
                        style={styles.buttonEditar} 
                        onPress={() => navigation.navigate('UpdateImovel', { id:id_imovel })}
                    >
                        <Text style={styles.textButtonEdit}>Editar</Text>
                    </TouchableOpacity>
                </View>

                

                <View style={styles.box}>
                
                    <Text style={styles.label}>Pagamento no Talão:</Text>

                    <View style={styles.boxNewRegistro}>
                        
                        {/* <View style={styles.newRegis}>
                            <TextInput placeholder={"Ano"} style={styles.regis} value={ano} onChangeText={(text)=>{setAno(text)}}></TextInput>
                        </View> */}

                        {/* <View style={styles.newRegis}>
                            <TextInput placeholder={"Mês"} style={styles.regis} value={mes} onChangeText={(text)=>{setMes(text)}}></TextInput>
                        </View> */}

                        <View style={styles.newRegis}>
                            <Text style={styles.anos}>CTRL+V</Text>
                            <TouchableOpacity 
                            onPress={() => destrinche(destrinchador)}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="cloud" size={24} color="red" />
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={() => setDestrinchador("")}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="close" size={24} color="red" />
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={() => cleanAll()}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="minus" size={24} color="red" />
                            </TouchableOpacity>
                            <TextInput placeholder={"Cole aqui"} style={styles.destrinchadorInput} value={destrinchador} onChangeText={(text)=>{setDestrinchador(text)}}></TextInput>
                        </View>




                        <View style={styles.newRegis}>
                            <Text style={styles.anos}>2011</Text>
                            <TouchableOpacity 
                            onPress={() => setTalao2011(null)}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="close" size={24} color="red" />
                            </TouchableOpacity>
                            <TextInput placeholder={"2011"} style={styles.regis} value={talao2011} onChangeText={(text)=>{setTalao2011(text)}}></TextInput>
                        </View>


                        <View style={styles.newRegis}>
                            <Text style={styles.anos}>2012</Text>
                            <TouchableOpacity 
                            onPress={() => setTalao2012(null)}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="close" size={24} color="red" />
                            </TouchableOpacity>
                                <TextInput placeholder={"2012"} style={styles.regis} value={talao2012} onChangeText={(text)=>{setTalao2012(text)}}></TextInput>
                        </View>
                        <View style={styles.newRegis}>
                            <Text style={styles.anos}>2013</Text>
                        <TouchableOpacity 
                            onPress={() => setTalao2013(null)}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="close" size={24} color="red" />
                            </TouchableOpacity>
                            <TextInput placeholder={"2013"} style={styles.regis} value={talao2013} onChangeText={(text)=>{setTalao2013(text)}}></TextInput>
                        </View>
                        <View style={styles.newRegis}>
                            <Text style={styles.anos}>2014</Text>
                        <TouchableOpacity 
                            onPress={() => setTalao2014(null)}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="close" size={24} color="red" />
                            </TouchableOpacity>
                            <TextInput placeholder={"2014"} style={styles.regis} value={talao2014} onChangeText={(text)=>{setTalao2014(text)}}></TextInput>
                        </View>
                        <View style={styles.newRegis}>
                            <Text style={styles.anos}>2015</Text>
                        <TouchableOpacity 
                            onPress={() => setTalao2015(null)}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="close" size={24} color="red" />
                            </TouchableOpacity>
                            <TextInput placeholder={"2015"} style={styles.regis} value={talao2015} onChangeText={(text)=>{setTalao2015(text)}}></TextInput>
                        </View>
                        <View style={styles.newRegis}>
                            <Text style={styles.anos}>2016</Text>
                        <TouchableOpacity 
                            onPress={() => setTalao2016(null)}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="close" size={24} color="red" />
                            </TouchableOpacity>
                            <TextInput placeholder={"2016"} style={styles.regis} value={talao2016} onChangeText={(text)=>{setTalao2016(text)}}></TextInput>
                        </View>
                        <View style={styles.newRegis}>
                            <Text style={styles.anos}>2017</Text>
                        <TouchableOpacity 
                            onPress={() => setTalao2017(null)}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="close" size={24} color="red" />
                            </TouchableOpacity>
                            <TextInput placeholder={"2017"} style={styles.regis} value={talao2017} onChangeText={(text)=>{setTalao2017(text)}}></TextInput>
                        </View>
                        <View style={styles.newRegis}>
                            <Text style={styles.anos}>2018</Text>
                        <TouchableOpacity 
                            onPress={() => setTalao2018(null)}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="close" size={24} color="red" />
                            </TouchableOpacity>
                            <TextInput placeholder={"2018"} style={styles.regis} value={talao2018} onChangeText={(text)=>{setTalao2018(text)}}></TextInput>
                        </View>
                        <View style={styles.newRegis}>
                            <Text style={styles.anos}>2019</Text>
                        <TouchableOpacity 
                            onPress={() => setTalao2019(null)}
                            style={{
                                alignSelf: 'center'
                            }}>
                                <AntDesign name="close" size={24} color="red" />
                            </TouchableOpacity>
                            <TextInput placeholder={"2019"} style={styles.regis} value={talao2019} onChangeText={(text)=>{setTalao2019(text)}}></TextInput>
                        </View>
                        


                        <View style={styles.newRegis}>
                            <TextInput placeholder={"Anotação 2011"} style={styles.anotacao} value={anotacao2011} onChangeText={(text)=>{setAnotacao2011(text)}}/>
                        </View>                       
                        <View style={styles.newRegis}>
                            <TextInput placeholder={"Anotação 2012"} style={styles.anotacao} value={anotacao2012} onChangeText={(text)=>{setAnotacao2012(text)}}/>
                        </View>                       
                        <View style={styles.newRegis}>
                            <TextInput placeholder={"Anotação 2013"} style={styles.anotacao} value={anotacao2013} onChangeText={(text)=>{setAnotacao2013(text)}}/>
                        </View>                       
                        <View style={styles.newRegis}>
                            <TextInput placeholder={"Anotação 2014"} style={styles.anotacao} value={anotacao2014} onChangeText={(text)=>{setAnotacao2014(text)}}/>
                        </View>                       
                        <View style={styles.newRegis}>
                            <TextInput placeholder={"Anotação 2015"} style={styles.anotacao} value={anotacao2015} onChangeText={(text)=>{setAnotacao2015(text)}}/>
                        </View>                       
                        <View style={styles.newRegis}>
                            <TextInput placeholder={"Anotação 2016"} style={styles.anotacao} value={anotacao2016} onChangeText={(text)=>{setAnotacao2016(text)}}/>
                        </View>                       
                        <View style={styles.newRegis}>
                            <TextInput placeholder={"Anotação 2017"} style={styles.anotacao} value={anotacao2017} onChangeText={(text)=>{setAnotacao2017(text)}}/>
                        </View>                       
                        <View style={styles.newRegis}>
                            <TextInput placeholder={"Anotação 2018"} style={styles.anotacao} value={anotacao2018} onChangeText={(text)=>{setAnotacao2018(text)}}/>
                        </View>                       
                        <View style={styles.newRegis}>
                            <TextInput placeholder={"Anotação 2019"} style={styles.anotacao} value={anotacao2019} onChangeText={(text)=>{setAnotacao2019(text)}}/>
                        </View>                            

                        <TouchableOpacity 
                            style={styles.buttonPaste} 
                            onPress={handleRegistrar}
                        >
                            <Text style={styles.textButtonRegis}>Salvar registro</Text>
                        </TouchableOpacity> 

                    </View>
                
                    <View style={styles.boxDividas}>
                        <Text style={styles.label}>Pagamentos efetuados abaixo:</Text>
                        <View style={styles.boxPagtosEfetuados}>
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
                    </View>
                </View>

                {/* <View style={styles.boxDividas}>
                    <ScrollView  showsHorizontalScrollIndicator={false}>
                    <Text style={styles.label}>Pendentes:</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <FlatList 
                            keyExtractor={item => item.toString()}
                            data={dividas}
                            showsHorizontalScrollIndicator={false} 
                            extraData={dividas}
                            renderItem={({item}) => (
                                <View style={styles.infoRegis}>
                                    <Text style={styles.textRegistroDivida}>{item}</Text>
                                </View>
                            )}
                        /> 
                    </View>
                    </ScrollView>
                </View> */}

            </ScrollView>

        </View>
    )
}