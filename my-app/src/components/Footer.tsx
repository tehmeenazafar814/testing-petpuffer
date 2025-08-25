/* eslint-disable prettier/prettier */
import React from 'react'
import { Facebook, Instagram, Twitter, Music2 } from 'lucide-react' // Music2 used for TikTok style

const Footer = () => {
  return (
    <footer className="px-4 py-12 text-center text-sm text-text">
      {/* Newsletter */}
      <div className="mx-auto max-w-2xl">
        <p className="mb-2 text-left text-lg font-semibold">
          sign up for updates:
        </p>
        <form className="flex flex-col items-center gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="email address"
            className="w-full rounded border border-gray-400 px-3 py-2 text-sm focus:outline-none sm:flex-1"
          />
          <button
            type="submit"
            className="w-full rounded border border-gray-400 px-6 py-2 text-sm hover:bg-gray-100 sm:w-auto"
          >
            submit
          </button>
        </form>
        <p className="mt-2 text-left text-xs">
          by signing up you agree to our{' '}
          <a href="#" className="underline">
            terms
          </a>
          .
        </p>
      </div>

      {/* Socials */}
      <div className="mt-8 flex justify-center gap-6 text-2xl font-bold text-primary">
        <a href="#" aria-label="Facebook">
          <Facebook className="size-7" />
        </a>
        <a href="#" aria-label="Instagram">
          <Instagram className="size-7" />
        </a>
        <a href="#" aria-label="Twitter">
          <Twitter className="size-7" />
        </a>
        <a href="#" aria-label="TikTok">
          <Music2 className="size-7" />
        </a>
      </div>

      {/* Links */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 font-normal">
        <a href="#">contact us</a>
        <a href="#">faq</a>
        <a href="#">shipping</a>
        <a href="#">order tracking</a>
        <a href="#">rewards</a>
        <a href="#">gift card balance</a>
      </div>

      {/* Bottom links */}
      <div className="mt-6 flex flex-col justify-center gap-6 text-xs sm:flex-row">
        <a href="#" className="underline">
          privacy policy
        </a>
        <a href="#" className="underline">
          terms
        </a>
        <a href="#" className="underline">
          accessibility
        </a>
        <a href="#" className="underline">
          cookie policy
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-xs text-text">© 2025 coty operations</p>
    </footer>
  )
}

export default Footer
