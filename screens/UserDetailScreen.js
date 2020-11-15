import React, {useEffect, useState} from 'react'
import {View, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator,Alert} from 'react-native'
import firebase from '../database/firebase'

const UserDetailScreen = (props) => {

    const initialState = {
        id: '',
        name: '',
        email: '',
        phone: ''
    };

    const [user, setuser] = useState();

    const [loading, setloading] = useState(true)
    
    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get();
        const user = doc.data();
        setuser({
            ...user,
            id: doc.id,
        });
        setloading(false);
    };

    useEffect(() => {
        getUserById(props.route.params.userId);
    }, []);

    const handleChangeText = (name, value) =>{
        setuser({...user, [name]: value})
    };

    const deleteUser = async () =>{
        const dbRef =  firebase.db.collection('users').doc(props.route.params.userId);
        await dbRef.delete();
        props.navigation.navigate('UsersList')
    }

    const updateUser = async() =>{
        const dbRef = firebase.db.collection('users').doc(user.id);
        await dbRef.set({
            name: user.name,
            email: user.email,
            phone: user.phone
        })
        setuser(initialState)
        props.navigation.navigate('UsersList')
    }

    const openConfirmationAlert = () =>{
        Alert.alert("Remover el usuario", "Estas seguro?,"[
            {text: 'Yes', onPress: () => deleteUser()},
            {text: 'No', onPress: () => console.log(false)}
        ])
    }

    if(loading){
        return(
            <View>
                <ActivityIndicator size="large" color="#9e9e9e"/>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder="Nombre de Usuario" 
                value={user.name}
                onChangeText={(value)=> handleChangeText('name',value)}/>
            </View>

            <View style={styles.inputGroup}>
                <TextInput 
                placeholder="Correo del usuario"
                value={user.email}
                onChangeText={(value)=> handleChangeText('email',value)}/>
            </View>

            <View style={styles.inputGroup}>
                <TextInput 
                placeholder="Número del Usuario"
                value={user.phone}
                onChangeText={(value)=> handleChangeText('phone',value)}/>
            </View>

            <View style={styles.inputGroup}>
                <Button color='#07870d' title="Actualizar usuario" onPress={()=> updateUser()}/>     
            </View>
            <View style={styles.inputGroup}>
                <Button color='#871e07' title="Borrar usuario" onPress={()=> openConfirmationAlert()}/>
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
});

export default UserDetailScreen
