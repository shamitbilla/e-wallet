"use client";
interface ButtonProps {
  content: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export const Button = ({ content, onClick }: ButtonProps) => {
  return (
    <button className="bg-[#3a72ec] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={(event) => onClick?.(event)}>
        {content}
    </button>
  );
};