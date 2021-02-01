import { AppBar, Card, CardContent, CardHeader, Container, Divider, Toolbar } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import Footer from './components/Footer';
import Login from './components/Login';
import Logo from './components/Logo'
import useStyles from './styles/homeStyle'

export const  App = () =>{
  const classes = useStyles()
  return (
    <div>
     <AppBar>
       <Toolbar>
         <Container maxWidth={'lg'}>
              <Logo/>
         </Container>
       </Toolbar>
     </AppBar>
     <div className={classes.container}>
          <Container maxWidth={'sm'}>
          <Card>
            <CardHeader
            title={'Login to admin dashboard'}
            avatar={<Person/>}/>
            <Divider/>
            <CardContent>
              <Login/>
            </CardContent>
          </Card>
          </Container>
          <Footer/>
     </div>
    </div>
  );
}

export default App;
