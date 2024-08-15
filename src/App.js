import React, { useState, useEffect } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import AppControlsCounter from './components/AppControls/AppControlsCounter';
import AppControlsDelete from './components/AppControls/AppControlsDelete';
import AppControlsInputs from './components/AppControls/AppControlsInputs';

const App = () => {
  const[meals, setMeals] = useState([]);
  const[mealName, setMealName] = useState("");
  const[calories, setCalories] = useState(0);
  const[openModel, setOpenModel] = useState(false);
 
  const addMealsHandler = () => {
    console.log(mealName);
    console.log(calories);

    const oldMeals = [...meals];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random() * 1000),
    }

    const newMeals = oldMeals.concat(meal);
    if(calories <= 0 || mealName === ""){
      alert("Cannot be empty")
    } else {
      setMeals(newMeals);
    }

    setMealName("");
    setCalories(0);
  }

  return (
    <div className="App">
      <AppBar/>
      <AppControlsCounter/>
      <AppControlsDelete/>
      <AppControlsInputs addMealsHandler = {addMealsHandler} mealName = {mealName} calories = {calories} setMealName = {setMealName} setCalories = {setCalories}/>
    </div>
  );
};

//4529
//https://www.youtube.com/watch?v=TNJ6KNSx_jo
export default App;
