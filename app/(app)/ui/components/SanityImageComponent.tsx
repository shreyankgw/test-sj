import Image from "next/image";
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import { projectId, dataset } from "@/sanity/env";


export default function SanityImageComponent({value}){
  const {width, height} = getImageDimensions(value);

  return (
    <Image src={urlBuilder().image(value).projectId(projectId).dataset(dataset).url()}
           alt={ value.alt || 'image' }
           loading="lazy"
           width={width}
           height={height}
    />
  )
}