import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'



export const BotonPagina = () => {
    return (
        <TouchableOpacity>
            <View style = {styles.botonCancelar}>
                <Text style = {styles.textoContacto}>
                    Contacto
                </Text>
            </View>
        </TouchableOpacity>
    )
}