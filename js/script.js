// (1) Importando Modules
// (1a) console.log('Funções do começo do curso até', idem);
// ↓↓  const idem = ' Sessão 5 → "efeitos no dom" ';
import initTabNav from './modules/tabnav.js';
import initAccordionList from './modules/accordionlist.js';
import SmoothScroll from './modules/smoothscroll.js';
import initScrollAnimation from './modules/scrollanimation.js';
// (1b) console.log('A partir daqui importando de' + idem + ' em diante.');
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBTC from './modules/fetchingbtc.js';
// (2) Ativando as Funções importadas

const smoothscroll = new SmoothScroll('[data-menu="smoothScroll"] a[href^="#"]');
smoothscroll.init();
// (2b) console.log('Ativando as Funções antes de' + idem);
initTabNav();
initAccordionList();
initScrollAnimation();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
// (3) console.log('Ativando as Funções da Sessão 6');
initFetchAnimais();
initFetchBTC();
