import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'


interface Props{
    texto?: 'Cancelar' | 'Cancelar membresía';
}

export const BotonCancelar = ({texto = 'Cancelar'}: Props) => {
    return (
        <TouchableOpacity>
            <View style = {[
                styles.botonCancelar,
                (texto === 'Cancelar') ? styles.botonCancelar : styles.botonCancelarMem 
            ]}>
                <Text style = {[
                    styles.textoCancelar,
                    (texto === 'Cancelar') ? styles.textoCancelar : styles.textoCancelarMem
                ]}>
                    {texto}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
