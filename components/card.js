import React from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Sample verticalData
const verticalData = [
  {id: 1, title: "Apple Store", section: "Entertainment", salary: "-$5.99", icon: require("./assets/apple.png")},
  {id: 2, title: "Spotify", section: "Music", salary: "-$12.99", icon: require("./assets/spotify.png")},
  {id: 3, title: "Money Transfer", section: "Entertainment", salary: "$300", icon: require("./assets/moneyTransfer.png"), textColour: "blue"},
  {id: 4, title: "Grocery", section: "Sales", salary: "$80", icon: require("./assets/grocery.png")},
  {id: 5, title: "Apple Store", section: "Entertainment", salary: "-$5.99", icon: require("./assets/apple.png")},
  {id: 6, title: "Spotify", section: "Music", salary: "-$12.99", icon: require("./assets/spotify.png")},
  {id: 7, title: "Money Transfer", section: "Entertainment", salary: "$300", icon: require("./assets/moneyTransfer.png"), textColour: "blue"},
  {id: 8, title: "Grocery", section: "Sales", salary: "$80", icon: require("./assets/grocery.png")},
];

// Assuming Transaction is a defined component
const Transaction = ({ title, section, salary, icon, textColour }) => (
  <View style={styles.transactionContainer}>
    <Image style={styles.transactionIcon} source={icon} />
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionTitle}>{title}</Text>
      <Text style={styles.transactionSection}>{section}</Text>
      <Text style={[styles.transactionSalary, textColour && { color: textColour }]}>{salary}</Text>
    </View>
  </View>
);

const Card = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={require("./assets/profile.png")} />
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.nameText}>Caleb Tetteh</Text>
        <View style={styles.roundBox}>
          <Image style={styles.searchImage} source={require("./assets/search.png")} />
        </View>
      </View>
      <View style={styles.cardInfo}>
        <Image style={styles.cardImage} source={require("./assets/Card.png")} />
        <Text style={styles.transactionText}>Transaction</Text>
        <Text style={styles.seeAllText} onPress={() => navigation.navigate('TransactionsScreen')}>See All</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.roundBox1}>
          <Image style={styles.sendImage} source={require("./assets/send.png")} />
          <Text style={styles.sendText}>Sent</Text>
        </View>
        <View style={styles.roundBox2}>
          <Image style={styles.receiveImage} source={require("./assets/receive.png")} />
          <Text style={styles.receiveText}>Receive</Text>
        </View>
        <View style={styles.roundBox3}>
          <Image style={styles.loanImage} source={require("./assets/loan.png")} />
          <Text style={styles.loanText}>Loan</Text>
        </View>
        <View style={styles.roundBox4}>
          <Image style={styles.topUpImage} source={require("./assets/topUp.png")} />
          <Text style={styles.topUpText}>Top Up</Text>
        </View>
      </View>
      <FlatList
        data={verticalData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Transaction
            title={item.title}
            section={item.section}
            salary={item.salary}
            icon={item.icon}
            textColour={item.textColour}
          />
        )}
      />
    </ScrollView>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcomeText: {
    fontSize: 18,
    color: '#000',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  roundBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchImage: {
    width: 20,
    height: 20,
  },
  cardInfo: {
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 50,
  },
  transactionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  seeAllText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  roundBox1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendImage: {
    width: 30,
    height: 30,
  },
  sendText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  roundBox2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  receiveImage: {
    width: 30,
    height: 30,
  },
  receiveText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  roundBox3: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loanImage: {
    width: 30,
    height: 30,
  },
  loanText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  roundBox4: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topUpImage: {
    width: 30,
    height: 30,
  },
  topUpText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  transactionContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionIcon: {
    width: 40,
    height: 40,
  },
  transactionDetails: {
    marginLeft: 10,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionSection: {
    fontSize: 14,
    color: '#666',
  },
  transactionSalary: {
    fontSize: 16,
  },
});
