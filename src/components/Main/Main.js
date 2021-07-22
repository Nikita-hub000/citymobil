import React from "react";
import "./Main.css";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      items: [],
      current: "Пока ничего не выбрано",
      isSorted: true,
      items2: [],
      value: '',
      results: []
    };
    this.find = this.find.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  text(x) {
    this.setState({
      current: `Выбран автомобиль ${x.mark} ${x.model} ${
        x.tariffs["Эконом"]
          ? x.tariffs["Эконом"].year
          : x.tariffs["Комфорт"]
          ? x.tariffs["Комфорт"].year
          : x.tariffs["Комфорт+"]
          ? x.tariffs["Комфорт+"].year
          : x.tariffs["Минивен"]
          ? x.tariffs["Минивен"].year
          : x.tariffs["Бизнес"]
          ? x.tariffs["Бизнес"].year
          : "без"
      }  года выпуска`,
    });
  }
  sorted() {
    this.setState({ isSorted: !this.state.isSorted });
  }
  componentDidMount = () => {
    fetch("https://city-mobil.ru/api/cars")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.cars,
            items2: result.cars
          });
        },
        (error) => {
          this.setState({
            error: error,
          });
        }
      );
  };

  find(e){
    console.log(e.target.value)
    this.setState({results : this.state.items})
    this.setState({
      value: e.target.value
    })
    let a = []
    this.state.items.forEach(x => {
      if(x.mark.toLowerCase().includes(this.state.value.toLowerCase()) || x.model.toLowerCase().includes(this.state.value.toLowerCase())){
        a.push(x)
        
      }
    })

    this.setState({results: a})
    // e.target.value.length === 0 ? this.setState({results : this.state.items}) : this.setState({results: a})
    // if(e.target.value.length > 0){
    //   this.setState({items: this.state.results})
    // }
    // else{
    //   this.setState({items: this.state.items})
    // }
  

  }

  handleSubmit(e){
    e.preventDefault()
    this.state.value.length === 0 ? this.setState({items: this.state.items2}) : this.setState({items: this.state.results})

  }
  render() {
    return (
      <main>
        <form className="main__box" onSubmit={this.handleSubmit}>
          <input placeholder="Поиск" className="main__input" type="text" onChange={this.find} />
          <button type='submit' className="main__button">Найти</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>
                Марка и модель{" "}
                <button className="main__sorted" onClick={() => this.sorted()}>
                  {this.state.isSorted ? "По убыванию" : "По возрастанию"}
                </button>
              </th>
              <th>Эконом</th>
              <th>Комфорт</th>
              <th>Комфорт +</th>
              <th>Минивен</th>
              <th>Бизнес</th>
            </tr>
          </thead>
          <tbody>
            {(this.state.isSorted
              ? this.state.items
              : this.state.items.reverse()
            ).map((x, i) => {
              return (
                <tr onClick={() => this.text(x)}>
                  <td>
                    {x.mark} {x.model}
                  </td>
                  <td>
                    {x.tariffs.hasOwnProperty("Эконом")
                      ? x.tariffs["Эконом"].year
                      : "-"}
                  </td>
                  <td>
                    {x.tariffs.hasOwnProperty("Комфорт")
                      ? x.tariffs["Комфорт"].year
                      : "-"}
                  </td>
                  <td>
                    {x.tariffs.hasOwnProperty("Комфорт+")
                      ? x.tariffs["Комфорт+"].year
                      : "-"}
                  </td>
                  <td>
                    {x.tariffs.hasOwnProperty("Минивен")
                      ? x.tariffs["Минивен"].year
                      : "-"}
                  </td>
                  <td>
                    {x.tariffs.hasOwnProperty("Бизнес")
                      ? x.tariffs["Бизнес"].year
                      : "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="main__current">{this.state.current}</p>
      </main>
    );
  }
}
export default Main;
