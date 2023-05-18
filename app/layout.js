import '../styles/globals.css';

export const metadata = {
  title: 'Full Stack Developer',
  description: 'Portfolio - Alexander McLachlan',
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
