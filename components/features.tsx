import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import dealImage  from '@/public/images/deal.svg'
import { Developers } from "./ui/developers";
import { IconCode, IconInvoice, IconLayoutDashboard, IconSparkles, IconTrendingUp3, IconUnlink } from "@tabler/icons-react";
export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-0">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
               For developers
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-1 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Code Less, Connect More Chains.
            </h2>
            <p className="text-lg text-indigo-200/65">
            Fuel your app with secure, cross-chain payments using minimal code. Built for developers who value simplicity.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-2" data-aos="fade-up">
            <Image
              className="max-w-sm hidden"
              src={dealImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
           <Developers  />
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
             
               <IconLayoutDashboard className="text-indigo-500 w-6 h-6 mb-3" />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Powerful dashboard
              </h3>
              <p className="text-indigo-200/65">
              Easily manage your payments, API keys, and keep your business running smoothly with our intuitive dashboard.
              </p>
            </article>
            <article>
            <IconUnlink className="text-indigo-500 w-6 h-6 mb-3" />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Payment links
              </h3>
              <p className="text-indigo-200/65">
              Generate payment links in seconds and receive payments seamlessly—no fuss, no hassle.
              </p>
            </article>
            <article>
            <IconInvoice className="text-indigo-500 w-6 h-6 mb-3" />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Create and Send Invoices with Ease
              </h3>
              <p className="text-indigo-200/65">
              Design professional invoices quickly and manage payments effortlessly—streamlined for your convenience
              </p>
            </article>
            <article>
            <IconSparkles className="text-indigo-500 w-6 h-6 mb-3" />

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Instant settlement
              </h3>
              <p className="text-indigo-200/65">
              ZapPay never holds your funds. They are transferred to your evm wallet instantly..
              </p>
            </article>
            <article>
            <IconCode className="text-indigo-500 w-6 h-6 mb-3" />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Easy and powerful SDKs
              </h3>
              <p className="text-indigo-200/65">
              Quickly integrate with your business in a few lines of code and get your pre-built and hosted checkout page
              </p>
            </article>
            <article>
            <IconTrendingUp3 className="text-indigo-500 w-6 h-6 mb-3" />

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Optimised for conversion
              </h3>
              <p className="text-indigo-200/65">
              Create frictionless checkout experiences with one click payments and QR codes.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
