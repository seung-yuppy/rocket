interface ISpeech {
  text: string;
  direction?: "top" | "bottom"
}

const Speech = ({ text, direction = "top" }: ISpeech) => {
  return (
    <div className="relative px-5">
      {direction !== 'bottom' && <div className="arrow-top" />}
      <div className="bg-white border-2 border-black rounded-full p-6 w-64 text-black text-center absolute bottom-2" >
        {text}
      </div>
      {direction === 'bottom' && <div className="arrow-bottom" />}
    </div>
  );
}

export default Speech;