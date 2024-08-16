"use client";
interface ButtonProps {
  content: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  height?: string | number; // added height prop
  width?: string | number; // added width prop
}
export const Button = ({ content, onClick, height, width }: ButtonProps) => {
  return (
    <button
      className="bg-[#3a72ec] hover:bg-blue-700 text-white font-bold py-1.5 px-4 border border-blue-700 rounded"
      style={{
        height: height, // apply height style
        width: width, // apply width style
      }}
      onClick={(event) => onClick?.(event)}
    >
      {content}
    </button>
  );
};