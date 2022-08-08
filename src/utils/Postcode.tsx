import React, { Dispatch, SetStateAction } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { Button } from '@mui/material';

interface PostcodeProps {
  setZoneCode: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<string>>;
}

const Postcode = ({ setZoneCode, setAddress }: PostcodeProps) => {
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
    setZoneCode(data.zonecode); // 대소문자 헷갈림 주의
    setAddress(fullAddress);
    // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return <Button onClick={handleClick}>우편번호 검색</Button>;
};

export default Postcode;
