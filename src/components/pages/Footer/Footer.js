import React from 'react';
import './Footer.css';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { GrArchlinux } from 'react-icons/gr';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Unete a nuestra comunidad para recibir notificaciones cada semana
        </p>
        <p className='footer-subscription-text'>
          Puedes cancelar la subscripcion cuando quieras.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu email'
            />
            <Button buttonStyle='btn--outline'>Subscribir</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Acerca de Nosotros</h2>
            <Link to='/' className='small'>Como trabajamos</Link>
            <Link to='/' className='small'>Terminos y servicios</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='/' className='small'>Contacto</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/' className='small'>Youtubers</Link>
            <Link to='/' className='small'>Tutoriales</Link>
            <Link to='/' className='small'>Programación</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Redes sociales</h2>
            <Link to='/' className='small'>Instagram</Link>
            <Link to='/' className='small'>Facebook</Link>
            <Link to='/' className='small'>Youtube</Link>
            <Link to='/' className='small'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <GrArchlinux className="navbar-icon" /> 
              Arch Center
            </Link>
          </div>
          <small className='website-rights'>Arch Center © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;