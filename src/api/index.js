const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;
    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const res= await fetch(changeableUrl);
        if(res.ok) {
            let {confirmed, recovered, deaths, lastUpdate} = await res.json();
            const modifiedData = { confirmed, recovered, deaths, lastUpdate };
            return modifiedData;
        }else { alert(res.status); }
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const res= await fetch(`${url}/daily`);
        if(res.ok) {
            let test = await res.json();
            const modifiedData = test.map((dailyData) => ({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,
		    }));
		    return modifiedData;
        }else { alert(res.status); }
    } catch (error) {

    }
}

export const fetchCountries = async () => {
    try {
        const res= await fetch(`${url}/countries`);
        if(res.ok) {
            let { countries } = await res.json();
            return countries.map((country) => country.name);
        }else { alert(res.status); }
    } catch (error) {

    }
}