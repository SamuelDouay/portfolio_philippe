import Router from './Router';

window.onload = () => window.scrollTo(0, 0);

// On initialise le Router en lui passant la ou le contenu des pages doit etre rendu et le menu de notre SPA.
Router.initRouter(
	document.querySelector('#appContainer'),
	document.querySelector('header'),
	document.querySelector('footer')
);

function handleEventLog(e = null) {}

handleEventLog();
window.addEventListener('log', handleEventLog);
