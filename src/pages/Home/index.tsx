import { Container } from '@mui/material';
import ListOfCards from "../../components/ListOfCards"

const PRODUCTS = [
  {
    name: "Cerveza 437ml",
    price: 105,
    category: "drink",
    id: "1",
    img: "https://depotexpress.com.ar/tienda/wp-content/uploads/2020/06/CERVEZA-QUILMES-CRISTAL-LATA-X-473c.c..png"
  },
  {
    name: "Agua 500ml",
    price: 95,
    category: "drink",
    id: "2",
    img: "https://unimarc.vteximg.com.br/arquivos/ids/161365-1000-1000/Agua-Min-Cachantun-s-gas-500-ml-no-retor.jpg?v=636486712072830000"
  },
  {
    name: "Cola-Cola 500ml",
    price: 120,
    category: "drink",
    id: "3",
    img: "https://s3.amazonaws.com/images.ecwid.com/images/18393146/1193831062.jpg"
  },
  {
    name: "Pepsi 500ml",
    price: 100,
    category: "drink",
    id: "4",
    img: "https://www.stock.com.py/images/thumbs/0166199.jpeg"
  },
  {
    name: "Almendrado",
    price: 350,
    category: "dessert",
    id: "5",
    img: "https://www.munchis.com.ar/wp-content/uploads/2020/06/web-munchis_0015_MunchisJunio_2939.jpg"
  },
  {
    name: "Bombones",
    price: 500,
    category: "dessert",
    id: "6",
    img: "https://i.pinimg.com/736x/32/e3/1b/32e31bb8905571848450400326b3b07c.jpg"
  },
  {
    name: "Chocotorta",
    price: 720,
    category: "dessert",
    id: "7",
    img: "https://images.clarin.com/2020/06/10/chocotorta-una-porcion-de-la___YXM9y_bg-_720x0__1.jpg"
  },
  {
    name: "Helado",
    price: 400,
    category: "dessert",
    id: "8",
    img: "https://www.saluddiez.com/wp-content/uploads/2020/07/52958376_621558064950792_1464853752628289370_n.jpg"
  },
]



const Home = () => {
    return (
        <>
          <Container>
              list of categories
          </Container>
          <ListOfCards products={PRODUCTS}/>
        </>
    )
}

export default Home;