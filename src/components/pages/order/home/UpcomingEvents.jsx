import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

const UpcomingEventsStyled = styled.section`
  padding: 50px 20px;
  background-color: #fff;
  font-family: 'Poppins', sans-serif;

  h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }

  p {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 40px;
    text-align: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    width: 90%;
    margin: auto;
  }

  .event-card {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: left;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 15px;
    }

    .event-title {
      font-size: 1.2em;
      color: #333;
      margin-bottom: 10px;
    }

    .event-date {
      font-size: 1.1em;
      color: #007bff;
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      svg {
        margin-right: 5px;
      }
    }

    .event-description {
      font-size: 1em;
      color: #666;
      margin-bottom: 15px;
    }

    .details-button {
      display: inline-block;
      margin-top: 10px;
      padding: 10px 20px;
      font-size: 1em;
      color: #fff;
      background-color: #007bff;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:1337/api/evenements?sort=date:asc&pagination[limit]=4&populate=*')
      .then(response => {
        setEvents(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des événements', error);
        setLoading(false);
      });
  }, []);

  return (
    <UpcomingEventsStyled>
      <h2>Événements à Venir</h2>
      <p>Ne manquez pas nos prochains événements et formations. Réservez votre place dès maintenant !</p>
      <div className="events-grid">
        {events.map(({ attributes, id }) => (
          <div key={id} className="event-card">
            <img 
              src={`http://localhost:1337${attributes.image.data.attributes.url}`} 
              alt="image" 
              className='event-img' 
            />
            <div className="event-title">{attributes.Name}</div>
            <div className="event-date">
              <FaCalendarAlt />
              {new Date(attributes.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="event-description">Lieu : {attributes.description}</div>
            <a href={`/evenements/${id}`} className="details-button">Voir les détails</a>
          </div>
        ))}
      </div>
      {loading && <div className="loading">Chargement des événements...</div>}
    </UpcomingEventsStyled>
  );
};

export default UpcomingEvents;
