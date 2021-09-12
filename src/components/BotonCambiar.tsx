import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'



export const BotonCambiar = () => {
    return (
        <TouchableOpacity>
            <View style={styles.botonCambiar}>

                <Image
                    style = {styles.iconoCambiar}
                    source={require('../img/cambio.png')}
                />
                <Text style={styles.textoCambio}>
                    Cambiar tarjeta
                </Text>
            </View>
        </TouchableOpacity>
    )
}
