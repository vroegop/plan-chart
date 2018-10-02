var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, property } from '@polymer/lit-element/lit-element';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
/**
 *
 * @Demo demo/index.html
 */
class PlanChart extends LitElement {
    constructor() {
        super(...arguments);
        this.yearplan = {};
    }
    get styles() {
        return html `
      <style>
        :host {
          --background: #eee;

          background-color: var(--background);
          display:flex;
          justify-content: center;
        }
      </style>`;
    }
    render() {
        return html `${this.styles}
      <pre><code>${JSON.stringify(this.yearplan, null, 4)}</code></pre>`;
    }
}
__decorate([
    property()
], PlanChart.prototype, "yearplan", void 0);
customElements.define('plan-chart', PlanChart);
//# sourceMappingURL=plan-chart.js.map