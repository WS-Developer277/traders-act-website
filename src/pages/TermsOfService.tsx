import { FileText } from "lucide-react";
import LegalPageLayout from "../components/LegalPageLayout";

export default function TermsOfService() {
  return (
    <LegalPageLayout 
      title="Terms of Service"
      icon={<FileText className="h-8 w-8 text-blue-500" />}
    >
      <p className="font-medium">
        PLEASE READ THESE TERMS CAREFULLY. By accessing or using the Traders Act website and services, 
        you ("User" or "Trader") agree to be bound by the following Terms of Service ("Terms" or "Agreement"). 
        If you do not agree, you must not use Traders Act. These Terms constitute a legal agreement between 
        you and Traders Act (operated by White Stone Investment Advisors LTD and introduced by White Stone Financial Services LLC).
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Eligibility and Restricted Jurisdictions</h2>
      <p>
        <strong>Minimum Age:</strong> You must be 18 years of age or older to register for and use Traders Act. 
        By creating an account, you represent and warrant that you are at least 18. Traders Act is not intended for minors.
      </p>
      <p>
        <strong>Residency:</strong> Our services are not available to residents or citizens of certain restricted countries. 
        If you are located in or a legal resident of any of the following jurisdictions, you are prohibited from using Traders Act:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>United States of America</li>
        <li>Canada</li>
        <li>Iran</li>
        <li>Russia</li>
        <li>China</li>
        <li>North Korea</li>
        <li>Other Restricted Regions: Any country or region that is subject to trade sanctions, embargoes, or where our services would violate local law. (This list is subject to change; Traders Act reserves the right to refuse service in any jurisdiction as required by law or company policy.)</li>
      </ul>
      <p>
        By using our service, you affirm that you are not accessing Traders Act from any of the above regions and that you are not on any sanctions or prohibited persons lists.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Accounts and Use of Service</h2>
      <p>
        <strong>Account Registration:</strong> To use Traders Act, you must create an account with truthful, accurate information. 
        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. 
        If you become aware of any unauthorized use of your account, notify us immediately. We may require verification of your identity and 
        eligibility (such as proof of age and residence) during registration or at any time.
      </p>
      <p>
        <strong>One Account Policy:</strong> Each user may register only one account unless explicitly permitted by Traders Act. 
        You may not share, sell, or transfer your account to others. We reserve the right to suspend or terminate duplicate or 
        suspicious accounts to maintain the integrity of our platform.
      </p>
      <p>
        <strong>Acceptable Use:</strong> You agree to use Traders Act strictly in accordance with these Terms and all applicable laws/regulations. 
        You must not engage in any illegal, fraudulent, or abusive activity on the platform. This includes refraining from harassing others, 
        attempting to hack or undermine our systems, or any other misuse of the service. Traders Act grants you a limited, revocable license 
        to use our website and services for personal, non-commercial use. We retain all rights in the platform's content, software, and services.
      </p>
      <p>
        <strong>Demo Trading Environment:</strong> Traders Act provides a simulated trading environment. All trading accounts on our platform 
        are demo accounts only, using virtual funds. No real monetary trades are executed through Traders Act, and we do not take custody of 
        or hold any real investor funds on your behalf. You acknowledge that any trading activities you conduct are for evaluation/educational 
        purposes and not actual live trading. Traders Act is not a regulated broker-dealer, and using our service does not involve opening a 
        live trading account. (See our Risk Disclosure for more details.)
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Prohibited Trading Strategies and Conduct</h2>
      <p>
        To ensure fair use of our trading challenge platform, certain trading strategies and behaviors are expressly prohibited:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          <strong>Arbitrage and Latency Exploits:</strong> You may not use Traders Act's demo accounts to engage in latency arbitrage, 
          price feed latency exploitation, or any form of arbitraging strategy designed to take unfair advantage of price discrepancies 
          between Traders Act and any other trading platforms.
        </li>
        <li className="mb-2">
          <strong>Market Abuse:</strong> Any form of market abuse or manipulative trading strategy is strictly prohibited. This includes 
          practices such as spoofing, layering, insider trading (using non-public information in simulation or otherwise), coordinated 
          trading schemes between multiple users, or any behavior that would be considered market manipulation in a real trading environment.
        </li>
        <li>
          <strong>Automated Trading & Unapproved EAs:</strong> Unless expressly allowed by Traders Act in writing, you may not use unauthorized 
          automated trading software, bots, or expert advisors (EAs) in the trading challenges. Similarly, copying another user's trades or 
          using third-party copy-trading services to pass challenges is not allowed.
        </li>
      </ul>
      <p>
        Traders Act's team actively monitors trading activity. <strong>Violations:</strong> If we detect any prohibited conduct or strategies, 
        we reserve the right to take action at our sole discretion. Actions may include immediate termination of your account, disqualification 
        from the challenge, nullification of results, and forfeiture of any fees paid or potential payouts. Serious violations may also result 
        in you being banned from future use of our services. We may report fraudulent or illegal activities to relevant authorities if appropriate.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
      <p>
        All content and materials on the Traders Act website and platform (including but not limited to software, text, logos, graphics, videos, 
        and design) are the property of Traders Act (White Stone Investment Advisors LTD) or its licensors and are protected by copyright, trademark, and other 
        intellectual property laws. Traders Act hereby grants you a limited, non-exclusive, non-transferable license to access and use the platform 
        and its content for your personal use only. You may not reproduce, distribute, modify, or create derivative works from our content without 
        our explicit written permission. Any unauthorized use of our intellectual property is a violation of these Terms and may lead to account 
        termination or legal action.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Dispute Resolution (Arbitration)</h2>
      <p>
        <strong>Arbitration Agreement:</strong>
      </p>
      <p>
        By using Traders Act, you agree that any dispute, claim, or controversy arising out of or relating to these Terms or your use of the 
        services shall be resolved through binding arbitration rather than in court. Specifically, any dispute shall be finally settled by 
        arbitration in Saint Lucia. The arbitration will be conducted in English and administered in accordance with the applicable Saint Lucia 
        arbitration laws and rules in effect at the time of the dispute. If available, the parties may use the Arbitration and Mediation Center 
        or a similar reputable arbitration institution in Saint Lucia.
      </p>
      <p>
        <strong>Procedures:</strong>
      </p>
      <p>
        A single independent arbitrator (or three arbitrators, if mutually agreed) will be appointed. The arbitrator(s) shall have experience 
        in commercial or financial disputes. The arbitration award shall be in writing and binding on both parties, and it may be entered and 
        enforced by any court having jurisdiction. <strong>Confidentiality:</strong> The arbitration proceedings and outcome shall remain 
        confidential to the fullest extent permitted by law.
      </p>
      <p>
        <strong>Waiver of Class Actions:</strong>
      </p>
      <p>
        You and Traders Act each agree to bring any dispute only in an individual capacity, and not as a plaintiff or class member in any 
        purported class or representative proceeding. The arbitrator shall not consolidate more than one person's claims or otherwise preside 
        over any form of a representative or class proceeding. You understand that by agreeing to arbitration, you are waiving any right to a 
        jury trial or to participate in a class action lawsuit.
      </p>
      <p>
        <strong>Exception – Injunctive Relief:</strong>
      </p>
      <p>
        Notwithstanding the above, Traders Act may seek injunctive or equitable relief in any court of competent jurisdiction to protect its 
        intellectual property or confidential information.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Governing Law</h2>
      <p>
        This Agreement and any dispute arising from it shall be governed by and interpreted in accordance with the laws of Saint Lucia, to the 
        extent not inconsistent with or preempted by any mandatory law of another jurisdiction (such as consumer protection laws that may apply 
        to you). This governing law clause applies regardless of your country of residence. However, nothing in this clause shall limit the rights 
        or protections you have under mandatory laws of your country of habitual residence.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Disclaimers and Limitation of Liability</h2>
      <p>
        <strong>"As-Is" Service:</strong> Traders Act is provided on an "as is" and "as available" basis. While we strive to maintain a reliable 
        and accessible service, we do not guarantee that the platform will be uninterrupted, error-free, or secure at all times. To the fullest 
        extent permitted by law, Traders Act disclaims all warranties, express or implied, regarding the service, including any implied warranties 
        of merchantability, fitness for a particular purpose, and non-infringement. Using our demo trading platform is at your own risk.
      </p>
      <p>
        <strong>No Liability for Losses:</strong> Since Traders Act is a demo trading platform and does not involve real money trading, you cannot 
        lose real capital through our service. However, Traders Act shall not be liable for any indirect, incidental, special, or consequential 
        damages of any kind arising from or relating to your use of (or inability to use) the platform or any performance issues. This includes, 
        but is not limited to, lost opportunities, lost profits, loss of data, or claims by third parties, even if we have been advised of the 
        possibility of such damages. In any event, if any liability is found against Traders Act, our total cumulative liability to you shall not 
        exceed the total fees you have paid to us (if any) in the 12 months preceding the event giving rise to the liability.
      </p>
      <p>
        <strong>User Responsibility:</strong> You understand and agree that any material or data downloaded or otherwise obtained through Traders Act 
        is done at your own discretion and risk. You are solely responsible for any damage to your computer system or loss of data that results from 
        use of the website or downloading of any content. Traders Act is not responsible for mistakes, trading errors, or misunderstandings arising 
        from the use of the demo trading environment.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Modification of Terms</h2>
      <p>
        Traders Act reserves the right to modify or update these Terms of Service at any time. If we make material changes, we will notify users 
        by posting the updated Terms on our website with a new "Last Updated" date (and/or by additional notice, such as email, if appropriate). 
        It is your responsibility to review the Terms periodically. Continued use of the platform after any changes constitutes acceptance of the 
        new Terms. If you do not agree with a change, you must stop using the service and, if applicable, close your account.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Termination</h2>
      <p>
        We may suspend or terminate your account and access to Traders Act at our sole discretion for any violation of these Terms or for any 
        other reason (including prolonged inactivity, or if required by law/regulation). In the event of termination due to your breach of the 
        Terms (for example, engaging in prohibited trading strategies or falsifying eligibility information), you will not be entitled to any 
        refunds of fees paid, and any rights or licenses granted to you will immediately end. You may also terminate your own account at any 
        time by contacting support. Termination will not affect provisions of this Agreement that by their nature should survive (such as dispute 
        resolution, limitation of liability, etc.).
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Miscellaneous</h2>
      <p>
        <strong>Entire Agreement:</strong> These Terms (along with the Privacy Policy, Risk Disclosure, Refund Policy, and any other policies 
        expressly incorporated by reference) constitute the entire agreement between you and Traders Act regarding your use of the service, 
        superseding any prior agreements.
      </p>
      <p>
        <strong>Severability:</strong> If any provision of these Terms is found to be unlawful or unenforceable, that provision will be deemed 
        severed from this Agreement and will not affect the validity and enforceability of the remaining provisions.
      </p>
      <p>
        <strong>No Waiver:</strong> Traders Act's failure to enforce any right or provision of these Terms shall not operate as a waiver of that 
        right or provision.
      </p>
      <p>
        <strong>Contact Information:</strong> If you have any questions about these Terms, you may contact us at <a href="mailto:support@tradersAct.com" className="text-blue-600 hover:text-blue-800">support@tradersAct.com</a>.
      </p>
    </LegalPageLayout>
  );
}