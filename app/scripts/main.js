// init handlers
let layoutHandler = null;
let ApiHandler = null;

const initHandlers = () => {
  layoutHandler = new LayoutHandler();
  ApiHandler = new LpHandler();
};

// Init handlers using jQuery
// (($) => {
//   $(document).ready(() => {
//     initHandlers();
//   });
// })(jQuery);


// Init handlers using Vanilla
document.addEventListener('DOMContentLoaded', () => { initHandlers(); });

