import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Registro() {
    
    const navigation = useNavigation();

    const [ano, setAno] = useState();
    const [regis, setRegis] = useState();

    return(
        <View style={styles.container}>
            
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
                        <Text style={styles.infoText}>ANTONIO DAVILA LINS</Text>
                    </View>
                    <Text style={styles.label}>Nº:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>415</Text>
                    </View>
                    <Text style={styles.label}>Local do terreno:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>SITIO MARIBONDO</Text>
                    </View>
                    <Text style={styles.label}>Tamanho:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>30 X 40</Text>
                    </View>
                    <Text style={styles.label}>Proprietário:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>JOSÉ FRANCISCO DA S. SIMPLICIO </Text>
                    </View>
                    <Text style={styles.label}>Situação:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>Falta os último 10 anos</Text>
                    </View>
                    <Text style={styles.label}>Inicio da dívida:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>1992</Text>
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
                        <Text style={styles.infoText}>IMPOSTO DE LAUDEMIO -
                            VENDEDOR; BANCO BRADESCO S/A
                            COMPRADOR; ANTONIO RAMALHO DE FREITAS
                            VALOR AVALIDO 25.900,00
                            VALOR PAGO:647,00
                            20/02/2019.
                        </Text>
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