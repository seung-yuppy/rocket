interface ISpeech {
  text: string;
  direction?: "top" | "bottom"
}

const Speech = ({ text, direction = "top" }: ISpeech) => {
  const arrows = {
    top: 'absolute -top-3 left-20 w-6 h-6 bg-white border-l-2 border-t-2 border-black rotate-45',
    bottom: 'absolute -bottom-3 left-20 w-6 h-6 bg-white border-r-2 border-b-2 border-black rotate-45',
  };

  return (
    <div className="relative px-5">
      {direction !== 'bottom' && <div className={arrows[direction]} />}
      <div className="bg-white border-2 border-black rounded-full p-6 w-64 text-black text-center">
        {text}
      </div>
      {direction === 'bottom' && <div className={arrows[direction]} />}
    </div>
  );
}

export default Speech;