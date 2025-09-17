/* eslint-disable prettier/prettier */
import { HeaderSecond } from 'components/Header/HeaderSecond'
import { Menu } from 'components/Header/Menu'
import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'

export default function TermsPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="sticky top-0 z-50 shadow-md">
        <HeaderSecond onMenuClick={() => setMenuOpen(true)} />
        {isMobile && (
          <Menu
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            showDesktopMenu={true}
          />
        )}
      </div>

      <div className="mx-auto max-w-6xl px-2 py-6 md:py-10">
        <h2 className="text-center text-3xl font-bold uppercase text-primary md:text-4xl">
          Terms
        </h2>

        <div className="mt-6 space-y-6 text-sm text-text">
          <p>Effective date: November 1, 2022</p>
          <p>
            These Terms are a legal agreement between Coty DTC Holdings, LLC
            located at 350 5th Avenue, 19th Floor, New York, NY 10118-0110, on
            behalf of itself and its subsidiaries and affiliates (“Kylie
            Cosmetics,” “us,” “our” and “we”) and you and, if applicable, the
            entity or person on whose behalf you are entering into these Terms
            (also referred to as “your”).
          </p>

          <p className="font-semibold">
            PLEASE READ THESE TERMS (“Terms”) CAREFULLY. BY CLICKING THE BOX
            AND/OR USING THIS WEBSITE, KYLIECOSMETICS.COM (“Website”), YOU AGREE
            TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE WITH THESE TERMS,
            PLEASE DO NOT CLICK THE BOX OR ACCESS THIS WEBSITE OR PLACE AN
            ORDER.
          </p>
          <p>
            We recommend that you print or otherwise download and save a copy of
            these Terms for your records, as well as any future versions of
            them, as we may update them from time to time. You can download a
            printable copy of these Terms here.
          </p>
          <p>
            For shipments to the UK and EU, please refer to these Terms of Sale,
            as these shipments are supported by Passport Shipping.
          </p>
          <p>
            <span className="font-medium">IMPORTANT NOTE</span>
            <br />
            Please read carefully the sections titled “RIGHT TO CANCEL; NO
            RETURNS; REFUNDS”, “PRICE AND PAYMENT”, “ARBITRATION,” “EXCLUSIONS
            AND LIMITATIONS OF LIABILITY”, “INDEMNIFICATION”, AND “DISCLAIMERS”.
            These provisions limit liability and affect how disputes are
            resolved including by arbitration without any right to a jury trial.
            California residents, for more information on your rights under the
            California Consumer Privacy Act (“CCPA”) please review the
            “Additional Disclosures for California Residents” section of our
            Privacy Policy.
          </p>
          <p>
            If for any reason whatsoever you do not agree to these Terms or do
            not wish to be bound by them, you must not access or use our
            Website.
          </p>
          <ul>
            <li>1. OUR DETAILS</li>
            <li>
              Coty DTC Holdings, LLC operates the Website and sells goods and
              services.
            </li>
            <li>
              Coty DTC Holdings, LLC is a Delaware limited liability company.
            </li>
            <li>
              Our address is 350 5th Avenue, 19th Floor, New York, NY
              10118-0110.
            </li>
            <li>
              Our contact email address is customerservice@kyliecosmetics.com.
            </li>
          </ul>
          <p>
            2. YOUR RESPONSIBILITY FOR OTHERS WHO ACCESS OUR WEBSITE USING YOUR
            DEVICE
          </p>
          <p>
            You must ensure that any persons who access our Website on your
            computer(s) or device(s), or who are permitted or able to access our
            Website on your computer(s) or device(s) are aware of these Terms
            and all other documentation referred to in them, and that such
            persons also agree to be bound by and to comply with these Terms. If
            for any reason whatsoever, such persons do not agree to these Terms
            or do not wish to be bound by them, they must not access or use our
            Website, and you must not permit them to do so.
          </p>
          <p>3. OTHER DOCUMENTS GOVERNING YOUR USE OF OUR WEBSITE</p>
          <p>
            We provide this Website to you subject to these Terms as well as:
            <br />· Our Privacy Policy, which is available at
            https://kyliecosmetics.com/en-us/privacy-policy. You acknowledge
            that all information you provide through this Website or otherwise,
            including, but not limited to, through the use of any interactive
            features on the Website and Account registration, is governed by our
            Privacy Policy, and you consent to all actions we take with respect
            to your information consistent with our Privacy Policy. It sets out
            the types of information we collect, the reasons we collect it, how
            we use it, where we may pass it on to any third parties, in what
            circumstances and for what reasons, and any other relevant
            information relating to our use and/or processing of your
            information and your rights in relation to your information.
          </p>
          <p>
            · Our Cookies Policy, which is available at
            https://kyliecosmetics.com/en-us/cookie-policy. Our cookies policy
            governs our use of cookies and similar technologies on our Website.
            It sets out the types of cookies we use, the purposes for which we
            use them, the circumstances in which we may place cookies on your
            computer, device or browser, and other relevant information relating
            to cookies, such as how to change your browser preferences and
            settings to accept or reject cookies.
          </p>
          <p>4. CHANGES TO THESE TERMS</p>
          <p>
            We reserve the right to update these Terms from time to time in our
            sole discretion. All changes are effective immediately when we post
            them, and apply to all access and use of the Website and/or all
            purchases of any good or service thereafter.
          </p>
          <p>
            If you use the Website or make a purchase after we post a revised
            version of these Terms, your use/purchase will be governed the
            revised Terms. You can find out whether these Terms have been
            revised since your last visit to this Website by looking at the
            effective date at the top of these terms.
          </p>
          <ul>
            <li>The provider of the Website is:</li>
            <li>Provider: Coty DTC Holdings, LLC</li>
            <li>Phone: 833-545-9543 (833-54 KYLIE)</li>
            <li>E-mail: customerservice@kyliecosmetics.com</li>
            <li>
              Postal Address: Coty DTC Holdings, LLC, 350 5th Avenue, 19th
              Floor, New York, NY 10118-0110.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
