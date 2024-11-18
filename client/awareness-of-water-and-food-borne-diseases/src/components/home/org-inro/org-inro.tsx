import { Image } from "@nextui-org/image";

const OrgIntro = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden flex justify-center items-center">
      <Image
        src="/promo.png"
        alt="org-intro"
        className="object-cover w-full h-full"
      />
      <div className="absolute bg-black bg-opacity-50 text-white p-4">
        <p className="text-sm md:text-base lg:text-lg">
          في السابع من أكتوبر عام 2023 شنت قوات الاحتلال الإسرائيلية حربًا لم
          يشهد لها التاريخ مثيل على قطاع غزة والضفة الغربية. ونتيجةً لهذا
          العدوان الغاشم، تم تهجير معظم السكان من منازلهم ومن مناطقهم إلى مناطق
          أخرى وتُقدِّر المنظمات الإغاثية أنَّ أكثر من ٩٠ بالمائة من السكان
          تهجروا، لجأ أكثر من نصفهم إلى مراكز إيواء رسمية (مدارس وكالة الغوث
          الدولية وبعض منشآتها، بالإضافة إلى المستشفيات) ومراكز إيواء عشوائية
          أقامها النازحون أنفسهم بما توفر من أدوات وأقمشة. 
        </p>
      </div>
    </div>
  );
};

export default OrgIntro;
