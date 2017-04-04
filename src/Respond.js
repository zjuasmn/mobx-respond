import {Atom, autorun, computed, extendObservable, observable} from "mobx";
import defaultConfig from "./config";

export default class Respond {
  atom;
  @observable _height;
  @observable _width;
  
  update = (e) => {
    const elm = e.target.document.documentElement;
    this._width = elm.clientWidth;
    this._height = elm.clientHeight;
  };
  
  @computed get height() {
    this.atom.reportObserved();
    return this._height;
  }
  
  @computed get width() {
    this.atom.reportObserved();
    return this._width;
  }
  
  constructor(config = defaultConfig) {
    this.atom = new Atom("Respond",
      () => {
        this.update({target: window});
        window.addEventListener('resize', this.update);
      },
      () => {
        window.removeEventListener('resize', this.update);
      }
    );
    
    for (let prop in config) {
      extendObservable(this, {
        [prop]: computed(() => {
          this.atom.reportObserved();
          let [minW, maxW, minH, maxH] = config[prop];
          return !(
            minW && this.width < minW
            || maxW && this.width > maxW
            || minH && this.height < minH
            || maxH && this.height > maxH
          );
        })
      });
    }
  }
}