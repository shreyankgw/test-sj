import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
  },
];

const solutions2 = [
  {
    name: "Marketing",
    description: "Speak directly to your customers",
    href: "#",
  },
  {
    name: "Advertisement",
    description: "Your customers' data will be safe and secure",
    href: "#",
  },
]


const callsToAction = [
  { name: "Our Process To Success", href: "#" },
  { name: "Clients", href: "#" },
];

export default function FlyoutMenu() {
  return (
    <Popover className="">
      <Popover.Button className="inline-flex items-center gap-x-1 text-gray-900">
        Services
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2"
        >
          <path
            d="M20.0306 9.53062L12.5306 17.0306C12.461 17.1004 12.3782 17.1557 12.2872 17.1934C12.1961 17.2312 12.0986 17.2506 12 17.2506C11.9014 17.2506 11.8038 17.2312 11.7128 17.1934C11.6217 17.1557 11.539 17.1004 11.4694 17.0306L3.96936 9.53062C3.82863 9.38989 3.74957 9.19902 3.74957 9C3.74957 8.80097 3.82863 8.6101 3.96936 8.46937C4.1101 8.32864 4.30097 8.24958 4.49999 8.24958C4.69901 8.24958 4.88988 8.32864 5.03061 8.46937L12 15.4397L18.9694 8.46937C19.039 8.39969 19.1218 8.34441 19.2128 8.3067C19.3039 8.26899 19.4014 8.24958 19.5 8.24958C19.5985 8.24958 19.6961 8.26899 19.7872 8.3067C19.8782 8.34441 19.9609 8.39969 20.0306 8.46937C20.1003 8.53905 20.1556 8.62178 20.1933 8.71283C20.231 8.80387 20.2504 8.90145 20.2504 9C20.2504 9.09854 20.231 9.19612 20.1933 9.28717C20.1556 9.37821 20.1003 9.46094 20.0306 9.53062Z"
            fill="#1A212B"
          />
        </svg>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white opacity-100 pt-16 translate-y-0 transform px-4 bg-bgSecondary">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto pt-16">
              <div className="">Column 1</div>
              <div className="">Column 1</div>
              <div className="">Column 1</div>
              <div className="">Column 1</div>
            </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
