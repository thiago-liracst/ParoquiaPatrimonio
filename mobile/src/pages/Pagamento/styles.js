import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    
    container: {
        width: '100%',
        height: '75%',
        backgroundColor: '#f5f5f5',
    },

    buttons: {
        width: '93%',
        height: 90,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#f5f5f5'
    },

    box: {
        width: '91%',
        height: 480,
        backgroundColor: '#FFF',
        borderRadius: 8,
        margin: 10,
    },

    buttonNew:{
        backgroundColor: '#9c0000',
        padding: 20,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: '46%',
      },
    
      textButtonNew: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 3,
      },

    buttonProp: {
        backgroundColor: 'white',
        padding: 30,
        margin: 10,
        borderRadius: 8,
        width: '91%',
    },

    textButtonProp: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },

    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10
    },

    infoView: {
        backgroundColor: '#F5F5F5',
        padding: 20,
        borderRadius: 8,
        marginLeft:10,
        marginRight: 10,
    },

    boxAnot: {
        width: '91%',
        height: 350,
        backgroundColor: '#FFF',
        borderRadius: 8,
        margin: 10,
    },

})