"use client";

import { cn } from "@/lib/utils";
import { Code01 } from "untitledui-js/react";
import { useState, useEffect } from "react";

const SidebarItem = ({ href, title }: { href: string; title: string }) => {
  const [anchor, setAnchor] = useState("");

  useEffect(() => {
    setAnchor(window.location.hash.split("#")[1] || "");

    const handleHashChange = () => {
      setAnchor(window.location.hash.split("#")[1] || "");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const hrefAnchor = href.split("#")[1] || "";

  return (
    <a
      href={href}
      className={cn(
        "h-14 flex border-r min-w-0 desktop:border-r-0 justify-center desktop:justify-start text-sm w-full cursor-pointer font-semibold items-center px-4xl gap-3 text-text-tertiary border-b border-border-secondary",
        anchor === hrefAnchor &&
          "text-utility-blue-light-500 bg-[url(/patterns/slash.svg)] "
      )}
    >
      <Code01 className="size-2xl hidden tablet:block" />
      {title}
    </a>
  );
};
export default SidebarItem;
