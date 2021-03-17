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
                <div style={styles.IntroductionTitleStyle}>Introduction</div>
                <div style={styles.IntroductionStyle}>
                    This privacy policy is to provide information to you, our patient, on how your personal information (which includes your health information) is collected and used within our practice, and the circumstances in which we may share it with third parties. 
                </div>
            
          


                <div>
                    <btn style={styles.btn} id="Question1">
                        Why and when your consent is necessary?
                    </btn>
                    
                    <UncontrolledCollapse toggler="#Question1">
                        
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}> 
                                    <p> When you register as a patient of our practice, you provide consent for our GPs and practice staff to access and use your personal information so they can provide you with the best possible healthcare. Only staff who need to see your personal information will have access to it. If we need to use your information for anything else, we will seek additional consent from you to do this. </p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn}  id="Question2" block>
                        Why do we collect, use, hold and share your personal information? 
                    </btn>
                    <UncontrolledCollapse toggler="#Question2">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p>Our practice will need to collect your personal information to provide healthcare services to you. Our main purpose for collecting, using, holding and sharing your personal information is to manage your health. We also use it for directly related business activities, such as financial claims and payments, practice audits and accreditation, and business processes (e.g. staff training). </p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn} id="Question3">
                    What personal information do we collect? 
                    </btn>
                    <UncontrolledCollapse toggler="#Question3">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p> The information we will collect about you includes your: </p>
                                    <p> •	names, date of birth, addresses, contact details </p>
                                    <p> •	medical information including medical history, medications, allergies, adverse events, immunisations, social history, family history and risk factors </p>
                                    <p> •	Medicare number (where available) for identification and claiming purposes </p>
                                    <p> •	healthcare identifiers </p>
                                    <p> •	health fund details.</p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn} id="Question4">
                    Dealing with us anonymously 
                    </btn>
                    <UncontrolledCollapse toggler="#Question4">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p>You have the right to deal with us anonymously or under a pseudonym unless it is impracticable for us to do so or unless we are required or authorised by law to only deal with identified individuals. </p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn} id="Question5">
                    How do we collect your personal information? 
                    </btn>
                    <UncontrolledCollapse toggler="#Question5">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p> Our practice may collect your personal information in several different ways.</p>
                                    <p>1.	When you make your first appointment our practice staff will collect your personal and demographic information via your registration. </p>
                                    <p>2.	During the course of providing medical services, we may collect further personal information. This may include information obtained through electronic transfer of prescriptions (eTP), My Health Record or Medical Objects secure messaging.</p>
                                    <p>3.	We may also collect your personal information when you visit our website, send us an email or SMS, telephone us, make an online appointment or communicate with us using social media. </p>
                                    <p>4.	In some circumstances personal information may also be collected from other sources. Often this is because it is not practical or reasonable to collect it from you directly. This may include information from:</p>
                                    <p>•	your guardian or responsible person</p>
                                    <p>•	other involved healthcare providers, such as specialists, allied health professionals, hospitals, community health services and pathology and diagnostic imaging services</p>
                                    <p>•	your health fund, Medicare, or the Department of Veterans’ Affairs (as necessary). </p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>



                {/* <div style={styles.SignStyle}>
                    Prepared by 
                </div> */}
            
            </div>
          </div>
          <DarkFooter />
        </>
    );


};


let styles= {

btn:{
    color:'white',
    fontWeight: 'bold',
    fontSize:20,
    backgroundColor: '#4085F4',
    display: 'block',
    
    marginTop: 20,
    paddingTop:20,
    paddingBottom:20,
    textAlign: 'center',
    width:'100%',
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
    textAlign: 'justify',
    
    },
IntroductionTitleStyle:{

    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
    // backgroundColor: '#4085F4', 
    // color:'white',

},

IntroductionStyle:{

    fontSize: 20,
    textAlign: 'justify',
    marginBottom: 50,
    marginLeft:10,
    marginRight:10,    
},

LineStyle:{
    fontSize: 17,
    marginRight:40,
},

SignStyle:{
    marginTop: 20,
    marginRight:20,
    textAlign: 'right',
    fontSize: 15,
},

}

export default PrivacyPolicyPage;