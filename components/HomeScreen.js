import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import SearchBar from './SearchBar';
import SongList from './SongList';


export default function HomeScreen({navigation}) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
  const [searchText, setSearchText] = useState('');

  const languages = ['Hindi', 'Tamil', 'Malayalam', 'English', 'Telugu'];

  const handleSearch = async () => {
    if (!searchText) return;
    setLoading(true);
    try {
      const res = await fetch(`https://saavn.dev/api/search/songs?query=${searchText}`);
      const json = await res.json();
      setSongs(json.data.results || []);
    } catch (err) {
      console.error('Fetch error:', err);
    }
    setLoading(false);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setDropdownVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
  
  {/* Left Section */}
  <View style={styles.leftSection}>
    <Image source={require('../components/images/jiosaavn-logo-icon-2753629470.png')} style={styles.logo}/>
    <Text style={styles.brandName}>JioSaavn</Text>
    <TouchableOpacity><Text style={styles.menuItem}>Music</Text></TouchableOpacity>
    <TouchableOpacity><Text style={styles.menuItem}>Podcasts</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ProPlans')}>
  <Text style={styles.menuItem}>Pro</Text>
</TouchableOpacity>
  </View>

  {/* Center Section */}
  <View style={styles.centerSection}>
    <TextInput 
      placeholder="Search" 
      style={styles.searchInput}
      value={searchText}
      onChangeText={setSearchText}
      onSubmitEditing={handleSearch}
    />
  </View>

  {/* Right Section */}
  <View style={styles.rightSection}>
    <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
      <Text style={styles.languageSelector}>Music Languages: {selectedLanguage} ⬇️</Text>
    </TouchableOpacity>

    {dropdownVisible && (
      <View style={styles.dropdown}>
        <FlatList 
          data={languages}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleLanguageSelect(item)}>
              <Text style={styles.dropdownItem}>{item} {selectedLanguage === item ? '✔️' : ''}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )}

    <TouchableOpacity><Text style={styles.authButton}>Log In</Text></TouchableOpacity>
    <TouchableOpacity><Text style={styles.authButton}>Sign Up</Text></TouchableOpacity>
  </View>

</View>

      <SongList songs={songs} loading={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#f8f8f8',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 5,
  },
  brandName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  menuItem: {
    marginHorizontal: 6,
    fontSize: 16,
    color: '#555',
  },
  centerSection: {
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 6,
    width: '100%',
  },
  rightSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  languageSelector: {
    fontSize: 14,
    color: '#555',
    marginRight: 10,
  },
  authButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    right: 80,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    padding: 5,
    zIndex: 999,
  },
  dropdownItem: {
    padding: 8,
    fontSize: 14,
  },
});

