import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

import { FlatList, StyleSheet, Text, View, RefreshControl } from "react-native";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import { getWeather } from "./services/weatherApi";
import { saveSearch, loadStoredSearches } from "./services/storage";
import WeatherDetailCard from "./components/WeatherDetailCard/WeatherDetailCard";
import ForecastList from "./components/ForecastList/ForecastList";

export default function App() {
  const [city, setCity] = useState("");
  const [searchedCity, setSearchedCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  const isSearchDisabled = city.trim().length === 0 || loading;

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    async function loadSearches() {
      try {
        const { lastCity, recentSearches } = await loadStoredSearches();
        if (lastCity) {
          setSearchedCity(lastCity);
        }

        setRecentSearches(recentSearches);
      } catch (error) {
        setRecentSearches([]);
      }
    }
    loadSearches();
  }, []);

  function getWeatherCondition(weatherCode) {
    switch (true) {
      case weatherCode === 0:
        return "Sunny ☀️";

      case weatherCode >= 1 && weatherCode <= 3:
        return "Cloudy ☁️";

      case weatherCode >= 51 && weatherCode <= 67:
        return "Rain 🌧";

      case weatherCode >= 71 && weatherCode <= 77:
        return "Snow ❄️";

      default:
        return "Unknown";
    }
  }

  async function handleSearch() {
    if (!city.trim()) return;

    try {
      setLoading(true);
      setError("");

      const weatherData = await getWeather(city);
      setWeather(weatherData);
      setCity("");
      setSearchedCity(city);
      setLastUpdated(new Date());
      const updatedSearches = await saveSearch(city);
      setRecentSearches(updatedSearches);
    } catch (error) {
      setError("Could not find that city");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <FlatList
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Text style={styles.eyebrow}>Today</Text>
              <Text style={styles.title}>Weather</Text>
              {lastUpdated ? (
                <Text style={styles.lastUpdated}>
                  Last updated{" "}
                  {lastUpdated.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              ) : null}
            </View>

            <SearchBar
              city={city}
              setCity={setCity}
              handleSearch={handleSearch}
              isSearchDisabled={isSearchDisabled}
              recentSearches={recentSearches}
            />

            {loading ? (
              <Text style={styles.loading}>Loading weather...</Text>
            ) : error ? (
              <Text style={styles.error}>{error}</Text>
            ) : weather ? (
              <>
                <WeatherCard
                  searchedCity={searchedCity}
                  weather={weather}
                  getWeatherCondition={getWeatherCondition}
                />

                <WeatherDetailCard weather={weather} />
                <ForecastList weather={weather} />
              </>
            ) : null}
          </>
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#10233F",
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 32,
    gap: 20,
  },

  lastUpdated: {
    color: "white",
    marginBottom: 10,
  },

  header: {
    gap: 4,
  },

  eyebrow: {
    color: "#9DC4E8",
    fontSize: 15,
    fontWeight: "700",
    textTransform: "uppercase",
  },

  title: {
    color: "#F7FBFF",
    fontSize: 36,
    fontWeight: "800",
  },

  loading: {
    fontSize: 88,
    color: "white",
  },

  error: {
    fontSize: 60,
    color: "white",
  },
});
