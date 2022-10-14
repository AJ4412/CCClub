import { Toaster } from "react-hot-toast";
// import logo_ani_inner from "../img/logo_ani_inner.png";
// import logo_ani_outer from "../img/logo_ani_outer.png";
// import paint_splash2 from "../img/paint_splash2.png";
// import Mint_Live from "../img/Mint_Live.gif";
// import twitter_logo from "../img/twitter.png";
// import discord_logo from "../img/discord.png";
import Faq from "./Faq";
import Mint from "./Mint";
// import team1 from "../img/5.jpg";
// import team2 from "../img/3.jpg";
// import team3 from "../img/7.jpg";
// import team4 from "../img/1.jpg";
import { useState } from "react";

const Home = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />

      <header id="navbar-container">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className={
                  navOpen ? "navbar-toggle" : "navbar-toggle collapsed"
                }
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded={navOpen ? "true" : "false"}
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <ul className="navbar-brand" style={{ marginBottom: "34px" }}>
              <img
                assName="logo inner"
                src="/Logo.png"
                alt="Crypto Chameleons Club"
                style={{
                  width: "280px",
                }}
              />
            </ul>
            <div
              className={
                navOpen
                  ? "collapse navbar-collapse navbar-right in"
                  : "collapse navbar-collapse navbar-right"
              }
              style = {{marginTop: "15px"}}
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <a href="#header" className="color_nav">
                    Home
                  </a>
                </li>
                {/* <li>
                  <a href="#mint">Mint</a>
                </li> */}
                {/* <li>
                  <a href="#about">About</a>
                </li> */}
                <li>
                  <a href="#traits" className="color_nav">
                    Traits
                  </a>
                </li>
                <li>
                  <a href="#faq" className="color_nav">
                    FaQ
                  </a>
                </li>

                {/* <li>
                  <a href="#ape" className="coming-soon">
                    Ape N Imports <span>coming soon</span>
                  </a>
                </li> */}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a
                    href="https://twitter.com/club_chameleons"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/twitter.png" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/zNekdUHJUw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/discord.png" alt="discord" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cryptochameleonsclubnft/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/instagram.png" alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section id="header" className="header-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 left text-center">
              <div className="inner-container">
                <h2 className="title">WELCOME TO Crypto Chameleons Club</h2>
                <p>
                  Our 7000 Crypto Chameleons Club NFTs are your ticket to a
                  community and project that is focused on growing the wealth of
                  CCC holders through large Ethereum giveaways and a NFT Fund
                  that is run by the holders!
                </p>
                <a
                  href="https://discord.com/invite/zNekdUHJUw"
                  target="_blank"
                  className="join-discord"
                  rel="noreferrer"
                >
                  JOIN US ON DISCORD
                </a>
              </div>
            </div>
            <div className="col-sm-6 right">
              <section id="mint" className="mint-container">
                <div className="container-fluid">
                  <div className="row">
                    {/* <h1 className="title">mint</h1> */}
                    {/* <div className="col-sm-12 text-center"></div> */}
                    <Mint />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="mint" className="mint-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="title">mint</h1>
            </div>
            <Mint />
          </div>
        </div>
      </section> */}

      {/* <section id="roadmap" className="roadmap-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="title">Roadmap</h1>
            </div>
            <div className="col-sm-12">
              <ul>
                <li>
                  <h2>Q1</h2>
                  <ul>
                    <li>V1 Crypto Chameleons Club mint is live</li>
                    <li>
                      Acquire nodes and begin the once-a-week raffle
                      distribution of nodes. The 1st nodes will be $Strong and
                      $Fire nodes.
                    </li>
                    <li>
                      Prepare for the launch of the 1st Ape crate subscriptions.
                      Get your exclusive crate of Unapologetic Ape themed gear.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>Q2</h2>
                  <ul>
                    <li>
                      Intensified marketing, including reaching out to prominent
                      fashion brands for collaborations.
                    </li>
                    <li>Merch Store to open for UAPE holders.</li>
                    <li>Continued marketing to build brand awareness</li>
                    <li>Sneak peek of Unapologetic City</li>
                    <li>Preview of U-Apes Clothing line</li>
                    <li>Hiring within the community for various positions</li>
                  </ul>
                </li>
                <li>
                  <h2>Q3</h2>
                  <ul>
                    <li>
                      Unapologetic City developers and prototype finalized
                    </li>
                    <li>V2 Airdrop exclusive to holders</li>
                    <li>First drop from the Clothing line</li>
                  </ul>
                </li>
                <li>
                  <h2>Q4</h2>
                  <ul>
                    <li>Unapologetic City goes live</li>
                    <li>Claiming of condos in Apetopia Palms begin</li>
                    <li>V2 road map release</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <section id="about" className="about-container">
        <div className="image-stripe-container top">
          <div className="col-sm-12">
            <div className="img-stripe"></div>
          </div>
        </div>
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="title-container">
                <h1 className="title">About</h1>
                <img
                  className="paint-splash"
                  src="/paint_splash2.png"
                  alt="paint_splash2"
                />
              </div>
              <p>
                Crypto Chameleons Club are a collection of 5000 unique fashion
                inspired NFTs. Be unapologetically yourself by wearing the
                clothing brand, socializing in Unapologetic City and reserve
                your metaverse cityscape sanctuary by holding an Unapologetic
                Ape. Owning an Unapologetic Ape is your ticket to these
                exclusive benefits and more.
              </p>
            </div>
          </div>
        </div>
        <div className="image-stripe-container bottom">
          <div className="col-sm-12">
            <div className="img-stripe"></div>
          </div>
        </div> */}
      </section>

      <section id="traits" className="traits-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="title">Chameleon Traits</h1>
            </div>
          </div>
          <div className="row flex">
            <div className="col-sm-6 text-center">
              <embed src="/Mint_Live.gif" alt="CCP" />
            </div>
            <div className="col-sm-6 text-center">
              <p>
                There will be 3 rarity tiers with some variety of Chameleons
                within each tier.
              </p>
              <p>
                These tiers will determine the size of the ETH pool that you
                will be entered in for the weekly giveaways carried out in the
                CCC discord, as well as the percentage you will receive of NFT
                Fund payouts.
              </p>
              <p>
                Crypto Chameleons live as ERC-721 tokens on the Ethereum
                Blockchain. You have sole ownership and commercial rights of
                your NFT.
              </p>
              <p>
                Not to mention, these traits will have a much more important
                role when Crypto Chameleons Club 2.0 drops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team-container">
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-sm-12 text-center">
              <h1 className="title">Our Team</h1>
              <div className="row images-container">
                <div className="image-item">
                  <img src={team1} alt="Lew" />
                  <h5>Lew</h5>
                  <p>Professional Banana Wrangler</p>
                </div>
                <div className="image-item">
                  <img src={team2} alt="AshLynn" />
                  <h5>AshLynn</h5>
                  <p>Here for tacos and coffee, but mostly Apes</p>
                </div>
                <div className="image-item">
                  <img src={team3} alt="Rico" />
                  <h5>J.Rico</h5>
                  <p>Finger painting extraordinaire</p>
                </div>
                <div className="image-item">
                  <img src={team4} alt="Quinn" />
                  <h5>Quinn</h5>
                  <p>Galaxy maker and city weaver</p>
                </div>
              </div>
            </div> */}
            <div className="col-sm-12 text-center">
              <ul className="list-inline links">
                <li>
                  <a
                    href="https://twitter.com/club_chameleons"
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    <img src="/twitter.png" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/zNekdUHJUw"
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    <img src="/discord.png" alt="discord" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cryptochameleonsclubnft/"
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    <img src="/instagram.png" alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <p className="rights">
                Crypto Chameleons Club 2022 © All Rights Reserved
              </p>
              <p className="rights">
                <a href="https://raritysniper.com/">NFT Rarity</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
