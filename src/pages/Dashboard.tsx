import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, DollarSign, TrendingUp, Users, LogOut } from 'lucide-react';
import { useAuth } from '../lib/auth';
import AnimatedTransition from '../components/AnimatedTransition';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [accountBalance] = useState(50000);
  const [dailyPnL] = useState(1250.75);
  const [winRate] = useState(68.5);
  const [totalTrades] = useState(245);
  const { t } = useTranslation();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success(t('dashboard.signOutSuccess'));
      navigate('/');
    } catch (error) {
      toast.error(t('dashboard.signOutError'));
    }
  };

  const stats = [
    {
      title: t('dashboard.stats.accountBalance'),
      value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(accountBalance),
      icon: DollarSign,
      trend: '+2.5%',
      trendColor: 'text-green-500',
    },
    {
      title: t('dashboard.stats.dailyPnL'),
      value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dailyPnL),
      icon: TrendingUp,
      trend: '+3.2%',
      trendColor: 'text-green-500',
    },
    {
      title: t('dashboard.stats.winRate'),
      value: `${winRate}%`,
      icon: BarChart2,
      trend: '+0.8%',
      trendColor: 'text-green-500',
    },
    {
      title: t('dashboard.stats.totalTrades'),
      value: totalTrades,
      icon: Users,
      trend: '+12',
      trendColor: 'text-blue-500',
    },
  ];

  return (
    <AnimatedTransition>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.welcome')}, {user?.email}</h1>
              <p className="text-gray-600">{t('dashboard.subtitle')}</p>
            </div>
            <Button
              variant="outline"
              onClick={handleSignOut}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              {t('dashboard.signOut')}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className={`text-sm font-medium ${stat.trendColor}`}>{stat.trend}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mt-4">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Add more dashboard content here */}
        </div>
      </div>
    </AnimatedTransition>
  );
}