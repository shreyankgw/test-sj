import Image from "next/image";
import Link from "next/link";
import { Slide } from "../../ui/animation/Slide";
import  GetInTouch  from "../../ui/components/common/GetInTouch";

const features = [
  {
    name: 'Built for Performance',
    description:
      'All our themes are built with custom web components that gives speed and performance to your website without you compromising your website needs.',
    icon: <svg width="128" height="128" viewBox="0 0 24 24" className="w-6 h-6 text-white"><path fill="currentColor" d="M9.5 21h-7A2.503 2.503 0 0 1 0 18.5v-16C0 1.122 1.122 0 2.5 0h11C14.878 0 16 1.122 16 2.5v9a.5.5 0 0 1-1 0v-9c0-.827-.673-1.5-1.5-1.5h-11C1.673 1 1 1.673 1 2.5v16c0 .827.673 1.5 1.5 1.5h7a.5.5 0 0 1 0 1z"/><path fill="currentColor" d="M3.5 13a.5.5 0 0 1-.354-.853l2.5-2.5a.497.497 0 0 1 .577-.094l1.678.839 3.245-3.245a.5.5 0 0 1 .707.707l-3.5 3.5a.501.501 0 0 1-.577.094l-1.678-.839-2.245 2.245A.498.498 0 0 1 3.5 13z"/><path  fill="currentColor" d="M11.5 11a.5.5 0 0 1-.5-.5V8H8.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zM14.5 24h-1c-.827 0-1.5-.673-1.5-1.5v-5c0-.827.673-1.5 1.5-1.5h1c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5zm-1-7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-1z"/><path fill="currentColor" d="M21 24h-.76c-2.701 0-4.285-.674-4.988-1.076a.5.5 0 1 1 .496-.868c.497.284 1.93.944 4.492.944H21c.703 0 1.338-.519 1.446-1.181a.621.621 0 0 1 .01-.046c.06-.292.531-3.095.544-3.372A1.41 1.41 0 0 0 21.59 17h-2.75a.5.5 0 0 1-.415-.779c.001-.003.385-.605.385-1.591 0-.998-.401-1.36-.67-1.36-.094.013-.2.155-.2.9 0 1.549-1.542 2.68-2.205 3.094a.5.5 0 0 1-.53-.848c.407-.254 1.735-1.168 1.735-2.246 0-.617 0-1.9 1.2-1.9.804 0 1.67.738 1.67 2.36 0 .553-.095 1.017-.207 1.37h1.987A2.413 2.413 0 0 1 24 18.41c0 .032-.124 2.541-.61 3.563l.044.007C23.246 23.132 22.2 24 21 24z"/></svg>,
  },
  {
    name: 'Accessibility Compliant',
    description:
      'Our theme follows WCAG accessibility guidelines, so that you dont have to worry about making website accessible friendly.',
    icon: <svg width="128" height="128" viewBox="0 0 21.5 21.5" className="w-6 h-6 text-white"><path fill="#fff" fillRule="evenodd" d="M10.75 1.5c-5.11 0-9.25 4.14-9.25 9.25S5.64 20 10.75 20 20 15.86 20 10.75 15.86 1.5 10.75 1.5ZM0 10.75C0 4.81 4.81 0 10.75 0S21.5 4.81 21.5 10.75 16.69 21.5 10.75 21.5 0 16.69 0 10.75Z" className="cls-1"/><path  fill="#fff" fillRule="evenodd" d="M10.75 3.5C9.51 3.5 8.5 4.51 8.5 5.75S9.51 8 10.75 8 13 6.99 13 5.75 11.99 3.5 10.75 3.5Z" className="cls-1"/><path fill="#fff" fillRule="evenodd" d="M5.55 7.56a.745.745 0 1 0-.59 1.37l3.1 1.33.42 3.39-1.44 3.83c-.15.39.05.82.44.97.39.15.82-.05.97-.44l1.32-3.51h1.96l1.32 3.51c.15.39.58.58.97.44a.76.76 0 0 0 .44-.97l-1.44-3.83.42-3.39 3.1-1.33c.38-.16.56-.6.39-.98a.737.737 0 0 0-.98-.39L12.59 9H8.9L5.54 7.56Z" className="cls-1"/></svg>,
  },
  {
    name: 'Mobile First',
    description:
      'We develop for all major devices in mind and make sure our designs are super mobile friendly as 90% of web traffic are from mobile/small screen devices.',
    icon: <svg className="w-6 h-6 text-white" width="128" height="128" viewBox="0 0 24 24"><path fill="#fff" d="M21.5 24h-9a.5.5 0 0 1 0-1h9c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5h-14C6.673 1 6 1.673 6 2.5v2a.5.5 0 0 1-1 0v-2C5 1.122 6.122 0 7.5 0h14C22.878 0 24 1.122 24 2.5v19c0 1.378-1.122 2.5-2.5 2.5z"/><path fill="#fff" d="M7 9H4c-.827 0-1.5-.673-1.5-1.5A.5.5 0 0 0 2 7a.5.5 0 0 1 0-1c.827 0 1.5.673 1.5 1.5A.5.5 0 0 0 4 8h3a.5.5 0 0 0 .5-.5C7.5 6.673 8.173 6 9 6a.5.5 0 0 1 0 1 .5.5 0 0 0-.5.5C8.5 8.327 7.827 9 7 9z"/><path fill="#fff" d="M9 24H2c-1.103 0-2-.897-2-2V8c0-1.103.897-2 2-2h7c1.103 0 2 .897 2 2v14c0 1.103-.897 2-2 2zM2 7c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h7c.551 0 1-.449 1-1V8c0-.551-.449-1-1-1H2z"/><circle cx="14.5" cy="21" r="1"/></svg>,
  },
  {
    name: 'Advanced Design',
    description:
      'We have in house experienced designers who brings world class experience to put into when developing your new theme design.',
    icon: <svg className="w-6 h-6 text-white" width="128" height="128" viewBox="0 0 24 24"><path fill="#fff" d="M10.02 23H2.5A2.502 2.502 0 0 1 0 20.5v-17C0 2.121 1.121 1 2.5 1h19C22.879 1 24 2.121 24 3.5v10.74a.5.5 0 0 1-1 0V3.5c0-.827-.673-1.5-1.5-1.5h-19C1.673 2 1 2.673 1 3.5v17c0 .827.673 1.5 1.5 1.5h7.52a.5.5 0 0 1 0 1z"/><path fill="#fff" d="M23.5 6H.5a.5.5 0 0 1 0-1h23a.5.5 0 0 1 0 1zM18.678 23.994c-.974 0-2.102-.309-3.398-.923-1.444-.686-2.144-.664-2.604-.64-.372.009-.76.028-1.14-.353-.134-.134-.743-.864.453-2.061.597-.597 1.416-.769 2.128-.779l-4.146-4.146a1.46 1.46 0 0 1 1.035-2.489h.001c.388.001.753.152 1.027.427l1.722 1.722a1.461 1.461 0 0 1 1.735-.737 1.46 1.46 0 0 1 2.324-.619c.068-.137.159-.265.273-.379v-.001a1.46 1.46 0 0 1 1.029-.427h.004c.389 0 .753.15 1.027.425l2.699 2.7c1.692 1.692 1.507 4.142-.45 6.106l-.001.001-.022.022-1.117 1.117c-.696.69-1.552 1.034-2.579 1.034zm-5.732-2.569c.546 0 1.385.09 2.762.742 2.983 1.416 4.194.727 4.847.086l1.126-1.126.018-.017c1.191-1.216 1.996-3.136.453-4.68l-2.709-2.708a.448.448 0 0 0-.319-.132h-.001a.458.458 0 0 0-.327.781l.675.675a.498.498 0 0 1 0 .708.5.5 0 0 1-.707 0l-1.575-1.575a.455.455 0 0 0-.645.003.458.458 0 0 0-.003.646l1.125 1.125a.498.498 0 0 1 0 .708.5.5 0 0 1-.707 0l-1.575-1.575a.456.456 0 0 0-.646.004.452.452 0 0 0-.002.643v.001l1.125 1.125a.498.498 0 0 1 0 .708.5.5 0 0 1-.707 0l-1.125-1.125-.002-.002-2.698-2.697a.45.45 0 0 0-.32-.134.459.459 0 0 0-.325.136.458.458 0 0 0-.003.646l5.175 5.175a.5.5 0 0 1-.495.833c-.018-.006-1.811-.518-2.662.331-.387.387-.444.625-.434.679.043.03.051.041.374.027.09-.007.192-.011.307-.011zM3.5 18.34a.5.5 0 0 1-.354-.853l2.02-2.02c.617-.615 1.685-.614 2.298 0 .196.196.516.35.853.031a.497.497 0 0 1 .706.019c.19.2.183.517-.019.706-.595.567-1.646.552-2.247-.049a.64.64 0 0 0-.884 0l-2.02 2.02a.498.498 0 0 1-.353.146z"/><path fill="#fff" d="M10.46 20H4.5c-.827 0-1.5-.673-1.5-1.5v-9C3 8.673 3.673 8 4.5 8h7c.827 0 1.5.673 1.5 1.5v1a.5.5 0 0 1-1 0v-1c0-.275-.225-.5-.5-.5h-7c-.275 0-.5.225-.5.5v9c0 .275.225.5.5.5h5.96a.5.5 0 0 1 0 1z"/></svg>,
  },
  {
    name: 'Built in Analytics/GTM Support',
    description:
      'Say goodbye to your third party agencies for configuring Google analytics, we support this out of the box when you buy theme from us.',
    icon: <svg className="w-6 h-6 text-white" width="128" height="128" viewBox="0 0 24 24"><path fill="#fff" d="M23.5 24H.5a.5.5 0 0 1 0-1h23a.5.5 0 0 1 0 1z"/><path fill="#fff" d="M6.5 24h-5a.5.5 0 0 1-.5-.5V18c0-.551.448-1 1-1h4c.552 0 1 .449 1 1v5.5a.5.5 0 0 1-.5.5zM2 23h4v-5H2v5zM14.5 24h-5a.5.5 0 0 1-.5-.5V12c0-.551.448-1 1-1h4c.552 0 1 .449 1 1v11.5a.5.5 0 0 1-.5.5zM10 23h4V12h-4v11zM22.5 24h-5a.5.5 0 0 1-.5-.5V14c0-.551.448-1 1-1h4c.552 0 1 .449 1 1v9.5a.5.5 0 0 1-.5.5zM18 23h4v-9h-4v9zM2.5 11a.5.5 0 0 1-.354-.853l5-5a.496.496 0 0 1 .475-.132l7.726 1.931 5.8-5.8a.5.5 0 0 1 .707.707l-6 6a.498.498 0 0 1-.475.131l-7.726-1.93-4.8 4.8A.498.498 0 0 1 2.5 11z"/><path fill="#fff" d="M21.5 6a.5.5 0 0 1-.5-.5V2h-3.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5z"/></svg>,
  },
  {
    name: 'Reviews Integration',
    description:
      'Have your product reviews ? Worried about integrating it to your website ? Not anymore, we support all major review platform for our theme integration.',
    icon: <svg className="w-6 h-6 text-white" width="128" height="128" viewBox="0 0 24 24"><path fill="#fff" d="M11.5 22H1.39A1.39 1.39 0 0 1 0 20.61V1.39C0 .623.623 0 1.39 0h11.22C13.377 0 14 .623 14 1.39v9.11a.5.5 0 0 1-1 0V1.39a.39.39 0 0 0-.39-.39H1.39a.39.39 0 0 0-.39.39v19.22c0 .215.175.39.39.39H11.5a.5.5 0 0 1 0 1z"/><path fill="#fff" d="M8.5 3h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zM4.5 20h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM11.5 20h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z"/><path fill="#fff" d="M21.208 24a.496.496 0 0 1-.281-.087L17.5 21.581l-3.427 2.332a.5.5 0 0 1-.765-.536l1.061-4.187-3.192-2.727a.5.5 0 0 1 .296-.879l4.083-.232 1.476-4.024c.145-.395.795-.395.939 0l1.476 4.024 4.083.232a.5.5 0 0 1 .296.879l-3.192 2.727 1.061 4.187a.497.497 0 0 1-.487.623zM17.5 20.477c.099 0 .196.029.281.087l2.618 1.781-.813-3.21a.498.498 0 0 1 .16-.503l2.481-2.119-3.168-.181a.5.5 0 0 1-.441-.327L17.5 12.952l-1.119 3.053a.499.499 0 0 1-.441.327l-3.168.181 2.481 2.119a.496.496 0 0 1 .16.503l-.813 3.21 2.618-1.781a.501.501 0 0 1 .282-.087z"/></svg>,
  },
]

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Slide>
        <section className="relative pt-24 xl:pt-32">
          <div className="mx-auto lg:max-w-7xl xl:max-w-screen-2xl w-full px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
            <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
              <h1 className="text-textPrimary text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold">
                Crafting Finest{" "}
                <span className="bg-brandTertiary/30 inline-block border border-dashed border-brandPrimary px-3">
                  Shopify Themes
                </span>{" "}
                for Your Business.
              </h1>
              <p className="mt-10 text-textSecondary lg:text-lg max-w-2xl lg:max-w-none mx-auto">
                Elevate Your Brand to New Heights with Our Premium E-commerce
                Themes. Unlock the Full Potential of Your Online Store Today!
              </p>
              <div className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap">
                <Link
                  href="/pages/contact"
                  className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-brandPrimary text-white hover:before:bg-brandPrimary before:bg-brandPrimary hover:before:scale-105"
                >
                  <span className="relative">Build Your Theme 👨‍💻</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none bg-gray-50 rounded-3xl">
              <Image
                src={"/images/shopify_themes.png"}
                alt="shopify website mobile mockups"
                width={1920}
                height={1440}
                className="lg:absolute w-full lg:inset-x-0 object-cover lg:h-full"
              />
            </div>
          </div>
        </section>
      </Slide>
      <Slide delay={0.07}>
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl  lg:text-center lg:max-w-none">
          <h2 className="text-base font-semibold leading-7 text-brandPrimary">Accelerate Your Website Launch 🚀</h2>
          <p className="mt-2 text-3xl/snug font-bold text-textPrimary sm:text-4xl/tight lg:text-6xl/tight">
            Everything you need to boost your conversions without any app.
          </p>
          <p className="mt-6 text-lg leading-8 text-textSecondary max-w-3xl mx-auto">
            Our premium crafted shopify theme will offer the best perofrmance along with the amazing sale features that you can't find on any shopify theme. We build for ease of users and customization without paying extra for apps.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-semibold leading-7 text-textPrimary">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-brandPrimary text-white">
                     {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-textSecondary">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
      </Slide>
      <Slide delay={0.14}>
       <GetInTouch />
      </Slide>
    </main>
  );
}