import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Slide } from "../../ui/animation/Slide";
import SupportSection from "../../ui/components/SupportSection";
import FeaturedBlogs from "../../ui/components/FeaturedBlogs";
import GetInTouch from "../../ui/components/common/GetInTouch";

export const metadata: Metadata = {
  title: "Shopify Store Setup | The SJ Development",
  metadataBase: new URL(
    "https://thesjdevelopment.com/pages/shopify-store-setup"
  ),
  description: "",
  openGraph: {
    title: "Shopify Store Setup | The SJ Development",
    url: "https://thesjdevelopment.com/pages/shopify-store-setup",
    description: "",
    images: "",
  },
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="max-w-[85rem] xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-textPrimary sm:text-4xl lg:text-6xl lg:leading-tight">
              Start your journey with{" "}
              <span className="text-brandPrimary">Shopify</span>
            </h1>
            <p className="mt-3 text-lg text-textSecondary">
              Shopify's e-commerce platform stands out for its extensive range
              of features, catering to all your online business needs. Whether
              you're looking to launch a boutique site for handcrafted goods,
              expand into dropshipping, or integrate an online store with your
              existing retail operation, Shopify provides all the essential
              tools to get you started seamlessly.
            </p>
            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-brandPrimary text-white hover:scale-105"
                href="/pages/contact"
              >
                Store Setup
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-textPrimary shadow-sm hover:scale-105"
                href="https://shopify.pxf.io/c/4211402/1101159/13624"
              >
                Try Shopify
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  style={{ cursor: "pointer" }}
                >
                  <g
                    strokeWidth="2.1"
                    stroke="#1A212B"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5" />
                    <path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5" />
                  </g>
                </svg>
              </a>
            </div>
            {/* End Buttons */}
            {/* Review */}
            <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
              {/* Review */}
              <div className="py-5">
                <div className="flex space-x-1">
                  <svg
                    className="size-4 text-gray-800"
                    width={51}
                    height={51}
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="size-4 text-gray-800"
                    width={51}
                    height={51}
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="size-4 text-gray-800"
                    width={51}
                    height={51}
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="size-4 text-gray-800"
                    width={51}
                    height={51}
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="size-4 text-gray-800"
                    width={51}
                    height={51}
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="mt-3 text-sm text-gray-800">
                  <span className="font-bold">4.5</span> /5 - from 6.3k reviews
                </p>
                <div className="mt-5">
                  {/* Star */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1500 344.983"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-32 h-auto"
                  >
                    <path
                      fill="#FF9D28"
                      d="M8.905 127.38l135.181.027 82.199.014V45.987z"
                    ></path>
                    <path
                      fill="#68C5ED"
                      d="M226.285 45.987V333.49L328.95 7.534z"
                    ></path>
                    <path
                      fill="#044D80"
                      d="M226.285 127.421l-82.199-.014 82.199 206.083z"
                    ></path>
                    <path
                      fill="#E54747"
                      d="M8.905 127.38l156.26 52.905-21.079-52.878z"
                    ></path>
                    <g fill="#044D80">
                      <path d="M506.884 257.809c-1.192 1.192-3.178 2.679-5.955 4.465-2.782 1.788-6.402 3.574-10.868 5.362-4.466 1.784-9.928 3.32-16.376 4.615-6.454 1.287-13.845 1.934-22.182 1.934-16.08 0-29.976-2.582-41.686-7.74-11.715-5.158-21.391-12.359-29.031-21.587-7.643-9.231-13.249-20.146-16.822-32.754-3.573-12.604-5.359-26.448-5.359-41.536 0-15.082 1.935-29.03 5.806-41.833 3.87-12.804 9.676-23.866 17.417-33.2 7.742-9.327 17.419-16.623 29.032-21.885 11.612-5.256 25.257-7.89 40.94-7.89 7.742 0 14.739.697 20.992 2.084 6.253 1.39 11.71 3.029 16.377 4.913 4.661 1.889 8.533 3.87 11.612 5.955 3.075 2.084 5.407 3.825 6.998 5.21 1.786 1.592 3.322 3.476 4.615 5.657 1.289 2.187 1.935 4.569 1.935 7.147 0 3.973-1.489 7.941-4.466 11.91-2.977 3.973-6.253 7.645-9.827 11.017-2.382-2.382-5.061-4.81-8.038-7.294-2.978-2.481-6.304-4.662-9.975-6.551-3.675-1.884-7.844-3.471-12.506-4.764-4.666-1.289-9.876-1.936-15.631-1.936-10.124 0-18.609 2.038-25.458 6.104-6.848 4.071-12.357 9.379-16.525 15.93-4.168 6.551-7.146 14.045-8.933 22.48-1.786 8.439-2.679 17.023-2.679 25.756 0 9.332.893 18.264 2.679 26.796 1.786 8.536 4.861 16.081 9.231 22.629 4.363 6.55 10.072 11.812 17.12 15.78 7.043 3.974 15.827 5.956 26.351 5.956 5.554 0 10.668-.693 15.334-2.083 4.661-1.388 8.783-3.077 12.356-5.065 3.573-1.98 6.7-4.063 9.379-6.249 2.68-2.184 4.913-4.067 6.7-5.659 1.191 1.392 2.577 3.081 4.168 5.063a71.7307 71.7307 0 0 1 4.466 6.253c1.387 2.186 2.578 4.368 3.573 6.548.991 2.188 1.488 4.17 1.488 5.954 0 2.584-.497 4.766-1.488 6.552-.996 1.787-2.583 3.774-4.764 5.956zM660.327 234.973c0 15.777 2.293 27.26 6.889 34.449-3.594 1.395-6.94 2.395-10.035 2.994-3.098.6-6.341.898-9.735.898-7.188 0-12.632-1.398-16.324-4.193-3.697-2.793-6.043-6.787-7.039-11.982-4.396 4.598-10.186 8.49-17.374 11.686-7.189 3.189-15.979 4.791-26.36 4.791-5.392 0-10.783-.748-16.175-2.236-5.393-1.5-10.287-3.934-14.679-7.314-4.395-3.387-7.988-7.916-10.783-13.59-2.799-5.674-4.194-12.59-4.194-20.75 0-10.152 2.444-18.416 7.339-24.783 4.892-6.373 11.032-11.398 18.423-15.082 7.386-3.68 15.375-6.213 23.964-7.61 8.584-1.395 16.475-2.288 23.663-2.691 2.398-.197 4.742-.3 7.04-.3h6.44v-5.452c0-7.676-2.05-13.129-6.141-16.358-4.096-3.23-10.737-4.849-19.92-4.849-8.588 0-16.227 1.399-22.915 4.193-6.693 2.799-13.232 5.991-19.62 9.586-2.799-3.394-5.047-7.137-6.74-11.233-1.698-4.09-2.546-7.137-2.546-9.136 0-2.794 1.544-5.49 4.643-8.088 3.094-2.592 7.339-4.942 12.731-7.039 5.393-2.097 11.58-3.791 18.573-5.092 6.987-1.297 14.377-1.947 22.166-1.947 10.783 0 19.919 1.1 27.407 3.295 7.489 2.2 13.579 5.593 18.273 10.184 4.69 4.597 8.036 10.335 10.034 17.224 1.994 6.89 2.996 14.931 2.996 24.113v56.312zm-38.343-34.746h-4.192c-1.401 0-2.8.104-4.194.301-4.995.402-9.938 1-14.827 1.795-4.896.801-9.24 2.199-13.03 4.195-3.796 1.998-6.89 4.596-9.286 7.787-2.397 3.197-3.595 7.293-3.595 12.283 0 5.592 1.596 10.332 4.792 14.227 3.192 3.895 8.584 5.842 16.176 5.842 3.791 0 7.387-.496 10.784-1.5 3.393-.994 6.388-2.293 8.986-3.891 2.593-1.598 4.643-3.344 6.141-5.244 1.497-1.895 2.246-3.641 2.246-5.24v-30.555zM734.909 141.217c3.183-3.791 8.163-7.638 14.93-11.533 6.768-3.894 15.328-5.841 25.681-5.841 7.368 0 14.384 1.249 21.055 3.744 6.664 2.499 12.589 6.544 17.765 12.132 5.177 5.593 9.307 12.983 12.395 22.166 3.085 9.188 4.629 20.473 4.629 33.848 0 15.576-1.794 28.41-5.376 38.492-3.586 10.088-8.211 18.076-13.882 23.965-5.674 5.891-11.998 10.035-18.962 12.43-6.969 2.396-13.938 3.596-20.903 3.596-5.774 0-10.803-.65-15.079-1.947-4.283-1.301-7.915-2.744-10.901-4.344-2.986-1.596-5.274-3.191-6.865-4.793-1.592-1.596-2.589-2.697-2.986-3.297v73.635h-40.739V128.036c1.002-.196 2.21-.397 3.622-.598 1.209-.196 2.617-.347 4.227-.45 1.609-.098 3.521-.149 5.733-.149 6.637 0 12.272 1.1 16.9 3.295 4.627 2.2 7.549 5.892 8.756 11.083zm53.919 55.414c0-5.99-.497-11.578-1.489-16.773-.992-5.19-2.63-9.684-4.914-13.479-2.284-3.792-5.365-6.74-9.235-8.838-3.876-2.096-8.588-3.143-14.145-3.143-8.339 0-14.147 1.6-17.425 4.791-3.275 3.197-4.913 6.694-4.913 10.485v63.504c1.586 1.6 4.412 3.494 8.484 5.691 4.073 2.199 8.785 3.293 14.149 3.293 10.128 0 17.574-3.99 22.34-11.98 4.766-7.986 7.148-19.172 7.148-33.551zM862.806 248.155c-1.4-3.992-2.298-8.188-2.696-12.582-.402-4.391-.599-8.783-.599-13.182V83.404c1.395-.196 2.893-.397 4.493-.599 1.393-.196 2.892-.345 4.492-.449 1.597-.098 3.193-.149 4.792-.149 3.193 0 6.391.3 9.587.898 3.191.6 6.088 1.798 8.688 3.594 2.593 1.797 4.689 4.246 6.289 7.339 1.597 3.098 2.396 7.143 2.396 12.131v21.267h41.938v30.256h-41.938v63.877c0 13.93 5.691 20.893 17.075 20.893 2.795 0 5.438-.447 7.938-1.348 2.495-.898 4.741-1.895 6.74-2.994 1.995-1.098 3.744-2.246 5.242-3.445 1.498-1.199 2.546-2.096 3.144-2.695 2.996 4.396 5.289 8.201 6.89 11.412 1.596 3.215 2.396 6.232 2.396 9.051 0 2.623-1.046 5.195-3.145 7.713s-5.046 4.84-8.838 6.955c-3.794 2.115-8.385 3.828-13.778 5.139-5.391 1.311-11.285 1.967-17.673 1.967-12.385 0-22.018-2.398-28.907-7.189-6.889-4.795-11.734-11.086-14.526-18.873zM1045.362 244.26c5.008 0 9.417-.547 13.228-1.648 3.805-1.094 7.211-2.443 10.218-4.041 3.004-1.596 5.612-3.344 7.817-5.242 2.203-1.896 4.206-3.643 6.014-5.244 2.401 2.994 4.905 6.842 7.512 11.531 2.604 4.697 3.908 8.539 3.908 11.533 0 4.395-2.499 8.389-7.487 11.983-4.194 3.197-10.14 5.943-17.823 8.236-7.691 2.295-16.729 3.445-27.109 3.445-9.391 0-18.625-1.197-27.708-3.594-9.088-2.395-17.178-6.59-24.263-12.582-7.092-5.988-12.834-14.025-17.226-24.111-4.393-10.084-6.589-22.812-6.589-38.193 0-12.582 1.948-23.411 5.839-32.5 3.896-9.085 9.086-16.624 15.581-22.615 6.485-5.991 13.824-10.381 22.014-13.181 8.186-2.793 16.575-4.193 25.163-4.193 11.182 0 20.667 1.751 28.455 5.242 7.79 3.496 14.126 8.19 19.022 14.079 4.89 5.891 8.434 12.631 10.633 20.219 2.194 7.591 3.295 15.576 3.295 23.963v4.193c0 1.602-.051 3.295-.15 5.092-.102 1.799-.2 3.549-.298 5.242-.104 1.701-.254 3.047-.448 4.045h-88.368c.801 10.984 4.207 20.119 10.218 27.41 6.007 7.291 15.526 10.931 28.552 10.931zm13.65-60.808c0-9.585-1.86-17.373-5.575-23.364-3.716-5.99-10.397-8.987-20.032-8.987-8.239 0-14.815 2.847-19.734 8.538-4.924 5.692-7.379 13.629-7.379 23.812h52.72zM1166.75 141.974c1.196-1.782 2.793-3.762 4.792-5.944 1.994-2.18 4.442-4.161 7.339-5.943 2.893-1.783 6.089-3.272 9.586-4.46 3.49-1.189 7.236-1.783 11.234-1.783 2.395 0 4.942.201 7.637.594 2.696.398 5.19 1.142 7.487 2.228 2.295 1.091 4.145 2.574 5.543 4.456 1.395 1.882 2.097 4.208 2.097 6.979 0 4.357-1.101 9.361-3.295 15.01-2.2 5.654-4.393 10.475-6.589 14.467-3.399-2.795-6.793-4.942-10.186-6.44-3.397-1.497-7.391-2.247-11.982-2.247-6.191 0-11.382 1.803-15.574 5.406-4.197 3.604-6.293 7.91-6.293 12.917v96.969h-40.736V128.036c.996-.196 2.194-.397 3.593-.598 1.198-.196 2.595-.347 4.194-.45 1.597-.098 3.492-.149 5.691-.149 6.389 0 11.93 1.239 16.625 3.712 4.689 2.47 7.639 6.28 8.837 11.423zM1282.573 141.974c1.198-1.782 2.794-3.762 4.793-5.944 1.994-2.18 4.442-4.161 7.339-5.943 2.893-1.783 6.088-3.272 9.585-4.46 3.492-1.189 7.236-1.783 11.233-1.783 2.395 0 4.941.201 7.637.594 2.695.398 5.191 1.142 7.489 2.228 2.295 1.091 4.141 2.574 5.544 4.456 1.394 1.882 2.096 4.208 2.096 6.979 0 4.357-1.102 9.361-3.295 15.01-2.202 5.654-4.396 10.475-6.591 14.467-3.396-2.795-6.793-4.942-10.185-6.44-3.396-1.497-7.39-2.247-11.981-2.247-6.191 0-11.383 1.803-15.576 5.406-4.194 3.604-6.29 7.91-6.29 12.917v96.969h-40.738V128.036c.997-.196 2.195-.397 3.595-.598 1.198-.196 2.595-.347 4.193-.45 1.596-.098 3.491-.149 5.69-.149 6.391 0 11.932 1.239 16.624 3.712 4.69 2.47 7.638 6.28 8.838 11.423zM1476.979 234.973c0 15.777 2.295 27.26 6.89 34.449-3.595 1.395-6.941 2.395-10.034 2.994-3.098.6-6.342.898-9.735.898-7.191 0-12.633-1.398-16.325-4.193-3.699-2.793-6.043-6.787-7.041-11.982-4.393 4.598-10.184 8.49-17.373 11.686-7.188 3.189-15.979 4.791-26.359 4.791-5.393 0-10.783-.748-16.177-2.236-5.391-1.5-10.288-3.934-14.677-7.314-4.395-3.387-7.989-7.916-10.784-13.59-2.798-5.674-4.192-12.59-4.192-20.75 0-10.152 2.441-18.416 7.339-24.783 4.89-6.373 11.032-11.398 18.422-15.082 7.385-3.68 15.373-6.213 23.964-7.61 8.582-1.395 16.474-2.288 23.663-2.691 2.397-.197 4.741-.3 7.041-.3h6.439v-5.452c0-7.676-2.051-13.129-6.142-16.358-4.097-3.23-10.736-4.849-19.92-4.849-8.587 0-16.225 1.399-22.914 4.193-6.693 2.799-13.231 5.991-19.621 9.586-2.797-3.394-5.047-7.137-6.74-11.233-1.697-4.09-2.545-7.137-2.545-9.136 0-2.794 1.544-5.49 4.643-8.088 3.094-2.592 7.339-4.942 12.73-7.039 5.393-2.097 11.58-3.791 18.571-5.092 6.989-1.297 14.379-1.947 22.167-1.947 10.783 0 19.92 1.1 27.409 3.295 7.487 2.2 13.577 5.593 18.271 10.184 4.69 4.597 8.035 10.335 10.036 17.224 1.992 6.89 2.994 14.931 2.994 24.113v56.312zm-38.342-34.746h-4.193c-1.4 0-2.799.104-4.193.301-4.993.402-9.938 1-14.828 1.795-4.896.801-9.238 2.199-13.03 4.195-3.795 1.998-6.89 4.596-9.286 7.787-2.396 3.197-3.595 7.293-3.595 12.283 0 5.592 1.597 10.332 4.793 14.227 3.192 3.895 8.586 5.842 16.176 5.842 3.792 0 7.387-.496 10.784-1.5 3.394-.994 6.388-2.293 8.986-3.891 2.591-1.598 4.644-3.344 6.14-5.244 1.498-1.895 2.247-3.641 2.247-5.24v-30.555z"></path>
                    </g>
                  </svg>
                  {/* End Star */}
                </div>
              </div>
              {/* End Review */}
              {/* Review */}
              <div className="py-5">
                <div className="flex space-x-1">
                  <svg
                    className="size-4 text-gray-800"
                    width={51}
                    height={51}
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="size-4 text-gray-800"
                    width={51}
                    height={51}
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="size-4 text-gray-800"
                    width={51}
                    height={51}
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="size-4 text-gray-800"
                    width={51}
                    height={51}
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="size-4 text-gray-800"
                    width={51}
                    height={51}
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z"
                      fill="transparent"
                    />
                    <path
                      d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="mt-3 text-sm text-gray-800">
                  <span className="font-bold">4.5</span> /5 - from 4.5k reviews
                </p>
                <div className="mt-5">
                  {/* Star */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 711.29 731.26"
                    className="w-8 h-auto text-textPrimary"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: ".cls-1{fill:#ff492c;}",
                        }}
                      />
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          className="cls-1"
                          d="M501.22,521c26.9,46.68,53.5,92.83,80.08,138.93-117.7,90.11-300.82,101-436.38-2.77C-11.08,537.65-36.72,333.73,46.8,186.94,142.86,18.1,322.62-19.24,438.36,8.14c-3.13,6.8-72.45,150.61-72.45,150.61s-5.48.36-8.58.42c-34.21,1.45-59.69,9.41-87,23.53A206.93,206.93,0,0,0,160.49,342.46a201.71,201.71,0,0,0,13.68,100.29c11,26.82,26.56,50.64,47.42,70.75,32,30.88,70.08,50,114.22,56.33,41.8,6,82,.06,119.67-18.87,14.13-7.09,26.15-14.92,40.2-25.66C497.47,524.14,499.06,522.67,501.22,521Z"
                        />
                        <path
                          className="cls-1"
                          d="M501.48,111.61c-6.83-6.72-13.16-12.92-19.46-19.16-3.76-3.72-7.38-7.59-11.23-11.22-1.38-1.31-3-3.1-3-3.1s1.31-2.78,1.87-3.92c7.37-14.79,18.92-25.6,32.62-34.2A90.65,90.65,0,0,1,553,26c22.93.45,44.25,6.16,62.24,21.54,13.28,11.35,20.09,25.75,21.29,42.94,2,29-10,51.21-33.83,66.71-14,9.12-29.1,16.17-44.24,24.52-8.35,4.61-15.49,8.66-23.65,17-7.18,8.37-7.53,16.26-7.53,16.26l108.47-.14,0,48.31H468.32s0-3.3,0-4.67c-.64-23.74,2.13-46.08,13-67.64,10-19.78,25.54-34.26,44.21-45.41,14.38-8.59,29.52-15.9,43.93-24.45,8.89-5.27,15.17-13,15.12-24.21,0-9.62-7-18.17-17-20.84C544,69.56,520,79.71,507.52,101.29,505.7,104.44,503.84,107.57,501.48,111.61Z"
                        />
                        <polygon
                          className="cls-1"
                          points="711.29 469.65 619.88 311.79 438.99 311.79 346.99 471.28 529.21 471.28 619.13 628.39 711.29 469.65"
                        />
                      </g>
                    </g>
                  </svg>
                  {/* End Star */}
                </div>
              </div>
              {/* End Review */}
            </div>
            {/* End Review */}
          </div>
          {/* End Col */}
          <div className="relative ms-4">
            <Image
              className="w-full rounded-md"
              src="/images/shopify-store-setup.png"
              alt="Image Description"
              width={2183}
              height={1731}
              loading="eager"
              placeholder="blur"
              blurDataURL="/images/shopify-store-setup.png"
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>

      <Slide>
        <section className="bg-white py-[24px]">
          <div className="mx-auto px-4 max-w-7xl xl:max-w-screen-2xl">
            <div className="border-b border-stroke text-center">
              <h2 className="mb-6 text-3xl lg:text-4xl font-semibold text-textPrimary">
                Shopify Store Setup
              </h2>
              <p className="mb-6 text-md font-medium text-textSecondary max-w-3xl mx-auto">
                Whether you already have a shopify store and looking for
                upgrading it or you are just starting over your shopify journey,
                we can help you in any situation to reach your goals.
              </p>
            </div>

            <div className="my-6">
              <p className="text-textSecondary">
                We have helped number of clients in their shopify journey to
                help and grow their shopify storefronts. If you are dropshipping
                or if you are a large scale business with lots of data and
                customization, we always got your back to help you grow in your
                shopify journey.We can also help migrate your shopify store from
                other platforms like wordpress, magento or bigcommerce. If you
                have more than one store and would like to migrate the store
                data easily to the another store, we also have the in house team
                who can handle this. Below are some of our superpowers that can
                help you reach your goals.
              </p>
            </div>

            <div className="px-4 py-10 lg:py-14 mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
                {/* Card */}
                <div className="size-full bg-white shadow-lg rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-bgInformative/90">
                      <svg
                        className="flex-shrink-0 size-6 text-brandPrimary"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="13.5" cy="6.5" r=".5" />
                        <circle cx="17.5" cy="10.5" r=".5" />
                        <circle cx="8.5" cy="7.5" r=".5" />
                        <circle cx="6.5" cy="12.5" r=".5" />
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                      </svg>
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block text-lg font-semibold text-gray-800">
                        Build your Shopify Store
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Starting from scratch to setup everything including
                    products, collections and all the store settings that is
                    needed to keep your store up and running.
                  </p>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="size-full bg-white shadow-lg rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100">
                      <svg
                        className="flex-shrink-0 size-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 3h20" />
                        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                        <path d="m7 21 5-5 5 5" />
                      </svg>
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block text-lg font-semibold text-gray-800">
                        Shopify Store Migration
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Want to get started on shopify ? worried about migrating
                    your store data ? We help clients migrate data to another
                    store easily from all major platforms.
                  </p>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="size-full bg-white shadow-lg rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100">
                      <svg
                        className="flex-shrink-0 size-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                        <path d="M2 7h20" />
                        <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
                      </svg>
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block text-lg font-semibold text-gray-800">
                        Products Setup and Migration
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    We can also help you setup custom data for your products
                    that were present in the other ecommerce platforms and help
                    you can manage them easily right from the shopify admin. No
                    techincal skills required.
                  </p>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="size-full bg-white shadow-lg rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100">
                      <svg
                        className="flex-shrink-0 size-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                        <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                        <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                        <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                      </svg>
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block text-lg font-semibold text-gray-800">
                        Integrating with ERPs and more
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Whether you want to develop a custom solution for your
                    business operations or just wanted to integrate Shopify with
                    your existing ERP, we have got you covered. We cover major
                    ERP integrations in market.
                  </p>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="size-full bg-white shadow-lg rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100">
                      <svg
                        className="flex-shrink-0 size-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
                        <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
                        <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
                      </svg>
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block text-lg font-semibold text-gray-800">
                        Shipping, fulfillment and payments
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Setting up custom shipping options or integrating the custom
                    payment options at checkout is easier than ever with new
                    shopify updates. We can help you setup custom shipping and
                    payment options.
                  </p>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="size-full bg-white shadow-lg rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100">
                      <svg
                        className="flex-shrink-0 size-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
                        <rect x={3} y={14} width={7} height={7} rx={1} />
                        <circle cx="17.5" cy="17.5" r="3.5" />
                      </svg>
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block text-lg font-semibold text-gray-800">
                        Store Analysis and Improvements
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    We also analyze your store and suggest you the best ways to
                    improve it to take best benefit of what shopify has to
                    offer. We can also then help in setting up that features.
                  </p>
                </div>
                {/* End Card */}
              </div>
            </div>
          </div>
        </section>
      </Slide>
     
       <Slide delay={0.14}>
          <SupportSection />
       </Slide>

       <Slide delay={0.21}>
         <FeaturedBlogs categoryName="Featured" />
       </Slide>

       <Slide delay={0.28}>
         <GetInTouch />
       </Slide>
    
      
    </main>
  );
}
