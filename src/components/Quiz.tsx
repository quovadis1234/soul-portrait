import { PAGES } from '../data/questions';
import type { PageData } from '../data/questions';

interface QuizProps {
  currentPage: number;
  totalPages: number;
  values: Record<string, number[]>;
  onPageChange: (delta: number) => void;
  onSliderChange: (dim: string, questionIndex: number, value: number) => void;
  onSubmit: () => void;
}

function getValue(values: Record<string, number[]>, dim: string, questionIndex: number): number {
  const arr = values[dim];
  if (!arr || arr[questionIndex] === undefined) return 3;
  return arr[questionIndex];
}

export function Quiz({
  currentPage,
  totalPages,
  values,
  onPageChange,
  onSliderChange,
  onSubmit,
}: QuizProps) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  const progressPercent = (currentPage / totalPages) * 100;

  return (
    <>
      <div className="progress-container">
        <div className="progress-inner" style={{ width: `${progressPercent}%` }} />
      </div>
      <div id="quizForm">
        {PAGES.map((p, pageIndex) => (
          <div
            key={pageIndex}
            className={`page ${currentPage === pageIndex + 1 ? 'active' : ''}`}
            id={`p${pageIndex + 1}`}
          >
            <h2>{p.title}</h2>
            {p.questions.map((q, qIndex) => (
              <QuestionItem
                key={`${q.dim}-${qIndex}`}
                page={p}
                questionIndex={qIndex}
                value={getValue(values, q.dim, qIndex)}
                onSliderChange={onSliderChange}
              />
            ))}
          </div>
        ))}
        <div className="nav-btns">
          <button
            type="button"
            className="btn-prev"
            onClick={() => onPageChange(-1)}
            style={{ visibility: isFirst ? 'hidden' : 'visible' }}
          >
            回溯
          </button>
          {!isLast ? (
            <button type="button" className="btn-next" onClick={() => onPageChange(1)}>
              探寻
            </button>
          ) : (
            <button type="button" className="btn-submit" onClick={onSubmit}>
              定格画像
            </button>
          )}
        </div>
      </div>
    </>
  );
}

interface QuestionItemProps {
  page: PageData;
  questionIndex: number;
  value: number;
  onSliderChange: (dim: string, questionIndex: number, value: number) => void;
}

function QuestionItem({ page, questionIndex, value, onSliderChange }: QuestionItemProps) {
  const q = page.questions[questionIndex];
  return (
    <div className="question-item">
      <span className="question-text">{q.text}</span>
      <div className="slider-group">
        <span className="slider-hint">{q.left}</span>
        <input
          type="range"
          data-dim={q.dim}
          min={1}
          max={5}
          value={value}
          onChange={(e) => onSliderChange(q.dim, questionIndex, Number(e.target.value))}
        />
        <span className="slider-hint">{q.right}</span>
      </div>
    </div>
  );
}
