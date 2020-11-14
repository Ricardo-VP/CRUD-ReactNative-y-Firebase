import React, {useState} from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'

const CreateUserScreeen = () => {

    const [state, setstate] = useState({
        name: '',
        email: '',
        phone:''
    });

    const handleChangeText = (name, value) =>{
        setstate({...state, [name]: value})
    };
 
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder="Nombre de Usuario" 
                onChangeText={(value)=> handleChangeText('name',value)}/>
            </View>

            <View style={styles.inputGroup}>
                <TextInput 
                placeholder="Correo del usuario"
                onChangeText={(value)=> handleChangeText('email',value)}/>
            </View>

            <View style={styles.inputGroup}>
                <TextInput 
                placeholder="Número del Usuario"
                onChangeText={(value)=> handleChangeText('phone',value)}/>
            </View>

            <View style={styles.inputGroup}>
                <Button title="Guardar usuario" onPress={()=> console.log(state)}/> 
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCC'
    }
})

export default CreateUserScreeen
