export default function Layout({
  children,
  menu,
  content,
}: {
  children: React.ReactNode;
  menu: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <>
      {children}
      {menu}
      {content}
    </>
  );
}
