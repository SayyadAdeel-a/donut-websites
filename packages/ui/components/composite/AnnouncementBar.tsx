'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X, Sparkle } from '@phosphor-icons/react';
import { BrandAnnouncement } from '../../tokens/brands';

export interface AnnouncementBarProps {
  announcement?: BrandAnnouncement;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ announcement }) => {
  const [dismissed, setDismissed] = useState(false);

  if (!announcement || !announcement.enabled || dismissed) {
    return null;
  }

  const bgStyle = announcement.bgColor
    ? { backgroundColor: announcement.bgColor }
    : { backgroundColor: 'var(--brand-primary, #f54f95)' };

  const textColor = announcement.textColor || '#ffffff';

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="relative z-50 w-full py-2.5 px-4 text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm"
      style={{ ...bgStyle, color: textColor }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-3">
        {/* Center content */}
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center flex-wrap">
          {announcement.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-black/20 text-white backdrop-blur-sm">
              <Sparkle size={12} weight="fill" className="text-yellow-300" />
              {announcement.badge}
            </span>
          )}

          <span className="font-sans font-semibold tracking-wide">
            {announcement.message}
          </span>

          {announcement.linkText && announcement.linkUrl && (
            <Link
              href={announcement.linkUrl}
              className="inline-flex items-center gap-1 font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
              style={{ color: textColor }}
            >
              <span>{announcement.linkText}</span>
              <ArrowRight size={13} weight="bold" />
            </Link>
          )}
        </div>

        {/* Dismiss button */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="p-1 rounded-full hover:bg-black/10 transition-colors opacity-80 hover:opacity-100 flex-shrink-0"
          style={{ color: textColor }}
        >
          <X size={15} weight="bold" />
        </button>
      </div>
    </div>
  );
};
