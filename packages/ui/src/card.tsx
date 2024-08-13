export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-emerald-300 to-lime-300 p-0.5 shadow-lg">
        <div className="bg-white p-7 rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
}