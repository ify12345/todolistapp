import React, { useState } from 'react'




const Form = ({pro}) => {

    const [newItem, setNewItem] = useState("");

    function handleSubmit(e){
        e.preventDefault()
    
    //  setTodos(currentTodos=>{
    //      return[...currentTodos,
    //  {id:crypto.randomUUID(),title:newItem,completed:false}]
    //  })  
     pro(newItem)
     setNewItem("")
    }


  return (
    <div>
       <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
