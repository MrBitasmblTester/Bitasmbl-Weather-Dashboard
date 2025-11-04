# Bitasmbl-Weather-Dashboard

Description
A beginner-friendly React-based weather dashboard that allows users to search for any city and view current weather details in real time using the OpenWeather API. The project emphasizes API integration, functional components with React Hooks, and a responsive design powered by Tailwind CSS.

## Tech Stack
- React
- Tailwind CSS

## Requirements
- Use functional React components with hooks
- Fetch real-time weather data from OpenWeather API
- Style UI responsively using Tailwind CSS

## Installation
1. Clone the repository:
   bash
   git clone https://github.com/your-username/Bitasmbl-Weather-Dashboard.git
   
2. Navigate to the project directory:
   bash
   cd Bitasmbl-Weather-Dashboard
   
3. Install dependencies:
   bash
   npm install
   
4. Create a `.env` file in the root with the following content:
   bash
   REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key_here
   

## Usage
1. Start the development server:
   bash
   npm start
   
2. Open your browser and go to `http://localhost:3000`.
3. Enter a city name in the search bar and press Enter to view current weather details.

## Implementation Steps
1. Initialize the project using Create React App:
   bash
   npx create-react-app Bitasmbl-Weather-Dashboard
   
2. Install and configure Tailwind CSS:
   bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   
   - Update `tailwind.config.js` to include your `src` directory.
   - Add Tailwind directives to `src/index.css`.
3. Build reusable functional components:
   - `SearchBar` for city input.
   - `WeatherCard` or `WeatherDisplay` for rendering weather details.
4. Create a custom hook (e.g., `useWeather`) to fetch data from the OpenWeather API using `fetch` or `axios`.
5. Manage state with `useState` and handle side effects with `useEffect` to trigger API calls on search.
6. Style components responsively with Tailwind CSS utility classes.
7. Test the application across different screen sizes to ensure responsive behavior.

## API Endpoints
- GET `https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric`