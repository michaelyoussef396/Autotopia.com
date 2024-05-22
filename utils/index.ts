
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '30774440b2msh0a3a82bcfd5e4e3p17e3e7jsnae47c15d7573',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;

}