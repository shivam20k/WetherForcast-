# Weather Dashboard

This is a React-based weather dashboard that allows users to search for current weather data, forecast information, and view dynamic background images based on temperature.

## Features

- Search for weather by city.
- View current weather data, including temperature, humidity, wind speed, and weather description.
- View a 5-day weather forecast.
- Change between Celsius and Fahrenheit temperature units.
- Dynamic background images based on the current temperature.

## Prerequisites

Before you can run the project, you'll need the following:

1. **Node.js** and **npm** installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org/).

2. **OpenWeatherMap API Key**: This project fetches weather data using the OpenWeatherMap API. You'll need to obtain an API key.

## Step-by-Step Guide to Run the Application

### Step 1: Clone the repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/weather-dashboard.git
    

Step 2: Install dependencies
Navigate to the project directory:

bash
Copy code
cd weather-dashboard
Install the necessary dependencies using npm:

bash
Copy code
npm install
Step 3: Obtain an OpenWeatherMap API Key
To access weather data, you need to create an account on OpenWeatherMap and get an API key.

Go to OpenWeatherMap.
Sign up or log in to your account.
Once logged in, navigate to your API keys section (located in your account settings).
Copy the generated API key.
Step 4: Add your API Key
Create a .env file in the root of the project and add your API key as follows:

bash
Copy code
REACT_APP_OPENWEATHER_API_KEY=your-api-key-here
Make sure to replace your-api-key-here with the API key you obtained in Step 3.

Step 5: Start the application
Now, you can start the React development server by running:

bash
Copy code
npm start
This will start the application, and you can view it in your browser at http://localhost:3000.