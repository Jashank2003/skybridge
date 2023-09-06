import React from 'react'
import Select from 'react-select';
function MeetingUsersField(
    {
        label,options,onChange,selectedOptions,isClearable,placeholder,singleSelection= false
    }:{
        label:string; options:any; onChange:any; selectedOptions:any; isClearable? : boolean; placeholder:string; singleSelection:any;
    }
) 


{
  return (
    <>
     <div>
            <label>{label}</label>
            <Select
                isMulti={!singleSelection}
                options={options}
                onChange={onChange}
                value={selectedOptions}
                isClearable={isClearable}
                placeholder={placeholder}
            />
        </div>
    </>
  )
}

export default MeetingUsersField
