import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const SwimmerDashboard = ({ navigation }) => {
  const competitions = [
    { id: '1', name: 'Competition 1', date: '15 Feb 2024' },
    { id: '2', name: 'Competition 2', date: '20 Mar 2024' },
    // ... more competitions ...
  ];

  // Dummy data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 95, 115, ${opacity})`,
    strokeWidth: 2, // optional, default 3
  };
  const ChartWithTitle = ({ title, data, chartConfig }) => (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>{title}</Text>
      <View style={styles.yAxisLabelContainer}>
        <Text style={styles.yAxisLabel}></Text>
        <LineChart
          data={data}
          width={320} // You may want to use the full width of the device
          height={220}
          chartConfig={chartConfig}
          // Additional props for the Y-axis can be added here if needed
        />
      </View>
    </View>
  );



  const renderCompetitionItem = ({ item }) => (
    <View style={styles.competitionItem}>
      <Text style={styles.competitionName}>{item.name}</Text>
      <Text style={styles.competitionDate}>{item.date}</Text>
    </View>
  );

  const renderHeader = () => (
    

    <View>
    <View style={styles.profileSection}>
      <Text style={styles.sectionTitle}>Personal Stats</Text>
      <ChartWithTitle
        title="Average Lap Timings (seconds) Over Time"
        data={data}
        chartConfig={chartConfig}
      />
      {/* Include other stats representations here */}
    </View>
    <Text style={styles.sectionTitle}>Upcoming Competitions</Text>
  </View>
  );

  const renderFooter = () => (
    <View>
      <TouchableOpacity 
        style={styles.connectButton} 
        onPress={() => navigation.navigate('CoachDashboard')}>
        <Text style={styles.connectButtonText}>Connect with a Coach</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={competitions}
        renderItem={renderCompetitionItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
      <View style={styles.bottomNavContainer}>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('PlayerRating')}>
          <Icon name="star" style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavLabel}>Player Rating</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('LoginSignupScreen')}>
          <Icon name="home" style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('CoachDashboard')}>
          <Icon name="bed" style={styles.bottomNavIcon} />  
          <Text style={styles.bottomNavLabel}>Book Hotels</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef5fb',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#005f73',
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  competitionItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  competitionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  competitionDate: {
    fontSize: 14,
    color: '#3a3a3a',
  },
  connectButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 15,
    alignItems: 'center',
  },
  connectButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    paddingVertical: 10,
    backgroundColor: '#eef5fb',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  bottomNavLabel: {
    fontSize: 12,
    color: '#005f73',
  },
});

export default SwimmerDashboard;
