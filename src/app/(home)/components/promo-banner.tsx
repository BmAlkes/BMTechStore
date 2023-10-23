import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      {...props}
      height={0}
      width={0}
      alt="Home Banner"
      sizes="100vw"
      className="h-auto w-full p-5"
    />
  );
};

export default PromoBanner;
