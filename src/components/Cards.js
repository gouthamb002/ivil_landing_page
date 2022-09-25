import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Activites and Projects</h1>
      <h4>IViL is a discussion forum and an action platform for the students of IIT Madras to implement their thoughts for rural India.</h4>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img4.jpg'
              text='SANKALP - It aims to instill an interest in learning in the minds of rural children'
              label='Activities'
              path='/activities'
            />
            <CardItem
              src='images/img9.jpg'
              text='Village Visit - Conduct science demonstrations, cultural activites for children and awareness sessions for villagers.'
              label='Activities'
              path='/activities'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img6.jpg'
              text='Cycle Donation - Making use of cycles donated by IITM stuents by donating them to the needy village children'
              label='Projects'
              path='/projects'
            />
            <CardItem
              src='images/img7.jpg'
              text='E VIDYALOKA HUB - It aims to supplement educational resources for areas with low student-teacher ratio.'
              label='Projects'
              path='/projects'
            />
            <CardItem
              src='images/img8.jpg'
              text='She-Vil - It aims to conduct mentorship programs for rural schoolgirls interested in science by IITM woman scholars.'
              label='Projects'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;