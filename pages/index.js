import React, { Component } from 'react';

import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Projects from './components/Projects';

import MainPage from './components/MainPage';
import Navbar1 from './components/Navbar1';
import LinkedinLogo from './components/LinkedinLogo';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      projectView: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
    const selected = event.target.parentElement.parentElement.parentElement;

    const list = document.querySelectorAll('.list');
    if (!selected.classList.contains('active')) {
      list.forEach((item) => {
        item.classList.remove('active');
      });
      selected.classList.add('active');
    }
    if (selected.id === 'home') {
      this.setState({ projectView: false });
    } else if (selected.id === 'projects') {
      this.setState({ projectView: true });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Cole Berman</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar1
          projectView={this.state.projectView}
          clickHandler={this.clickHandler}
        />
        <main id="all-home" className={styles.main}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {this.state.projectView ? <Projects /> : <MainPage />}
          </div>
        </main>

        <footer className={styles.footer}>
          <div id="footer-text">
            Created By Cole Berman <br /> Contact me at
            <span style={{ color: 'cornflowerblue' }}>
              <a href="mailto:11coleandrew4@gmail.com">
                11coleandrew4@gmail.com
              </a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
