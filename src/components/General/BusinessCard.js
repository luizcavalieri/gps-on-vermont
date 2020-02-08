import React from "react";
import IconCheckList from "./IconCheckList";
import IconSocialMediaList from "./IconSocialMediaList";
import DescriptionList from "./DescriptionList";
import BookingButton from "./BookingButton";

const BusinessCard = ({ emp }) => {
  
  let path = emp.image;
  return (
    <>
      <div className="team-player">
        <img
          alt="..."
          className="rounded-circle img-fluid img-raised"
          src={require(`../../assets/img/${path}`)}
        ></img>
        <h4 className="title">{emp.name}</h4>
        <p className="category text-info">{emp.title}</p>
        <DescriptionList list={emp.descriptions} />
        <IconCheckList list={emp.accreditations} />
        <IconSocialMediaList list={emp.socialMedia} />
        {emp.booking? <BookingButton doctorId={emp.bookingDoctorId}/> : null}
      </div>
    </>
  );
};

export default BusinessCard;
