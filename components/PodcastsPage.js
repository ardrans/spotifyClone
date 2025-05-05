import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const podcastCategories = ['Trending', 'Tech', 'Motivation', 'Comedy', 'News', 'Music'];

const categoryIcons = {
  Trending: 'flame',
  Tech: 'hardware-chip',
  Motivation: 'rocket',
  Comedy: 'happy',
  News: 'newspaper',
  Music: 'musical-notes',
};

const podcasts = [
  {
    id: '1',
    title: 'Tech Talks Daily',
  },
  {
    id: '2',
    title: 'The Daily Boost',
  },
  {
    id: '3',
    title: 'The Ranveer Show',
  },
];

const PodcastCard = ({ podcast }) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.info}>
      <Text style={styles.title}>{podcast.title}</Text>
    </View>
  </TouchableOpacity>
);

const PodcastsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Podcasts</Text>

      {/* Category boxes */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {podcastCategories.map((cat, index) => (
          <TouchableOpacity key={index} style={styles.categoryBox}>
            <Icon name={categoryIcons[cat] || 'mic'} size={24} color="#444" style={styles.categoryIcon} />
            <Text style={styles.categoryLabel}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Podcast list */}
      <FlatList
        data={podcasts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PodcastCard podcast={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default PodcastsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryScroll: {
    marginBottom: 16,
  },
  categoryBox: {
    width: 80,
    height: 80,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryIcon: {
    marginBottom: 5,
  },
  categoryLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  list: {
    paddingBottom: 100,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    padding: 10,
  },
  info: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
