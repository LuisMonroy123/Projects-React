import React from 'react'
import { Image, Text, View } from 'react-native'
import { BotonCambiar } from '../components/BotonCambiar';
import { BotonCancelar } from '../components/BotonCancelar';
import { TopTabNavigator } from '../navigator/TopTabNavigator';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface RouterParams{
    numTarjeta: number;
}
interface Props extends StackScreenProps <any, any>{};


export const screen2 = ({route}: Props) => {

    const params = route.params as RouterParams;
    
    return (
        <View style={styles.container}>
            <TopTabNavigator/>
            <View style={{flex: 2, }}>
                <Text style = {{...styles.textoPantalla, top: 25}}>¿Qué incluye tu membresía?</Text>

                <Text style = {{...styles.textoPantalla, top:50, right: 20, fontWeight: 'normal'}}>Activaste tu membresía: 21/05/2021</Text>

                <Text style = {{...styles.textoPantalla, top:50, fontWeight: 'normal'}}>Pago con: ******{params.numTarjeta}</Text>
            </View>

            <View style={{flex: 4.5,justifyContent: 'center', alignItems: 'center',}}>
                <View style={styles.tarjetaSombra}>
                    <Image
                        style={styles.tarjeta}
                        source={require('../img/tarjeta.png')}
                    />
                </View>
                <BotonCambiar />

            </View>

            <View style={{flex: 1.5, alignItems: 'center' }}>

                <BotonCancelar texto="Cancelar membresía"/>

            </View>
        </View>
    )
}