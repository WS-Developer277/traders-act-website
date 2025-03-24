import { useTranslation } from 'react-i18next';
import { Globe, Mail, MapPin, Phone, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';
import ErrorBoundary from './ErrorBoundary';
import { submitContactForm } from '../services/contact';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const result = await submitContactForm(formData);
      setFormStatus(result);
      
      if (result.success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (err: unknown) {
      console.error('Error submitting contact form:', err);
      setFormStatus({
        success: false,
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ErrorBoundary sectionName="Contact">
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.contact.title')}</h2>
            <p className="text-lg text-gray-600">{t('home.contact.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('home.contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={t('home.contact.form.name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('home.contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={t('home.contact.form.email')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('home.contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={t('home.contact.form.message')}
                  />
                </div>
                
                {formStatus && (
                  <div className={`p-3 rounded-lg flex items-start ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {formStatus.success ? (
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                    )}
                    <p>{formStatus.message}</p>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('common.submitting') : t('home.contact.form.button')}
                </Button>
              </form>

              {/* Trading Hours and Support Hours */}
              <div className="mt-8 space-y-6" data-component-name="ContactSection">
                <div data-component-name="ContactSection">
                  <h3 className="text-xl font-semibold mb-4" data-component-name="ContactSection">{t('home.contact.hours.trading.title')}</h3>
                  <div className="space-y-2" data-component-name="ContactSection">
                    <div className="flex justify-between">
                      <span data-component-name="ContactSection">{t('home.contact.hours.trading.weekdays')}</span>
                      <span>{t('home.contact.hours.trading.weekdaysHours')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span data-component-name="ContactSection">{t('home.contact.hours.trading.weekend')}</span>
                      <span>{t('home.contact.hours.trading.weekendHours')}</span>
                    </div>
                  </div>
                </div>

                <div data-component-name="ContactSection">
                  <h3 className="text-xl font-semibold mb-4" data-component-name="ContactSection">{t('home.contact.hours.support.title')}</h3>
                  <div className="space-y-2" data-component-name="ContactSection">
                    <div className="flex justify-between">
                      <span>{t('home.contact.hours.support.weekdays')}</span>
                      <span data-component-name="ContactSection">{t('home.contact.hours.support.weekdaysHours')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('home.contact.hours.support.weekend')}</span>
                      <span data-component-name="ContactSection">NA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6">{t('home.contact.companies.title')}</h3>

                {/* Markets Act Broker Ltd */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium mb-4">{t('home.contact.companies.marketsAct.name')}</h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="text-blue-600 mr-4" />
                        <a href={`mailto:${t('home.contact.companies.marketsAct.email')}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                          {t('home.contact.companies.marketsAct.email')}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="text-blue-600 mr-4" />
                        <span className="text-gray-600">{t('home.contact.companies.marketsAct.phone')}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="text-blue-600 mr-4" />
                        <a href="https://www.marketsact.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors" data-component-name="ContactSection">
                          www.marketsact.com
                        </a>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="text-blue-600 mr-4 mt-1" />
                        <span className="text-gray-600">
                          {t('home.contact.companies.marketsAct.address')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* White Stone Investment Advisors */}
                  <div>
                    <h4 className="text-lg font-medium mb-4">{t('home.contact.companies.whiteStoneInvestment.name')}</h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Globe className="text-green-600 mr-4" />
                        <a href={t('home.contact.companies.whiteStoneInvestment.website')} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                          {t('home.contact.companies.whiteStoneInvestment.website')}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-green-600 mr-4" />
                        <a href={`mailto:${t('home.contact.companies.whiteStoneInvestment.email')}`} className="text-gray-600 hover:text-green-600 transition-colors">
                          {t('home.contact.companies.whiteStoneInvestment.email')}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="text-green-600 mr-4" />
                        <span className="text-gray-600">{t('home.contact.companies.whiteStoneInvestment.phone')}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="text-green-600 mr-4 mt-1" />
                        <span className="text-gray-600">
                          {t('home.contact.companies.whiteStoneInvestment.address')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* White Stone Financial Services */}
                  <div>
                    <h4 className="text-lg font-medium mb-4">{t('home.contact.companies.whiteStoneFinancial.name')}</h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Globe className="text-purple-600 mr-4" />
                        <a href={t('home.contact.companies.whiteStoneFinancial.website')} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                          {t('home.contact.companies.whiteStoneFinancial.website')}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-purple-600 mr-4" />
                        <a href={`mailto:${t('home.contact.companies.whiteStoneFinancial.email')}`} className="text-gray-600 hover:text-purple-600 transition-colors">
                          {t('home.contact.companies.whiteStoneFinancial.email')}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="text-purple-600 mr-4" />
                        <span className="text-gray-600">{t('home.contact.companies.whiteStoneFinancial.phone')}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="text-purple-600 mr-4 mt-1" />
                        
                        <span className="text-gray-600">
                          {t('home.contact.companies.whiteStoneFinancial.address')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default ContactSection;
