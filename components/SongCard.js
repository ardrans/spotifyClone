import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function SongCard({ song }) {
  const soundRef = useRef(null); // keeps sound alive

  const handlePlay = async () => {
    console.log(song.downloadUrl);

    try {
      // If there's already a sound playing, stop it
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }

      const { sound } = await Audio.Sound.createAsync(
        { uri: song.downloadUrl[4].url },
        { shouldPlay: true }
      );

      soundRef.current = sound;

    } catch (error) {
      console.error('Audio error:', error);
    }
  };

  return (
    <TouchableOpacity onPress={handlePlay}>
      <View style={styles.card}>
        <Image source={{ uri: song.image[2].link }} style={styles.image} />
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



  // const handlePlay = () => {
  //   const url = song.downloadUrl[4].link;
  //   console.log(url);
  //   Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  // };

  // const handlePlay = () => {
  //   window.location.href = song.url;
  // };