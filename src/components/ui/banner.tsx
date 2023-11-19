import Image from "next/image";

type BaseBannerProps = {
  variant: "base";
  percentage: number;
  text: string;
  image?: never;
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

export default function Banner({
  percentage,
  variant,
  image,
  text,
  textOrientation,
}: BannerProps) {
  return variant === "base" ? (
    <div className="mx-5 flex items-center justify-center gap-9 rounded-md bg-gradient-to-r from-primary to-accent/95 p-5 sm:gap-14">
      <div className="text-white">
        <div className="flex justify-between">
          <div className="text-base font-light">
            <p>up</p>
            <p>to</p>
          </div>

          <p className="text-5xl font-bold">
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
        src="/basket-shopping.png"
        alt="Basket Shopping"
      />
    </div>
  ) : variant === "detailed" ? (
    <div
      className={`mx-5 flex items-center justify-center gap-9 rounded-md bg-gradient-to-r p-5 sm:gap-14 ${
        textOrientation === "right"
          ? "flex-row-reverse from-[#36393C] to-[#36393C]/40"
          : "from-[#36393C]/40 to-[#36393C]"
      }`}
    >
      <div className="text-white">
        <div className="flex justify-between">
          <div className="text-base font-light">
            <p>up</p>
            <p>to</p>
          </div>

          <p className="text-5xl font-bold text-primary">
            {percentage}
            <span className="text-3xl">%</span>
          </p>
        </div>

        <p className="w-full text-end font-bold">off</p>
        <p className="text-base font-light">on {text}</p>
      </div>

      <Image
        width={0}
        height={0}
        className="h-auto w-32 object-contain sm:w-36"
        sizes="100vw"
        priority
        src={image ? image : "/basket-shopping.png"}
        alt={text}
      />
    </div>
  ) : (
    <div>desktop</div>
  );
}
