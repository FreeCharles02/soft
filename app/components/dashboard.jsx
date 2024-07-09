import '../styles/dash.css'

const Dashboard = () => {
    return (
        <div className="dash">
            <h4>
                Basics
            </h4>
            <p className='pass'>
                <strong>
                    Password
                </strong>
            </p>
            <p className='protect'>
                Set a password to protect your account.
            </p>
            <button type='button' className='edit1'>
                Edit
            </button>
            <p className='twostep'>
            <strong>
                Two Step verification
                </strong>
                </p>
               <p className='verification'>
                We reccomend requiring a verification code in addition to your password.
               </p>
                  <div className='slide'>
            <label class="switch">
                    <input type="checkbox" />
                        <span class="slider round"></span>
                        </label>
                        </div>
                            <p className='brow'>
                            <strong>
                                Browsers and devices 
                            </strong>
                                </p>
                            <p className='current'>
                                These browsers and devices are currently signed in to your acount. Remove any unauthoirzed devices.
                            </p>
                            <strong className='ses1'>
                                Brave on Mac OS X
                            </strong>
                            <strong className='ses2'>
                                Mias MacBook Pro 
                            </strong>
                            <strong className='ses3'>
                                Brave on Mac OS X
                            </strong>
                            <strong className='ses4'>
                                Mias MacBook Pro 
                            </strong>
        </div>
    )
}

export default Dashboard;