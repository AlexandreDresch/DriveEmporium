import Image from "next/image";

type BaseBannerProps = {
  variant: "base";
  percentage: number;
  text: string;
  image?: string;
  textOrientation?: never;
};

type DetailedBannerProps = {
  variant: "detailed";
  percentage: number;
  text: string;
  image: string;
  textOrientation: "left" | "right";
};

type DesktopBannerProps = {
  variant: "desktop";
  percentage: number;
  text: string;
  image?: never;
  textOrientation?: never;
};

type BannerProps = BaseBannerProps | DetailedBannerProps | DesktopBannerProps;

function getGradientClass(variant: string, textOrientation?: string): string {
  if (variant === "base") {
    return "from-primary to-accent/95";
  } else if (variant === "detailed") {
    return textOrientation === "right"
      ? "flex-row-reverse from-[#36393C] to-[#36393C]/40"
      : "from-[#36393C]/40 to-[#36393C]";
  }
  return "";
}

export default function Banner({
  percentage,
  variant,
  image,
  text,
  textOrientation,
}: BannerProps) {
  const gradientClass = getGradientClass(variant, textOrientation);

  return variant === "desktop" ? (
    <div
      className="relative -z-10 mx-5 flex h-[430px] w-full items-center justify-around overflow-hidden rounded-md
    bg-[url('https://images.unsplash.com/photo-1554971628-2b8e8b43891c?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
    bg-cover
    bg-center
    bg-no-repeat 
    before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-primary
    before:to-accent
    before:opacity-90"
    >
      <div className="z-10 flex w-44 flex-col items-center text-4xl font-bold">
        <p>Special</p>
        <p className="rounded-full border-2 border-primary px-3">Offers!</p>
      </div>

      <Image
        width={0}
        height={0}
        className="z-10 h-44 w-44 object-contain"
        sizes="100vw"
        priority
        src="/basket-shopping.png"
        alt="Basket Shopping"
      />

      <div className="z-10 w-44 text-white">
        <div className="flex justify-between gap-5">
          <div className="flex flex-col gap-2 text-xl font-light">
            <p>up</p>
            <p>to</p>
          </div>

          <p className="text-7xl font-bold">
            {percentage}
            <span className="text-5xl">%</span>
          </p>
        </div>

        <p className="w-full text-end text-xl font-bold leading-4">off</p>
        <p className="w-full text-end text-lg font-light">{text}</p>
      </div>
    </div>
  ) : (
    <div
      className={`mx-5 flex w-full items-center justify-around rounded-md bg-gradient-to-r ${gradientClass} p-5`}
    >
      <div className="text-white">
        <div className="flex justify-between">
          <div className="text-base font-light">
            <p>up</p>
            <p>to</p>
          </div>

          <p
            className={`text-5xl font-bold ${
              variant === "detailed" && "text-primary"
            }`}
          >
            {percentage}
            <span className="text-3xl">%</span>
          </p>
        </div>

        <p className="w-full text-end font-bold">off</p>
        <p className="text-base font-light">{text}</p>
      </div>

      <Image
        width={0}
        height={0}
        className="h-32 w-32 object-contain sm:h-36 sm:w-36"
        sizes="100vw"
        priority
        src={image ? image : "/basket-shopping.png"}
        alt={text ? text : "Basket Shopping"}
      />
    </div>
  );
}
