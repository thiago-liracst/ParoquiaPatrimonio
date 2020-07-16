import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Ruas from './pages/Ruas';
import Proprietarios from './pages/Proprietarios';
import Imoveis from './pages/Imoveis';
import Registros from './pages/Registros';
import NewImovel from './pages/NewImovel';
import UpdateImovel from './pages/UpdateImovel';
import Pagamento from './pages/Pagamento';
import Cobranca from './pages/Cobranca';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator 
                screenOptions={{headerShown: false}}
            >
                <AppStack.Screen name="Ruas" component={Ruas}/>
                <AppStack.Screen name="Proprietarios" component={Proprietarios}/>
                <AppStack.Screen name="Imoveis" component={Imoveis}/>
                <AppStack.Screen name="Registros" component={Registros}/>
                <AppStack.Screen name="NewImovel" component={NewImovel}/>
                <AppStack.Screen name="UpdateImovel" component={UpdateImovel}/>
                <AppStack.Screen name="Pagamento" component={Pagamento}/>
                <AppStack.Screen name="Cobranca" component={Cobranca}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}