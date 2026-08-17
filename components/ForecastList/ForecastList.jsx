import { FlatList, View, Text } from "react-native";
import { styles } from "./ForecastList.styles";

function ForecastList({ weather }) {
  const forecastDays = weather?.daily
    ? weather.daily.time.slice(1).map((date, i) => {
        const index = i + 1; // skip today (index 0)
        return {
          id: date,
          day: new Date(date).toLocaleDateString("en-US", { weekday: "long" }),
          high: Math.round(weather.daily.temperature_2m_max[index]),
          low: Math.round(weather.daily.temperature_2m_min[index]),
          weatherCode: weather.daily.weather_code[index],
          rainChance: weather.daily.precipitation_probability_max[index],
        };
      })
    : [];

  return (
    <FlatList
      data={forecastDays}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.forecastCard}>
          <Text style={styles.days}>{item.day}</Text>
          <Text style={styles.days}>
            {item.high}° / {item.low}°
          </Text>
          <Text style={styles.days}>{item.rainChance}% rain</Text>
        </View>
      )}
    />
  );
}

export default ForecastList;
