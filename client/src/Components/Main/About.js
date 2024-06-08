import React from 'react';
import bloodDonorImage from '../../assets/banner2.jpg'; // Change to the correct image path
import bannerImage from '../../assets/banner1.jpg'; // Import your banner image here
import bloodDonorImage1 from '../../assets/banner3.jpg';
import styled from 'styled-components'; // Import styled-components library
import { Grid, Box } from '@mui/material'; // Import Material-UI components
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <div className="bg-cover bg-center h-64 p-0" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="bg-gray-900 bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to BloodLine</h1>
        </div>
      </div>
      <Grid container spacing={0} style={{ padding: 0 }}>
        <Grid item xs={12} md={6}>
          <img src={bloodDonorImage} alt="Blood Donor" style={{ width: '100%', paddingTop: '60px', paddingLeft: '30px' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <StyledTitle className='dark:text-white-900'>
              Join the Lifesaving Community
            </StyledTitle>
            <StyledText className='dark:text-white-900'>

              Blood Link is a public donation center with dedicated blood donation members, committed to supporting the evolving healthcare landscape. Established in 1978, Blood Link stands as one of the nation’s oldest and largest nonprofit organizations in transfusion medicine. We extend our blood and volunteer services across the United States. With a broad national presence, deep-rooted community connections, and specialized offerings, we serve as the crucial link that brings people and resources together to drive advancements in transfusion medicine.
              <ul style={{ listStyleType: 'disc', paddingLeft: '80px' }}>
                <li><span style={{ fontWeight: 'bold' }}>Inspiring people to give blood</span></li>
                <li><span style={{ fontWeight: 'bold' }}>Specialist blood donors and clinical supervision.</span></li>
                <li><span style={{ fontWeight: 'bold' }}>Producing a safe and ready blood supply</span></li>
                <li><span style={{ fontWeight: 'bold' }}>Ensuring donor confidentiality and privacy</span></li>
                <li><span style={{ fontWeight: 'bold' }}>Maintaining proper storage and transportation protocols</span></li>
                <li><span style={{ fontWeight: 'bold' }}>Continuous training for staff and volunteers</span></li>

              </ul>
            </StyledText>
          </StyledPaper>
        </Grid>
      </Grid>
      <Grid container spacing={0} style={{ padding: 0 }}>

        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <StyledTitle className='dark:text-white-900' >
              What We Offer for you
            </StyledTitle>
            <StyledText className='dark:text-white-900'>


              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '30px' }}>
                    <li>Red Blood Cells</li>
                    <li>Plasma Products</li>
                    <li>Platelet Products</li>
                    <li>Blood Products for Research</li>
                    <li>Whole Blood</li>
                    <li>Biomedical Services</li>
                  </ul>
                </Grid>
                <Grid item xs={6}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '30px' }}>
                    <li>Blood Products for Research</li>
                    <li>Whole Blood</li>
                    <li>Biomedical Services</li>
                    <li>Cryoprecipitate</li>
                    <li>Factor Concentrates</li>
                    <li>Albumin</li>

                  </ul>
                </Grid>
              </Grid>
            </StyledText>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginBottom: '30px' }}>
          <img src={bloodDonorImage1} alt="Blood Donor" style={{ width: '100%', paddingTop: '60px', paddingRight: '30px' }} />
        </Grid>
      </Grid>
      <Footer />
    </div>


  );
}

export default About;

const StyledContainer = styled.div`
  display: flex;
  
  dark:text-white-900
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 0;
`;

const StyledPaper = styled.div`
  padding: 24px;
  margin-bottom: 30px;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  dark:text-white-900
  color: #252525;
  font-weight: bold;
  padding-top: 80px;
  padding-left: 50px;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 20px;
`;

const StyledText = styled.p`
  margin-top: 20px;
  dark:text-white-900
  margin-bottom: 10px;
  letter-spacing: normal;
  line-height: normal;
  padding-left: 50px;
`;
