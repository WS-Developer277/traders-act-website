import { useTranslation } from 'react-i18next';

export default function SocialAuthDivider() {
  const { t } = useTranslation();
  
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-gray-50 px-2 text-gray-500">{t('auth.socialAuth.orContinueWith')}</span>
      </div>
    </div>
  );
}