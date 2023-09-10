import { EuiComboBox, EuiFormRow } from '@elastic/eui';
import React from 'react'
import Select from 'react-select';
function MeetingUsersField(
    {
        label, options, onChange, selectedOptions, isClearable, placeholder, singleSelection = false
    }: {
        label: string; options: any; onChange: any; selectedOptions: any; isClearable?: boolean; placeholder: string; singleSelection: { asPlainText: boolean } | boolean;
    }
) {
    return (
        <>
        <EuiFormRow label={label}>
            <EuiComboBox
            singleSelection= {{asPlainText:true}}
            options={options}
            onChange={onChange}
            selectedOptions={selectedOptions}
            isClearable={isClearable}
            placeholder={placeholder}
            />

            
        </EuiFormRow>
            {/* <div>
                <label>{label}</label>
                <Select
                    required
                    isMulti={!singleSelection}
                    options={options}
                    onChange={onChange}
                    value={selectedOptions}
                    isClearable={isClearable}
                    placeholder={placeholder}
                />
            </div> */}
            
        </>
    )
}

export default MeetingUsersField
