// consts styles contests
const styleLink = { textDecoration: 'none', color: '#377dff' };
const styleList = {
  listStyle: 'initial',
  marginBottom: 16 + 'px',
  paddingLeft: 40 + 'px'
};

// consts links contests
const linkRefundPolicy = (
  <a href='#' style={styleLink}>
    Refund Policy
  </a>
);
const linkPricingPage = (
  <a href='#' style={styleLink}>
    Pricing Page
  </a>
);
const linkNameExamples = (
  <a href='#' style={styleLink}>
    Name Examples
  </a>
);
const linkTaglineExamples = (
  <a href='#' style={styleLink}>
    Tagline Examples
  </a>
);
const linkLogoExamples = (
  <a href='#' style={styleLink}>
    Logo Examples
  </a>
);

// consts lists contests
const listContent = (
  <ul style={styleList}>
    <li>
      If the contest ends and you have not yet found a name that you’d like to
      move forward with, we can provide complimentary extension of your contest
      as well as a complimentary consultation with one of our branding
      consultants (a $99 value).
    </li>
    <li>
      By exploring our premium domain marketplace you can apply the contest
      award towards the purchase of any name listed for sale.
    </li>
    <li>
      If you choose the Gold package or Platinum package and keep the contest as
      "Not Guaranteed", you can request a partial refund if you choose not to
      move forward with any name from you project. (Please note that the refund
      is for the contest award). Here is a link to our {linkRefundPolicy}
    </li>
  </ul>
);

export const contestsData = [
  {
    title: 'How long does it take to start receiving submissions?',
    content:
      'For Naming contests, you will start receiving your submissions within few minutes of launching your contest. Since our creatives are located across the globe, you can expect to receive submissions 24 X 7 throughout the duration of the brainstorming phase.'
  },
  {
    title: 'How long do Naming Contests last?',
    content:
      'You can choose a duration from 1 day to 7 days. We recommend a duration of 3 Days or 5 Days. This allows for sufficient time for entry submission as well as brainstorming with creatives. If you take advantage of our validation services such as Audience Testing and Trademark Research, both will be an additional 4-7 days (3-5 business days for Audience Testing and 1-2 business days for Trademark Research).'
  },
  {
    title: 'Where are the creatives located?',
    content:
      'About 70% of our Creatives are located in the United States and other English speaking countries(i.e. United Kingdom, Canada, and Australia.). We utilize an advanced rating score algorithm to ensure that high quality creatives receive more opportunities to participate in our contests.'
  },
  {
    title: 'What if I do not like any submissions?',
    content: (
      <div>
        While it is unusually rare that you will not like any names provided, we
        have a few options in case this problem occurs: {listContent}
      </div>
    )
  },
  {
    title: 'How much does it cost?',
    content: (
      <div>
        Our naming competitions start at $299, and our logo design competitions
        start at $299. Also, there are three additional contest level that each
        offer more features and benefits. See our {linkPricingPage} for details
      </div>
    )
  },
  {
    title:
      'I need both a Name and a Logo. Do you offer any discount for multiple contests?',
    content: (
      <div>
        Yes! We have many contest bundles - our most popular being our Name,
        Tagline, and Logo bundle. Bundles allow you to purchase multiple
        contests at one time and save as much as from $75 - $400. You canlearn
        more about our bundle options on our {linkPricingPage}.
      </div>
    )
  },
  {
    title: 'What if I want to keep mybusiness idea private?',
    content:
      'You can select a Non Disclosure Agreement (NDA) option at the time oflaunching your competition. This will ensure that only those contestants who agree to the NDA will be able to read your project brief and participate in the contest. The contest details will be kept private from other users, as well as search engines.'
  },
  {
    title: 'Can you serve customers outsidethe US?',
    content:
      'Absolutely. Squadhelp services organizations across the globe. Our customer come from many countries, such as the United States, Australia, Canada, Europe, India, and MENA. We’ve helped more than 25,000 customer around the world.'
  },
  {
    title: 'Can you see any examples?',
    content: (
      <div>
        Our creatives have submitted more than 6 Million names and thousands of
        logos on our platform. Here are some examples of Names, Taglines, and
        Logos that were submitted in recent contests.
        <ul style={styleList}>
          <li>{linkNameExamples}</li>
          <li>{linkTaglineExamples}</li>
          <li>{linkLogoExamples}</li>
        </ul>
      </div>
    )
  }
];
