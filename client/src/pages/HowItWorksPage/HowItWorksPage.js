import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorksPage.module.sass';
import SquadhelpWorkSection from '../../components/SquadhelpWorkSection/SquadhelpWorkSection';
import WaysUseSquadhelpSection from '../../components/WaysUseSquadhelpSection/WaysUseSquadhelpSection';
import SatisfactionSection from '../../components/SatisfactionSection/SatisfactionSection';
function HowItWorksPage () {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <SquadhelpWorkSection />
        <WaysUseSquadhelpSection />
        <SatisfactionSection />
      </div>
      <Footer />
    </>
  );
}

export default HowItWorksPage;
