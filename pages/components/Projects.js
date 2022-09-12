import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import GottaGoPicture from './GottaGoPicture';
import DogAppPicture from './DogAppPicture';
import GetMoneyPicture from './GetMoneyPicture';
import GottaGoDemo from './GottaGoDemo';
import GottaGoLogo from './GottaGoLogo';
import NoBareFeetDemo from './NoBareFeetDemo';
import SwoopDeckDemo from './SwoopDeckDemo';
import SwoopDeckLogo from './SwoopDeckLogo';
import { Slide, Fade, JackInTheBox } from 'react-awesome-reveal';

export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <Head>
          <title>Cole Berman</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <div>
            <Fade delay={300}>
              <div id="test">
                <div>
                  <GottaGoDemo />
                </div>
                <div id="gotta-go-logo-container">
                  <GottaGoLogo />
                  <div id="gotta-go-text">
                    <br />
                    <br />
                    <p id="gotta-go-paragraph">
                      GottaGo is a fully functional mobile application that
                      shows and directs users to the closest public restrooms.
                      Users also have the option of filtering by wheelchair
                      accessible restrooms as well as restrooms with baby
                      changing tables. This app leverages data from a
                      third-party API as well as the react-native-maps and
                      react-native-open-maps libraries.
                      <br />
                      <span id="gottago-link">
                        <Link href="https://github.com/11coleandrew4/GottaGo">
                          Check it out on GitHub!
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade delay={300}>
              <div>
                <div id="swoopdeck-container">
                  <div>
                    <SwoopDeckDemo />
                  </div>
                  <div id="swoopdeck-logo-container">
                    <SwoopDeckLogo />
                  </div>
                </div>
                <p id="swoopdeck-paragraph">
                  SwoopDeck is a web application that provides a digital
                  solution for both skydivers and the jump-sites they dive from.
                  Much like accruing drivers-ed hours, skydivers need to keep a
                  log of every dive in order to increase their licensing status,
                  however these logs are still physical. SwoopDeck’s platform
                  digitizes those dive logs, and authenticates logs via data
                  from the jump-site. In addition, Jump-sites can book upcoming
                  flights and track relevant business data from past flights on
                  the platform. -
                  <span id="gottago-link">
                    <Link href="https://testingswoops.herokuapp.com/login">
                      Check out the beta-version by clicking here!
                    </Link>
                  </span>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
