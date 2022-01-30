import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorksPage.module.sass';
import SquadhelpWorkSection from '../../components/SquadhelpWorkSection/SquadhelpWorkSection';
import WaysUseSquadhelpSection from '../../components/WaysUseSquadhelpSection/WaysUseSquadhelpSection';
import SatisfactionSection from '../../components/SatisfactionSection/SatisfactionSection';
import NamingContestsSection from '../../components/NamingContestsSection/NamingContestsSection';
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection';
import StatsSection from '../../components/StatsSection/StatsSection';
import CTASection from '../../components/CTASection/CTASection';
import BasicsAccordionSection from '../../components/BasicsAccordionSection/BasicsAccordionSection';
function HowItWorksPage () {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <SquadhelpWorkSection />
        <WaysUseSquadhelpSection />
        <hr />
        <NamingContestsSection />
        <hr />
        <BasicsAccordionSection />
        <CTASection />
        <StatsSection />
        <SatisfactionSection />
        <FeaturedSection />
      </div>
      <Footer />
    </>
  );
}

export default HowItWorksPage;
