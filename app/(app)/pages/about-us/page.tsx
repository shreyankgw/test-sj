import { Slide } from "../../ui/animation/Slide";
import FeaturedBlogs from "../../ui/components/FeaturedBlogs";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen isolate">
      <Slide>
        <div className="-z-10 isolate relative">
          <div
            className="xl:ml-48 lg:ml-24 -ml-24 -z-10 top-0 absolute right-0 left-1/2 about-transform blur-3xl overflow-hidden"
            aria-hidden="true"
          >
            <div
              className="opacity-30 bg-gradient-to-r from-brandSecondary to-brandTertiary w-[50.0625rem] aspect-[801/1036]"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            ></div>
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl xl:max-w-screen-2xl px-6 pb-32 pt-36 md:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 lg:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-6xl">
                    We’re on a mission to make online shopping better.
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-textSecondary sm:max-w-md lg:max-w-none">
                    We create the solutions that is supported by latest web technologies with 
                    Performance and accessibility in mind. Our User Experience skills makes sure that 
                    users feel ease while shopping and checkout online, resulting in more conversion 
                    for your business. We adjust ourselves according to your needs without having to 
                    forcing you into something that is not what you want. 
                  </p>
                </div>
                <div className="mt-14 flex justify-end sm:justify-start gap-8 sm:-mt-44 sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-50 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-lg ring-1 ring-gray-50"></div>
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-50 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-lg ring-1 ring-gray-50"></div>
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.4&amp;w=396&amp;h=528&amp;q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-50 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-lg ring-1 ring-gray-50"></div>
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=left&amp;w=400&amp;h=528&amp;q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-50 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-lg ring-1 ring-gray-50"></div>
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-50 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-lg ring-1 ring-gray-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide delay={0.1}>
        <div className="mx-auto -mt-12 max-w-7xl xl:max-w-screen-2xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-textPrimary sm:text-4xl">
              Our mission & vision
            </h2>
            <div className="mt-6 flex flex-col gap-x-4 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl text-textSecondary leading-8">
                Our mission is to get the best website built for you so you can achieve your business goals while working on your business and stay worry-free from maintaining/developing the websites.  
                Our vision is to the make solutions that makes a difference. We bring years of design and development experience to the table, and we believe in great communication and honesty 
                at our core. We work not as an agency but as a family 💙.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-textSecondary">
                  <p>
                  The SJ Development was founded for the purpose of helping small businesses to grow and for big businesses to make an impact in the market without paying hefty charges to digital agencies and still not getting the desired results. It Was Founded by me(a.k.a. Shreyank Jadiya) as part of a side hustle into web development projects and became a full-time jobs leading to the success of the projects. We then grew our team across north America to take care of growing workloads and from there we never stopped looking back. Our name might be new in the market but we are the old players in this game who will play a key role in helping your businesses.
                  </p>
                  <p className="mt-10">
                  We are a leading web development firm and e-commerce experts. We breathe Shopify and have vast experience in creating customized storefronts as per business needs. You might be wondering, well what is the difference here than agency? We are not an agency, we are your employees who work in accordance with you as per your timelines and give the best possible results, so your business can achieve new heights.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 xl:w-80 space-y-8 text-base">
                  <div className="flex flex-col-reverse gap-y-8">
                    <dt className="text-base text-textSecondary leading-7">
                      Increased Conversions in last year
                    </dt>
                    <dd className="text-5xl font-bold tracking-tight text-textPrimary">
                      10+ million
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-8">
                    <dt className="text-base text-textSecondary leading-7">
                      Custom Solutions Deployed
                    </dt>
                    <dd className="text-5xl font-bold tracking-tight text-textPrimary">
                      500+
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-8">
                    <dt className="text-base text-textSecondary leading-7">
                      Best User Experience Ratings 
                    </dt>
                    <dd className="text-5xl font-bold tracking-tight text-textPrimary">
                      100+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide delay={0.2}>
        <div className="mt-32 sm:mt-40 xl:mx-auto lg:max-w-7xl xl:max-w-screen-2xl xl:px-8">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
            alt=""
            className="aspect-[5/2] w-full object-cover rounded-3xl"
          />
        </div>
      </Slide>
      <Slide delay={0.3}>
        <div className="mx-auto mt-32 max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8 sm:mt-40">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-textPrimary sm:text-4xl">
              Our values
            </h2>
            <p className="mt-6 text-lg leading-8 text-textSecondary">
              We work as close-knit family and have strong values that supports our growth and makes us the best for what we do.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="font-semibold text-textPrimary">We 💙 What we do</dt>
              <dd className="mt-1 text-textSecondary">
                A small team where everyone enjoys their passion. We are not bound by
                boundaries as in a desginer can not learn coding or vice-versa. We help
                each other by learning and improving
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">
                Client First
              </dt>
              <dd className="mt-1 text-textSecondary">
                Our client is our top-most priority. We make sure we communicate well with 
                all our clients by making sure their questions are answered. We do not upsell us or any other brand
                but we give recommendations to what you can do best in any situation.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">
                Learning with Fun
              </dt>
              <dd className="mt-1 text-textSecondary">
                We believe in learning with fun as with learning comes growth and one should keep themselves updated with the latest
                knowledge. Our Hackathons are fun with lots of new learnings.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">Be supportive</dt>
              <dd className="mt-1 text-textSecondary">
                Supporting each other is the best thing we do, as we know everyone has their own 
                family and outside work life. We support our small family by making sure we understand 
                everyone's life situations.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">
                Communication is the key
              </dt>
              <dd className="mt-1 text-textSecondary">
                We believe in communication very strongly as poor communication leads to project delays and potential market loss to big brands. 
                We work in sprints on all of our projects to make sure we cover everything while directly communicating all status updates with you.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">Honesty</dt>
              <dd className="mt-1 text-textSecondary">
                We belive Honesty can bring great results. We provide all information upfront without hiding important stuff so that it saves lot of effort/time and money
                for our clients. 
              </dd>
            </div>
          </dl>
        </div>
      </Slide>
      <Slide delay={0.4}>
        <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2  overflow-hidden flex about-mask">
            <svg
              className="h-[40rem] w-[80rem] flex-none stroke-gray-100"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width="200"
                  height="200"
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-[#f9fafb]">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  strokeWidth="0"
                ></path>
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              ></rect>
            </svg>
          </div>
          <div className="mx-auto max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8">
            <h2 className="text-center font-semibold text-textPrimary text-lg leading-8">
              Working with the ecommerce world’s most innovative teams
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
                src="/brands/algolia_svg.svg"
                alt="Algolia Logo"
                width="120"
                height="27"
              />
              <img
                className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
                src="/brands/gorgias_svg.svg"
                alt="Gorgias Logo"
                width="119"
                height="27"
              />
              <img
                className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
                src="/brands/shopify_plus_svg.svg"
                alt="Shopify Plus Logo"
                width="132"
                height="27"
              />
              <img
                className="col-span-2 max-h-8 w-full object-contain lg:col-span-1 sm:col-start-2"
                src="/brands/klaviyo_svg.svg"
                alt="klaviyo Logo"
                width="120"
                height="36"
              />
              <img
                className="col-span-2 max-h-8 w-full object-contain lg:col-span-1 col-start-2 sm:col-start-auto"
                src="/brands/recharge_svg.svg"
                alt="recharge logo"
                width="159"
                height="39"
              />
            </div>
          </div>
        </div>
      </Slide>

      <Slide delay={0.5}>
        <div className="mx-auto mt-32 max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8 sm:mt-40">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-textPrimary sm:text-4xl">
              We approach the ecommerce as something that makes a difference and
              adds value to your business.
            </h2>
            <p className="mt-6 text-lg leading-7 text-textSecondary">
              Our hard work on custom ecommerce projects have made us capable enough to handle any complex needs.
              We work in collaboration with you and our partners to ensure that your online store is a success.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:max-w-none lg:w-72 lg:flex-none lg:flex-col lg:items-start bg-bgSecondary">
              <p className="flex-none text-3xl font-bold tracking-tight text-textPrimary">3.4%</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg tracking-tight text-gray-600 font-semibold">Avg. Conversion Rate</p>
                <p className="mt-2 text-base text-textSecondary">
                  Average Conversion rate of all of our clients in 2023
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 sm:flex-row-reverse sm:items-end lg:w-100 lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 bg-bgSecondaryInverse">
              <p className="flex-none text-3xl font-bold tracking-tight text-bgPrimary">$8.4 billion</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg tracking-tight text-bgPrimary font-semibold">
                  We’re proud that our customers have made over $8 billion in
                  total revenue.
                </p>
                <p className="mt-2 text-base text-gray-400">
                  Total number of sales our clients have made last year out of which half of them are around black friday and sale events.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-100 lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28 bg-brandPrimary">
              <p className="flex-none text-3xl font-bold tracking-tight text-bgPrimary">401,093</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg tracking-tight font-semibold text-bgSecondary">Transactions this year</p>
                <p className="mt-2 text-base text-brandTertiary">
                  Huge number of transcations till now in 2024 to start with across all of our clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide delay={0.6}>
        <div className="mx-auto my-32 max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8 sm:my-48">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-textPrimary sm:text-4xl">
              Our Superheros
            </h2>
            <p className="mt-6 text-lg leading-8 text-textSecondary">
             These are some of our superstars who works hard and make your project successful without any hassle.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 lg:mx-0 lg:max-w-none "
          >
            <li>
              <img
                className="mx-auto w-64 h-64 rounded-3xl"
                src="/images/shreyank_profile.jpg"
                alt="Shreyank Jadiya Image"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Shreyank Jadiya
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Founder / Lead Developer
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-64 h-64 rounded-3xl"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Shreya Jadiya
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Project Manager / Administrator
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-64 h-64 rounded-3xl"
                src="/images/matthew_profile.jpg"
                alt="matthew walton profile image"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Matthew Walton
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Full Stack Developer
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-64 h-64 rounded-3xl"
                src="/images/stella_profile.jpg"
                alt="stella profile image"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Stella Cruz
              </h3>
              <p className="text-sm leading-6 text-textSecondary">Lead Designer</p>
            </li>
            <li>
              <img
                className="mx-auto w-64 h-64 rounded-3xl"
                src="/images/muhammad_profile.jpg"
                alt="muhammad profile image"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Muhammad Bilal
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Full Stack Developer
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-64 h-64 rounded-3xl"
                src="/images/nicolas_profile.jpg"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Nicolas Wang
              </h3>
              <p className="text-sm leading-6 text-textSecondary">Junior Desginer</p>
            </li>
            
            
          </ul>
        </div>
      </Slide>
      <Slide delay={0.7}>
        <FeaturedBlogs categoryName="Featured" />
      </Slide>
    </main>
  );
}