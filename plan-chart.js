var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property } from '@polymer/lit-element/lit-element';
class PlanChart extends LitElement {
    constructor() {
        super(...arguments);
        this.mood = '';
    }
    render() {
        return html `<style> .mood { color: #ffffff; } </style>
          Web Components are <span class="mood">${this.mood}</span><button></button>!`;
    }
}
__decorate([
    property()
], PlanChart.prototype, "mood", void 0);
customElements.define('plan-chart', PlanChart);
//# sourceMappingURL=plan-chart.js.map