import { ReactNode } from "react";

interface HeroLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export default function HeroLayout({
  leftContent,
  rightContent,
}: HeroLayoutProps) {
  return (
    <section className="bg-[var(--reviva-cream)]">
      <div className="mx-auto max-w-7xl px-6 pt-6 md:pt-0">
        <div className="grid items-center gap-10 lg:gap-16 lg:min-h-[720px] lg:grid-cols-2">
          <div>{leftContent}</div>

          <div className="flex items-center justify-center">
            {rightContent}
          </div>
        </div>
      </div>
    </section>
  );
}