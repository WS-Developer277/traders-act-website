import { AlertTriangle } from 'lucide-react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function RiskDisclosure() {
  return (
    <LegalPageLayout 
      title="Risk Disclosure"
      icon={<AlertTriangle className="h-8 w-8 text-amber-500" />}
    >
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
        <p className="font-medium text-amber-800">
          Trading and investing carry significant risk. Although Traders Act only offers simulated trading (demo accounts), 
          it is important that you understand the risks involved in using our platform and in any trading activities you may 
          undertake elsewhere. By using Traders Act, you acknowledge and accept the following risk disclosures and disclaimers:
        </p>
      </div>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 text-sm font-bold">1</span>
        Market Risk
      </h2>
      <p>
        Trading financial instruments (even in simulation) involves exposure to market volatility and unpredictability. 
        Prices of currencies, stocks, or other assets can move rapidly and may result in significant gains or losses. 
        There is always the risk of losing the capital you invest in real markets, and similarly, poor performance in a 
        Traders Act demo challenge could result in failing the evaluation. Never trade (even in demo) with funds or sizes 
        you can't afford to lose in a real scenario.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 text-sm font-bold">2</span>
        No Real Money & No Investor Funds at Risk
      </h2>
      <p>
        Traders Act uses only demo accounts with virtual funds. No real money is being traded on the platform. While this 
        means you are not risking actual capital on Traders Act, any strategies you test in the simulation could lead to 
        real losses if applied in live markets. Traders Act does not hold or custody any user funds, apart from fees you 
        pay to participate in challenges. We do not offer real brokerage accounts, so any profits or losses in the simulation 
        are not real money transactions.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 text-sm font-bold">3</span>
        Not a Regulated Platform
      </h2>
      <p>
        Traders Act is operated by White Stone Investment Advisors LTD and introduced by White Stone Financial Services LLC. We are not a licensed or regulated broker-dealer or 
        financial institution. Because we are not regulated by any financial authority, there is no governmental or regulatory 
        oversight of our operations. Using an unregulated platform means you do not have the same protections as you would with 
        a regulated broker (for example, there is no investor compensation scheme for any fees paid, etc.). Traders Act's services 
        are provided under regulatory exemptions applicable to simulated trading and educational platforms.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 text-sm font-bold">4</span>
        No Investment Advice
      </h2>
      <p>
        All information, tutorials, strategies, or market analysis provided on Traders Act's website or through our services are 
        for educational and informational purposes only. Traders Act does not provide personalized investment advice or recommendations. 
        Any decisions you make to trade in real life are your own responsibility. If you decide to apply insights gained from our platform 
        to real trading, you do so at your own risk. We recommend that you consult with a qualified financial advisor before making actual 
        investment decisions.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 text-sm font-bold">5</span>
        Trading Performance and Past Results
      </h2>
      <p>
        Any performance statistics, strategies, or results (including your own demo trading results on Traders Act) are hypothetical 
        and historical. Past performance is not a guarantee of future results. Just because a strategy worked in the past or in a demo 
        environment does not mean it will succeed in live markets in the future. Be cautious about overestimating potential returns; 
        market conditions can change rapidly.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 text-sm font-bold">6</span>
        Technological and Execution Risks
      </h2>
      <p>
        Using an online platform involves technical risks. Our demo trading environment attempts to mimic real market conditions, but 
        execution may not always perfectly reflect real-world scenarios. There can be delays, disruptions, or differences in price feeds. 
        System outages, internet connectivity issues, or software bugs could impact your trading experience on Traders Act. We strive to 
        minimize these issues, but they remain a possibility. You should be prepared for the risk that technical problems might prevent 
        you from placing or modifying trades in the demo environment at any given moment.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 text-sm font-bold">7</span>
        Jurisdictional Limitations
      </h2>
      <p>
        Traders Act's services are subject to certain jurisdictional restrictions. As noted, we do not offer our platform to residents 
        of the USA, Canada, Iran, Russia, China, North Korea, or other prohibited regions. If you access Traders Act from a restricted 
        jurisdiction, you do so in violation of our Terms and at your own risk. Additionally, different countries have different rules 
        about trading and investments; ensure that your use of Traders Act complies with all laws applicable to you.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 text-sm font-bold">8</span>
        Personal Responsibility
      </h2>
      <p>
        Engaging in trading (real or simulated) is a personal decision. You should carefully consider your objectives, experience level, 
        and risk appetite. You are solely responsible for any trading decisions you make. Traders Act is not responsible for any losses 
        you incur outside our platform (for example, in your personal brokerage accounts) even if those losses arise from strategies or 
        confidence gained on our platform. Always practice prudent risk management in any trading activities.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Disclaimer</h2>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <p className="mb-4">
          Traders Act is an educational and evaluation platform, not a brokerage. We do not facilitate real trades, and no real profits 
          or losses occur within our system. Any monetary rewards offered by Traders Act (such as payouts for successful challenge completion) 
          are part of our evaluation program and not returns on investment. There is no guarantee that any user will receive a funded trading 
          opportunity or profit from using our platform.
        </p>
        <p className="mb-4">
          By using Traders Act, you acknowledge that you understand the risks outlined above and agree that Traders Act (White Stone Investment Advisors LTD) 
          will not be liable for any outcomes (financial or otherwise) resulting from your use of our demo trading services or your subsequent 
          trading activities elsewhere.
        </p>
        <p className="mt-4 font-medium">
          If you have any questions about these risk disclosures or do not understand any aspect of this document, please contact us before 
          using the platform. It is crucial that you fully comprehend and accept these risks prior to participating in Traders Act's trading 
          challenges.
        </p>
      </div>
    </LegalPageLayout>
  );
}