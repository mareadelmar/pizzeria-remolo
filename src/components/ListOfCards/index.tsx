import { Container, Card, CardMedia, CardContent, Typography } from "@mui/material";

const ListOfCards = ({products}) => {
    return (
    <Container>
            <div className="list-container">
                {
                    products.map((item) => (
                    <Card sx={{ width: 200 }} key={item.id}>
                        <CardMedia 
                        component="img"
                        height="180"
                        image={item.img}
                        alt={item.name}
                        />
                        <CardContent>
                        <Typography
                            component="h2"
                            variant="h5"
                        >{item.name}</Typography>
                        <Typography
                            component="p"
                        >{item.price}</Typography>
                        </CardContent>
                    </Card>
                    ))
                }
            </div>
        </Container>
)}

export default ListOfCards;