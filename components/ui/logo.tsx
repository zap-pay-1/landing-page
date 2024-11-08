import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <div className='flex items-center space-x-1'>
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className=' w-5 h-5 md:w-7 md:h-7 '>
<g clip-path="url(#clip0_1113_5096)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M115.295 1.2998L153.528 46.6258L162.446 130.383L94.9624 201.3L16.4463 130.15L55.9808 29.5573L115.295 1.2998ZM59.4094 37.2798L90.9446 70.5936L58.6944 117.37L24.8947 125.1L59.4094 37.2798ZM26.3158 130.963L86.2524 185.277L58.7638 123.543L26.3158 130.963ZM65.3463 123.535L95.7255 191.761L152.845 131.736L65.3463 123.535ZM155.477 121.723L148.068 52.1487L100.376 71.3063L155.477 121.723ZM95.5829 66.7325L145.647 46.6222L113.694 8.74155L63.3789 32.7121L95.5829 66.7325ZM95.323 74.8483L150.648 125.47L65.8982 117.527L95.323 74.8483Z" fill="url(#paint0_linear_1113_5096)"/>
</g>
<defs>
<linearGradient id="paint0_linear_1113_5096" x1="89.4463" y1="1.2998" x2="89.4463" y2="201.3" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFAC0B"/>
<stop offset="1" stop-color="#0B99FF"/>
</linearGradient>
<clipPath id="clip0_1113_5096">
<rect width="200" height="200" fill="white"/>
</clipPath>
</defs>
</svg>

<p className='font-medium md:font-bold md:text-lg'>ZapPay</p>
  </div>
  );
}
