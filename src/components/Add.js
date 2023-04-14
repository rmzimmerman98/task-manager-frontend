import React, { useState, useEffect } from "react";

const Add = (props) => {
    let emptyTask = { name: '', notes: '', time_to_complete: '', priority: 'DO' }
    const [task, setTask] = useState(emptyTask)

    const handleChange = (event) => {
        setTask({ ...task, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(task)
        setTask(emptyTask)
        // props.setShowAddModal(false)
    }

    return (
        <>
        <div className='mb-3'>
            <div className="add-form">
                <h2 className='app-header'>Add Task</h2>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-10">
                        <label className="form-label" htmlFor="name">Task</label>
                        <input className="form-control" type="text" name="name" required value={task.name} onChange={handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <label className="form-label" htmlFor="time_to_complete">Estimated Time To Complete</label>
                        <input className="form-control" name="time_to_complete" required type="number" id="timeInput" step="5" min="0" value={task.time_to_complete} onChange={handleChange}/>
                    </div>
                    <div className="col-12  mb-3">
                        <label className="form-label" htmlFor="notes">Notes</label>
                        <textarea className="form-control" type="text" rows="3" name="notes" value={task.notes} onChange={handleChange}/>
                    </div>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Priority</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="priority_urgent" name="priority" value="UR" onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="priority_urgent">Urgent</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="priority_do" name="priority" value="DO" checked onChange={handleChange} />
                                <label className="form-check-label" htmlFor="priority_do">Do</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="priority_defer" name="priority" value="DF" onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="priority_defer">Defer</label>   
                            </div>
                        </div>
                    </fieldset>
                </form>
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"/>
            </div>    
        </div>
        </>
    )
}

export default Add