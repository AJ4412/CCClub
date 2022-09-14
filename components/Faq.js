import Item_faq from "./Item_faq";
const Faq = () => {
  let data = [
    // {
    //   title: "What is a NFT?",
    //   text: "NFT stands for “non-fungible token” and it’s a truly unique digital item that YOU can buy, own, and trade.",
    // },
    {
      title: "Why are there two mints for this project?",
      text: "There are two mints because we want to build trust and funds for the project. With something like a Blue Chip Fund, we need to have a large sum of money to purchase big name projects as a community. We also want to show our holders we are putting them first by giving away 15% of the first mint.",
    },
    {
      title: "Where and when can I mint a Chameleon?",
      text: "You will be able to mint a Chameleon directly from our website. The tentative mint date is August 15th 2022, but this may be adjusted to ensure our project's success.",
    },
    {
      title: "Where can I talk to people about Crypto Chameleons Club?",
      text: "The most active area of our community is our Discord. We are also very active on Twitter. Throw us a follow and hop in the Discord to get more involved and earn a WL spot!",
    },
    {
      title: "How will you market the Crypto Chameleons Club NFT?",
      text: "We are working with multiple Twitter influencers and prominent NFT drop calendars.",
    },
    {
      title: "How can I be more involved in the community?",
      text: "Any hiring for positions will be done through our Discord. Since jobs are not always available, the best way to be involved in the community is to invite your friends!",
    },
    {
      title: "Will anyone from the community ever ask for my personal information or wallet?",
      text: "NO! The only time you will be asked to submit your wallet is when you receive a White List spot, and this will take place in our Discord. Please be careful of any links that are sent to you. The last thing we want is for our community members to be scammed!",
    },
    {
      title: "Where can I talk to the founders of Crypto Chameleons Club?",
      text: "While we are on Discord daily and always ready to chat, there will also be plenty of Twitter Spaces held where you can hear us talk about the project.",
    },
    {
      title: "Where should I start with Crypto Chameleons Club?",
      text: "We know that we have thrown a lot at you at once, and we appreciate you learning about us! Go check out our roadmap, and if you like that, read our White Pages that go into more detail about the project. Always remember we are here to talk in the Discord and will answer any questions you have!",
    },
  ];
  return (
    <section id="faq" className="faq-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="title-container">
              <h1 className="title">FAQ</h1>
            </div>
          </div>
          <div className="col-sm-12 text-left">
            <div
              className="panel-group"
              id="faqCollapse"
              role="tablist"
              aria-multiselectable="true"
            >
              {data.map((d,i) => {
                return <Item_faq key={i} title={d.title} text={d.text} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="image-stripe-container bottom">
        <div className="col-sm-12">
          <div className="img-stripe"></div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
