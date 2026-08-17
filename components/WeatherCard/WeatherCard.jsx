import { View, Text } from "react-native";
import { styles } from "./WeatherCard.styles";

function WeatherCard({ searchedCity, weather, getWeatherCondition }) {
  return (
    <View style={styles.weatherCard}>
      <View style={styles.weatherCardHeader}>
        <View>
          <Text selectable style={styles.cityName}>
            {searchedCity}
          </Text>
          <Text selectable style={styles.condition}>
            {getWeatherCondition(weather.current.weather_code)}
          </Text>
        </View>
        <Text style={styles.weatherIcon}></Text>
      </View>

      <View style={styles.temperatureRow}>
        <Text selectable style={styles.temperature}>
          {Math.round(weather.current.temperature_2m)}°
        </Text>
        <Text selectable style={styles.feelsLike}>
          Feels like {Math.round(weather.current.apparent_temperature)}°C
        </Text>
      </View>
    </View>
  );
}

export default WeatherCard;
