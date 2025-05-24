
export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  
  if (section) {
    // Add a small delay to ensure proper scrolling after page load
    setTimeout(() => {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }
};
