import React from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaCode, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa'; // Vous pouvez ajouter d'autres icônes

const ServicesStyled = styled.div`
  padding: 60px 20px;
  background-color: #f4f4f4;
  font-family: 'Poppins', sans-serif;
  text-align: center;

  h2 {
    font-size: 2.5em;
    margin-bottom: 40px;
    color: #333;
    letter-spacing: 1px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    width: 90%;
    margin: auto;

    .service-card {
      background: #fff;
      border-radius: 15px;
      padding: 30px;
      text-align: left;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.15);
      }

      .icon {
        font-size: 2.5em;
        color: #ff6b6b;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 1.5em;
        margin-bottom: 15px;
        color: #333;
      }

      p {
        font-size: 1em;
        color: #666;
        margin-bottom: 20px;
        text-align: justify;
      }

      .learn-more {
        display: inline-flex;
        align-items: center;
        color: #ff6b6b;
        font-weight: bold;
        font-size: 1.1em;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #f06595;
        }

        svg {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        &:hover svg {
          transform: translateX(5px);
        }
      }
    }
  }
`;

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Développement Web",
      description: "Nous développement des aplications modernes, créant des sites performants et esthétiques.",
      link: "/services/web-development"
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Formation",
      description: "Des formations en présentiel pour améliorer vos compétences et booster votre carrière.",
      link: "/services/training"
    },
    {
      icon: <FaChartLine />,
      title: "Consulting",
      description: "Conseil en stratégie digitale pour aider votre entreprise à croître et à s'adapter au marché.",
      link: "/services/consulting"
    }
  ];

  return (
    <ServicesStyled>
      <h2>Nos Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link} className="learn-more">
              En savoir plus <FaArrowRight />
            </a>
          </div>
        ))}
      </div>
    </ServicesStyled>
  );
};

export default Services;
