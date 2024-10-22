interface ContentLayoutProps {
  children: React.ReactNode;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="w-full">
      <div className="w-full px-4 pb-8 pt-8 sm:px-8">{children}</div>
    </div>
  );
}
