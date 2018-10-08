import React, {Component, Fragment} from 'react';
import '../styles/App.css';
import Field from './Field'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  onFieldClick = () => {
    this.setState({counter: this.state.counter + 1});
    console.log(this.state.counter);
  }


  render() {
    const fields = ["poproszę właściciela", "brudne gary", "stołówka", "płacz", "makijaż typu białe usta", "właściciel się tłumaczy że to nie jego wina", "Magda pije alkohol", "trujecie ludzi", "awantura lub kłótnia", "gdzie jest regionalne jedzenie", "czemu się na tym nie znacie", "Magda piszczy", "image placeholder", "syf na kuchni lub na sali",  "lustro na ścianie", "dziwne zabawy", "bez smaku", "wypluwa jedzenie", "Magda robi fikołka na schodach", "logo Prymat", "gruba kurtka + trampki", "rzut garami albo jedzeniem", "pizza kebab", "mrożonki na kuchni", "sama chemia"];
    return (
        <Fragment>
          <div className="bingo-container">
            {fields.map((item, index) =>  {return <Field index={index} content={item} ifFieldClicked={this.onFieldClick}/>})}
          </div>
          <div className='checked-counter'>{this.state.counter} na 24</div>
        </Fragment>
    );
  }
}

export default App;
