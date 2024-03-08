import Link from "next/link"
export default function GetInTouch(){
    return(
        <section className="py-12">
        <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-50 to-gray-100">
                <div className="absolute right-0 top-0 h-full w-full flex justify-end">
                    <div className="w-24 h-24 overflow-hidden flex rounded-xl relative blur-2xl">
                        <span className="absolute w-12 h-12 top-14 right-14 bg-brandSecondary rounded-md rotate-45" />
                        <span className="absolute w-12 h-12 bottom-14 right-14 bg-brandTertiary rounded-md rotate-45" />
                       
                    </div>
                </div>
                <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
                    <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                        <span className="absolute w-12 h-12 top-1 right-1 bg-brandSecondary rounded-md rotate-45" />
                        <span className="absolute w-12 h-12 bottom-1 right-1 bg-brandTertiary rounded-md rotate-45" />          
                    </div>
                </div>
                <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
                    <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-textPrimary">
                        Launch Tailored <span className="text-transparent bg-clip-text bg-gradient-to-br from-brandPrimary from-25% via-brandSecondary via-50% to-brandTertiary to-90%">Website Development</span> Strategy With Speed.
                    </h1>
                    <p className="text-textSecondary">
                     From conception to launch, we meticulously craft your online presence to ensure it aligns perfectly with your brand's vision and goals, setting the stage for unparalleled growth and engagement.
                    </p>
                    <div className="mx-auto max-w-md sm:max-w-xl flex justify-center">
                        <Link href="/pages/contact" className="outline-none h-12 px-5 rounded-full bg-brandPrimary text-white flex items-center">
                            Launch Your Site 🚀
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}