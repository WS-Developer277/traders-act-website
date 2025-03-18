import { Shield } from 'lucide-react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout 
      title="Privacy Policy"
      icon={<Shield className="h-8 w-8 text-blue-500" />}
    >
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Introduction</h2>
      <p>
        This Privacy Policy explains how Traders Act (operated by White Stone Investment Advisors LTD and introduced by White Stone Financial Services LLC) 
        collects, uses, and protects your personal information. We are committed to protecting your 
        privacy and handling your personal data in compliance with applicable laws, including the 
        EU General Data Protection Regulation (GDPR).
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
      <p>
        We only collect personal information necessary to provide our services. This includes:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          <strong>Personal Details:</strong> Your name and date of birth/age (to verify identity and age eligibility).
        </li>
        <li>
          <strong>Contact Information:</strong> Your mobile phone number, residential address, and email address 
          (for account setup, verification, and communication).
        </li>
      </ul>
      <p>
        We do not collect sensitive personal information beyond what is listed above, unless you voluntarily 
        provide it (for example, if you contact support and share additional details).
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
      <p>
        Traders Act uses your personal data only for legitimate purposes, such as:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          <strong>Providing Services:</strong> To create and manage your trading demo account, verify your 
          identity/age (ensuring you are 18 or older), and allow you to participate in trading challenges.
        </li>
        <li className="mb-2">
          <strong>Communication:</strong> To send important account notices, updates about the platform, 
          challenge results, and customer support responses. We may also send informational or marketing 
          emails only if you have given consent (you can opt out at any time).
        </li>
        <li>
          <strong>Legal Compliance and Security:</strong> To comply with legal obligations (such as anti-fraud 
          or KYC requirements) and to maintain the security of our platform. For example, we may use your 
          information to detect and prevent prohibited trading activities or unauthorized account access.
        </li>
      </ul>
      <p>
        We will not use your personal data for purposes beyond those stated above without your consent. 
        In particular, we do not sell or rent your personal information to third parties for their own 
        marketing use.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Access and Data Sharing</h2>
      <p>
        We value your privacy and only share your data with third parties as needed to operate Traders Act, 
        under strict protections:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          <strong>Affiliated Broker:</strong> We may share necessary personal details with Markets Act Broker Ltd 
          (our affiliated brokerage service provider) to facilitate the trading simulation and account services. 
          This affiliated company will handle your data under confidentiality and security obligations consistent 
          with this Policy.
        </li>
        <li>
          <strong>Payment Processors:</strong> If you pay a challenge fee or receive a payout/refund, your payment 
          information (e.g. transaction ID, billing details) will be processed by our third-party payment processors 
          (for example, credit card or e-wallet providers). These partners receive only the information required to 
          process the payment and are bound by data security agreements/data processing agreements to protect your 
          information.
        </li>
      </ul>
      <p>
        All third parties acting on our behalf are contractually obligated to protect your data. They must use your 
        information only for the specific services they provide to us and in line with applicable data protection laws. 
        We ensure any such partners have appropriate data safeguards in place. Aside from the above, we will never 
        disclose personal data to other third parties unless required by law or with your explicit consent.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
      <p>
        Traders Act implements industry-standard security measures to safeguard your personal data. We use technical 
        and organizational measures such as encryption, secure servers, and access controls to prevent unauthorized 
        access, loss, or alteration of your information. Our staff and service providers are trained and required to 
        handle your data confidentially. While we strive to protect all information, please understand that no method 
        of transmission over the internet is 100% secure; however, we continuously update our security practices to 
        meet or exceed industry best practices and legal requirements.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Retention</h2>
      <p>
        We retain personal data only for as long as necessary to fulfill the purposes outlined in this Policy or as 
        required by law. This means:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          If you create an account, we will keep your information for as long as your account is active and for a 
          reasonable period thereafter to handle any post-closure issues (such as processing a final payout or as 
          needed for legal/tax purposes).
        </li>
        <li>
          If you withdraw consent or request deletion of your data, or if your data is no longer needed, we will 
          erase or anonymize your information, provided we are not legally required to keep it.
        </li>
      </ul>
      <p>
        Our data retention practices comply with GDPR's "storage limitation" principle, which mandates that personal 
        data not be kept longer than necessary. We periodically review the data we hold and delete or anonymize 
        information that is no longer needed.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Your Rights (GDPR Compliance)</h2>
      <p>
        If you are located in the European Economic Area (EEA) or otherwise subject to GDPR, you have certain rights 
        regarding your personal data. Traders Act is committed to upholding these rights, which include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          <strong>Access and Correction:</strong> You have the right to request a copy of the personal data we hold 
          about you and to ask for corrections of any inaccuracies.
        </li>
        <li className="mb-2">
          <strong>Deletion (Right to be Forgotten):</strong> You may request that we delete your personal information 
          if it's no longer necessary for us to retain it. We will comply, provided there is no legal obligation for 
          us to keep the data.
        </li>
        <li className="mb-2">
          <strong>Withdrawal of Consent:</strong> If our processing is based on your consent (for example, marketing 
          emails), you can withdraw that consent at any time.
        </li>
        <li className="mb-2">
          <strong>Data Portability:</strong> You can request a machine-readable copy of the data you provided to us, 
          to transfer to another service if desired.
        </li>
        <li>
          <strong>Objection/Restriction:</strong> You may object to or request we restrict processing of your data in 
          certain circumstances (for instance, if you contest the accuracy of your data or have privacy concerns).
        </li>
      </ul>
      <p>
        To exercise any of these rights, please contact us (see "Contact Us" below). We will respond to your request 
        in accordance with applicable law (generally within 30 days). There is no fee for such requests except in 
        exceptional cases as permitted by law.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Minors</h2>
      <p>
        Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data 
        from anyone under 18. If you are a parent or guardian and believe your minor child has provided personal 
        information to us, please contact us immediately. If we discover any personal data of a minor under 18 in our 
        records, we will promptly delete it. (Note: Traders Act's Terms of Service also explicitly require users to be 
        18 or older.)
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. 
        If we make material changes, we will notify users by posting the updated Policy on our website and updating 
        the "Last Updated" date. We encourage you to review this Policy periodically for any changes. Continued use 
        of Traders Act after updates constitute your acceptance of the revised Policy.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our data practices, or if you wish to exercise your rights 
        regarding your personal data, please contact us at: <a href="mailto:support@tradersAct.com" className="text-blue-600 hover:text-blue-800">support@tradersAct.com</a> (or the designated email/address provided on our website). 
        We will be happy to assist with any concerns or requests regarding your privacy.
      </p>
    </LegalPageLayout>
  );
}