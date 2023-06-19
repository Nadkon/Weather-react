import "./styles.css";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="weather">
        <Form />
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}
