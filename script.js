window.onload = function () {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
      const progress = bar.getAttribute('data-progress');
      bar.style.width = '0%';
      
      setTimeout(() => {
        bar.style.width = progress + '%';
      }, 200); // Delay to trigger the animation
    });
  };
  