import './App.css';
import Card from "./Components/Card/Card";
import {getData} from "./db/db";

const foods = getData();
console.log(foods)

function App() {
    return (
        <>
            <h1 className="heading">www.artka.dev</h1>
            <div className="cards__container">
                {foods.map(food => {
                    return <Card food={food} key={food.id}/>
                })}
            </div>
        </>
    );
}

export default App;
