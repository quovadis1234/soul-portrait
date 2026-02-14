interface ResultProps {
  paragraphs: string[];
  onReset: () => void;
}

export function Result({ paragraphs, onReset }: ResultProps) {
  return (
    <>
      <h2 id="charTitle">画像简报</h2>
      <div className="novel-content" id="content">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <button type="button" onClick={onReset} className="btn-reset">
        重塑灵魂
      </button>
    </>
  );
}
