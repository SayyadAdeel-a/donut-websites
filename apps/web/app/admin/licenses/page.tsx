import React from 'react';
import { GlobalHeader, GlobalFooter, DripDivider } from '@donutland/ui';
import { ShieldCheck, CheckCircle } from '@phosphor-icons/react/dist/ssr';

export default function LicensesPage() {
  const licenseCategories = [
    {
      title: 'Typography: Google Fonts (Anton & Plus Jakarta Sans)',
      license: 'SIL Open Font License 1.1 (OFL)',
      status: 'Tier A: Green (Open Commercial)',
      desc: 'Freely usable for personal and commercial digital distribution, web embedding, and software bundling.',
    },
    {
      title: 'Iconography: Phosphor Icons (@phosphor-icons/react)',
      license: 'MIT License',
      status: 'Tier A: Green (Open Commercial)',
      desc: 'Free for commercial use, modification, distribution, private use, and sublicensing per Adeel Dev Standard.',
    },
    {
      title: 'Photography: Unsplash & Pexels Stock Demo Assets',
      license: 'Unsplash & Pexels Free Commercial Licenses',
      status: 'Tier B: Yellow (Staging Only / Replace for Client Production)',
      desc: 'Permitted for commercial web demonstration. Production client brand sites must provide authentic photography.',
    },
    {
      title: 'Brand Logos & Proprietary 3D Composites',
      license: 'Silv Studio Template Copyright',
      status: 'Tier C: Red (Demonstration Only)',
      desc: 'Proprietary "Donutland" wordmark and demo 3D renders are restricted to reverse-engineering demonstration and replaced in the 5 client brands.',
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/admin/licenses" />

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 space-y-12">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-[#1ac500]/10 text-[#1ac500] font-sans font-bold text-xs uppercase tracking-wider mb-2 border border-[#1ac500]">
            Intellectual Property & Audit
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black">
            Asset Licensing & Attribution
          </h1>
          <p className="font-sans text-sm md:text-base text-gray-600">
            Formal legal audit and operational classification for all 358 canonical digital assets extracted from the template.
          </p>
        </div>

        <div className="space-y-6">
          {licenseCategories.map((item, idx) => (
            <div key={idx} className="p-8 rounded-[24px] border-2 border-black bg-[#fafafa] shadow-[4px_4px_0_0_#000000]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-black">
                  {item.title}
                </h3>
                <span className="px-3 py-1 rounded-full bg-white border border-black font-mono text-xs font-bold">
                  {item.license}
                </span>
              </div>
              <span className="inline-block text-xs font-sans font-bold uppercase text-[#f54f95] mb-2">
                {item.status}
              </span>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
