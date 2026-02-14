import { useState, useCallback } from 'react';
import { PAGES } from './data/questions';
import { textPool, pickRandom } from './data/textPool';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import './App.css';

const TOTAL_PAGES = PAGES.length;

function getDimScore(values: Record<string, number[]>, dim: string): number {
  const dimValues = values[dim];
  if (!dimValues || dimValues.length === 0) return 3;
  const sum = dimValues.reduce((a, b) => a + b, 0);
  return sum / dimValues.length;
}

function generatePortrait(values: Record<string, number[]>): string[] {
  const E = getDimScore(values, 'E');
  const N = getDimScore(values, 'N');
  const C = getDimScore(values, 'C');
  const O = getDimScore(values, 'O');
  const D = getDimScore(values, 'D');
  const L = getDimScore(values, 'L');

  const paragraphs: string[] = [];

  if (N > 3.8) paragraphs.push(pickRandom(textPool.N_High));
  else if (N < 2.2) paragraphs.push(pickRandom(textPool.N_Low));
  else paragraphs.push(pickRandom(textPool.N_Mid));

  if (E > 3.8) paragraphs.push(pickRandom(textPool.E_High));
  else if (E < 2.2) paragraphs.push(pickRandom(textPool.E_Low));
  else paragraphs.push(pickRandom(textPool.E_Mid));

  if (D > 3.5) paragraphs.push(pickRandom(textPool.Dark_High));
  else if (L > 4) paragraphs.push(pickRandom(textPool.Light_High));
  else paragraphs.push(pickRandom(textPool.Balanced_Moral));

  if (O > 4) paragraphs.push(pickRandom(textPool.Open_High));
  else if (C > 4) paragraphs.push(pickRandom(textPool.Cons_High));
  else paragraphs.push(pickRandom(textPool.Standard_Life));

  return paragraphs;
}

export function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [portraitParagraphs, setPortraitParagraphs] = useState<string[]>([]);
  const [values, setValues] = useState<Record<string, number[]>>(() => {
    const initial: Record<string, number[]> = {};
    for (const page of PAGES) {
      for (const q of page.questions) {
        if (!initial[q.dim]) initial[q.dim] = [];
        initial[q.dim].push(3);
      }
    }
    return initial;
  });

  const handlePageChange = useCallback((delta: number) => {
    setCurrentPage((p) => Math.max(1, Math.min(TOTAL_PAGES, p + delta)));
  }, []);

  const handleSliderChange = useCallback((dim: string, questionIndex: number, value: number) => {
    setValues((prev) => {
      const next = { ...prev };
      if (!next[dim]) next[dim] = [];
      const arr = [...next[dim]];
      arr[questionIndex] = value;
      next[dim] = arr;
      return next;
    });
  }, []);

  const handleSubmit = useCallback(() => {
    const paragraphs = generatePortrait(values);
    setPortraitParagraphs(paragraphs);
    setShowResult(true);
  }, [values]);

  const handleReset = useCallback(() => {
    setShowResult(false);
    setCurrentPage(1);
    setPortraitParagraphs([]);
    const initial: Record<string, number[]> = {};
    for (const page of PAGES) {
      for (const q of page.questions) {
        if (!initial[q.dim]) initial[q.dim] = [];
        initial[q.dim].push(3);
      }
    }
    setValues(initial);
  }, []);

  return (
    <div className="app-wrap">
      <div className="ambient-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="container">
        {showResult ? (
          <Result paragraphs={portraitParagraphs} onReset={handleReset} />
        ) : (
          <Quiz
            currentPage={currentPage}
            totalPages={TOTAL_PAGES}
            values={values}
            onPageChange={handlePageChange}
            onSliderChange={handleSliderChange}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
