### Telegram Bot Link

Find and interact with the Telegram bot [here](https://t.me/Jatin_weather_bot).

## Features

- **User Subscription**: Users can subscribe to receive daily weather updates.
- **Periodic Updates**: Weather updates are sent periodically to subscribed users based on their preferences.
- **Unsubscribe Option**: Users can unsubscribe at any time to stop receiving weather updates.
- **MongoDB Integration**: Utilizes MongoDB to store user subscription data securely.
- **Admin Panel**: Includes an admin panel accessible through Google login to manage bot settings (API keys, etc.) and user accounts (blocking, deleting, etc.).
- **OpenWeatherMap API**: Integration with the OpenWeatherMap API to fetch accurate weather data.

## Setup

### Installation

1. Install dependencies using `npm i` in admin-panel and backend-bot.

### Configuration

1. Obtain API keys from OpenWeatherMap.
2. Configure environment variables (create a `.env` file):
   ```
   TELEGRAM_BOT_TOKEN
   WEATHER_API_KEY
   CITY
   DATABASE_CONNECTION_STRING
   ```
   
### Running the Application

Run the application in development mode:

```
npm run start
```
