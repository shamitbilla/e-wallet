interface CardProps {
  children: any;
  title: string;
}

function Card({ children, title }: CardProps) {
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
      <p className="font-normal text-gray-700">{children}</p>
    </div>
  );
}

export default Card;