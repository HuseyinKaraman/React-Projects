import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

/** @Note: weather data get by https://api.weatherbit.io/  */

const API_KEY = "80d3156acbec476fb8e235a4183f539b";
const BASE_URL = "https://api.weatherbit.io/v2.0/forecast/daily?city=";

const ApiProvider = ({ children }) => {
   const [data, setData] = useState(null);
   const [city, setCity] = useState("Istanbul");
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const url = BASE_URL + city + "&days=7&key=" + API_KEY;

      axios(url)
         .then((resp) => setData(resp.data.data))
         .catch((err) => console.log(err))
         .finally(() => {
            console.log(city);
            setIsLoading(false);
         });
   }, [isLoading, city]);

   const values = {
      data,
      isLoading,
      setCity,
   };

   return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};

// custom hook
const useApi = () => useContext(ApiContext);

export { useApi, ApiProvider };
