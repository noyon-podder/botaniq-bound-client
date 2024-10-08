import Link from "next/link";
import { useState } from "react";

interface TruncateTextProps {
  text: string;
  wordLimit?: number;
  postId: string;
}

const TruncateText = ({ text, wordLimit = 100, postId }: TruncateTextProps) => {
  // Split text into words
  const words = text.trim().split(/\s+/);

  // If text exceeds the word limit, we show the truncated version
  const isTruncated = words.length > wordLimit;
  const truncatedText = words.slice(0, wordLimit).join(" ");

  return (
    <div>
      {!isTruncated ? <span>{text}</span> : <span>{truncatedText}...</span>}

      {isTruncated && (
        <Link
          href={`/post/${postId}`}
          className="text-blue-600 underline cursor-pointer"
        >
          See more
        </Link>
      )}
    </div>
  );
};

export default TruncateText;
