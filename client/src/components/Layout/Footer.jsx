import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='container is-flex	 is-align-content-center	is-justify-content-center'>
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
