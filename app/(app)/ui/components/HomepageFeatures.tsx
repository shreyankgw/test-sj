import Image from "next/image";

export default function HomepageFeatures() {
  return (
    <section className="py-12">
      <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="flex flex-col  space-y-16">
          <div className="flex flex-col justify-center text-center  mx-auto md:max-w-3xl space-y-5">
            <h1 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
              One Stop Solutions to all your Shopify Store Needs
            </h1>
            <p className="text-textSecondary max-w-2xl mx-auto">
              Unlock the full potential of your business with our all-in-one
              suite of services. From data-driven analytics and creative
              marketing strategies to bespoke design, agile development, and
              conversion optimization, coupled with in-depth market research –
              we've got it all covered.
            </p>
          </div>
          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4 lg:items-center">
            <div className="order-1 grid gap-10 sm:grid-cols-2 md:order-1 md:grid-cols-1 lg:order-1">
              <div className="flex flex-col space-y-4 justify-center md:justify-start">
                <span className="p-2 rounded-md bg-brandSecondary text-white flex w-max">
                  {/* feature icon */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M5 9.5V25.5C5.00198 26.1624 5.26601 26.7972 5.73442 27.2656C6.20283 27.734 6.83757 27.998 7.5 28H24.5C25.1624 27.998 25.7972 27.734 26.2656 27.2656C26.734 26.7972 26.998 26.1624 27 25.5V9.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.25 4H4.75C3.7835 4 3 4.7835 3 5.75V7.25C3 8.2165 3.7835 9 4.75 9H27.25C28.2165 9 29 8.2165 29 7.25V5.75C29 4.7835 28.2165 4 27.25 4Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 19L16 23L12 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 21.6181V14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                  Custom Project Strategy
                </h1>
                <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                  Tailored to your business needs with industry research, we help you
                  craft a strategy that aligns perfectly with your brand's vision.
                </p>
              </div>
              <div className="flex flex-col space-y-4 justify-center md:justify-start">
                <span className="p-2 rounded-md bg-brandSecondary text-white flex w-max">
                  {/* feature icon */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M10.0001 24.3123C9.68229 24.3126 9.37521 24.1971 9.1364 23.9873L1.1364 16.9873C0.995693 16.8641 0.88294 16.7123 0.80569 16.542C0.72844 16.3717 0.688477 16.1868 0.688477 15.9998C0.688477 15.8128 0.72844 15.6279 0.80569 15.4576C0.88294 15.2873 0.995693 15.1355 1.1364 15.0123L9.1364 8.01229C9.39838 7.78304 9.7407 7.66726 10.0881 7.69041C10.4354 7.71356 10.7593 7.87374 10.9886 8.13573C11.2178 8.39771 11.3336 8.74003 11.3105 9.08739C11.2873 9.43474 11.1271 9.75867 10.8651 9.98791L3.99327 15.9998L10.8645 22.0117C11.0656 22.1875 11.2083 22.4205 11.2735 22.6795C11.3387 22.9386 11.3232 23.2114 11.2293 23.4614C11.1353 23.7115 10.9673 23.9269 10.7477 24.0789C10.5281 24.231 10.2673 24.3124 10.0001 24.3123Z"
                      fill="white"
                    />
                    <path
                      d="M22.0002 24.3123C21.733 24.3125 21.4721 24.2312 21.2524 24.0792C21.0326 23.9272 20.8645 23.7118 20.7705 23.4617C20.6765 23.2116 20.661 22.9388 20.7262 22.6797C20.7913 22.4206 20.934 22.1875 21.1352 22.0117L28.007 15.9998L21.1358 9.98791C20.8738 9.75867 20.7136 9.43474 20.6905 9.08739C20.6673 8.74003 20.7831 8.39771 21.0123 8.13573C21.2416 7.87374 21.5655 7.71356 21.9129 7.69041C22.2602 7.66726 22.6026 7.78304 22.8645 8.01229L30.8645 15.0123C31.0053 15.1355 31.118 15.2873 31.1953 15.4576C31.2725 15.6279 31.3125 15.8128 31.3125 15.9998C31.3125 16.1868 31.2725 16.3716 31.1953 16.542C31.118 16.7123 31.0053 16.8641 30.8645 16.9873L22.8645 23.9873C22.6256 24.1973 22.3183 24.3129 22.0002 24.3123Z"
                      fill="white"
                    />
                    <path
                      d="M13.0002 27.3131C12.7958 27.3131 12.5942 27.2653 12.4116 27.1736C12.2289 27.0819 12.0702 26.9488 11.9481 26.7849C11.8259 26.621 11.7438 26.4308 11.7081 26.2296C11.6725 26.0283 11.6843 25.8215 11.7427 25.6256L17.7427 5.62563C17.7879 5.45591 17.8667 5.29699 17.9744 5.15828C18.0822 5.01957 18.2166 4.9039 18.3699 4.81811C18.5231 4.73232 18.6921 4.67816 18.8666 4.65884C19.0412 4.63952 19.2179 4.65544 19.3862 4.70564C19.5545 4.75584 19.711 4.83931 19.8464 4.95111C19.9819 5.0629 20.0935 5.20075 20.1748 5.35647C20.256 5.5122 20.3051 5.68264 20.3192 5.8577C20.3334 6.03276 20.3122 6.20888 20.2571 6.37563L14.2571 26.3756C14.1764 26.6463 14.0105 26.8838 13.784 27.0527C13.5576 27.2216 13.2827 27.3129 13.0002 27.3131Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                  Clean &amp; Efficient Code
                </h1>
                <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                  We believe in writing performance optimized code that is free of 
                  any unnecessary overhead. So, you can focus on what matters the most.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center order-3 md:col-span-2 lg:order-2 lg:row-span-2 lg:h-full">
              <div
                className="flex-1 relative bg-gradient-to-tr from-brandSecondary to-brandTertiary 
                  p-6 rounded-lg aspect-[4/2.4] overflow-hidden"
              >
                <Image
                  src="/images/homepage_features.jpg"
                  alt="illustration"
                  height={1920}
                  width={1280}
                  loading="lazy"
                  placeholder="blur"
                  className="w-full h-auto"
                  blurDataURL="/images/homepage_features.jpg"
                />
              </div>
            </div>
            <div className="order-1 grid gap-10 sm:grid-cols-2 md:order-2 md:grid-cols-1 lg:order-3">
              <div className="flex flex-col space-y-4 justify-center md:justify-start">
                <span className="p-2 rounded-md bg-brandSecondary text-white flex w-max">
                  {/* feature icon */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M28 4H4C2.89543 4 2 4.89543 2 6V22C2 23.1046 2.89543 24 4 24H28C29.1046 24 30 23.1046 30 22V6C30 4.89543 29.1046 4 28 4Z"
                      stroke="white"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 28L18.5 24H13.5L13 28H19Z"
                      fill="white"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 28H9"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 19V22C2.00148 22.53 2.21267 23.0378 2.58743 23.4126C2.96218 23.7873 3.47002 23.9985 4 24H28C28.53 23.9985 29.0378 23.7873 29.4126 23.4126C29.7873 23.0378 29.9985 22.53 30 22V19H2ZM16 23C15.8022 23 15.6089 22.9414 15.4444 22.8315C15.28 22.7216 15.1518 22.5654 15.0761 22.3827C15.0004 22.2 14.9806 21.9989 15.0192 21.8049C15.0578 21.6109 15.153 21.4327 15.2929 21.2929C15.4327 21.153 15.6109 21.0578 15.8049 21.0192C15.9989 20.9806 16.2 21.0004 16.3827 21.0761C16.5654 21.1518 16.7216 21.28 16.8315 21.4444C16.9414 21.6089 17 21.8022 17 22C17 22.2652 16.8946 22.5196 16.7071 22.7071C16.5196 22.8946 16.2652 23 16 23Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                  Quality Design
                </h1>
                <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                   Highest Quality Designs with top-notch designers that uses the premium grade softwares to produce high-quality assets.
                </p>
              </div>
              <div className="flex flex-col space-y-4 justify-center md:justify-start">
                <span className="p-2 rounded-md bg-brandSecondary text-white flex w-max">
                  {/* feature icon */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M28 16C28 9.375 22.625 4 16 4C9.375 4 4 9.375 4 16C4 22.625 9.375 28 16 28C22.625 28 28 22.625 28 16Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M22 11L13.6 21L10 17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                  Performance Check
                </h1>
                <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                  Testing across all devices and platforms to make sure customers get the best experience while visitng your brand website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
