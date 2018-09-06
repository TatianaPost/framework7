import Framework7 from '../app/app-class';
import { CSSSelector } from '../app/app-class';

namespace Accordion {
  interface AppMethods {
    accordion: {
      /** open specified accordion item */
      open(el : HTMLElement | CSSSelector) : void

      /** close specified accordion item */
      close(el : HTMLElement | CSSSelector) : void

      /** toggle specified accordion item */
      toggle(el : HTMLElement | CSSSelector) : void
    }
  }
  interface AppParams {

  }
  interface AppEvents {
    /** Event will be triggered when accordion content starts its opening animation */
    accordionOpen : (el : HTMLElement | CSSSelector) => void

    /** Event will be triggered after accordion content completes its opening animation */
    accordionOpened : (el : HTMLElement | CSSSelector) => void

    /** Event will be triggered when accordion content starts its closing animation */
    accordionClose : (el : HTMLElement | CSSSelector) => void

    /** Event will be triggered after accordion content completes its closing animation */
    accordionClosed : (el : HTMLElement | CSSSelector) => void
  }
}

export default Accordion;