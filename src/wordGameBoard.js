import { LitElement, css, html } from 'lit';
import './wordTile';

// @feedback I've only stubbed this out
// but most likely you'll have something like
// word-game-board: which checks how the user is doing  
// word-key-entry: an input field, though could be part of the row
// word-key-row: a row of key entries

export class WordGameBoard extends LitElement {
  constructor() {
    super();
    this.word = '';
  }
  static get tag() {
    return 'word-game-board';
  }
  static get properties() {
    return {
      word: { type: String },
      letter: { type: String },
    };
  }

  //   change focus on each letter
  focusChange(e) {}

  render() {
    return html` <word-tile @keyup="${this.focusChange}"></word-tile> `;
  }
}

customElements.define(WordGameBoard.tag, WordGameBoard);