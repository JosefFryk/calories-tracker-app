import React from "react";

const AppModal = ({setOpenModal}) => {
    return (
        <div className="app_modal">
            <h3>Calories must be greater then 0 and meal name cannot be blank</h3>
            <button className="btn_close_modal" onClick={() => setOpenModal(false)}>Close</button>

        </div>
    )
}

export default AppModal