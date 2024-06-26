import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const footer = () => {
  return (
    <View style={styles.footer}>
            <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
                <Image style={styles.footerIcon} source={require("./assets/home.png")} />
                <Text style={styles.footerText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require("./assets/myCards.png")} />
                <Text style={styles.footerText}>My Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require("./assets/statictics.png")} />
                <Text style={styles.footerText}>Statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Settings')}>
                <Image style={styles.footerIcon} source={require("./assets/settings.png")} />
                <Text style={styles.footerText}>Settings</Text>
            </TouchableOpacity>
        </View>
  )
}

export default footer