import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const HomeContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f06, #a5e);
  color: white;
  text-align: center;
  padding: 0 20px;
`;

const HeroText = styled.div`
  max-width: 800px;
  
  h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    opacity: 0.85;
  }
  
  button {
    background-color: #ff7f50;
    color: white;
    padding: 15px 30px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #ff4500;
    }
  }
`;

const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px 20px;
  background-color: #f9f9f9;

  h2 {
    text-align: center;
    width: 100%;
    margin-bottom: 40px;
    font-size: 2.5rem;
  }
`;

const FeatureCard = styled.div`
  flex-basis: 30%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  text-align: center;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 1rem;
    color: #777;
  }
`;

const CallToActionSection = styled.section`
  background-color: #ff7f50;
  color: white;
  text-align: center;
  padding: 80px 20px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }

  button {
    background-color: white;
    color: #ff7f50;
    padding: 15px 30px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f9f9f9;
    }
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
  
  p {
    font-size: 0.9rem;
  }
`;

const Home = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/register');

    }

  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroText>
          <h1>Fashion Style Match</h1>
          <p>Discover your style twin and connect through fashion!</p>
          <button onClick={handleClick}>Get Started</button>
        </HeroText>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <h2>Features</h2>
        <FeatureCard>
          <img src="https://via.placeholder.com/100" alt="Feature 1" />
          <h3>Fashion Profiles</h3>
          <p>Create a unique fashion profile to showcase your style.</p>
        </FeatureCard>
        <FeatureCard>
          <img src="https://via.placeholder.com/100" alt="Feature 2" />
          <h3>Style Matching</h3>
          <p>We match you based on your fashion preferences, not looks.</p>
        </FeatureCard>
        <FeatureCard>
          <img src="https://via.placeholder.com/100" alt="Feature 3" />
          <h3>Fashion Community</h3>
          <p>Join a community that values fashion and creativity.</p>
        </FeatureCard>
      </FeaturesSection>

      {/* Call to Action Section */}
      <CallToActionSection>
        <h2>Ready to Find Your Style Twin?</h2>
        <button>Join Now</button>
      </CallToActionSection>

      {/* Footer */}
      <Footer>
        <p>&copy; 2024 Fashion Style Match. All Rights Reserved.</p>
      </Footer>
    </HomeContainer>
  );
};

export default Home;
