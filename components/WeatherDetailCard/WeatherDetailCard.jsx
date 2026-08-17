import { View, Text } from "react-native";
import { styles } from "./WeatherDetailCard.styles";

function WeatherDetailCard({ weather }) {
  const weatherDetails = weather
    ? [
        {
          label: "Humidity",
          value: `${weather.current.relative_humidity_2m}%`,
          icon: "💧",
        },
        {
          label: "Wind",
          value: `${weather.current.wind_speed_10m} km/h`,
          icon: "🌬️",
        },

        {
          label: "Pressure",
          value: `${weather.current.pressure_msl} hPa`,
          icon: "⌁",
        },

        {
          label: "Percipitation",
          value: `${weather.current.precipitation} inch`,
          icon: "🫧",
        },
      ]
    : [];

  return (
    <View style={styles.detailsGrid}>
      {weatherDetails.map((detail) => (
        <View key={detail.label} style={styles.detailCard}>
          <Text style={styles.detailIcon}>{detail.icon}</Text>
          <Text selectable style={styles.detailLabel}>
            {detail.label}
          </Text>
          <Text selectable style={styles.detailValue}>
            {detail.value}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default WeatherDetailCard;
