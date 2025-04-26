import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomPlayer({ song, isPlaying, onPlay, onPause, onNext, onPrev, onExpand }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onExpand}>
      <Image source={{ uri: song.image[2].url }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{song.name}</Text>
        <Text style={styles.artist}>{song.year}</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity onPress={onPrev}>
          <Ionicons name="play-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={isPlaying ? onPause : onPlay}>
          <Ionicons name={isPlaying ? "pause" : "play"} size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext}>
          <Ionicons name="play-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#bbb',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 5,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  artist: {
    fontSize: 12,
    color: '#444',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
