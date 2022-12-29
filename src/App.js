import './App.css';
import { ThemeProvider,createTheme} from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
import BasicCard from './Card';
const useStyles = makeStyles({
  styling1:{
      background : 'red',width:150, margin:'auto', marginTop:20
  },
  styling2:{
    background: 'blue',width:150, margin:'auto', marginTop:20
  },
  styling3:{
    background : 'brown',width:150, margin:'auto', marginTop:20
},
styling4:{
  background : 'green',width:150, margin:'auto', marginTop:20
},
styling5:{
  background : 'yellow',width:150, margin:'auto', marginTop:20
}
})
function App() {
  const theme = createTheme();
  const classes = useStyles();
  let arr=[
    {
      name : "Card 1",
      styling:classes.styling1
    },
    {
      name : "Card 2",
      styling:classes.styling2
    },
    {
      name : "Card 3",
      styling:classes.styling3
    },
    {
      name : "Card 4",
      styling:classes.styling4
    },
    {
      name : "Card 5",
      styling:classes.styling5
    }
  ]
  return (
    <ThemeProvider theme={theme}>
     {
      arr.map(obj=><BasicCard name={obj.name} styling={obj.styling} />)
     }
   </ThemeProvider>
    
  );
}

export default App;
