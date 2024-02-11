import Link from "next/link";
import { PrimaryButtonProps } from "@/app/(app)/lib/definitions";

export default function ButtonPrimary({title, url}: PrimaryButtonProps) {
    return (
        <Link href={url} className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-brandPrimary bg-transparent px-6 font-medium text-textPrimary transition-all duration-100 [box-shadow:5px_5px_rgb(92_23_229)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(92_23_229)]">
            {title}
        </Link>
    );
}