import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import Categories from "./components/Categories/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Deathcrush",
          author: "Mayhem",
          img: "Deathcrush.jpg",
          category: "black",
          price: "1",
        },
        {
          id: 2,
          title: "A Blaze in the Northern Sky",
          author: "Darkthrone",
          img: "A Blaze in the Northern Sky.jpg",
          category: "black",
          price: "1.2",
        },
        {
          id: 3,
          title: "Astral Fortress",
          author: "Darkthrone",
          img: "Astral Fortress.jpg",
          category: "black",
          price: "2",
        },
        {
          id: 4,
          title: "Beautyfall",
          author: "Psychonaut 4",
          img: "Beautyfall.jpg",
          category: "dsbm",
          price: "2",
        },
        {
          id: 5,
          title: "De Mysteriis Dom Sathanas",
          author: "Mayhem",
          img: "De Mysteriis Dom Sathanas.jpg",
          category: "black",
          price: "2",
        },
        {
          id: 6,
          title: "Deathcade",
          author: "Nocturnal Depression",
          img: "Deathcade.jpg",
          category: "dsbm",
          price: "4",
        },
        {
          id: 7,
          title: "Dekadens",
          author: "Lifelover",
          img: "Dekadens.jpg",
          category: "dsbm",
          price: "1",
        },
        {
          id: 8,
          title: "Dipsomania",
          author: "Psychonaut 4",
          img: "Dipsomania.jpg",
          category: "dsbm",
          price: "4",
        },
        {
          id: 9,
          title: "Four Seasons to a Depression",
          author: "Nocturnal Depression",
          img: "Four Seasons to a Depression.jpg",
          category: "dsbm",
          price: "1.3",
        },
        {
          id: 10,
          title: "Introducing Darkthrone",
          author: "Darkthrone",
          img: "Introducing Darkthrone.jpg",
          category: "black",
          price: "1",
        },
        {
          id: 11,
          title: "Konkurs",
          author: "Lifelover",
          img: "Konkurs.jpg",
          category: "dsbm",
          price: "2",
        },
        {
          id: 12,
          title: "L'Isolement",
          author: "Nocturnal Depression",
          img: "L'Isolement.jpg",
          category: "dsbm",
          price: "1",
        },
        {
          id: 13,
          title: "Live in Leipzig",
          author: "Mayhem",
          img: "Live in Leipzig.jpg",
          category: "black",
          price: "2",
        },
        {
          id: 14,
          title: "Neurasthenia",
          author: "Psychonaut 4",
          img: "Neurasthenia.jpg",
          category: "dsbm",
          price: "1.2",
        },
        {
          id: 15,
          title: "Pure Fucking Armageddon",
          author: "Mayhem",
          img: "Pure Fucking Armageddon.jpg",
          category: "black",
          price: "2",
        },
        {
          id: 16,
          title: "Reflections of a Sad Soul",
          author: "Nocturnal Depression",
          img: "Reflections of a Sad Soul.jpg",
          category: "dsbm",
          price: "1.2",
        },
        {
          id: 17,
          title: "Sjukdom",
          author: "Lifelover",
          img: "Sjukdom.jpg",
          category: "dsbm",
          price: "2",
        },
        {
          id: 18,
          title: "Spleen Black Metal",
          author: "Nocturnal Depression",
          img: "Spleen Black Metal.jpg",
          category: "dsbm",
          price: "2",
        },
        {
          id: 19,
          title: "The Cult of Negation",
          author: "Nocturnal Depression",
          img: "The Cult of Negation.jpg",
          category: "dsbm",
          price: "1.2",
        },
        {
          id: 20,
          title: "The Wind of 666 Black Hearts",
          author: "Darkthrone",
          img: "The Wind of 666 Black Hearts.jpg",
          category: "black",
          price: "2",
        },
        {
          id: 21,
          title: "Transilvanian Hunger",
          author: "Darkthrone",
          img: "Transilvanian Hunger.jpg",
          category: "black",
          price: "2",
        },
        {
          id: 22,
          title: "Under a Funeral Moon",
          author: "Darkthrone",
          img: "Under a Funeral Moon.jpg",
          category: "black",
          price: "2",
        },
      ],
      showFillItem: false
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  render() {
    return (
      <div className="container">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({
        currentItems: this.state.items.filter((el) => el.category == category),
      });
    }
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let inOrder = false;
    this.state.orders.forEach((el) => {
      if (el.id == item.id) {
        inOrder = true;
      }
    });
    !inOrder && this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
