import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Explore the portfolio of S Dinesh Kumar, a creative and innovative full-stack developer specializing in crafting exceptional digital experiences." />
          <meta name="keywords" content="sdinesh, sdineshkumar, dinesh, dineshwebdev, Full-stack developer, Web development, uiux, S Dinesh Kumar, Portfolio" />
          <meta property="og:title" content="S Dinesh Kumar - Full-stack Developer" />
          <meta property="og:description" content="Discover the work of S Dinesh Kumar, a full-stack developer with a passion for creating dynamic and engaging web applications." />
          <meta property="og:image" content="/path/to/your/image.jpg" />
          <meta property="og:url" content="https://sdineshkumar.vercel.app" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="S Dinesh Kumar - Full-stack Developer" />
          <meta name="twitter:description" content="Explore the portfolio, showcasing innovative web projects and creative digital solutions." />
          <meta name="twitter:image" content="/path/to/your/image.jpg" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
