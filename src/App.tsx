import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './lib/auth';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load pages
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const RiskDisclosure = lazy(() => import('./pages/RiskDisclosure'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const AffiliatePage = lazy(() => import('./pages/Affiliate'));
const ChallengePage = lazy(() => import('./pages/Challenge'));
const FundingPage = lazy(() => import('./pages/Funding'));
const AcademyPage = lazy(() => import('./pages/Academy'));
const BlogPage = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PositionSizingPost = lazy(() => import('./pages/PositionSizing'));
const StopLossPost = lazy(() => import('./pages/StopLoss'));
const TechnicalAnalysisPost = lazy(() => import('./pages/TechnicalAnalysis'));
const TradingPsychologyPost = lazy(() => import('./pages/TradingPsychology'));
const MarketCorrelationsPost = lazy(() => import('./pages/MarketCorrelations'));
const TradingPlanPost = lazy(() => import('./pages/TradingPlan'));
const EconomicIndicatorsPost = lazy(() => import('./pages/EconomicIndicators'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/risk" element={<RiskDisclosure />} />
              <Route path="/refund" element={<RefundPolicy />} />
              <Route path="/affiliate" element={<AffiliatePage />} />
              <Route path="/challenge" element={<ChallengePage />} />
              <Route path="/funding" element={<FundingPage />} />
              <Route path="/academy" element={<AcademyPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/mastering-risk-management" element={<BlogPost />} />
              <Route path="/blog/position-sizing-strategies" element={<PositionSizingPost />} />
              <Route path="/blog/understanding-stop-loss" element={<StopLossPost />} />
              <Route path="/blog/technical-analysis-beyond-basics" element={<TechnicalAnalysisPost />} />
              <Route path="/blog/psychology-successful-trading" element={<TradingPsychologyPost />} />
              <Route path="/blog/understanding-market-correlations" element={<MarketCorrelationsPost />} />
              <Route path="/blog/building-trading-plan" element={<TradingPlanPost />} />
              <Route path="/blog/economic-indicators" element={<EconomicIndicatorsPost />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
        <Toaster position="top-right" />
      </Router>
    </AuthProvider>
  );
}

export default App;