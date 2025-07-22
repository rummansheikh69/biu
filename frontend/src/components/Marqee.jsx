import { ThreeDMarquee } from "./ui/3d-marquee";

export function Marquee() {
  const images = [
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196067/raw_2_hgzi7w.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196068/raw_5_lov1ei.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196068/raw_6_xxhtbm.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196069/72D31CBB-8BC5-49AE-B1F9-483166C8BEC2_1_kqj2th.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196070/raw_8_qjl0ba.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196070/raw_13_ajprwj.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196070/raw_15_k7nntt.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196070/raw_12_qxcjqh.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196070/raw_14_xatkuq.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196067/catbannernew1_oxfifu.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196071/raw_4_x6ffbs.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196067/raw_2_hgzi7w.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196068/raw_5_lov1ei.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196071/raw_4_x6ffbs.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196067/catbannernew1_oxfifu.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196070/raw_14_xatkuq.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196070/raw_12_qxcjqh.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196070/raw_7_edzlc8.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196071/raw_asi29f.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196067/raw_2_hgzi7w.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196067/catbannernew1_oxfifu.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196070/raw_7_edzlc8.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196069/Untitled_design_-_2025-07-21T210934.512_qkgxj6.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196071/raw_asi29f.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196068/raw_5_lov1ei.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196068/raw_6_xxhtbm.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196068/raw_5_lov1ei.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196070/raw_7_edzlc8.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196071/raw_4_x6ffbs.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196071/raw_asi29f.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196070/raw_7_edzlc8.webp",
  ];
  return (
    <div className="  mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 ">
      <ThreeDMarquee images={images} />
    </div>
  );
}
