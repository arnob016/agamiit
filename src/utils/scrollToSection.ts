
export const scrollToSection = (sectionId: string | string[]): void => {
  // Convert to string if array is passed
  const id = Array.isArray(sectionId) ? sectionId[0] : sectionId;
  
  // Add small delay to ensure DOM is ready
  setTimeout(() => {
    const section = document.getElementById(id);
    
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
