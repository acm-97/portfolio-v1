export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

export const scrollToHashSection = (
  sectionAbout: any,
  sectionExperience: any,
  sectionWork: any,
  sectionContact: any,
) => {
  if (sectionAbout.current && window.location.hash === '#about') {
    sectionAbout.current.scrollIntoView();
    return;
  }
  if (sectionExperience.current && window.location.hash === '#experience') {
    sectionExperience.current.scrollIntoView();
    return;
  }
  if (sectionWork.current && window.location.hash === '#work') {
    sectionWork.current.scrollIntoView();
    return;
  }
  if (sectionContact.current && window.location.hash === '#contact') {
    sectionContact.current.scrollIntoView();
    return;
  }
  scrollToTop();
};
