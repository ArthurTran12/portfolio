import Image, { type ImageProps } from "next/image";

/** Ảnh tĩnh từ /public (SVG/PNG export từ Figma). */
export default function Img(props: Omit<ImageProps, "alt"> & { alt?: string }) {
  const { alt = "", ...rest } = props;
  return <Image alt={alt} unoptimized draggable={false} {...rest} />;
}
