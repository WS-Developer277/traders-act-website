import { RefreshCw } from 'lucide-react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function RefundPolicy() {
  return (
    <LegalPageLayout 
      title="Refund Policy"
      icon={<RefreshCw className="h-8 w-8 text-blue-500" />}
    >
      <p className="text-lg">
        We appreciate your participation in Traders Act's trading challenges. This Refund Policy explains when fees paid to Traders Act may be refunded. 
        By paying for a challenge or any service, you accept this Refund Policy. In general, all fees are final and non-refundable except as expressly 
        provided below:
      </p>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">No Refunds for Failed Challenges</h2>
        <p>
          All challenge fees paid are non-refundable if you fail to meet the challenge criteria or violate the trading rules. Once a challenge has started, 
          the fee covers the evaluation service and cannot be returned if you do not successfully pass the challenge. We urge you to carefully consider your 
          readiness before purchasing a challenge, as failed challenges will not result in any refund of the fee.
        </p>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Refund for Successful Challenge Completion</h2>
        <p>
          If you successfully pass the trading challenge and qualify as a funded trader (or for whatever reward is offered upon success), Traders Act will 
          reimburse your challenge fee in full upon your first profit payout. In other words, the initial fee you paid to take the challenge will be returned 
          to you once you receive your first payout from the funded account or program. This refund is provided as a reward for success and will typically be 
          included along with that first payout distribution.
        </p>
        <p className="mt-2 text-sm text-blue-700">
          <strong>Note:</strong> If for some reason you do not go on to claim a payout despite passing the challenge, please contact support—we may still 
          process the fee refund in such cases.
        </p>
      </div>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Processing Fees and Method</h2>
      <p>
        Refunds (when applicable, such as for successful completions) will be processed through the original payment method whenever possible. Please note 
        that any third-party processing fees (for example, payment gateway fees, currency conversion charges, or bank transfer fees) may be deducted from 
        the refund amount. The exact amount returned to you might be slightly less than the challenge fee if such fees apply, especially in cases of 
        international transactions or specific payment providers. Traders Act does not charge a separate refund fee, but we cannot control fees imposed 
        by banks or payment services.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Refund Timeline</h2>
      <p>
        We aim to process approved refunds promptly. Refunds are generally processed within 30 days of the qualifying event (e.g., the date of your first 
        payout for successful challengers, or the date we approve a refund in any other circumstance). The time it takes for the refunded amount to appear 
        in your account will depend on the payment method and banking system. If you have not received an expected refund after 30 days, please contact our 
        support team for assistance.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Additional Notes</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          If a challenge is terminated by Traders Act for reasons outside your control (for example, if we discontinue a program or there was a technical 
          issue on our side that invalidated the challenge), we will assess the situation and may issue a refund or offer a credit for a new challenge, 
          at our discretion.
        </li>
        <li>
          Chargebacks or payment disputes without first contacting us will be considered a violation of this Refund Policy and our Terms. We encourage you 
          to reach out to <a href="mailto:support@tradersAct.com" className="text-blue-600 hover:text-blue-800">support@tradersAct.com</a> to resolve any 
          billing issues or dissatisfaction – we are here to help.
        </li>
        <li>
          This Refund Policy applies only to fees paid for Traders Act's services (such as challenge fees). It does not govern any third-party fees you may 
          incur (e.g., your bank's fees, currency exchange differences, taxes, etc.). Those remain your responsibility.
        </li>
      </ul>
      
      <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-8">
        <p>
          We reserve the right to update or modify this Refund Policy at any time. Any changes will be communicated via an update on our website. By engaging 
          in our challenges or services after a policy update, you agree to the revised terms.
        </p>
      </div>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
      <p>
        If you have questions about this Refund Policy or believe you are entitled to a refund under these terms, please contact us at{' '}
        <a href="mailto:support@tradersAct.com" className="text-blue-600 hover:text-blue-800">support@tradersAct.com</a>. Our team will review your request 
        and assist you in accordance with the above guidelines.
      </p>
    </LegalPageLayout>
  );
}