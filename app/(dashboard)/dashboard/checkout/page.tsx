'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  CreditCard, ShieldCheck, Lock, CheckCircle2, 
  QrCode, Building2, ArrowRight, Zap, RefreshCw, ChevronLeft
} from 'lucide-react';

type GatewayProvider = 'razorpay' | 'stripe';

function DashboardCheckoutContent() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan') || 'pro-endurance';
  const amountParam = searchParams.get('amount') || '₹7,500';

  const [provider, setProvider] = useState<GatewayProvider>('razorpay');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [transactionId, setTransactionId] = useState<string>('');

  const [billingInfo, setBillingInfo] = useState({
    name: 'Vijay Raghavan',
    email: 'vijay.triathlon@example.com',
    phone: '+91 98401 88990',
    gstin: '',
    address: '14/2, Boat Club Road, R.A. Puram, Chennai - 600028'
  });

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTransactionId(provider === 'razorpay' ? `pay_mel_${Math.random().toString(36).substring(2, 10).toUpperCase()}` : `pi_stripe_${Math.random().toString(36).substring(2, 10)}`);
    }, 1800);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Header & Breadcrumb */}
      <div className="flex items-center gap-3">
        <Link
          href="/dashboard/billing"
          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
            <Lock className="w-6 h-6 text-emerald-400" />
            Athlete Secure Checkout & Invoicing
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            256-bit encrypted gateway for training memberships and diagnostic testing.
          </p>
        </div>
      </div>

      {paymentSuccess ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900 border border-emerald-500/40 text-center space-y-6 max-w-xl mx-auto animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-white">Payment Confirmed!</h2>
            <p className="text-xs text-zinc-300">
              Your subscription has been updated. A tax invoice with GST breakdown has been issued.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-left space-y-2 text-xs">
            <div className="flex justify-between"><span className="text-zinc-400">Transaction ID:</span> <span className="font-mono font-bold text-emerald-400">{transactionId}</span></div>
            <div className="flex justify-between"><span className="text-zinc-400">Gateway:</span> <span className="font-bold text-white uppercase">{provider}</span></div>
            <div className="flex justify-between"><span className="text-zinc-400">Amount Paid:</span> <span className="font-bold text-white">{amountParam}</span></div>
            <div className="flex justify-between"><span className="text-zinc-400">Tax Invoice:</span> <span className="text-zinc-300">Generated & Mailed to {billingInfo.email}</span></div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              href="/dashboard/billing"
              className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs text-center shadow-lg shadow-emerald-500/20 transition-all"
            >
              View Invoices & Billing
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs text-center"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSimulatePayment} className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left: Gateway Selection & Billing Form */}
          <div className="md:col-span-7 space-y-6">
            {/* Payment Gateway Toggle */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase text-zinc-400">Select Gateway</label>
              <div className="grid grid-cols-2 gap-3">
                {/* Razorpay Option */}
                <div
                  onClick={() => setProvider('razorpay')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    provider === 'razorpay'
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10'
                      : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-white">Razorpay</span>
                    <QrCode className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-[11px] text-zinc-400">UPI (GPay, PhonePe), NetBanking & Indian Cards</p>
                  <div className="mt-2 text-[10px] text-emerald-400 font-mono font-bold">Zero convenience fees</div>
                </div>

                {/* Stripe Option */}
                <div
                  onClick={() => setProvider('stripe')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    provider === 'stripe'
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10'
                      : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-white">Stripe</span>
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-[11px] text-zinc-400">International Visa, Mastercard, AMEX & Apple Pay</p>
                  <div className="mt-2 text-[10px] text-zinc-500 font-mono">Global Currency Supported</div>
                </div>
              </div>
            </div>

            {/* Billing Information */}
            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <h3 className="font-bold text-white text-base">Athlete Billing Details</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    value={billingInfo.name}
                    onChange={(e) => setBillingInfo({...billingInfo, name: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Email</label>
                    <input
                      type="email"
                      value={billingInfo.email}
                      onChange={(e) => setBillingInfo({...billingInfo, email: e.target.value})}
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Mobile</label>
                    <input
                      type="tel"
                      value={billingInfo.phone}
                      onChange={(e) => setBillingInfo({...billingInfo, phone: e.target.value})}
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Billing Address</label>
                  <input
                    type="text"
                    value={billingInfo.address}
                    onChange={(e) => setBillingInfo({...billingInfo, address: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Order Summary & Checkout Button */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6 sticky top-24">
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="font-bold text-white text-base">Subscription Summary</h3>
                <p className="text-xs text-zinc-400">MetaEndure Performance Tier</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Selected Plan:</span>
                  <span className="font-bold text-white capitalize">{planParam.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Billing Cycle:</span>
                  <span className="font-mono text-zinc-300">Monthly Recurring</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Applicable GST (18%):</span>
                  <span className="font-mono text-zinc-300">Included</span>
                </div>
                <div className="pt-3 border-t border-zinc-800 flex justify-between items-baseline text-sm">
                  <span className="font-bold text-white">Total Payable:</span>
                  <span className="text-xl font-black text-emerald-400">{amountParam}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-700 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition-all"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Contacting {provider.toUpperCase()} Gateway...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Pay {amountParam} via {provider.toUpperCase()}</span>
                  </>
                )}
              </button>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-[11px] text-zinc-400 space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Bank-Grade Encryption</span>
                </div>
                <p>
                  No card numbers or UPI PINs are ever stored on MetaEndure servers. Transactions are handled directly by PCI-DSS Level 1 certified gateways.
                </p>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default function DashboardCheckoutPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-white font-mono">Loading payment gateway...</div>}>
      <DashboardCheckoutContent />
    </Suspense>
  );
}
