import React from 'react';

import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import { headerScrolling } from "./commons";

const PatientInfo = () => {
    useEffect(() => {
        headerScrolling();
      });
    
      return (
        <>

        </>

      );
}

export default PatientInfo;