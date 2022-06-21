import Directory from './components/directory/directory.component';
const App = () => {
  const categories = [
    {
      id:1,
      title:"Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id:2,
      title:"Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id:3,
      title:"Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id:4,
      title:"Watches",
      imageUrl:"https://wallpaperaccess.com/full/795912.jpg"
    },
    {
      id:5,
      title:"Women's",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id:6,
      title:"Men's",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    },
  ];
  return (
      <Directory categories={categories}/>
    );
}

export default App;
