import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { Button } from '@mui/material';

const Postcode = () => {
  const scriptUrl = process.env.REACT_APP_SCRIPT_URL;
  const open = useDaumPostcodePopup(scriptUrl);
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return <Button onClick={handleClick}>Open</Button>;
};

export default Postcode;
