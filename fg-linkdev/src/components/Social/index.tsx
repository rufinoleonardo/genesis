import { ReactNode } from "react";

interface SocialProps {
  children: ReactNode;
  url: string;
}

export const Social = ({ children, url }: SocialProps) => {
  return (
    <div>
      <a href={url} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    </div>
  );
};
