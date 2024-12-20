import React from "react";
import { Image } from "@nextui-org/image";
import { IStrapiAttachment } from "collection-types";

interface AttachmentsProps {
  attachments: IStrapiAttachment[];
}

const Attachments: React.FC<AttachmentsProps> = ({ attachments }) => {
  const IMAGE_URL = process.env.IMAGE_URL || "";

  const renderAttachment = (attachment: IStrapiAttachment) => {
    const { url, mime } = attachment.attributes;
    const fullUrl = `${IMAGE_URL}${url}`;

    if (mime.startsWith("image/")) {
      return (
        <Image
          key={attachment.id}
          src={fullUrl}
          alt="المرفق"
          className="w-full h-auto"
          isBlurred
        />
      );
    } else if (mime.startsWith("video/")) {
      return (
        <video key={attachment.id} controls className="w-full h-auto">
          <source src={fullUrl} type={mime} />
          المتصفح الخاص بك لا يدعم عرض هذا الفيديو.
        </video>
      );
    } else {
      return (
        <a
          key={attachment.id}
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          تحميل ملف {mime.split("/")[1]}
        </a>
      );
    }
  };

  return (
    <div className="attachments-container">
      <h2 className="text-xl font-semibold mb-4">المرفقات</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {attachments.length > 0 ? (
          attachments.map((attachment) => renderAttachment(attachment))
        ) : (
          <p>لا توجد مرفقات.</p>
        )}
      </div>
    </div>
  );
};

export default Attachments;
