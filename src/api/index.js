import axios from 'axios'; // Use to request API

const url = "https://covid19.mathdro.id/api";

export const fetchData = async(country) =>{
    let changableURL = url;
    if(country){
        changableURL = `${url}/countries/${country}`
    }
    try{
        const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changableURL);
        
        const modifiedData = { confirmed, recovered, deaths, lastUpdate}
        return modifiedData;   
    } catch(err){
        console.log("Error in API Request");
    }
}

export const fetchDailyData = async() =>{
    try{
        const {data} = await axios.get(`${url}/daily`);
        
        const modifiedData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
        return modifiedData;   
    } catch(err){
        console.log("Error in API Request");
    }
}

export const fetchCountries = async() =>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
        
        return countries.map((country) => country.name);   
    } catch(err){
        console.log("Error in API Request");
    }
}