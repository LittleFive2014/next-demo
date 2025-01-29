export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const code = (await params).code;
  return <div>My code: {code}</div>;
}
