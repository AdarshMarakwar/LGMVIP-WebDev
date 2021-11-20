import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        //used to display the loader when the api is fetching data
        <div className='app'>
            <Loader
        type="Bars"
        color="#F40502"
        //secondaryColor="Color.secondary00BFFF"
        height={400}
        width={400}
        timeout={4000} //4 secs
      />
       </div>
    );
}
export default LoaderComp