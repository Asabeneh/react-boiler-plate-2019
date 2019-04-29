import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";
import { studentsData } from "./students-data";
import AddProduct from "./components/AddProduct";
class App extends React.Component {
  state = {
    count: 0,
    productName: "",
    description:"",
    price:"",
    products: [{productName:'Item 1',description:'Just very new', price:100}]
  };
  addOne = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };
  addProduct = (product) => {
    this.setState(prevState => {
      return {
        products: [product, ...prevState.products]
      };
    });
  };
  minusOne = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  };
  handleChange = e => {
      const {name, value} = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const product = {
        productName:this.state.productName,
        description:this.state.description,
        price:this.state.price
    }
    this.addProduct(product);
    this.setState({productName:'',description:'',price:''});
  };
  render() {
      const {products, productName, description, price} = this.state;
      const productList = products.map(({ productName, description, price }) => (
              <li key={productName}>{productName} {description} {price}</li>
          ))
      
    return (
      <div>
        <Header
          title="Lets Get Started With React"
          firstName="Asabeneh"
          lastName="Yetayeh"
          year={new Date().getFullYear()}
        />
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.addOne}>Add One</button>
        <button onClick={this.minusOne}>Minus One</button>
        <br />
        <hr />
        {productList}
         <AddProduct 
         productName = {productName}
         description = {description}
         price = {price}
         handleChange = {this.handleChange}
         handleSubmit = {this.handleSubmit}
          />

        <Main techs={["HTML", "CSS", "JavaScript"]} />
        <StudentList students={studentsData} />
        <Footer year={new Date().getFullYear()} />
      </div>
    );
  }
}

export default App;
