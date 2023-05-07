// page
// result
// max
const PAGE = 'page';
const RESULT = 'result';
const MAX = 'max';

export function initializeLS(maxQuestions) {
  if (getPageFromLS()) return;
  console.log('Local storage is initialized');
  localStorage.setItem(PAGE, '0');
  localStorage.setItem(RESULT, '0');
  localStorage.setItem(MAX, String(maxQuestions));
}

export function getPageFromLS() {
  return localStorage.getItem(PAGE);
}

export function getResultFromLS() {
  return localStorage.getItem(RESULT);
}

export function getMaxResultFromLS() {
  return localStorage.getItem(MAX);
}

export function updatePageInLS(number) {
  localStorage.setItem(PAGE, String(number));
}

export function updateResultInLS() {
  const result = getResultFromLS();
  localStorage.setItem(RESULT, String(+result + 1));
}

export function resetLS() {
  localStorage.clear();
}
