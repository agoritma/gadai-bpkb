import fbLogo from '../facebookLogo.svg'
import xLogo from '../xLogo.svg'
import ttLogo from '../tiktokLogo.svg'
import ytLogo from '../youtubeLogo.svg'
import igLogo from '../instagramLogo.svg'
import phoneIcon from '../phoneIcon.svg'
import emailIcon from '../emailIcon.svg'
import bubble1 from '../bubble1.svg'
import bubble2 from '../bubble2.svg'

const Footer = ({ fbUrl, xUrl, ttUrl, ytUrl, igUrl }) => {
    return (
        <>
        <img id='bubble1' src={bubble1} alt='bubble'/>
        <img id='bubble2' src={bubble2} alt='bubble'/>
        <div className="footer flex flex-row">
            <div className="about flex flex-col">
                <p>logo</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p>Senin - Minggu | 09:00 - 17:00</p>
            </div>
            <div className="product flex flex-col">
                <b><p>Layanan</p></b>
                <a href="#">Perhitungan Pinjaman</a>
                <a href="#">Pengajuan Pinjaman</a>
            </div>
            <div className="contact flex flex-col">
                <b><p>Hubungi Kami</p></b>
                <a href="#" className='flex'>
                    <img src={phoneIcon} alt="phone icon" />
                    <span>0812345678910</span>
                </a>
                <a href="#" className='flex'>
                    <img src={emailIcon} alt="mail icon" />
                    <span>lorem@gmail.com</span>
                </a>
            </div>
            <div className="sosmed flex flex-col">
                <b><p>Follow</p></b>
                <div className="sosmedList flex flex-row">
                    {fbUrl ? <a href={fbUrl}><img src={fbLogo} alt='facebook logo' /></a> : null}
                    {xUrl ? <a href={fbUrl}><img src={xLogo} alt='x/twitter logo' /></a> : null}
                    {ttUrl ? <a href={fbUrl}><img src={ttLogo} alt='tiktok logo' /></a> : null}
                    {igUrl ? <a href={fbUrl}><img src={igLogo} alt='instagram logo' /></a> : null}
                    {ytUrl ? <a href={fbUrl}><img src={ytLogo} alt='youtube logo' /></a> : null}
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer