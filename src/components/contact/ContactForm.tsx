import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Captcha } from './Captcha';
import { generateCaptcha } from '../../utils/captcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [captcha, setCaptcha] = useState(() => generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaTouched, setCaptchaTouched] = useState(false);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
    setCaptchaTouched(false);
  };

  const isCaptchaValid = captchaInput === captcha.result;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCaptchaTouched(true);

    if (!isCaptchaValid) {
      return;
    }

    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setCaptchaInput('');
    setCaptchaTouched(false);
    refreshCaptcha();
    alert('Message sent successfully!');
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
        </div>

        <Captcha
          value={captcha.question}
          userInput={captchaInput}
          onInputChange={setCaptchaInput}
          onRefresh={refreshCaptcha}
          isValid={isCaptchaValid}
          isTouched={captchaTouched}
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          Send Message <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;