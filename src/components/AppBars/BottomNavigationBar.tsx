import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {StudentInfo} from "../Student_Screens/StudentInfo";

const BottomNavigationBar: React.FC = () => {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('StudentInfo' as never)}>
                <View style={styles.iconAndText}>
                    <Icon name="users" size={24} color="#705AA9"/>
                    <Text style={styles.iconTitle}>Profile</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Chatting' as never)}>
                <View style={styles.iconAndText}>
                    <Icon name="comments" size={24} color="#705AA9"/>
                    <Text style={styles.iconTitle}>Message</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}
                              onPress={() => navigation.navigate('FriendOptionPage' as never)}>
                <View style={styles.iconAndText}>
                    <Icon name="users" size={24} color="#705AA9"/>
                    <Text style={styles.iconTitle}>Friends</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Order' as never)}>
                <View style={styles.iconAndText}>
                    <Icon name="shopping-cart" size={24} color="#705AA9"/>
                    <Text style={styles.iconTitle}>Order</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}
                              onPress={() => navigation.navigate('StudentSignIn' as never)}>
                <View style={styles.iconAndText}>
                    <Icon name="sign-out" size={24} color="#705AA9"/>
                    <Text style={styles.iconTitle}>Log-Out</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
    },
    iconContainer: {
        alignItems: 'center',
    },
    iconAndText: {
        alignItems: 'center',
    },
    iconTitle: {
        marginTop: 4,
        fontSize: 12,
        color: '#705AA9',
    },
});

export default BottomNavigationBar;
