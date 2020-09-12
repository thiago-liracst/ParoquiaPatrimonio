import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Pagamento() {
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <TouchableOpacity 
                style={styles.buttonProp} 
                onPress={() => navigation.navigate("Registros")}
            >
                <Text style={styles.textButtonProp}>Voltar</Text>
            </TouchableOpacity>

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.box}> 
                    <Text style={styles.label}>ID Registro:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>123</Text>
                    </View>
                    <Text style={styles.label}>ID Terreno:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>415</Text>
                    </View>
                    <Text style={styles.label}>Ano:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>2009</Text>
                    </View>
                    <Text style={styles.label}>Talão:</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>PAG T 41</Text>
                    </View>
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

            </ScrollView>

        </View>
    )
}