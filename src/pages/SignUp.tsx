import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Loader2, Facebook } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import FormError from '../components/FormError';
import { useAuth } from '../lib/auth';
import { signUpSchema, type SignUpFormData } from '../lib/validations';
import { useTranslation } from 'react-i18next';
import SocialAuthButton from '../components/SocialAuthButton';
import SocialAuthDivider from '../components/SocialAuthDivider';
import Logo from '../components/Logo';

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp, signInWithSocial } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const isRTL = ['ar'].includes(i18n.language);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      setIsLoading(true);
      await signUp(data.email, data.password);
      toast.success(t('auth.signUp.success'));
      navigate('/signin');
    } catch (err) {
      toast.error(t('auth.signUp.error'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: 'google' | 'facebook') => {
    try {
      setSocialLoading(provider);
      await signInWithSocial(provider);
      // No need for success toast here as we're redirecting to the OAuth provider
    } catch (err) {
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
              <a href="/" title="Traders Act Home">
                <Logo className="h-12 w-auto text-blue-600" />
              </a>
            </motion.div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">{t('auth.signUp.title')}</h2>
            <p className="mt-2 text-sm text-gray-600">
              {t('auth.signUp.haveAccount')}{' '}
              <a href="https://my.tradersact.com/login" className="font-medium text-blue-600 hover:text-blue-500">
                {t('auth.signUp.signIn')}
              </a>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('auth.signUp.nameLabel')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register('name')}
                    className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder={t('auth.signUp.namePlaceholder')}
                  />
                </div>
                {errors.name && <FormError message={errors.name.message!} />}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('auth.signUp.emailLabel')}
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
                    placeholder={t('auth.signUp.emailPlaceholder')}
                  />
                </div>
                {errors.email && <FormError message={errors.email.message!} />}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('auth.signUp.passwordLabel')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    {...register('password')}
                    className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder={t('auth.signUp.passwordPlaceholder')}
                  />
                </div>
                {errors.password && <FormError message={errors.password.message!} />}
              </div>

              <div className="flex items-center">
                <input
                  id="accept-terms"
                  type="checkbox"
                  {...register('acceptTerms')}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="accept-terms" className="ml-2 block text-sm text-gray-900">
                  {t('common.acceptTerms')}
                </label>
              </div>
              {errors.acceptTerms && <FormError message={errors.acceptTerms.message!} />}
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
                  {t('auth.signUp.button')}
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
              {t('auth.socialAuth.signUpWithGoogle')}
            </SocialAuthButton>
            
            <SocialAuthButton
              provider="facebook"
              icon={<Facebook className="h-5 w-5" />}
              onClick={() => handleSocialSignIn('facebook')}
              isLoading={socialLoading === 'facebook'}
            >
              {t('auth.socialAuth.signUpWithFacebook')}
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