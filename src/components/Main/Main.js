import React from "react";
import "./Main.css";
class Main extends React.Component {
constructor(){
    super()

    this.state = {
        error: null,
        items: [],
        current: 'Пока ничего не выбрано'
    }
}
    componentDidMount = () => { 
        fetch("https://city-mobil.ru/api/cars")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                items: result.cars
              });
            },
            (error) => {
              this.setState({
                error: error
              });
              
            }
          )
          
      
  }
  render() {
    return (
      <main>
        <div className="main__box">
          <input placeholder="Поиск" className="main__input" type="text" />
          <button className="main__button">Найти</button>
        </div>
        <table>
          <tr>
            <th>Марка и модель</th>
            <th>Эконом</th>
            <th>Комфорт</th>
            <th>Комфорт +</th>
            <th>Минивен</th>
            <th>Бизнес</th>
          </tr>
         {this.state.items.map((x,i) => {
            return (
            <tr onClick={console.log('a')}>
            <td>{x.mark} {x.model}</td>
            <td>{x.tariffs.hasOwnProperty('Эконом')? x.tariffs['Эконом'].year : '-' }</td>
            <td>{x.tariffs.hasOwnProperty('Комфорт')? x.tariffs['Комфорт'].year : '-' }</td>
            <td>{x.tariffs.hasOwnProperty('Комфорт+')? x.tariffs['Комфорт+'].year : '-' }</td>
            <td>{x.tariffs.hasOwnProperty('Минивен')? x.tariffs['Минивен'].year : '-' }</td>
            <td>{x.tariffs.hasOwnProperty('Бизнес')? x.tariffs['Бизнес'].year : '-' }</td>
            </tr>
            )
         })}
        </table>
        <p></p>
      </main>
    );
  }
}
export default Main;
