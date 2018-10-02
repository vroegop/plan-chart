import {html, LitElement, property} from '@polymer/lit-element/lit-element';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

/**
 *
 * @Demo demo/index.html
 */
class PlanChart extends LitElement {
  @property() yearplan: Object = {};

  get styles() {
    return html`
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
    return html`${this.styles}
      <pre><code>${JSON.stringify(this.yearplan, null, 4)}</code></pre>`;
  }
}

customElements.define('plan-chart', PlanChart);
