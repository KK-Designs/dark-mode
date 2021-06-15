function changeToDarkMode(settings) {
   var element = document.body;
   element.classList.toggle("dark-mode");
   if (settings && settings.smooth_transition) {
   element.classList.toggle("smooth-transition");
   }
}
