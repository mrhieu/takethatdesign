import React from 'react';
import Layout from '../../components/AppLanding/Layout';

export default ({ location }) => (
  <Layout
    metaTags={{
      title: 'Privacy Policy'
    }}
    location={ location }
  >
    <div className="row">
      <article className="col-lg-8 offset-lg-2">
        <div className="post-content">
          <h2 id="why">Privacy Policy</h2>

          <p className="post-body-text">
            Hieu Pham built the Twelvel O'clock app as
            a Freemium app. This SERVICE is provided by
            Hieu Pham at no cost and is intended for use as
            is.
          </p>
          <p className="post-body-text">
            This page is used to inform visitors regarding my
            policies with the collection, use, and disclosure of Personal
            Information if anyone decided to use my Service.
          </p>
          <p className="post-body-text">
            If you choose to use my Service, then you agree to
            the collection and use of information in relation to this
            policy. The Personal Information that I collect is
            used for providing and improving the Service. I will not use or share your information with
            anyone except as described in this Privacy Policy.
          </p>
          <p className="post-body-text">
            The terms used in this Privacy Policy have the same meanings
            as in our Terms and Conditions, which is accessible at
            Twelvel O'clock unless otherwise defined in this Privacy Policy.
          </p>
          <p className="post-body-text"><strong>Information Collection and Use</strong></p>
          <p className="post-body-text">
            For a better experience, while using our Service, I
            may require you to provide us with certain personally
            identifiable information. The information that
            I request will be retained on your device and is not collected by me in any way.
          </p>
          <div>
            <p className="post-body-text">
              The app does use third party services that may collect
              information used to identify you.
            </p>
            <p className="post-body-text">
              Link to privacy policy of third party service providers used
              by the app
            </p>
            <ul>
              <li><a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a></li>
            </ul>
          </div>
          <p className="post-body-text"><strong>Log Data</strong></p>
          <p className="post-body-text">
            I want to inform you that whenever you
            use my Service, in a case of an error in the app
            I collect data and information (through third party
            products) on your phone called Log Data. This Log Data may
            include information such as your device Internet Protocol
            (“IP”) address, device name, operating system version, the
            configuration of the app when utilizing my Service,
            the time and date of your use of the Service, and other
            statistics.
          </p>
          <p className="post-body-text"><strong>Cookies</strong></p>
          <p className="post-body-text">
            Cookies are files with a small amount of data that are
            commonly used as anonymous unique identifiers. These are sent
            to your browser from the websites that you visit and are
            stored on your device's internal memory.
          </p>
          <p className="post-body-text">
            This Service does not use these “cookies” explicitly. However,
            the app may use third party code and libraries that use
            “cookies” to collect information and improve their services.
            You have the option to either accept or refuse these cookies
            and know when a cookie is being sent to your device. If you
            choose to refuse our cookies, you may not be able to use some
            portions of this Service.
          </p>
          <p className="post-body-text"><strong>Service Providers</strong></p>
          <p className="post-body-text">
            I may employ third-party companies and
            individuals due to the following reasons:
          </p>
          <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p className="post-body-text">
            I want to inform users of this Service
            that these third parties have access to your Personal
            Information. The reason is to perform the tasks assigned to
            them on our behalf. However, they are obligated not to
            disclose or use the information for any other purpose.
          </p>
          <p className="post-body-text"><strong>Security</strong></p>
          <p className="post-body-text">
            I value your trust in providing us your
            Personal Information, thus we are striving to use commercially
            acceptable means of protecting it. But remember that no method
            of transmission over the internet, or method of electronic
            storage is 100% secure and reliable, and I cannot
            guarantee its absolute security.
          </p>
          <p className="post-body-text"><strong>Links to Other Sites</strong></p>
          <p className="post-body-text">
            This Service may contain links to other sites. If you click on
            a third-party link, you will be directed to that site. Note
            that these external sites are not operated by me.
            Therefore, I strongly advise you to review the
            Privacy Policy of these websites. I have
            no control over and assume no responsibility for the content,
            privacy policies, or practices of any third-party sites or
            services.
          </p>
          <p className="post-body-text"><strong>Children’s Privacy</strong></p>
          <p className="post-body-text">
            These Services do not address anyone under the age of 13.
            I do not knowingly collect personally
            identifiable information from children under 13 years of age. In the case
            I discover that a child under 13 has provided
            me with personal information, I immediately
            delete this from our servers. If you are a parent or guardian
            and you are aware that your child has provided us with
            personal information, please contact me so that
            I will be able to do necessary actions.
          </p>
          <p className="post-body-text"><strong>Changes to This Privacy Policy</strong></p>
          <p className="post-body-text">
            I may update our Privacy Policy from
            time to time. Thus, you are advised to review this page
            periodically for any changes. I will
            notify you of any changes by posting the new Privacy Policy on
            this page.
          </p>
          <p className="post-body-text">This policy is effective as of June 11 2021</p>
          <p className="post-body-text"><strong>Contact Us</strong></p>
          <p className="post-body-text">
            If you have any questions or suggestions about my
            Privacy Policy, do not hesitate to contact me at <a href="mailto:hieupv.global@gmail.com">hieupv.global@gmail.com</a>.
          </p>
        </div>
      </article>
    </div>
  </Layout>
)
