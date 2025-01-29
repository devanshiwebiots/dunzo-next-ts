import { Blockquote } from "@/Data/Uikits/Typography/TypographyData";

export const DynamicBlockQuote = () => {
  return (
    <>
      {Blockquote.map(({ text, name, className }, index) => (
        <div className={`figure text-${className} d-block dark-blockquote`} key={index}>
          <blockquote className="light-card mb-2">
            <p className="mb-0 txt-dark">{text}</p>
            <footer className="blockquote-footer pt-3">{name}</footer>
          </blockquote>
        </div>
      ))}
    </>
  );
};
