export async function getWeather(city) {
  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`,
  );

  if (!geoRes.ok) {
    throw new Error("Geocoding request failed");
  }

  const geoData = await geoRes.json();
  const result = geoData.results?.[0];

  if (!result) {
    throw new Error("City not found");
  }

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${result.latitude}&longitude=${result.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=7&timezone=auto`,
  );

  if (!weatherRes.ok) {
    throw new Error("Weather request failed");
  }

  return weatherRes.json();
}
