import React from 'react';
import { FlatList, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import SongCard from './SongCard';

export default function SongList({ songs, loading }) {
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />;
  }

  if (songs.length === 0) {
    return <Text style={styles.empty}>No songs found</Text>;
  }

  return (
    <FlatList
      data={songs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <SongCard song={item} />}
    />
  );
}

const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});
