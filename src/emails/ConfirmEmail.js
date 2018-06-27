import React from 'react'

export default ({ pin }: { pin: string }) => (
  <div>
    <p>Thanks for signing up for Polymath.</p>
    <p>Your confirmation PIN:</p>
    <h2>{pin.toUpperCase()}</h2>
  </div>
)
