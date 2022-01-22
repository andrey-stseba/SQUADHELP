import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorksPage.module.sass';
function HowItWorksPage () {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <h1>HowItWorksPage</h1>
      </div>
      <Footer />
    </>
  );
}

export default HowItWorksPage;
