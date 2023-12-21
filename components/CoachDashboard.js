import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const CoachDashboard = ({ navigation }) => {
  // Placeholder data for best swimmers
  const swimmers = [
    { id: '1', name: 'Swimmer 1', stat: 'Time: 50s' },
    { id: '2', name: 'Swimmer 2', stat: 'Time: 52s' },
    { id: '3', name: 'Swimmer 3', stat: 'Time: 53s' },
    { id: '4', name: 'Swimmer 4', stat: 'Time: 55s' },
    // ... more swimmers ...
  ];

  const renderSwimmer = ({ item }) => (
    <View style={styles.swimmerContainer}>
      <Image
        source={require('../assets/generaluser.png')} // Replace with actual swimmer image path
        style={styles.swimmerImage}
      />
      <View style={styles.swimmerDetails}>
        <Text style={styles.swimmerName}>{item.name}</Text>
        <Text style={styles.swimmerStat}>{item.stat}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/adminuser.png')} // Replace with the coach's profile image path
          style={styles.profilePic}
        />
        <Text style={styles.welcomeText}>Welcome, Coach!</Text>
      </View>

      {/* Swimmers List */}
      <FlatList
        data={swimmers}
        renderItem={renderSwimmer}
        keyExtractor={item => item.id}
        style={styles.swimmerList}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <TouchableOpacity 
          style={styles.bottomNavItem} 
          onPress={() => {/* navigation logic */}}>
          <Icon name="trophy-award" style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavLabel}>Tournaments</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.bottomNavItem} 
          onPress={() => navigation.navigate('LoginSignupScreen')}>
          <Icon name="home" style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.bottomNavItem} 
          onPress={() => navigation.navigate('SwimmerDashboard')}>
          <Icon name="chart-line" style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavLabel}>Productivity</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  swimmerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  swimmerDetails: {
    flex: 1, // To ensure details fill the space next to the image
  },
  swimmerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  swimmerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  swimmerStat: {
    fontSize: 14,
    color: 'gray',
  },

// Styles for bottom navigation bar
bottomNavContainer: {
  borderTopColor: '#dddddd',
  borderTopWidth: 1,
  height: 60,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingBottom: 20, // Adjust padding as needed
},
  bottomNavItem: {
    alignItems: 'center',
  },
  // Styles for bottom navigation bar
bottomNavIcon: {
  fontSize: 24,
  marginBottom: 4,
  color: 'gray', // You can set your preferred color
},
  bottomNavLabel: {
    fontSize: 12,
  },
  
});

export default CoachDashboard;
