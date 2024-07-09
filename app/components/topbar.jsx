import '../globals.css'
import Image from 'next/image';
const Topbar = () => {
    return(
        <div className='topbar'>
            <div className='name'>
            <h1>Mia de Silva</h1>
            </div>
               <p className=''>Manage your details and personal preferences here.</p> 
               <input type='text' className='search-bar' placeholder='Search' />
                <button type='button'><strong>Upgrade</strong></button>
                <button type='button' className='invite'>+ Invite</button>
                <Image src='https://imgur.com/a/EXT4GaK' alt='placeholder' width={500} height={500}/>
                <div className='pages'>
                <a href="#" className='gen'>General</a>
                <a href='#'className='sec'>Security</a>
                <a href="#" className='bill'>Billing</a>
                <a href='#'className='notif'>Notifications</a>
                <a href='#' className='app'>Apps</a>
                <a href='#' className='brand'>Branding</a>
                <a href='#' className='refer'>Refer a friend</a>
                <a href='#'className='share'>Sharing</a>
                </div>
                <div className='sec-text' a>
                <p className='security'>
                    <strong> 
                        Your account security is 90%
                        </strong>
                        </p>
                    <p>
                        Please review your account security settings regularly and update your password.
                    </p>
                    <button type='button' className='dis'>Dismiss</button>
                    <button type='button' className='review'>Review security</button>
                    </div>
                </div>
    )
}
export default Topbar; 