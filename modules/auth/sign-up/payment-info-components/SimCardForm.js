import React from 'react'
import DropdownWithImage from '../DropdownWithImage';

const SimCardForm = ({data , onChangeNetwork , onChangeNumber , mobileCode}) => {
    return (
        <>
          <DropdownWithImage data={data} onChange={onChangeNetwork} />
          <span>
            <label className="form-control cntry_cde border-0">
              {mobileCode}
            </label>
          </span>

          <input
            type="text"
            maxLength="10"
            minLength="10"
            className="form-control"
            placeholder="3xxxxxxxxxx"
            inputMode="numeric"
            onChange={(e) => onChangeNumber(e)}
          />
        </>
      );
}

export default SimCardForm
