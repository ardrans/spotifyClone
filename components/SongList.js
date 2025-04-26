import React, { useState, useRef } from 'react';
import { FlatList, Text, View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import SongCard from './SongCard';
import BottomPlayer from './BottomPlayer';
import FullScreenPlayer from './FullScreenPlayer';
import { Audio } from 'expo-av';

export default function SongList({ songs, loading }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullPlayer, setShowFullPlayer] = useState(false);
  const soundRef = useRef(null);

  const playSong = async (index) => {
    try {
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
      }

      const { sound } = await Audio.Sound.createAsync(
        { uri: songs[index].downloadUrl[4].url },
        { shouldPlay: true }
      );

      soundRef.current = sound;
      setCurrentIndex(index);
      setIsPlaying(true);
    } catch (e) {
      console.error('Error playing sound:', e);
    }
  };

  const pauseSong = async () => {
    if (soundRef.current && isPlaying) {
      await soundRef.current.pauseAsync();
      setIsPlaying(false);
    }
  };

  const resumeSong = async () => {
    if (soundRef.current && !isPlaying) {
      await soundRef.current.playAsync();
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    if (currentIndex < songs.length - 1) {
      playSong(currentIndex + 1);
    }
  };

  const playPrevious = () => {
    if (currentIndex > 0) {
      playSong(currentIndex - 1);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />;
  }

  if (songs.length === 0) {
    return <Text style={styles.empty}>No songs found</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <SongCard song={item} onPlay={() => playSong(index)} />
        )}
      />

      {currentIndex !== null && (
        <>
          <BottomPlayer
            song={songs[currentIndex]}
            isPlaying={isPlaying}
            onPause={pauseSong}
            onPlay={resumeSong}
            onNext={playNext}
            onPrev={playPrevious}
            onExpand={() => setShowFullPlayer(true)}
          />

          <Modal visible={showFullPlayer} animationType="slide">
            <FullScreenPlayer
              song={songs[currentIndex]}
              isPlaying={isPlaying}
              onPause={pauseSong}
              onPlay={resumeSong}
              onNext={playNext}
              onPrev={playPrevious}
              onClose={() => setShowFullPlayer(false)}
            />
          </Modal>
        </>
      )}
    </View>
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
