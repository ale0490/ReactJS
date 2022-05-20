import {Grid} from '@mui/material';
import CardItem from '../Card/Card';

const CardList = () => {
    return (
        <Grid container>
            <Grid item md={2}>
              <CardItem title={"Anillo Iggdrasil"} price= {650} image={"anillos/anillo_iggdrasil.webp"} />
            </Grid>
            <Grid item md={2}>
              <CardItem title={"Anillo Brazalete"} price= {650} image={"anillos/anillo_brazalete.webp"}/>
            </Grid>
            <Grid item md={2}>
              <CardItem title={"Anillo Runas"} price= {650} image={"anillos/anillo_runas.webp"}/>
            </Grid>
            <Grid item md={2}>
              <CardItem title={"Anillo Symbol"} price= {650} image={"anillos/anillo_symbol.webp"}/>
            </Grid>
            <Grid item md={2}>
              <CardItem title={"Anillo Valknut"} price= {650} image={"anillos/anillo_valknut.webp"}/>
            </Grid>
            <Grid item md={2}>
              <CardItem title={"Anillo Vegvisir"} price= {650} image={"anillos/anillo_vegvisir.webp"}/>
            </Grid>
          </Grid>
    )
}

export default CardList