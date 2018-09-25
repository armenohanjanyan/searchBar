import React, { Component } from 'react';
import './App.css';
import ImgMediaCards from './cards';
import Check from './check'


let arr = [{id:1, name: 'Marcelo ', team: 'Real', number: 12, image: './assets/m12.jpg', checked: false},
             {id: 2, name: 'Bale ', team: 'Madrid', number: 11, image: './assets/bale.jpg', checked: false},
             {id: 3, name: 'Messi ', team: 'Barca', number: 10, image: './assets/messi.jpg', checked: false},
             {id: 4, name: 'Ronaldo ', team: 'Juve', number: 7, image: './assets/r7.jpg', checked: false},
             {id: 5, name: 'Vinisius jr ', team: 'Real', number: 7, image: './assets/vini.jpg', checked: false},
             {id: 6, name: 'Asensio ', team: 'Real', number: 20, image: './assets/as.jpg', checked: false},
             {id: 7, name: 'Mkhitaryan ', team: 'Arsenal', number: 22, image: './assets/miki.jpg', checked: false},
             {id: 8, name: 'Ronaldo ', team: 'Real', number: 99, image: './assets/ronaldo.jpg', checked: false},
             {id: 9, name: 'Mbapee ', team: 'PSG', number: 29, image: './assets/mba.jpg', checked: false},
             {id: 10, name: 'Neymar ', team: 'PSG', number: 20, image: './assets/neymar.jpg', checked: false}
            ];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      arr,
    }
  }


  changeChecked = (id) => {
    const {arr} = this.state;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr[i].checked = !arr[i].checked;
      }
    }
    this.setState({arr})
  }

  onDeleteCard = () => {
    const {arr} = this.state;

    console.log('aaa', arr)
    this.setState({arr: arr.filter(player => !player.checked)})
  }

  render() {
    const {arr} = this.state;
    return (
      <div style={{marginLeft: "10px"}}>
       Search <input
              value = {this.state.name}
              onChange={e => this.setState({name: e.target.value})}
              className="form-control" />
                  <button className="btn btn-danger" onClick={() => this.onDeleteCard()}>Delete</button>
          <div>
            {arr
            .filter(player => this.state.name ? player.name.match(new RegExp(this.state.name, 'i')) : true)
            .map((player, i) => {
             return (<div className="myDiv" key={i}>
                        <ImgMediaCards i={i} onDeleteCard={() => {
                        arr.splice(i, 1);
                        this.setState({
                           arr
                         });
                        }}
                         img={player.image} name={player.name} team={player.team} number={player.number} checked={player.checked} />
                        <Check
                          id={player.id}
                          checked={player.checked}
                          changeChecked={this.changeChecked}
                        />
                    </div>)
              })}
          </div>
      </div>
    );
  }
}

export default App;
