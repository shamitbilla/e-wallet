interface ButtonProps{
  content : string,
  height? : number,
  width? : number,
  onClick : (event : any)=>void
}


export const Button = ({ content, onClick, height, width }: ButtonProps) => {
  return (
    <button
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
      className={`bg-[#3a72ec] hover:bg-blue-700 text-white font-bold py-1.5 px-4 border border-blue-700 rounded`}
      onClick={(event) => onClick?.(event)}
    >
      {content}
    </button>
  );
};