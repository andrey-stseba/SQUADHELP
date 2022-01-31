const styleLink = { textDecoration: 'none', color: '#377dff' };
const styleList = {
  listStyle: 'initial',
  marginBottom: 16 + 'px',
  paddingLeft: 40 + 'px'
};

const linkPricingPage = (
  <a href='#' style={styleLink}>
    Pricing Page
  </a>
);

const linkManagedService = (
  <a href='#' style={styleLink}>
    Managed Contest Service
  </a>
);

export const managedData = [
  {
    title: 'What are Managed Contests?',
    content: (
      <div>
        The "Managed" option is a fully managed service by Squadhelp Branding
        experts. It includes a formal brief preparation by Squadhelp team and
        management of your contest. Managed Contests are a great fit for
        companies that are looking for an 'Agency' like experience and they do
        not want to manage the contest directly. Our branding team has directly
        managed hundreds of branding projects and has learned several best
        practices that lead to successful project outcomes. Our team will apply
        all best practices towards the management of your branding project.
        Learn more about our {linkManagedService}
      </div>
    )
  },
  {
    title: "What's a typical timeline for a Managed Contest?",
    content: (
      <div>
        The overall process takes 12-13 days.
        <ul style={styleList}>
          <li>
            The Managed projects start with a project kick-off call with your
            Branding Consultant. You can schedule this call online immediately
            after making your payment.
          </li>
          <li>
            After your kick-off call, the Branding consultant will write your
            project brief and send for your approval within 1 business day.
          </li>
          <li>
            Upon your approval, the contest will go live. The branding
            consultant will help manage your project throughout the
            brainstorming phase (typically 5 days).
          </li>
          <li>
            Upon the completion of brainstorming phase, the branding consultant
            will work with you to test the top 6 names from your Shortlist (3-5
            Days). In addition, the branding consultant will coordinate the
            detailed Trademark screening (1-3 days)
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'How much do Managed Contests cost?',
    content: (
      <div>
        We offer two levels of Managed Contests. Standard ($999) and Enterprise
        ($1999). The Enterprise managed contest includes:
        <ul style={styleList}>
          <li>
            (1) a $500 award amount (instead of $300), which will attract our
            top Creatives and provide more options to choose from;
          </li>
          <li>
            (2) we will ensure a senior member of our branding team is assigned
            to your project and the branding team will invest about 3X more time
            in the day-to-day management of your project;
          </li>
          <li>
            (3) you will receive more high-end trademark report and 5X more
            responses for your audience test.
          </li>
          <li>
            Here is a link to our {linkPricingPage} with a detailed comparison
            of the two packages.
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'Where are the Branding Consultants located?',
    content:
      'All our branding consultants are based in in our Headquarters (Hoffman Estates, IL). Our branding consultants have many years of experience in managing hundreds of branding projects for companies ranging from early stage startups to Fortune 500 corporations.'
  }
];
