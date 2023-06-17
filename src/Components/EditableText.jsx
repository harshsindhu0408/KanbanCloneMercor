import React, { useState } from 'react';
import {LuPencil} from "react-icons/lu"
import {FiLink2} from "react-icons/fi"

function EditableText() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('Mobile App');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className='flex flex-row gap-6 items-center justify-center'>
      {isEditing ? (
        <input className='p-3 text-2xl focus:outline-purple-300'
          type="text"
          value={text}
          onChange={handleTextChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <div className='flex flex-row gap-6 items-center justify-center' onClick={handleEditClick}>
          <span className='font-Inter text-[46px] font-bold leading-10'>{text}</span>
          <div className='w-[30px] cursor-pointer h-[30px] 
          flex items-center mt-2 justify-center bg-purple-200 
          rounded-md'><LuPencil className='cursor-pointer' size={19} /></div>
        </div>
      )}
      <div className='w-[30px] mt-2 cursor-pointer h-[30px] flex items-center 
      justify-center bg-purple-200 rounded-md'><FiLink2  size={22}/></div>
    </div>
  );
}

export default EditableText;
