console.log("lista");
const urlApi = "https://api.memegen.link/templates/";

    try {
        const CargarApi = async () => {
            let lista = await fetch (urlApi)
            console.log(lista)
            let json = await lista.json()
            console.log("el json: "+JSON.stringify(json))
            // let texto = await lista.text()
            document.getElementById("lista").innerHTML = JSON.stringify(json)}
        CargarApi();
        
        
        
    } catch (error) {
        console.log("error");
        
    }
