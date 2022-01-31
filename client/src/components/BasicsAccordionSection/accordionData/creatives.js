const styleLink = { textDecoration: 'none', color: '#377dff' };

const linkQualityScoring = (
  <a href='#' style={styleLink}>
    Pricing Page
  </a>
);

export const creativesData = [
  {
    title: 'Can anyone join your platform?',
    content: (
      <div>
        We are open to anyone to signup. However, we have an extensive "
        {linkQualityScoring}" process which ensures that high quality creatives
        have the ability to continue to participate in the platform. On the
        other hand, we limit the participation from those creatives who do not
        consistently receive high ratings.
      </div>
    )
  },
  {
    title: 'Can I start participating immediately upon signing up?',
    content:
      'When you initially signup, you are assigned few contests to assess your overall quality of submissions. Based upon the quality of your submissions, you will continue to be assigned additional contests. Once you have received enough high ratings on your submissions, your account will be upgraded to "Full Access", so that you can begin participating in all open contests.'
  },
  {
    title: 'How Do I Get Paid?',
    content:
      'We handle creative payouts via Paypal or Payoneer. Depending upon your country of residence, we may require additional documentation to verify your identity as well as your Tax status.'
  }
];
