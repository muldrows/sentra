export function Card({ children }) {
  return <div className="border rounded-md p-4 bg-white shadow">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
