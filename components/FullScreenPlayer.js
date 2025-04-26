import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FullScreenPlayer({ song, isPlaying, onPlay, onPause, onNext, onPrev, onClose }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
        <Ionicons name="close" size={28} color="black" />
      </TouchableOpacity>

      <Image source={{ uri: song.image[2].url }} style={styles.image} />
      <Text style={styles.title}>{song.name}</Text>
      <Text style={styles.artist}>{song.year}</Text>

      <View style={styles.controls}>
        <TouchableOpacity onPress={onPrev}>
          <Ionicons name="play-back" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={isPlaying ? onPause : onPlay}>
          <Ionicons name={isPlaying ? "pause" : "play"} size={50} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext}>
          <Ionicons name="play-forward" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  closeBtn: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },
  controls: {
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
  },
});
