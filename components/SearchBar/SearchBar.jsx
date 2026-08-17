import { Text, TextInput, Pressable, View } from "react-native";
import { styles } from "./SearchBar.styles";

function SearchBar({
  city,
  setCity,
  handleSearch,
  isSearchDisabled,
  recentSearches,
}) {
  return (
    <View>
      <TextInput
        placeholder="Search city..."
        value={city}
        onChangeText={setCity}
        onSubmitEditing={handleSearch}
        placeholderTextColor="#7A8AA0"
        style={styles.searchInput}
      />
      <Pressable
        onPress={handleSearch}
        disabled={isSearchDisabled}
        style={[styles.searchBox, isSearchDisabled && styles.searchBoxDisabled]}
      >
        <View style={styles.searchBox}>
          <Text>Search</Text>
        </View>
      </Pressable>
      <View style={styles.recentSearchesBox}>
        <Text style={styles.recentTitle}>Recent:</Text>

        <View style={styles.recentSearchesList}>
          {recentSearches.map((search) => (
            <View key={search} style={styles.recentSearchChip}>
              <Text style={styles.recentSearchText}>{search}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default SearchBar;
