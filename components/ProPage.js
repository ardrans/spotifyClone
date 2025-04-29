// ProPlansScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProPlansScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Go Pro with JioSaavn</Text>

      <View style={styles.planCard}>
        <Text style={styles.planTitle}>Monthly Plan</Text>
        <Text style={styles.planPrice}>₹99 / month</Text>
        <Text style={styles.planFeatures}>• Ad-free music</Text>
        <Text style={styles.planFeatures}>• High quality audio</Text>
        <Text style={styles.planFeatures}>• Unlimited downloads</Text>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.planCard}>
        <Text style={styles.planTitle}>Yearly Plan</Text>
        <Text style={styles.planPrice}>₹399 / year</Text>
        <Text style={styles.planFeatures}>• Ad-free music</Text>
        <Text style={styles.planFeatures}>• High quality audio</Text>
        <Text style={styles.planFeatures}>• Unlimited downloads</Text>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  planCard: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  planPrice: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  planFeatures: {
    fontSize: 14,
    marginBottom: 5,
  },
  subscribeButton: {
    marginTop: 10,
    backgroundColor: '#00A0FF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
