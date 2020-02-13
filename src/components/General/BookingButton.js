import React from "react";
import { Button } from "reactstrap";

const BookingButton = ({ doctorId, size, className:passedClasses }) => {
//   console.log(doctorId);
  if(!passedClasses) passedClasses = "btn-font btn-weight";
  return (
    <>
      <Button
        // className="btn-font btn-weight"
        // className="btn-weight"
        className={passedClasses}
        size={size}
        color="primary"
        href={`https://www.hotdoc.com.au/medical-centres/wodonga-VIC-3690/gps-on-vermont/doctors/${doctorId}`}
        // onClick={e => e.preventDefault()}
      >
        Online Appointments
      </Button>
    </>
  );
};

export default BookingButton;