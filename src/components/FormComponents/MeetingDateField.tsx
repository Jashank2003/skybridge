import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';
function MeetingDateField({
  selected,
  setStartDate,
}: {
  selected: moment.Moment;
  setStartDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
}) {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = moment(event.target.value, 'YYYY-MM-DD');
    setStartDate(selectedDate); // Use selectedDate to set the new date
  };

  return (
    <div>
      {/* <div><label 
      style={{
        color:'grey',
        fontSize:'1.2rem',
        marginBottom:'3%',
      }} htmlFor="timing">Select Date</label></div> */}
      <div>
      <input
        type="date"
        name="timing"
        id="timing"
        required
        onChange={handleDateChange}
        style={{
          background: 'none',
          border: 'none',
          borderBottom: '3px solid purple', // Initial border color is purple
          outline: 'none',
          transition: 'border-color 0.2s ease',
          color:'white',
          fontSize:'1.2rem',
          fontWeight: '400',
          paddingLeft:'3px',
          // margin: 'auto auto',
        }}
      />
      </div>
    </div>
  );
}

export default MeetingDateField;
