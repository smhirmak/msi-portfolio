// import Document, { DocumentContext } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';
// export default class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;
//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />) //gets the styles from all the components inside <App>
//         });
//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {/*👇 insert the collected styles to the html document*/}
//             {sheet.getStyleElement()}
//           </>
//         )
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
// }

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;