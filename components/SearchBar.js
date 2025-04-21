import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handlePress = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search songs..."
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
  },
});
