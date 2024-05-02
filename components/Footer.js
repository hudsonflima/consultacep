import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Todos os direitos reservados. Desenvolvido por Hudson Lima</p>
      </div>
    </footer>
  );
};

export default Footer;
