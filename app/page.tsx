"use client";

import { useState } from "react";
import { sampleProject } from "@/lib/sample-data";
import { ChangeType } from "@/lib/types";

const typeLabels: Record<ChangeType, string> = {
  new: "New",
  improved: "Improved",
  fixed: "Fixed",
  breaking: "Breaking",
};

const typeClasses: Record<ChangeType, string> = {
  new: "bg-emerald-500",
  improved: "bg-blue-500",
  fixed: "bg-amber-500",
  breaking: "bg-red-500",
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Now in beta - Free forever for early adopters
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Beautiful changelogs for{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              indie hackers
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Stop letting your hard work go unnoticed. Create stunning changelog pages that make users excited about your updates. Set up in 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#demo" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg">
              See Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#subscribe" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all">
              Get Early Access
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">5 Minute Setup</h3>
              <p className="text-gray-600 text-sm">Add your first changelog entry and get a public page instantly.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Beautiful by Default</h3>
              <p className="text-gray-600 text-sm">Your changelog looks stunning out of the box. Responsive and customizable.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Notifications</h3>
              <p className="text-gray-600 text-sm">Let users subscribe and get notified about updates automatically.</p>
            </div>
          </div>
        </div>
      </header>

      <section id="demo" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See it in action</h2>
            <p className="text-gray-600">Here is what your changelog will look like. Clean, modern, and informative.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl">🚀</div>
                <div>
                  <h3 className="text-white font-bold text-lg">{sampleProject.name}</h3>
                  <p className="text-gray-400 text-sm">{sampleProject.description}</p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {sampleProject.changelog.map((entry) => (
                <div key={entry.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <span className={`${typeClasses[entry.type]} text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
                        {typeLabels[entry.type]}
                      </span>
                      <span className="text-xs text-gray-400 mt-2">{entry.version}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{entry.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{entry.description}</p>
                      <span className="text-xs text-gray-400">{entry.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-600">Start free, upgrade when you need more.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-2">Free</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">Perfect for getting started</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  1 project
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Unlimited entries
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Public changelog page
                </li>
              </ul>
              <button className="w-full py-3 border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">Get Started</button>
            </div>

            <div className="bg-gradient-to-b from-indigo-600 to-indigo-700 rounded-2xl p-8 text-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
              <div className="text-sm font-medium text-indigo-200 mb-2">Pro</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-indigo-200">/mo</span>
              </div>
              <p className="text-indigo-200 text-sm mb-6">For growing products</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  5 projects
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Custom domain
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Embed widget
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">Coming Soon</button>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-2">Team</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">For teams shipping fast</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Team collaboration
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  API access
                </li>
              </ul>
              <button className="w-full py-3 border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

      <section id="subscribe" className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get early access</h2>
          <p className="text-gray-600 mb-8">Be the first to know when we launch. Early adopters get free Pro features forever.</p>

          {subscribed ? (
            <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl">
              <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="font-medium">You are on the list!</p>
              <p className="text-sm">We will notify you when ShipLog is ready.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button type="submit" className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap">
                Notify Me
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-gray-900">ShipLog</span>
          </div>
          <p className="text-gray-500 text-sm">Built with love for indie hackers. Made in a day with Claude Code.</p>
        </div>
      </footer>
    </div>
  );
}
