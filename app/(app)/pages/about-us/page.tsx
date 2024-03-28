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
                    We’re changing the way people connect.
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-textSecondary sm:max-w-md lg:max-w-none">
                    Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                    quis cupidatat mollit aute velit. Et labore commodo nulla
                    aliqua proident mollit ullamco exercitation tempor. Sint
                    aliqua anim nulla sunt mollit id pariatur in voluptate
                    cillum. Eu voluptate tempor esse minim amet fugiat veniam
                    occaecat aliqua.
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
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-4 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl text-textSecondary leading-8">
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                  scelerisque eget. Eleifend egestas fringilla sapien.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-textSecondary">
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                  <p className="mt-10">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 xl:w-80 space-y-8 text-base">
                  <div className="flex flex-col-reverse gap-y-8">
                    <dt className="text-base text-textSecondary leading-7">
                      Transactions every 24 hours
                    </dt>
                    <dd className="text-5xl font-bold tracking-tight text-textPrimary">
                      44 million
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-8">
                    <dt className="text-base text-textSecondary leading-7">
                      Assets under holding
                    </dt>
                    <dd className="text-5xl font-bold tracking-tight text-textPrimary">
                      $119 trillion
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-8">
                    <dt className="text-base text-textSecondary leading-7">
                      New users annually
                    </dt>
                    <dd className="text-5xl font-bold tracking-tight text-textPrimary">
                      46,000
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
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="font-semibold text-textPrimary">Be world-class</dt>
              <dd className="mt-1 text-textSecondary">
                Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed
                sint et magnam exercitationem quia. Ullam voluptas nihil vitae
                dicta molestiae et. Aliquid velit porro vero.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">
                Share everything you know
              </dt>
              <dd className="mt-1 text-textSecondary">
                Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime
                adipisci illo id molestiae. Cumque cum ut minus rerum architecto
                magnam consequatur. Quia quaerat minima.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">
                Always learning
              </dt>
              <dd className="mt-1 text-textSecondary">
                Aut repellendus et officiis dolor possimus. Deserunt velit quasi
                sunt fuga error labore quia ipsum. Commodi autem voluptatem nam.
                Quos voluptatem totam.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">Be supportive</dt>
              <dd className="mt-1 text-textSecondary">
                Magnam provident veritatis odit. Vitae eligendi repellat non.
                Eum fugit impedit veritatis ducimus. Non qui aspernatur
                laudantium modi. Praesentium rerum error deserunt harum.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">
                Take responsibility
              </dt>
              <dd className="mt-1 text-textSecondary">
                Sit minus expedita quam in ullam molestiae dignissimos in harum.
                Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus
                laboriosam voluptas perspiciatis error.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">Enjoy downtime</dt>
              <dd className="mt-1 text-textSecondary">
                Ipsa in earum deserunt aut. Quos minus aut animi et soluta.
                Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur
                ut est velit consequatur distinctio.
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
              Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width="158"
                height="48"
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width="158"
                height="48"
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-2"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width="158"
                height="48"
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 col-start-2 sm:col-start-auto"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width="158"
                height="48"
              />
            </div>
          </div>
        </div>
      </Slide>

      <Slide delay={0.5}>
        <div className="mx-auto mt-32 max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8 sm:mt-40">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-textPrimary sm:text-4xl">
              We approach the workplace as something that adds to our lives and
              adds value to world.
            </h2>
            <p className="mt-6 text-lg leading-7 text-textSecondary">
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
              euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
              sit eu in id. Integer vel nibh.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:max-w-none lg:w-72 lg:flex-none lg:flex-col lg:items-start bg-bgSecondary">
              <p className="flex-none text-3xl font-bold tracking-tight text-textPrimary">250k</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg tracking-tight text-gray-600 font-semibold">Users on the platform</p>
                <p className="mt-2 text-base text-textSecondary">
                  Vel labore deleniti veniam consequuntur sunt nobis.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 sm:flex-row-reverse sm:items-end lg:w-100 lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 bg-bgSecondaryInverse">
              <p className="flex-none text-3xl font-bold tracking-tight text-bgPrimary">$8.9 billion</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg tracking-tight text-bgPrimary font-semibold">
                  We’re proud that our customers have made over $8 billion in
                  total revenue.
                </p>
                <p className="mt-2 text-base text-gray-400">
                  Eu duis porta aliquam ornare. Elementum eget magna egestas.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-100 lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28 bg-brandPrimary">
              <p className="flex-none text-3xl font-bold tracking-tight text-bgPrimary">401,093</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg tracking-tight font-semibold text-bgSecondary">Transactions this year</p>
                <p className="mt-2 text-base text-brandTertiary">
                  Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu
                  duis porta aliquam ornare.
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
              Our team
            </h2>
            <p className="mt-6 text-lg leading-8 text-textSecondary">
              Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus
              eos totam in dolorum. Nemo vel facere repellendus ut eos dolores
              similique.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2XL grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 lg:mx-0 lg:max-w-none md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          >
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Michael Foster
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Co-Founder / CTO
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Dries Vincent
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Business Relations
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Lindsay Walton
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Front-end Developer
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Courtney Henry
              </h3>
              <p className="text-sm leading-6 text-textSecondary">Designer</p>
            </li>
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Tom Cook
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Director of Product
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Whitney Francis
              </h3>
              <p className="text-sm leading-6 text-textSecondary">Copywriter</p>
            </li>
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Leonard Krasner
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Senior Designer
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Floyd Miles
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Principal Designer
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Emily Selman
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                VP, User Experience
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Kristin Watson
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                VP, Human Resources
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Emma Dorsey
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Senior Developer
              </p>
            </li>
            <li>
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-textPrimary">
                Alicia Bell
              </h3>
              <p className="text-sm leading-6 text-textSecondary">
                Junior Copywriter
              </p>
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
