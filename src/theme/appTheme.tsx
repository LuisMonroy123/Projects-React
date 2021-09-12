import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    /*CONTAINERS*/
    container: {
        flex: 1,
    },
    containerBoton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    conatinerTextoEscudo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    iconoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        right: 10
    },
    /*Botones*/
    botonCompra: {
        backgroundColor: '#33218A',
        height: 40,
        width: 150,
        borderRadius: 7,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 5,
    },
    botonCancelar: {
        height: 40,
        width: 150,
        borderRadius: 7,
        marginTop: 20,
    },
    botonCancelarMem: {
        height: 40,
        width: 160,
        borderRadius: 7,
        marginTop: 30,
    },
    botonCambiar: {
        backgroundColor: '#B491C5',
        height: 50,
        width: 200,
        borderRadius: 7,
        margin: 20,
        bottom: 40,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    botonRegistrar:{
        borderRadius: 7,
        shadowColor: "#000",
        
        shadowOpacity: 0.58,
        shadowRadius: 16,

        elevation: 4,
    },
    /*Texto*/
    textoCancelar: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        padding: 10
    },textoCancelarMem:{
        color: '#B491C5',
        fontSize: 15,
        textAlign: 'center',
        padding: 10
    },
    textoContacto: {
        color: '#B491C5',
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        left: 20
    },
    textoCambio: {
        color: '#3B288E',
        fontSize: 18,
        left: 55,
        bottom: 22,
        fontWeight: 'bold',
    },
    cajaTexto: {
        textAlign: 'left',
        padding: 10,
        fontSize: 35,
        color: 'white',
        fontWeight: '300'
    },
    textoBoton: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontSize: 15
    },
    textoPantalla: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        right: 75,
    },
    label: {
        color: 'black',
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 55,
        borderColor: '#854BA1',
        backgroundColor: 'white',
        marginBottom: 25,
        marginTop: 10,
        borderRadius: 5
    },
    icono: {
        width: 45,
        height: 45,
        marginTop: 30,
        marginHorizontal: 10,
        borderRadius: 3,
        top: 0,
        left: 15
    },
    tarjeta:{
        borderRadius: 10,
        bottom: 50
    },
    tarjetaSombra: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        marginTop: 80,
    },
    iconoCambiar: {
        width: 35,
        height: 35,
        top: 8,
        marginHorizontal: 10,
    }

});