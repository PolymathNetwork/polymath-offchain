import React from 'react'

export default ({ issuerName, application }: {
  issuerName: string,
  application: {
    companyName: string,
    companyDesc: string,
    operatedIn: string,
    incorporatedIn: string,
    projectURL: ?string,
    profilesURL: ?string,
    structureURL: ?string,
    otherDetails: ?string
  }
}) => {
  const app = application
  const dueTime = new Date()
  dueTime.setDate(dueTime.getDate() + 1)

  return (
    <React.Fragment>
      <p>
        NOTE – THIS IS A SAMPLE EMAIL. NO CONTENT WAS SHARED WITH THE SERVICE
        PROVIDERS YOU SELECTED.<br />
        CONTENT WILL ONLY BE SENT TO THE SERVICE PROVIDERS WHEN THIS APPLICATION
        IS AVAILABLE ON MAINNET.
      </p>
      <p>
        {issuerName} from {app.companyName} has applied for your services
        through the Polymath dashboard.
      </p>
      <p>
        Please review the information below and inform {issuerName} directly of
        your decision by {dueTime.toUTCString()}.
      </p>
      <table>
        <tbody>
          <tr>
            <td>Company name:</td>
            <td>{app.companyName}</td>
          </tr>
          <tr>
            <td>Company description:</td>
            <td>{app.companyDesc}</td>
          </tr>
          <tr>
            <td>Operating jurisdiction:</td>
            <td>{app.operatedIn}</td>
          </tr>
          <tr>
            <td>Incorporation jurisdiction:</td>
            <td>{app.incorporatedIn}</td>
          </tr>
          {app.projectURL && (
            <tr>
              <td colSpan='2'>
                <a href={app.projectURL}>Corporate/Project Presentation</a>
              </td>
            </tr>
          )}
          {app.profilesURL && (
            <tr>
              <td colSpan='2'>
                <a href={app.profilesURL}>
                Management and Board Member Profiles
                </a>
              </td>
            </tr>
          )}
          {app.structureURL && (
            <tr>
              <td colSpan='2'>
                <a href={app.structureURL}>
                Corporate or Project Structure/Organization
                </a>
              </td>
            </tr>
          )}
          {app.otherDetails && (
            <tr>
              <td>Other details:</td>
              <td>{app.otherDetails}</td>
            </tr>
          )}
        </tbody>
      </table>
      <br />
      <p>
        <b>DISCLAIMER</b><br />
        The information above was provided directly by the
        user of the Polymath Dashboard. Polymath Studios Inc. cannot guarantee
        any of the information provided herein.
      </p>
    </React.Fragment>
  )
}
