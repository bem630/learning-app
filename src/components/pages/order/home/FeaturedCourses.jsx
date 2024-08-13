import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { InView } from 'react-intersection-observer'; 

const FeaturedCoursesStyled = styled.div`
  padding: 50px 20px;
  text-align: center;
  //background-color: #f9f9f9;
  font-family: 'Poppins', sans-serif;
  width: 90%;
  margin: auto;

  h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    margin-bottom: 40px;

    .course-card {
      background: #fff;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      transform: translateY(20px);

      &.visible {
        opacity: 1;
        transform: translateY(0);
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.15);
      }

      img {
        width: 100%;
        height: 180px;
        //object-fit: cover;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }

      .course-info {
        padding: 20px;

        h3 {
          font-size: 1em;
          margin-bottom: 10px;
          color: #333;
          text-align: left;
        }

        p {
          font-size: 14px;
          color: #777;
          line-height: 1.6;
          margin-bottom: 20px;
          overflow: hidden;
          text-align: justify;
        }

        a {
          text-decoration: none;
          color: #ff6b6b;
          font-weight: bold;
          transition: color 0.3s ease;

          &:hover {
            color: #f06595;
          }
        }
      }
    }
  }

  .view-all-courses {
    text-align: center;
    margin-top: 30px;

    a {
      background: linear-gradient(45deg, #ff6b6b, #f06595);
      color: #fff;
      padding: 15px 30px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.3s ease;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

      &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b);
      }
    }
  }
`;

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/formations?sort=createdAt:desc&pagination[limit]=6&populate=*');
        setCourses(response.data.data);
      } catch (error) {
        console.error('Erreur lors du chargement des formations:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <FeaturedCoursesStyled>
      <h2>Cours récents</h2>
      <p>Découvrez nos dernières formations pour améliorer vos compétences et booster votre carrière.</p>
      <div className="course-grid">
        {courses.map((course) => (
          <InView key={course.id} triggerOnce threshold={0.1}>
            {({ inView, ref }) => (
              <div ref={ref} className={`course-card ${inView ? 'visible' : ''}`}>
                <img
                  src={`http://localhost:1337${course.attributes.image.data.attributes.url}`}
                  alt={course.attributes.Name}
                  className="all-formation-image"
                />
                <div className="course-info">
                  <h3>{course.attributes.Name}</h3>
                  <p>{course.attributes.details 
                    ? `${course.attributes.details.substring(0, 120)}...`
                    : "Détails non disponibles"}
                  </p>
                  <Link to={`/formations/${course.id}`}>Voir Détails</Link>
                </div>
              </div>
            )}
          </InView>
        ))}
      </div>
      <div className="view-all-courses">
        <Link to="/formations">Voir Tous Les Cours</Link>
      </div>
    </FeaturedCoursesStyled>
  );
};

export default FeaturedCourses;
