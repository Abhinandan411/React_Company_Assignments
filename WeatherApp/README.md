# Project: Weather App

## <span style="color:#29c4f6"> [Hosted Link](https://exquisite-truffle-9bf44c.netlify.app/)

## <span style="color:#29c4f6"> Tech Stack:
 1. React: For building the user interface.
 2. React Icons: For incorporating icons like search and delete.
 3. CSS: For styling the components.
 4. Fetch API: For making HTTP requests to retrieve weather data.

 
## <span style="color:#29c4f6"> Features:
1. City List: Displays a list of cities with their weather data.
2. Fetch Weather Data: Fetches weather data for a city when the “Get Weather” button is clicked.
3. Search Functionality: Allows users to search for a city and highlight it.
4. Dynamic Styling: Changes the border color of the city based on whether its weather data has been fetched.

## <span style="color:#29c4f6"> Working:

1. State Management:
citydata: Stores the list of cities and their status.
data: Stores the fetched weather data.
cityName: Stores the name of the city for which weather data is being fetched.
search: Stores the search input value.
2. Fetching Data:
The fetchData function is called whenever cityName changes. It fetches weather data from the API and updates the data state.
3. Get Weather:
The getWeather function finds the first city that hasn’t been fetched yet, sets it as cityName, and updates its status to true.
4. Search and Highlight:
The setBackground function highlights the city that matches the search input by setting its search property to true.
5. Timeout for Search Highlight:
A useEffect hook with a timeout is used to reset the search highlight after 3 seconds.


## <span style="color:#29c4f6"> Projects Outputs:

![Wether-1](https://github.com/user-attachments/assets/c3e8b001-c58e-4280-b8bd-e86262175dd0)

![Weather-2](https://github.com/user-attachments/assets/66cc2f18-4328-4f37-98cc-318fb7574606)

![Weather-3](https://github.com/user-attachments/assets/e06d3839-083b-49ee-9f26-0194fc449f2c)

