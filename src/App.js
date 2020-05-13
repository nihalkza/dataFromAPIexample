import React,{Component} from 'react';
import {Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import Logo from './image/logo.png'
class App extends Component {
    state = {
        data :{},
        country:"",
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data:fetchedData,
            country:country
        });
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.container}>
                    <img className={styles.logospin} src={Logo} alt="COVID-19" />
                    <p className={styles.logofont}>
                        <span className={styles.c2}>Online </span>
                        <span className={styles.c1}>COVID-19 </span>
                        <span className={styles.c3}>Record </span>
                        <span className={styles.c4}>Tracker</span>
                    </p>
                    <small>Last Update: {new Date(data.lastUpdate).toTimeString()}</small>
                </div>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data}  country={country} />
            </div>
        )
    }
}

export default App;