import React from "react";
import Link from "next/link";
import { socialLinks } from "@/src/data/data";

const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <Link
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:scale-110 transition"
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;

// import React from "react";
// import { socialLinks } from "../data/data";

// const SocialIcons = () => {
//   return (
//     <div className="flex gap-2 border border-neutral-800 max-w-max p-1 rounded-full items-center">
//       {socialLinks.map((item, index) => {
//         const Icon = item.icon;

//         return (
//           <a
//             key={index}
//             href={item.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={item.name}
//             className={`w-10 h-10 rounded-full flex items-center justify-center aspect-square text-white transition-all duration-300 hover:scale-110 ${item.color}`}
//           >
//             <Icon size={18} />
//           </a>
//         );
//       })}
//     </div>
//   );
// };

// export default SocialIcons;