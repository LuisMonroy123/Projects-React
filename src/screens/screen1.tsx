import { StackScreenProps } from '@react-navigation/stack';
import React, { AnchorHTMLAttributes, Component, useState } from 'react'

import { View, Text, Image, KeyboardAvoidingView, StatusBar, Alert } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { BotonCancelar } from '../components/BotonCancelar'
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<any, any> {};

export const screen1 = ({ navigation }: Props) => {
    const [numTarjeta, setnumTarjeta] = useState('');
    const [newValue, setNewValue] = useState('');
    
    var ultDigitos = numTarjeta.toString().substr(-4);

    return (
        <KeyboardAvoidingView style={styles.container} behavior='position'>
            <StatusBar backgroundColor='black' barStyle='light-content' />
            <View style={styles.conatinerTextoEscudo}>
                <Image
                    style={{ ...styles.icono, width: 30, height: 30, }}
                    source={require('../img/escudo.png')}
                />
                <Text style={{ ...styles.textoPantalla, left: 12, top: 15 }}>Seleccione su método de pago</Text>
            </View>

            <View style={styles.iconoContainer}>

                <Image
                    style={{ ...styles.icono, top: 10 }}
                    source={require('../img/paypal.jpg')}
                />


                <Image
                    style={{ ...styles.icono, top: 10 }}
                    source={require('../img/Visa.jpg')}
                />

                <Image
                    style={{ ...styles.icono, top: 10 }}
                    source={require('../img/mastercard.jpg')}
                />

                <Image
                    style={{ ...styles.icono, top: 10 }}
                    source={require('../img/paypal.jpg')}
                />

                <Image
                    style={{ ...styles.icono, top: 10 }}
                    source={require('../img/paypal.jpg')}
                />
            </View>
            <View>
                <View style={styles.conatinerTextoEscudo}>
                    <Image
                        style={{ ...styles.icono, width: 30, height: 30, top: 45, marginTop: 5 }}
                        source={require('../img/escudo.png')}
                    />
                    <Text style={{ ...styles.textoPantalla, left: 12, top: 45 }}>Introduce los datos</Text>
                </View>

                <View style={{ top: 70 }}>
                    <Text style={{ ...styles.textoPantalla, fontWeight: 'normal', right: 80 }}>Titular de la tarjeta</Text>
                    <TextInput
                        style={styles.label}
                        placeholder="Ingrese su nombre"
                        placeholderTextColor="rgba(133,75,161,1)"

                    />

                    <Text style={{ ...styles.textoPantalla, fontWeight: 'normal' }}>Número de la tarjeta</Text>
                    <TextInput
                        style={styles.label}
                        placeholder="Ingrese su tarjeta"
                        placeholderTextColor="rgba(133,75,161,1)"
                        keyboardType='numeric'
                        onChangeText={numTarjeta => setnumTarjeta(numTarjeta)}
                        maxLength={16}
                    />
                </View>

                <View>
                    <View style={styles.containerBoton}>

                        <Text style={{ ...styles.textoPantalla, right: 40, top: 65, fontWeight: 'normal' }}>Fecha de Expiración</Text>
                        <Text style={{ ...styles.textoPantalla, right: 10, top: 65, fontWeight: 'normal' }}>CVV | CVC</Text>

                    </View>

                    <View style={styles.containerBoton}>
                        <TextInput
                            style={{ ...styles.label, width: 150, marginHorizontal: 10, top: 65 }}
                            placeholder="00/00"
                            placeholderTextColor="rgba(133,75,161,1)"
                            keyboardType='numeric'
                            maxLength={5}
                            onChangeText={newValue => setNewValue(newValue.replace(/\W/gi, '')
                            .replace(/(.{2})/g, '$1/')
                            .substring(0, 5))}
                            value = {newValue}
                        />
                        <TextInput
                            style={{ ...styles.label, width: 130, marginHorizontal: 10, top: 65 }} placeholder="***"
                            placeholderTextColor="rgba(133,75,161,1)"
                            keyboardType='numeric'
                            secureTextEntry
                            maxLength={3}
                        />
                    </View>

                </View>
            </View>
            <View>
                <Text style={{ ...styles.textoPantalla, right: 0, top: 70 }}>Total a pagar $29/mes</Text>
            </View>

            <View style={{ ...styles.containerBoton, top: 70 }}>
                <BotonCancelar texto="Cancelar" />
                <TouchableOpacity onPress={() => navigation.navigate('screen2', { numTarjeta: ultDigitos })} style={styles.botonCompra}>
                    <View >
                        <Text style={styles.textoBoton}>Registrar y Pagar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
function onChange(newValue: any) {
    throw new Error('Function not implemented.');
}

function formatter(value: any, text: string) {
    throw new Error('Function not implemented.');
}

function value(value: any, text: string) {
    throw new Error('Function not implemented.');
}

