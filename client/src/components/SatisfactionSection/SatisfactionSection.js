import React from 'react';
import Telefon from './../Telefon';
import CONSTANTS from '../../constants';
import styles from './SatisfactionSection.module.sass';

function SatisfactionSection () {
  return (
    <section className={styles.satisfactionSection}>
      <div className={styles.containerPayFraction}>
        <ul className={styles.listBoxSatisfaction}>
          <li className={styles.listItemPayFraction}>
            <span className={styles.icon}>
              <i className='fas fa-angle-right'></i>
            </span>
            <div>
              <h4>Pay a Fraction of cost vs hiring an agency</h4>
              <p>
                For as low as $299, our naming contests and marketplace allow
                you to get an amazing brand quickly and affordably.
              </p>
            </div>
          </li>
          <li className={styles.listItemBorderTop}></li>
          <li className={styles.listItemPayFraction}>
            <span className={styles.icon}>
              <i className='fas fa-angle-right'></i>
            </span>
            <div>
              <h4>Satisfaction Guarantee</h4>
              <p>
                Of course! We have policies in place to ensure that you are
                satisfied with your experience.{' '}
                <a
                  href='#'
                  style={{ textDecoration: 'none', color: '#377dff' }}
                >
                  Learn more
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.containerQuestions}>
        <ul className={styles.listBoxSatisfaction}>
          <li className={styles.listItemQuestions}>
            <h4>Questions?</h4>
            <p>
              Speak with a Squadhelp platform expert to learn more and get your
              questions answered.
            </p>
            <button className={styles.btnConsultion}>
              Schedule Consultation
            </button>
            <Telefon
              src={`${CONSTANTS.STATIC_IMAGES_PATH}phone_icon.svg`}
              alt='phone'
              style={{ color: '#FFF' }}
            />
            <span>Call us for assistance</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SatisfactionSection;
