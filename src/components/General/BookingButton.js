import React from "react";
import { Button } from "reactstrap";

const BookingButton = ({ doctorId }) => {
//   console.log(doctorId);
  if (!doctorId) return null;

  return (
    <>
      <Button
        className="btn-font btn-weight"
        size="lg"
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
