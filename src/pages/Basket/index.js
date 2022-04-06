import { useContext, useState, useEffect } from "react";
import { Container, Grid, Button, Card, CardContent } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const BasketView = () => {
  const { basket, addOrRemoveProduct, deleteElementFromBasket } = useContext(UserContext);

  const [total, setTotal] = useState(0);

  const calculatePrice = () => {
    let sum = 0;
    basket.forEach((product) => {
      const finalPrice = +product.quantity * +product.price_sale;
      sum += finalPrice;
    });
    setTotal(sum.toFixed(2));
  };

  useEffect(() => {
    calculatePrice();
    // Esto va a indicar que si la variable basket cambiar de valor
    // esto automaticamente va a llamar a la funcion que esta dentro del useEffect
  }, [basket]);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={5}>
        <Grid item md={8}>
          <h3>Bolsa de Compras </h3>
          <Grid container spacing={3}>
            {basket.map((product) => (
              <Grid item md={12}>
                <Card>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={3}>
                        <img
                          style={{ objectFit: "contain" }}
                          width={150}
                          height={150}
                          src={product.photo}
                          alt=""
                        />
                      </Grid>
                      <Grid item md={3}>
                        <h4>{product.name}</h4>
                      </Grid>
                      <Grid item md={3}>
                        <p>$ {product.price}</p>
                        <p>$ {product.price_sale}</p>
                      </Grid>
                      <Grid item md={3}>
                        <Grid>
                          <Button
                            onClick={() =>
                              addOrRemoveProduct(product.id, false)
                            }
                          >
                            <RemoveRoundedIcon />
                          </Button>
                          &nbsp;&nbsp;
                          {product.quantity}
                          &nbsp;&nbsp;
                          <Button
                            onClick={() => addOrRemoveProduct(product.id, true)}
                          >
                            <AddRoundedIcon />
                          </Button>
                        </Grid>
                        <Grid>

                        <Button
                          color="error"
                          onClick={() => deleteElementFromBasket(product.id)}
                        >
                          <DeleteForeverRoundedIcon />
                        </Button>

                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardContent>
              <h4>Resumen de tu orden</h4>
              <p>
                Sub-total productos <span>${total}</span>
              </p>
              <Button variant="contained" size="large">
                Realizar Pago
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasketView;
