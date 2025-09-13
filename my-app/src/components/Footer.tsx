/* eslint-disable prettier/prettier */
import {
  Facebook,
  Instagram,
  Music2, // TikTok-like icon (lucide doesn’t have TikTok)
  Sparkles
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-pinkGradient px-6 py-10 text-black md:px-16 md:py-14">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {/* === Get To Know Us === */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase">Get To Know Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <span>
                  <Sparkles />
                </span>{' '}
                Rewards
              </a>
            </li>
          </ul>
        </div>

        {/* === Customer Care === */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* === Shop === */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Shop All
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bundles & Save
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Skin Quiz
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Coming Soon
              </a>
            </li>
          </ul>
        </div>

        {/* === Follow Us === */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase">Follow Us</h3>
          <div className="mb-3 flex gap-4">
            <a href="#" className="hover:text-gray-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Music2 size={24} />
            </a>
          </div>
          <p className="text-sm font-semibold">hello@glow.com</p>
        </div>

        {/* === Newsletter === */}
        <div>
          <h3 className="mb-2 text-sm font-bold uppercase">
            Stay Up To Date And Save 10%
          </h3>
          <p className="mb-4 text-sm">
            Subscribe and learn more about skin solutions, exclusive deals &amp;
            save 10% on your first order.
          </p>

          <p className="mb-2 text-sm font-semibold">
            What are your skin concerns?
          </p>
          <div className="mb-4 flex flex-wrap gap-3 text-sm">
            {['DULLNESS', 'ACNE', 'WRINKLES', 'DRYNESS'].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-2"
              >
                <input type="radio" name="concern" className="accent-white" />
                {item}
              </label>
            ))}
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="mb-2 w-full rounded-sm px-3 py-1 text-black"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="mb-2 w-full rounded-sm px-3 py-1 text-black"
          />

          <button className="w-full rounded-sm bg-primary px-4 py-1 text-sm font-bold uppercase text-white transition hover:bg-gray-100 hover:text-black">
            Send My Discount
          </button>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/30 pt-6 text-xs md:flex-row">
        <p>Copyright Moroccan Glow. All rights reserved.</p>
        <div className="flex gap-3">
          <img
            src="/assets/images/pay/2.png"
            alt="visa"
            className="h-6 w-auto"
          />
          <img
            src="/assets/images/pay/01.png"
            alt="mastercard"
            className="h-6 w-auto"
          />
          <img
            src="/assets/images/pay/3.png"
            alt="amex"
            className="h-6 w-auto"
          />
          <img
            src="/assets/images/pay/4.png"
            alt="apple pay"
            className="h-6 w-auto"
          />
        </div>
      </div>
    </footer>
  )
}
