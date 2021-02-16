import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    
    container: {
        width: '100%',
        height: '90%',
        backgroundColor: '#f5f5f5'
    },

    buttons: {
        width: '98%',
        height: 90,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    buttonNew:{
        backgroundColor: '#9c0000',
        padding: 20,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: '45%',
      },
    
      textButtonNew: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 3,
      },

    buttonProp: {
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        borderRadius: 8,
    },

    textButtonProp: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },

})