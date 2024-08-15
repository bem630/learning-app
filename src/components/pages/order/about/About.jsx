import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const AboutSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 50px;
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 50px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SectionWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  //flex: 1;
  max-width: 50%;
  padding: 20px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    text-align: justify;
    color: #555;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const ImageContainer = styled.div`
  //flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TeamContainer = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const TeamMembers = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

const MemberCard = styled(motion.div)`
  margin-top: 20px;
  text-align: center;
  max-width: 200px;
`;

const MemberImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 50px;

  button {
    padding: 15px 30px;
    font-size: 1.1rem;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const VideoContainer = styled.div`
  margin-bottom: 60px;
  text-align: center;

  video {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
`;

const TestimonialsSection = styled.section`
  margin-top: 80px;
  text-align: center;
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const TestimonialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestimonialCard = styled(motion.div)`
  max-width: 300px;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;

const TestimonialAuthor = styled.h4`
  font-size: 1.2rem;
  color: #007BFF;
`;

const About = () => {
  return (
    <AboutSection>
      <Title>À propos de notre Organisation</Title>
      <Subtitle>Découvrez ce qui nous rend uniques et pourquoi nous sommes la meilleure option pour vos besoins en formation.</Subtitle>

      <VideoContainer>
        <video controls>
          <source src="/src/assets/video.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
      </VideoContainer>
      
      <SectionWrapper
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ImageContainer>
          <Image src="/src/assets/hero_bg.jpg" alt="Notre Mission" />
        </ImageContainer>
        <TextContainer>
          <h3>Notre Mission</h3>
          <p>Notre mission est de fournir des formations de haute qualité, accessibles à tous, pour développer les compétences nécessaires dans le monde numérique d'aujourd'hui.</p>
        </TextContainer>
      </SectionWrapper>
      
      <SectionWrapper
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <TextContainer>
          <h3>Nos Valeurs</h3>
          <p>Nous croyons en l'innovation, l'intégrité, et l'engagement envers nos apprenants. Ces valeurs guident tout ce que nous faisons.</p>
        </TextContainer>
        <ImageContainer>
          <Image src="/src/assets/hero_bg.jpg" alt="Nos Valeurs" />
        </ImageContainer>
      </SectionWrapper>
      
      <TeamContainer>
        <Title>Notre équipe</Title>
        <TeamMembers>
          <MemberCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MemberImage src="/src/assets/teacher-1.jpg" alt="Membre 1" />
            <h4>Nom Membre 1</h4>
            <p>Rôle</p>
          </MemberCard>
          <MemberCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MemberImage src="/src/assets/teacher-1.jpg" alt="Membre 2" />
            <h4>Nom Membre 2</h4>
            <p>Rôle</p>
          </MemberCard>
          <MemberCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MemberImage src="/src/assets/teacher-1.jpg" alt="Membre 3" />
            <h4>Nom Membre 3</h4>
            <p>Rôle</p>
          </MemberCard>
        </TeamMembers>
      </TeamContainer>

      <TestimonialsSection>
        <Title>Ce que disent nos apprenants</Title>
        <TestimonialsWrapper>
          <TestimonialCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialText>“Une formation de qualité qui m'a permis d'acquérir de nouvelles compétences et de booster ma carrière.”</TestimonialText>
            <TestimonialAuthor>Jean Dupont</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialText>“Les formateurs sont très compétents et le contenu des cours est parfaitement adapté aux besoins du marché.”</TestimonialText>
            <TestimonialAuthor>Marie Curie</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialText>“Je recommande vivement cette formation à toute personne souhaitant évoluer dans le secteur du numérique.”</TestimonialText>
            <TestimonialAuthor>Paul Martin</TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsWrapper>
      </TestimonialsSection>

      <CallToAction>
        <button>Rejoignez-nous dès aujourd'hui</button>
      </CallToAction>
    </AboutSection>
  );
}

export default About;
