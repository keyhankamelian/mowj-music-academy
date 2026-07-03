/**
 * template.tsx remounts on every navigation (unlike layout.tsx), so the
 * `.page-transition` CSS animation replays each time you move between pages,
 * giving a smooth fade-in. See globals.css for the keyframes.
 */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-transition">{children}</div>;
}
