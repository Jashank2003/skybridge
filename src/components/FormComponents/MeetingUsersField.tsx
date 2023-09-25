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

    const comboBoxStyle = {
        background: 'none',
        border: 'none',
        // borderBottom: '2px solid purple', // Initial border color is purple
        outline: 'none',
        transition: 'border-color 0.2s ease',
        marginLeft: '-88px',
    };

    return (
        <>
        <EuiFormRow>
            <EuiComboBox
            singleSelection= {singleSelection}
            options={options}
            onChange={onChange}
            selectedOptions={selectedOptions}
            isClearable={isClearable}
            placeholder={placeholder}
            style={comboBoxStyle}
            
            />

            
        </EuiFormRow>    
        </>
    )
}

export default MeetingUsersField
