import {LitElement, html, property} from '@polymer/lit-element/lit-element';

class PlanChart extends LitElement {

  @property() mood = '';

  render(){
    return html`<style> .mood { color: green; } </style>
          Web Components are <span class="mood">${this.mood}</span>!`;
  }
}

customElements.define('plan-chart', PlanChart);
