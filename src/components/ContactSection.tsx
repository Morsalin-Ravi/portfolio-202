import React, { useState } from 'react';
import { SectionKicker } from './SectionKicker';
import { SOCIAL_LINKS, CONTACT_EMAIL, DISCORD_TAG, PERSONAL_INFO } from '../data/atikData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(DISCORD_TAG);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const subject = encodeURIComponent(`Video Editing Project Inquiry from ${senderName || 'Client'}`);
    const body = encodeURIComponent(
      `Hi ${PERSONAL_INFO.name},\n\n${message}\n\nFrom: ${senderName || 'Client'} (${senderEmail || 'N/A'})`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-4xl px-5 py-24 text-center">
      <SectionKicker>Let's Work Together</SectionKicker>
      
      <h2
        className="mt-4 font-display text-3xl leading-tight sm:text-4xl text-white tracking-tight"
        style={{ fontWeight: 700 }}
      >
        Got a project? <span className="gradient-text">Let's cut it together.</span>
      </h2>
      
      <p className="mx-auto mt-4 max-w-xl text-[#94a3b8] leading-relaxed">
        Open for freelance projects, long-term channel contracts, and agency partnerships worldwide.
      </p>

      {/* Social and Communication Chips */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor="hover"
            className="chip text-sm font-semibold hover:-translate-y-1 hover:border-[#2196F3] hover:shadow-[0_14px_34px_-14px_rgba(33,150,243,0.85)] cursor-pointer border-[rgba(227,242,253,0.14)]"
          >
            <span
              className="h-2 w-2 rounded-full shrink-0"
              style={{ background: link.dotColor || '#2196F3' }}
            />
            <span>{link.label}</span>
          </a>
        ))}

        {/* Discord Chip */}
        <button
          type="button"
          onClick={handleCopyDiscord}
          data-cursor="hover"
          className="chip text-sm font-semibold hover:-translate-y-1 hover:border-[#2196F3] hover:shadow-[0_14px_34px_-14px_rgba(33,150,243,0.85)] cursor-pointer border-[rgba(227,242,253,0.14)]"
        >
          <span
            className="h-2 w-2 rounded-full shrink-0"
            style={{ background: '#2196F3' }}
          />
          <span>{copiedDiscord ? 'Discord Tag Copied!' : `Discord: ${DISCORD_TAG}`}</span>
        </button>

        {/* Direct Email Chip */}
        <button
          type="button"
          onClick={handleCopyEmail}
          data-cursor="hover"
          className="chip text-sm font-semibold hover:-translate-y-1 hover:border-[#2196F3] hover:shadow-[0_14px_34px_-14px_rgba(33,150,243,0.85)] cursor-pointer border-[rgba(227,242,253,0.14)]"
        >
          <span
            className="h-2 w-2 rounded-full shrink-0"
            style={{ background: '#2196F3' }}
          />
          <span>{copiedEmail ? 'Email Copied!' : CONTACT_EMAIL}</span>
        </button>
      </div>

      {/* Direct Project Message Box */}
      <div className="mt-12 mx-auto max-w-lg rounded-2xl border border-[rgba(227,242,253,0.14)] bg-[rgba(13,22,36,0.78)] p-6 sm:p-8 backdrop-blur-md shadow-2xl text-left">
        <h3 className="font-display text-lg font-bold text-white mb-2">
          Send a Quick Inquiry
        </h3>
        <p className="text-xs text-[#94a3b8] font-mono mb-6">
          Direct response within 24 hours · Worldwide collaboration
        </p>

        {formSent ? (
          <div className="p-6 rounded-xl border border-[#2196F3]/40 bg-[#2196F3]/10 text-center space-y-2">
            <p className="font-semibold text-white">Opening your email app...</p>
            <p className="text-xs text-[#94a3b8]">
              If it did not launch automatically, write directly to <span className="text-white font-mono">{CONTACT_EMAIL}</span>.
            </p>
            <button
              type="button"
              onClick={() => setFormSent(false)}
              className="mt-3 text-xs text-[#2196F3] hover:underline font-mono cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#94a3b8] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080c14] border border-[rgba(227,242,253,0.14)] text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:border-[#2196F3]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#94a3b8] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080c14] border border-[rgba(227,242,253,0.14)] text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:border-[#2196F3]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-[#94a3b8] mb-1">
                Project Scope / Video Details
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What style of video are you looking to cut? Commercials, talking head, motion graphics, or YouTube long-form?"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#080c14] border border-[rgba(227,242,253,0.14)] text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:border-[#2196F3]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-sm font-bold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg"
              style={{
                background: 'var(--gradient-accent)',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              Launch Direct Email Brief
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
