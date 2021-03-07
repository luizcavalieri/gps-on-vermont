import React, { useEffect, useState, StyleSheet } from "react";
import { headerScrolling } from "./commons";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import { Container } from "reactstrap";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
// import {Document, Page} from 'react-pdf';
// import privacyPolicyPdf from '../../assets/docs/GPS-001-PrivacyPolicy.pdf';
// import privacyPolicypdf from '../../assets/img/test.pdf';
import { getByPlaceholderText } from "@testing-library/react";

const PrivacyPolicyPage = () => {
    const message = "Privacy Policy";

    useEffect(() => {
        headerScrolling();
      });


      

    return (
        <>
          <OtherNavbar />
          <div className="wrapper">
            <LandingPageHeader
            title={message}
            imageClassName={"page-header page-header-xsmall"}
            contentClassName={"content-center-other-pages"}
            titleClassName={"title-small-header"}
            />
            
            <div style={styles.ContainerStyle} >
           <div style={styles.IntroductionStyle1}>Introduction</div>
            <div style={styles.IntroductionStyle2}>This privacy policy is to provide information to you, our patient, on how your personal information (which includes your health information) is collected and used within our practice, and the circumstances in which we may share it with third parties. 
            </div>
           
            <div>

                
                <Button style={styles.ButtonStyle} color="Success" size="lg" id="Question1" style={{ marginBottom: '1rem' }} block>
                    Why and when your consent is necessary?
                </Button>
                <UncontrolledCollapse toggler="#Question1">
                <Card>
                    <CardBody>
                    When you register as a patient of our practice, you provide consent for our GPs and practice staff to access and use your personal information so they can provide you with the best possible healthcare. Only staff who need to see your personal information will have access to it. If we need to use your information for anything else, we will seek additional consent from you to do this. 
                    </CardBody>
                </Card>
                </UncontrolledCollapse>
            </div>

            <div>
                <Button color="Warning" size="lg" id="Question2" style={{ marginBottom: '1rem' }}block>
                     Why do we collect, use, hold and share your personal information? 
                </Button>
                <UncontrolledCollapse toggler="#Question2">
                <Card>
                    <CardBody>
                    Our practice will need to collect your personal information to provide healthcare services to you. Our main purpose for collecting, using, holding and sharing your personal information is to manage your health. We also use it for directly related business activities, such as financial claims and payments, practice audits and accreditation, and business processes (e.g. staff training). 
                    </CardBody>
                </Card>
                </UncontrolledCollapse>
            </div>

            <div>
                <Button color="Info"  size="lg" id="Question3" style={{ marginBottom: '1rem' }}block>
                What personal information do we collect? 
                </Button>
                <UncontrolledCollapse toggler="#Question3">
                <Card>
                    <CardBody>
                    The information we will collect about you includes your:
                    •	names, date of birth, addresses, contact details 
                    •	medical information including medical history, medications, allergies, adverse events, immunisations, social history, family history and risk factors 
                    •	Medicare number (where available) for identification and claiming purposes 
                    •	healthcare identifiers 
                    •	health fund details.

                    </CardBody>
                </Card>
                </UncontrolledCollapse>
            </div>

            <div>
                <Button color="Info" size="lg" id="Question4" style={{ marginBottom: '1rem' }}block>
                Dealing with us anonymously 
                </Button>
                <UncontrolledCollapse toggler="#Question4">
                <Card>
                    <CardBody>
                    You have the right to deal with us anonymously or under a pseudonym unless it is impracticable for us to do so or unless we are required or authorised by law to only deal with identified individuals. 
                    </CardBody>
                </Card>
                </UncontrolledCollapse>
            </div>

            <div>
                <Button color="Info" size="lg" id="Question5" style={{ marginBottom: '1rem' }}block>
                How do we collect your personal information? 
                </Button>
                <UncontrolledCollapse toggler="#Question5">
                <Card>
                    <CardBody>
                    Our practice may collect your personal information in several different ways.
                    1.	When you make your first appointment our practice staff will collect your personal and demographic information via your registration. 
                    2.	During the course of providing medical services, we may collect further personal information. This may include information obtained through electronic transfer of prescriptions (eTP), My Health Record or Medical Objects secure messaging.
                    3.	We may also collect your personal information when you visit our website, send us an email or SMS, telephone us, make an online appointment or communicate with us using social media. 
                    4.	In some circumstances personal information may also be collected from other sources. Often this is because it is not practical or reasonable to collect it from you directly. This may include information from:
                    •	your guardian or responsible person
                    •	other involved healthcare providers, such as specialists, allied health professionals, hospitals, community health services and pathology and diagnostic imaging services
                    •	your health fund, Medicare, or the Department of Veterans’ Affairs (as necessary). 

                    </CardBody>
                </Card>
                </UncontrolledCollapse>
            </div>

            
            </div>
          </div>
          <DarkFooter />
        </>
    );


};


let styles= {

ButtonStyle:{
        width: 60,
        height: 100,
        padding:200,
        backgroundColor: 'blue',
        marginBottom: 20
    },
ContainerStyle:{

    marginTop: 100,
    marginBottom: 100,
    marginLeft:'10%',
    width:'80%',

    align: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    //backgroundColor: '#5A9BD4',
    },
IntroductionStyle1:{

    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 50    
},

IntroductionStyle2:{

    fontSize: 24,
    textAlign: 'center',
    marginBottom: 50    
}

}

export default PrivacyPolicyPage;