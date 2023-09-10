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
      <div><label htmlFor="timing">Select Date</label></div>
      <div>
      <input
        type="date"
        name="timing"
        id="timing"
        required
        onChange={handleDateChange}
      />
      </div>
    </div>
  );
}

export default MeetingDateField;
