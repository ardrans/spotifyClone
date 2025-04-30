import React from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const podcastCategories = ['Trending', 'Tech', 'Motivation', 'Comedy', 'News', 'Music'];

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
    <Image source={{ uri: podcast.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{podcast.title}</Text>
      <Text style={styles.host}>{podcast.host}</Text>
    </View>
  </TouchableOpacity>
);

const PodcastsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Podcasts</Text>

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#888" />
        <TextInput
          placeholder="Search podcasts"
          style={styles.searchInput}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {podcastCategories.map((cat, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    height: 40,
  },
  categoryScroll: {
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
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
  },
  image: {
    width: 80,
    height: 80,
  },
  info: {
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  host: {
    fontSize: 14,
    color: '#666',
  },
});
