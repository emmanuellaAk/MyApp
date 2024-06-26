import React from 'react'
import { Image, View, Text, StyleSheet, Image } from 'react-native';

const Transaction = ({title, section, salary, icon, textColour}) => {
    return (
        <>
        <View style={styles.transaction}>
            <View key={Transaction.id} style={styles.transactionArea}>
                <Image source={icon} style={styles.imageIcon}/>
                <Text style={[styles.title]}>{title}</Text>
                <Text style={[styles.section]}>{section}</Text>
                <Text style={[styles.salary, {color: textColour}]}>{salary}</Text>
            </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    transaction:{
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        top: 20,
        
    },
    transactionArea:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: 380,
        marginBottom: -15,
        padding: 25, 
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: 75,
        bottom: 30,
        left: 10,
        
    },
    imageIcon:{
        marginRight: 20,
    },
    title: {
        width: 184,
        height: 18,
        fontSize: 14,
        fontWeight: '600',
        color: '#0D0D26',
        lineHeight: 18.2,
        top: -15,
    },
    salary: {
        width: 90,
        height: 19,
        right: 115,
        fontSize: 12,
        fontWeight: '400',
        color: '#0D0D26',
        top: -15,
        lineHeight: 19.2,
        textAlign: 'right'
    },
    section: {
        width: 85,
        height: 21,
        top: 13,
        right: 183,
        opacity: 0.50,
        fontSize: 13,
        fontWeight: '400',
        color: '#0D0D26',
        lineHeight: 20.8,
    },
});

export default Transaction;