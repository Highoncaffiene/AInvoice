import React from 'react';

const InvoiceShowcase = () => {
  return (
    <section className="relative py-24 bg-[#09090B] px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-xs sm:text-sm font-medium text-accent mb-6">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            Stunning Outputs
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-tight">
            Invoices your clients will actually want to open.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Ditch the boring templates. Deliver hyper-professional, gorgeous invoices automatically generated in seconds.
          </p>
        </div>

        {/* Invoice Card Mockup */}
        <div className="w-full max-w-2xl bg-white p-6 sm:p-12 rounded-[16px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-gray-100 text-gray-800 flex flex-col justify-between min-h-[600px] card-lift">
          <div>
            {/* Invoice Top Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-gray-100 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[10px] bg-accent flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent/20">
                  AI
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-none">Acme Systems</h3>
                  <span className="text-xs text-gray-500 mt-1 block">finance@acme.com</span>
                </div>
              </div>
              
              <div className="text-left sm:text-right">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Invoice</span>
                <span className="font-bold text-gray-900 text-lg sm:text-xl">#INV-2026-001</span>
                <span className="text-xs text-gray-500 block mt-1">Issued: May 17, 2026</span>
              </div>
            </div>

            {/* Bill To Block */}
            <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm border-b border-gray-100">
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Billed To</span>
                <h4 className="font-bold text-gray-900 text-base">John Doe</h4>
                <p className="text-gray-500 mt-1 leading-relaxed">
                  Cyberdyne Systems Inc.<br />
                  GST: 27AAAPL1234C1ZV
                </p>
              </div>
              <div className="sm:text-right">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Due Date</span>
                <span className="font-bold text-gray-900 text-base block">May 31, 2026</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-2">
                  Due in 14 days
                </span>
              </div>
            </div>

            {/* Line Items Table */}
            <div className="py-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 text-xs font-semibold text-gray-400 uppercase tracking-wider pb-3">
                      <th className="pb-3 font-semibold">Description</th>
                      <th className="pb-3 text-right font-semibold">Qty</th>
                      <th className="pb-3 text-right font-semibold">Unit Price</th>
                      <th className="pb-3 text-right font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600">
                    <tr>
                      <td className="py-4 pr-4">
                        <div className="font-medium text-gray-900">Enterprise AI Integration & Consulting</div>
                        <div className="text-xs text-gray-500 mt-0.5">Initial setup, fine-tuning model & staff training</div>
                      </td>
                      <td className="py-4 text-right">1</td>
                      <td className="py-4 text-right">₹45,000</td>
                      <td className="py-4 text-right font-medium text-gray-900">₹45,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">
                        <div className="font-medium text-gray-900">Cloud Infrastructure Setup & Scaling</div>
                        <div className="text-xs text-gray-500 mt-0.5">Provisioning multi-region node deployments</div>
                      </td>
                      <td className="py-4 text-right">10 hrs</td>
                      <td className="py-4 text-right">₹2,500</td>
                      <td className="py-4 text-right font-medium text-gray-900">₹25,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">
                        <div className="font-medium text-gray-900">Priority Support SLA (Monthly)</div>
                        <div className="text-xs text-gray-500 mt-0.5">24/7 dedicated response engineering</div>
                      </td>
                      <td className="py-4 text-right">1</td>
                      <td className="py-4 text-right">₹10,000</td>
                      <td className="py-4 text-right font-medium text-gray-900">₹10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bottom Totals and Watermark */}
          <div>
            <div className="pt-6 border-t border-gray-100 flex flex-col items-end gap-2 text-sm">
              <div className="flex justify-between w-full max-w-xs text-gray-500">
                <span>Subtotal:</span>
                <span className="font-medium text-gray-900">₹80,000</span>
              </div>
              <div className="flex justify-between w-full max-w-xs text-gray-500 pb-4 border-b border-gray-100">
                <span>GST (18%):</span>
                <span className="font-medium text-gray-900">₹14,400</span>
              </div>
              
              {/* Total Row in Accent Color */}
              <div className="flex justify-between w-full max-w-xs text-base font-bold pt-4 text-accent">
                <span>Total Amount:</span>
                <span className="text-xl">₹94,400</span>
              </div>
            </div>

            {/* Watermark at the bottom */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-gray-400 font-medium">
              <svg className="w-3.5 h-3.5 text-accent animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z"/>
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.832.445l-2 3a1 1 0 101.664 1.11L10 9.586l1.168 1.969a1 1 0 101.664-1.11l-2-3A1 1 0 0010 7z" clipRule="evenodd"/>
              </svg>
              Powered by <span className="font-bold text-gray-500">AI Invoice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceShowcase;
