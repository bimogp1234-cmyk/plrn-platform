// Central game configuration for per-level weights and placement defaults
export const DEFAULT_PER_PLACEMENT_POINTS = 50; // fallback per-placement point if question.points not set

// If you want to override an entire game's total weighting, add an entry here
// keyed by gameId (matches the gameId used in saveGameScore calls)
export const GAME_WEIGHTS = {
  // e.g. 'dragdrop': 1000,
};

export function computeRawMaxFromQuestions(questions = []) {
  // If GAME_WEIGHTS has an override for the game it should be applied by caller
  return questions.reduce((acc, q) => acc + (q.points || 0), 0);
}
