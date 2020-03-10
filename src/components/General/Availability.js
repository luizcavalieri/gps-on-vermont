import React from "react"
import { Badge } from "reactstrap";


const Availability = ({ label, values }) => {

    // console.log(values);
    return (
        <>
            <div className="availability">
                {/* {label} */}
                {values.map((value, index) => (
                    // <Badge  key={index} color="light" pill>{value.day}</Badge>
                    // <Badge  key={index} color="danger" pill>{value.day}</Badge>
                    <Badge  key={index} color="primary" pill>{value.day}</Badge>
                    // <Badge  key={index} color="success" pill>{value.day}</Badge>
                    // <Badge  key={index} color="warning" pill>{value.day}</Badge>
                    // <Badge  key={index} color="info" pill>{value.day}</Badge>

                ))}
            </div>
        </>
    )
}

export default Availability;