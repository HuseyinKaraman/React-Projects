import { useApi } from "../context/ApiContext";

const citys = [
   "Adana",
   "Adiyaman",
   "Afyon",
   "Agri",
   "Aksaray",
   "Amasya",
   "Ankara",
   "Antalya",
   "Ardahan",
   "Artvin",
   "Aydin",
   "Balikesir",
   "Bartin",
   "Batman",
   "Bayburt",
   "Bilecik",
   "Bingol",
   "Bitlis",
   "Bolu",
   "Burdur",
   "Bursa",
   "Canakkale",
   "Cankiri",
   "Corum",
   "Denizli",
   "Diyarbakir",
   "Duzce",
   "Edirne",
   "Elazig",
   "Erzincan",
   "Erzurum",
   "Eskisehir",
   "Gaziantep",
   "Giresun",
   "Gumushane",
   "Hakkari",
   "Hatay",
   "Igdir",
   "Isparta",
   "Istanbul",
   "Izmir",
   "Kahramanmaras",
   "Karabuk",
   "Karaman",
   "Kars",
   "Kastamonu",
   "Kayseri",
   "Kilis",
   "Kirikkale",
   "Kirklareli",
   "Kirsehir",
   "Kocaeli",
   "Konya",
   "Kutahya",
   "Malatya",
   "Manisa",
   "Mardin",
   "Mersin",
   "Mugla",
   "Mus",
   "Nevsehir",
   "Nigde",
   "Ordu",
   "Osmaniye",
   "Rize",
   "Sakarya",
   "Samsun",
   "Sanliurfa",
   "Siirt",
   "Sinop",
   "Sirnak",
   "Sivas",
   "Tekirdag",
   "Tokat",
   "Trabzon",
   "Tunceli",
   "Usak",
   "Van",
   "Yalova",
   "Yozgat",
   "Zonguldak",
];

function toWeekOfDay(valid_date) {
   const date = new Date(valid_date);
   return date.toLocaleString("en-us", { weekday: "long" });
}

function imageSource(icon) {
   return require("../../public/icons/" + icon + ".png");
}

function Display() {
   const { data, isLoading, setCity } = useApi();

   const onChangeHandler = (e) => {
      setCity(e.target.value);
   };

   return (
      <div className="display-style">
         <h1>Weather Forecast Application</h1>

         <select onChange={onChangeHandler} className="select">
            {citys.map((cityname, index) => (
               <option value={cityname} key={index}>
                  {cityname}
               </option>
            ))}
         </select>

         <br />
         <br />
         <div className="weekly-weather">
            {!isLoading &&
               data?.map((day, index) => (
                  <div key={index} className={`item ${index === 0 ? "current-day" : ""}`}>
                     <p>{toWeekOfDay(day.valid_date)}</p>
                     <img
                        src={imageSource(day.weather.icon)}
                        alt=""
                        className="icon"
                     />
                     <p>{day.min_temp}&#8451;</p>
                     <p>{day.max_temp}&#8451;</p>
                  </div>
               ))}
         </div>
      </div>
   );
}

export default Display;
