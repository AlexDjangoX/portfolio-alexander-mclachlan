import '../styles/globals.css';

export const metadata = {
  metadataBase: new URL('https://portfolio-alexander-mclachlan.vercel.app'),
  title: 'Full Stack NextJs Developer',
  description: 'Portfolio - Alexander McLachlan',
  openGraph: {
    title: 'Alexander McLachlan',
    description: 'Full Stack ReactJS, NextJS Developer',
    url: 'https://portfolio-alexander-mclachlan.vercel.app',
    site_name: 'Full Stack NextJS Dev',
    images: [
      {
        url: '//opengraph-image.ico',
        width: 800,
        height: 600,
        alt: 'Full Stack NextJS Dev',
      },
    ],
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head></head>
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
