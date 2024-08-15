import React from "react";

const AppControlsInputs = ({addMealsHandler, mealName, calories, setMealName,setCalories}) => {
    const onAddMealsClick = () => {
        addMealsHandler();
    }
    return (
        <div className="app_control">
            <div className="app_controls_inputs">
                <input type="text"
                    placeholder="Meal"
                    value={mealName}
                    onChange={e => setMealName(e.target.value)}
                />
                <input type="number"
                    placeholder="Calories"
                    value={calories}
                    onChange={e => setCalories(e.target.value)}
                    min={0}
                />
                <button onClick={onAddMealsClick}>Add Meal</button>   
            </div>
        </div>
    )
}

export default AppControlsInputs;