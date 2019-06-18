import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
        </Head>
        <style global jsx>{`
          body {
            background-color: #232840;
            font-family: 'Raleway', sans-serif;
          }
        `}</style>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
