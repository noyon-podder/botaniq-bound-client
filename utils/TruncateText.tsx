import Link from "next/link";
import { useState } from "react";

interface TruncateTextProps {
  text: string;
  wordLimit?: number; // Default limit is 100 words
}

const TruncateText = ({ text, wordLimit = 100 }: TruncateTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split text into words
  const words = text.trim().split(/\s+/);

  // If text exceeds the word limit, we show the truncated version
  const isTruncated = words.length > wordLimit;
  const truncatedText = words.slice(0, wordLimit).join(" ");

  return (
    <div>
      {isExpanded || !isTruncated ? (
        <span>{text}</span>
      ) : (
        <span>{truncatedText}...</span>
      )}

      {isTruncated && !isExpanded && (
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(true);
          }}
          className="text-blue-600 underline cursor-pointer"
        >
          See more
        </Link>
      )}
    </div>
  );
};

export default TruncateText;
