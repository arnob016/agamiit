
/**
 * Scrolls to a specific section on the page with a smooth animation
 * @param sectionId The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  // Add small delay to ensure DOM is ready
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Scroll to the section with smooth behavior
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // For mobile devices, add focus for better UX
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
      
      // Optionally highlight the section briefly
      const originalBackgroundColor = section.style.backgroundColor;
      section.style.transition = 'background-color 0.8s ease';
      section.style.backgroundColor = 'rgba(219, 234, 254, 0.3)'; // Light blue highlight
      
      setTimeout(() => {
        section.style.backgroundColor = originalBackgroundColor;
      }, 1000);
    }
  }, 100);
};
