import React from "react";
// import { Button } from "reactstrap";

const BookingButton = ({ doctorId, size, className:passedClasses }) => {

  if(!passedClasses) passedClasses = "btn-font btn-weight";
  return (
    <>
      {/* <Button
        className={passedClasses}
        size={size}
        color="primary"
        href={`https://www.hotdoc.com.au/medical-centres/wodonga-VIC-3690/gps-on-vermont/doctors/${doctorId}`}
        // onClick={e => e.preventDefault()}
      >
        Book Appointment
      </Button> */}
      
      <a href={`https://www.hotdoc.com.au/medical-centres/wodonga-VIC-3690/gps-on-vermont/doctors/${doctorId}`}
          title="Book medical appointments with Dr Carmen Padilla at GPs On Vermont Medical Centre in Wodonga VIC 3690, through HotDoc" 
          target="_blank" rel="noopener noreferrer"
          data-hotdoc-widget="lightbox" 
          data-hotdoc-button class={`${size} icon-calendar`}
          >Book Appointment</a>
    </>
  );
};

export default BookingButton;