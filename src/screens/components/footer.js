import { FaFacebook,FaTwitter,FaInstagram,FaGithub,FaHeart } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
       <span>Made with all <FaHeart color='red'/> by Sosthene</span>
      <div className='icons'>
        <a href='www.facebook.com'><FaFacebook color='white'/></a>
        <a href='www.twitter.com'><FaTwitter color='white'/></a>
        <a href='www.instagram.com'><FaInstagram color='white'/></a>
        <a href='www.github.com'><FaGithub color='white'/></a>
      </div>
      </div>
    </footer>
  );
}
export default Footer;
