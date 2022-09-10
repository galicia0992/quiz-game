const url = "https://restcountries.com/v3.1/all"

export const paises = async() =>{
    try {
        const reponse = await fetch(url)
        const data = await reponse.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
