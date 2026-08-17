import AsyncStorage from "@react-native-async-storage/async-storage";

const LAST_CITY_KEY = "@weather:lastCity";
const RECENT_SEARCHES_KEY = "@weather:recentSearches";

export async function saveSearch(cityName) {
  const cleanCity = cityName.trim();

  await AsyncStorage.setItem(LAST_CITY_KEY, cleanCity);

  const storedSearches = await AsyncStorage.getItem(RECENT_SEARCHES_KEY);
  const recentSearches = storedSearches ? JSON.parse(storedSearches) : [];

  const updatedSearches = [
    cleanCity,
    ...recentSearches.filter((item) => item !== cleanCity),
  ].slice(0, 5);

  await AsyncStorage.setItem(
    RECENT_SEARCHES_KEY,
    JSON.stringify(updatedSearches),
  );

  return updatedSearches;
}

export async function loadStoredSearches() {
  const lastCity = await AsyncStorage.getItem(LAST_CITY_KEY);
  const storedSearches = await AsyncStorage.getItem(RECENT_SEARCHES_KEY);

  return {
    lastCity,
    recentSearches: storedSearches ? JSON.parse(storedSearches) : [],
  };
}
