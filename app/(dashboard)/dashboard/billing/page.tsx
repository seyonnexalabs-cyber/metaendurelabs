'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CreditCard, Download, ShieldCheck, CheckCircle2, 
  Clock, FileText, ArrowUpRight, Receipt
} from 'lucide-react';

interface Invoice {
  id: string;
  number: string;
  date: string;
  plan: string;
  amount: string;
  gateway: 'razorpay' | 'stripe';
  status: 'paid' | 'pending';
}

export default function AthleteBillingPage() {
  const [invoices] = useState<Invoice[]>([
    {
      id: 'inv-1',
      number: 'MEL-INV-2026-089',
      date: 'Sept 1, 2026',
      plan: 'Pro Endurance Coaching (Monthly)',
      amount: '₹7,500',
      gateway: 'razorpay',
      status: 'paid'
    },
    {
      id: 'inv-2',
      number: 'MEL-INV-2026-042',
      date: 'Aug 1, 2026',
      plan: 'Pro Endurance Coaching (Monthly)',
      amount: '₹7,500',
      gateway: 'razorpay',
      status: 'paid'
    },
    {
      id: 'inv-3',
      number: 'MEL-INV-2026-011',
      date: 'July 15, 2026',
      plan: 'Metabolic Graded Lactate Cart Test',
      amount: '₹5,000',
      gateway: 'razorpay',
      status: 'paid'
    }
  ]);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
          <Receipt className="w-6 h-6 text-emerald-400" />
          Subscription & Billing Ledger
        </h1>
        <p className="text-xs text-zinc-400 mt-1">
          Review active coaching subscriptions, payment gateways, and download tax invoices.
        </p>
      </div>

      {/* Current Plan Overview Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-emerald-500/30 grid md:grid-cols-3 gap-6 items-center">
        <div className="space-y-1">
          <span className="text-xs font-mono text-emerald-400 uppercase">Active Subscription</span>
          <h2 className="text-2xl font-black text-white">Pro Endurance</h2>
          <p className="text-xs text-zinc-400">Custom TrainingPeaks + Weekly Coach Sync</p>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-mono text-zinc-500 uppercase">Renewal Details</span>
          <div className="text-lg font-bold text-white">₹7,500 / month</div>
          <div className="text-xs text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> Next Auto-Debit: Oct 1, 2026
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <Link
            href="/dashboard/checkout?plan=elite-hybrid"
            className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs text-center transition-all"
          >
            Upgrade to Elite Hybrid
          </Link>
          <button
            onClick={() => alert('Subscription management portal opened.')}
            className="w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs transition-all"
          >
            Manage Gateway Settings
          </button>
        </div>
      </div>

      {/* Tax Invoice Ledger */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            Billing History & GST Invoices
          </h3>
          <span className="text-xs font-mono text-zinc-400">All payments processed with 18% GST</span>
        </div>

        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-zinc-800 bg-zinc-950/40 text-zinc-400 font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-4">Invoice #</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Service Plan</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Gateway</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="p-4 font-mono text-zinc-300 font-bold">{inv.number}</td>
                    <td className="p-4 text-zinc-400">{inv.date}</td>
                    <td className="p-4 font-bold text-white">{inv.plan}</td>
                    <td className="p-4 font-black text-emerald-400">{inv.amount}</td>
                    <td className="p-4 uppercase font-mono text-zinc-300">{inv.gateway}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                        {inv.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => alert(`Downloading PDF Invoice: ${inv.number}`)}
                        className="p-1.5 rounded-lg bg-zinc-800 hover:bg-emerald-500 hover:text-black text-zinc-300 transition-all inline-flex items-center gap-1 text-[11px] font-semibold"
                      >
                        <Download className="w-3.5 h-3.5" /> PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
