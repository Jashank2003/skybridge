import React from 'react'

function MeetingMaxUserField({value,setValue}:{
    value:number;
    setValue:React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div>
         <label htmlFor="size">Maximum no. of people</label>
         <input type="number"
                min={1} 
                value={value} 
                onChange={(e) => {
                    if (!e.target.value.length || +e.target.value === 0)
                      setValue(1);
                    else if (+e.target.value > 50) setValue(50);
                    else setValue(+e.target.value);
                  }}
                />
    </div>
  )
}

export default MeetingMaxUserField
