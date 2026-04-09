import { useState, useEffect, useCallback } from 'react';
import type { Product } from '../types';
import { usePurchase } from '../context/PurchaseContext';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

function isValidEmail(value: string): boolean {
  return value.trim().length > 0 && EMAIL_REGEX.test(value.trim());
}

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function PurchaseModal({ isOpen, onClose, product }: PurchaseModalProps) {
  const { addUser, addInvoice, getUserByEmail } = usePurchase();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successProduct, setSuccessProduct] = useState<Product | null>(null);

  const resetForm = useCallback(() => {
    setName('');
    setEmail('');
    setEmailError('');
    setStep('form');
    setSuccessProduct(null);
  }, []);

  const handleClose = useCallback(() => {
    resetForm();
    onClose();
  }, [onClose, resetForm]);

  // 10s auto-close on success
  useEffect(() => {
    if (step !== 'success' || !isOpen) return;
    const timer = setTimeout(handleClose, 10000);
    return () => clearTimeout(timer);
  }, [step, isOpen, handleClose]);

  // Reset when modal opens with new product
  useEffect(() => {
    if (isOpen && product) {
      resetForm();
    }
  }, [isOpen, product?.id, resetForm]);

  const validate = (): boolean => {
    const e = email.trim();
    if (!e) {
      setEmailError('Email is required.');
      return false;
    }
    if (!isValidEmail(e)) {
      setEmailError('Please enter a valid email address.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product || !validate()) return;
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim() || 'Customer';
    const existing = getUserByEmail(trimmedEmail);
    if (!existing) {
      addUser({
        name: trimmedName,
        email: trimmedEmail,
        role: 'Customer',
        itemsPurchased: 1,
      });
    }
    addInvoice({
      productId: product.id,
      productName: product.name,
      userEmail: trimmedEmail,
    });
    setSuccessProduct(product);
    setStep('success');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
        aria-hidden
      />
      <div
        className="relative bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby={step === 'form' ? 'purchase-form-title' : 'purchase-success-title'}
      >
        {step === 'form' ? (
          <>
            <div className="p-6 border-b border-gray-100">
              <h2 id="purchase-form-title" className="text-xl font-semibold text-gray-900">
                Complete your purchase
              </h2>
              {product && (
                <p className="mt-1 text-gray-600">
                  {product.name} — {formatPrice(product.price)}
                </p>
              )}
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="purchase-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="purchase-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="purchase-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="purchase-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
                    emailError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
                {emailError && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {emailError}
                  </p>
                )}
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="p-6">
            <h2 id="purchase-success-title" className="text-xl font-semibold text-gray-900 mb-4">
              Purchase successful
            </h2>
            {successProduct && (
              <div className="rounded-xl bg-gray-50 p-4 mb-4">
                <p className="font-medium text-gray-900">{successProduct.name}</p>
                <p className="text-gray-600">{formatPrice(successProduct.price)}</p>
              </div>
            )}
            <p className="text-sm text-gray-500 mb-6">
              This popup will close in 10 seconds, or click Okay.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="w-full py-3 px-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800"
            >
              Okay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
