import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Loader2, Facebook } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import FormError from '../components/FormError';
import { useAuth } from '../lib/auth';
import { signInSchema, type SignInFormData } from '../lib/validations';
import { useTranslation } from 'react-i18next';
import SocialAuthButton from '../components/SocialAuthButton';
import SocialAuthDivider from '../components/SocialAuthDivider';
import Logo from '../components/Logo';

export default function SignIn() {
  const navigate = useNavigate();
  const { signIn, signInWithSocial } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const isRTL = ['ar'].includes(i18n.language);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      setIsLoading(true);
      await signIn(data.email, data.password);
      toast.success(t('auth.signIn.success'));
      navigate('/dashboard');
    } catch (error) {
      toast.error(t('auth.signIn.error'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: 'google' | 'facebook') => {
    try {
      setSocialLoading(provider);
      await signInWithSocial(provider);
      // No need for success toast here as we're redirecting to the OAuth provider
    } catch (error) {
      toast.error(t('auth.socialAuth.error'));
      setSocialLoading(null);
    }
  };

  return (
    <AnimatedTransition>
      <div className={`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Link to="/">
                <Logo className="h-12 w-auto text-blue-600" />
              </Link>
            </motion.div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">{t('auth.signIn.title')}</h2>
            <p className="mt-2 text-sm text-gray-600">
              {t('auth.signIn.noAccount')}{' '}
              <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                {t('auth.signIn.signUp')}
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('auth.signIn.emailLabel')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register('email')}
                    className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder={t('auth.signIn.emailPlaceholder')}
                  />
                </div>
                {errors.email && <FormError message={errors.email.message!} />}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('auth.signIn.passwordLabel')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    {...register('password')}
                    className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder={t('auth.signIn.passwordPlaceholder')}
                  />
                </div>
                {errors.password && <FormError message={errors.password.message!} />}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  {...register('rememberMe')}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  {t('common.rememberMe')}
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                  {t('common.forgotPassword')}
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="group relative w-full flex justify-center py-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  {t('auth.signIn.button')}
                  <motion.span
                    className={`absolute ${isRTL ? 'left-4' : 'right-4'}`}
                    whileHover={{ x: isRTL ? -5 : 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className={`h-5 w-5 ${isRTL ? 'flip-in-rtl' : ''}`} />
                  </motion.span>
                </>
              )}
            </Button>
          </form>

          <SocialAuthDivider />

          <div className="grid grid-cols-1 gap-3">
            <SocialAuthButton
              provider="google"
              icon={<GoogleIcon className="h-5 w-5" />}
              onClick={() => handleSocialSignIn('google')}
              isLoading={socialLoading === 'google'}
            >
              {t('auth.socialAuth.continueWithGoogle')}
            </SocialAuthButton>
            
            <SocialAuthButton
              provider="facebook"
              icon={<Facebook className="h-5 w-5" />}
              onClick={() => handleSocialSignIn('facebook')}
              isLoading={socialLoading === 'facebook'}
            >
              {t('auth.socialAuth.continueWithFacebook')}
            </SocialAuthButton>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
}

// Google icon component (since it's not available in lucide-react)
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      className={className}
    >
      <path
        fill="#EA4335"
        d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
      />
      <path
        fill="#34A853"
        d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2970142 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
      />
      <path
        fill="#4A90E2"
        d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1272727,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
      />
    </svg>
  );
}