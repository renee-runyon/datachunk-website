// app/contact/page.jsx
"use client";
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

export default function ContactPage() {
    const [state, handleSubmit] = useForm("mnnwwwpy");

    if (state.succeeded) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="mb-4">
                        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h2>
                    <p className="text-gray-600 mb-6">Your message has been sent successfully. I&apos;ll get back to you soon.</p>
                    <Link
                        href="/"
                        className="title inline-block rounded-xl text-lg text-center uppercase px-8 py-2 shadow-md transition duration-300 ease-in-out bg-sky-950 hover:bg-transparent border-transparent hover:border-sky-950 border-2 text-gray-100 hover:text-sky-950 box-border"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="pt-24 text-4xl font-bold text-gray-900 mb-2">Get in Touch</h1>
                    <p className="text-gray-600">Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
                </div>

                <div className="bg-white rounded-4xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Name *
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="Your name"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email *
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="title w-full rounded-xl text-lg text-center uppercase px-8 py-2 shadow-md transition duration-300 ease-in-out bg-sky-950 hover:bg-transparent border-transparent hover:border-sky-950 border-2 text-gray-100 hover:text-sky-950 box-border disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
                        >
                            {state.submitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {state.errors && state.errors.length > 0 && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                                There was an error sending your message. Please try again.
                            </div>
                        )}
                    </form>
                </div>

                <div className="text-center mt-6">
                    <Link
                        href="/"
                        className="text-sky-950 hover:text-sky-900 transition-colors text-lg"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}