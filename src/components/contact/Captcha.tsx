import React from 'react';
import { RefreshCw } from 'lucide-react';

interface CaptchaProps {
  value: string;
  userInput: string;
  onInputChange: (value: string) => void;
  onRefresh: () => void;
  isValid: boolean;
  isTouched: boolean;
}

export const Captcha: React.FC<CaptchaProps> = ({
  value,
  userInput,
  onInputChange,
  onRefresh,
  isValid,
  isTouched,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 mb-2">Verify you're human</label>
      <div className="flex gap-4 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-lg select-none">
              {value}
            </div>
            <button
              type="button"
              onClick={onRefresh}
              className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="Refresh CAPTCHA"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
          <input
            type="text"
            value={userInput}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Enter the result"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
              isTouched && !isValid
                ? 'border-red-500'
                : isValid
                ? 'border-green-500'
                : 'border-gray-300'
            }`}
            required
          />
        </div>
      </div>
      {isTouched && !isValid && (
        <p className="mt-1 text-red-500 text-sm">Please enter the correct result</p>
      )}
    </div>
  );
};