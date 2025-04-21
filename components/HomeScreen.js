import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SearchBar from './SearchBar';
import SongList from './SongList';

export default function HomeScreen() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(`https://saavn.dev/api/search/songs?query=${query}`);
      const json = await res.json();
      setSongs(json.data.results || []);
    } catch (err) {
      console.error('Fetch error:', err);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <SongList songs={songs} loading={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
});
