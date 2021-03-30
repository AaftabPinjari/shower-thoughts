import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, removePost,editPost}) => {
  return (
  <div className="grocery-list">
    {items.map((item)=>{
      const {id,title} = item;
      return <article key={id} className="grocery-item">
       <p className="title">{title}</p>
       <div className="btn-container">
        <button type="button" 
        className="edit-btn"
        onClick={()=> editPost(id)}>
          <FaEdit />
        </button>
        <button type="button" className="delete-btn" 
        onClick={()=> removePost(id)}>
          <FaTrash />
        </button>
       </div>
      
      </article>
    })}
  
  </div>
  );
}

export default List
