import View from './view.js';
import previewView from './previewView.js';


class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'No Recipe Found , Please Try Another Query :)';
  _message = '';

   _generateMarkup() {
     return this._data.map(result => previewView.render(result,false)).join('');
   }
}

export default new ResultsView();
