import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorksPage.module.sass';
import SquadhelpWorkSection from '../../components/SquadhelpWorkSection/SquadhelpWorkSection';
import WaysUseSquadhelpSection from '../../components/WaysUseSquadhelpSection/WaysUseSquadhelpSection';
function HowItWorksPage () {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <SquadhelpWorkSection />
        <WaysUseSquadhelpSection />
      </div>
      <Footer />
    </>
  );
}

export default HowItWorksPage;
