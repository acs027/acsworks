import React from 'react'
import './footer.css'
import { InstagramLogo ,FacebookLogo, X} from 'phosphor-react'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-description'>
            <div>
                Fine Art Prints (Hahnemühle Matt Fibre Paper)
            </div>
            <div>
                100 limited editions    
            </div>
            <div>
                Signed by the Artist
            </div>
        </div>
        <div className='footer-minidesc'>
            Important: Fine art prints are quite fragile so please unpack carefully and retain all packaging. Returns or exchanges will not be accepted in case any print is damaged due to customer’s error. If you think the print is damaged by Customs, please take photos of the damages and label or sticker attached by Customs during the inspection and send the photos to me via email, then the new print will be shipped to you. I print to order for all purchases, so unfortunately I am not able to offer a refund for change of mind, incorrect size choice or damages caused by customers.
        </div>

        <div className='footer-social-container'>
        <div className='footer-bottom'>©aCs</div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" ><FacebookLogo size={32} />

</a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><X size={32} /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/acsrr/" target="_blank" rel="noopener noreferrer"><InstagramLogo size={32} /></a>
            </li>
          </ul>
        </div>
        </div>
    </div>
  )
}
