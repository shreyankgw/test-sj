import Link from "next/link";
import Image from "next/image";
 
const FooterItem = ({ text, link }: { text: string, link: string }) => {
return (
    <li>
        <Link href={link} className="duration-200 hover:text-blue-600 dark:hover:text-blue-500">
            {text}
        </Link>
    </li>
)
}
 
const FooterBlockItem = ({ title, items }: {title: string, items: {id: number, text: string, link: string}[]}) => {
return (
    <div className="space-y-6">
        <h1 className="text-lg font-semibold text-textPrimary">{title}</h1>
        <ul className="space-y-3">
            {
                items.map(item =>(
                    <FooterItem key={item.id} {...item}/>
                ))
            }
        </ul>
    </div>
)
}
 
const footerBlocks = [
{
    id: 1,
    title: "Company",
    items: [
        {
            id: 1,
            text: "About",
            link: "#"
        },
        {
            id: 2,
            text: "Services",
            link: "#"
        },
        {
            id: 3,
            text: "Work",
            link: "#"
        },
        {
            id: 4,
            text: "Pricing",
            link: "#"
        },
        {
            id: 5,
            text: "Contact",
            link: "#"
        },
    ]
},
{
    id: 2,
    title: "Ressources",
    items: [
        {
            id: 1,
            text: "Blogs",
            link: "/posts"
        },
        {
            id: 2,
            text: "Privacy",
            link: "#"
        },
        {
            id: 3,
            text: "Terms",
            link: "#"
        },
        {
            id: 4,
            text: "FAQ",
            link: "#"
        },
    ]
},
]
 
 
const FooterBlock = () => {
return (
    <footer className="bg-bgSecondary text-textSecondary">
        <div className="lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 py-20">
            <div className="space-y-6 col-span-2">
                <Link href="/" className="flex items-center gap-x-2 text-3xl font-semibold text-textPrimary">
                <div className="flex items-center -space-x-3 font-semibold">
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={256}
                  height={256}
                  className="h-10 w-full"
                />
              </div>
              EssDeeJay
                </Link>
                <p className="max-w-lg">
                We are a nimble team of designers and developers based in canada that offers the web development services in Shopify, Wordpress and Static pages.
                </p>
            </div>
 
            {
                footerBlocks.map(footerBlock=>(
                    <FooterBlockItem key={footerBlock.id} {...footerBlock}/>
                ))
            }
 
            <div className="space-y-6 col-span-2">
                <h1 className="text-lg font-semibold text-textPrimary">Subscribe to our latest releases. No spam !</h1>
                <form className="w-full max-w-2xl flex flex-col xl:flex-row gap-3">
                    <input type="email" placeholder="hello@gmail.com" className="w-full sm:w-max px-5 py-2.5 rounded-full outline-none flex-1 bg-bgOverlay bg-opacity-40 focus:ring-1 focus:ring-textPrimary focus:text-textPrimary" />
                    <button className="outline-none w-full py-2.5 px-5 sm:w-max bg-brandPrimary text-white rounded-full flex items-center justify-center">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        <div className="lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-gray-200 dark:border-t-gray-800 text-gray-700 dark:text-gray-300">
                <div className="flex text-center sm:text-left sm:min-w-max">
                    <p> ©2024 The SJ Development. All rights reserved.</p>
                </div>
                <div className="flex justify-center sm:justify-end w-full gap-3">
                    <a href="#" aria-label="social link" rel="noreferer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="social link" rel="noreferer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
 
)
}
 
export default FooterBlock;