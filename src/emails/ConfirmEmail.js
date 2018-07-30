/* eslint-disable max-len, react/no-danger */
import React from 'react'

import styles from './styles'

export default ({ pin }: { pin: string }) => (
  <html lang='en'>
    <head>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    </head>
    <body>
      <div className='wrapper'>
        <div className='top-bar'>
          <img alt='Polymath Logo' src='https://polymath-offchain.herokuapp.com/img/logo.png' />
        </div>
        <div className='content'>
          <h1>Activate your Account</h1>
          <div className='main-value'>
            <h2>Your Polymath Verification PIN</h2>
            <p className='value'>{pin}</p>
          </div>
          <div className='icon-text' style={{ height: '95px' }}>
            <div className='icon' style={{ marginTop: '30px' }}>
              <img alt='Icon' src='https://polymath-offchain.herokuapp.com/img/key.png' />
            </div>
            <h2>Your Polymath account is awaiting activation</h2>
            <p>
              To activate your account, please copy the PIN above into your Polymath account activation page.
              If you have closed the Polymath account activation page, please visit
              application again and request new PIN.
            </p>
          </div>
          <div className='icon-text' style={{ height: '52px' }}>
            <div className='icon' style={{ marginTop: '8px' }}>
              <img alt='Icon' src='https://polymath-offchain.herokuapp.com/img/question.png' />
            </div>
            <h2>
              If you have any questions please contact<br />
              <a href='mailto:support@polymath.zendesk.com'>support@polymath.zendesk.com</a>
            </h2>
          </div>
        </div>
        <div className='footer'>
          <div className='left'>
            © 2018 Polymath
          </div>
          <div className='right'>
            <a href='https://polymath.network/termsofservice.html'>Terms of use</a>
            <a href='https://polymath.network/privacypolicy.html'>Privacy policy</a>
          </div>
        </div>
      </div>
    </body>
  </html>
)
