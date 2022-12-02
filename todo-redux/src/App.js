import "./app.css";
import { useState } from 'react';
import Todocompo from "./components/addtodos";
import Showtodos from "./components/Listedtodos";

function App() {
      return (
    <div className="App">
        <Todocompo />
        <Showtodos
        />
    </div>
);

}
export default App;
