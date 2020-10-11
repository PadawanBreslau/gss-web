export const INTRO_TOUR_STATUS = {
  NOT_STARTED: 'not_started',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
};

export const getInitialIntroTourStatus = () => {
  const value = window.localStorage.getItem('intro_tour_completed');

  if (value === 'true') {
    return INTRO_TOUR_STATUS.COMPLETED;
  }

  return INTRO_TOUR_STATUS.NOT_STARTED;
};

export const saveIntroTourStatusCompleted = () => {
  window.localStorage.setItem('intro_tour_completed', 'true');
};
