import Image, { ImageProps } from "next/image";

export default function Banner({ alt, ...props }: ImageProps) {
  return (
    <Image
      width={0}
      height={0}
      className="h-auto w-full px-5"
      sizes="100vw"
      {...props}
      alt={alt}
    />
  );
}
