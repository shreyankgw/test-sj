import { Slide } from "../../animation/Slide";

type HeadingType = {
    title: string;
    description?: string;
    children?: React.ReactNode;
};

export default function PageHeading({ title, description, children }: HeadingType) {
  return (
    <header className="my-10">
      <Slide className="flex flex-col items-center justify-center">
        <h1 className="font-bold tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem] text-textPrimary">
          {title}
        </h1>
        <p className="text-lg text-textSecondary leading-relaxed">
          {description}
        </p>
        {children}
      </Slide>
    </header>
  );
}