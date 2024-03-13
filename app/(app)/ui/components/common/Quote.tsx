import React from "react";
import Image from "next/image";
export default function QuoteSingle(){
  return (
    <section className="relative max-w-7xl xl:max-w-screen-2xl p-6 mx-auto">
    <div className="relative  max-w-screen-xl mx-auto px-4 md:px-8 bg-gradient-to-r from-gray-50 to-gray-100 py-28 rounded-2xl">
        <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-textSecondary font-semibold pb-6">Why Should you build a website</h3>
            <figure>
                <blockquote>
                    <p className="text-brandPrimary text-xl font-semibold sm:text-2xl">
                        “Your website is your digital handshake – make it memorable, make it beautiful, and watch your business universe expand.“
                    </p>
                </blockquote>
                <div className="mt-6">
                    <Image src="/images/shreyank_profile.jpg" className="w-16 h-16 mx-auto rounded-full" alt="Shreyank Jadiya Image" width={400} height={400} loading="eager" placeholder="blur" blurDataURL="/images/shreyank_profile.jpg" />
                    <div className="mt-3">
                        <span className="block text-textPrimary font-semibold">Shreyank Jadiya</span>
                        <span className="block text-textSecondary text-sm mt-0.5">Founder/ CEO / Lead Developer</span>
                    </div>
                </div>
            </figure>
        </div>
        <div className="absolute right-0 top-0 h-full w-full flex justify-end">
                    <div className="w-24 h-24 overflow-hidden flex rounded-xl relative blur-2xl">
                        <span className="absolute w-12 h-12 top-14 right-14 bg-brandSecondary rounded-md rotate-45" />
                        <span className="absolute w-12 h-12 bottom-14 right-14 bg-brandTertiary rounded-md rotate-45" />
                       
                    </div>
        </div>
        <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
              <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                  <span className="absolute w-12 h-12 top-0 right-0 bg-brandSecondary rounded-md rotate-45" />
                  <span className="absolute w-12 h-12 bottom-0 right-0 bg-brandTertiary rounded-md rotate-45" />          
              </div>
        </div>
    </div>
    
    </section>
  );
}
