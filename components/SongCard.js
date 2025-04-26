import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function SongCard({ song, onPlay }) {
  return (
    <TouchableOpacity onPress={onPlay}>
      <View style={styles.card}>
        <Image source={{ uri: song.image[2].url }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{song.name}</Text>
          <Text style={styles.artist}>{song.year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  info: {
    marginLeft: 10,
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    color: '#555',
  },
});
