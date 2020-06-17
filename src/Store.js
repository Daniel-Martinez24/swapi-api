export class Store {
    async
     data(type) {
        return new Promise ((resolve, reject) => {
            fetch("https://swapi.dev/api/"+ type+ "/")
            .then(res => res.json())
            .then(
              (result) => {
                resolve( 
                    result.results
                  )
              },
              (error) => {
                reject (
                  error
                )
              }
            )
        }) 
        
    }
    
}

export default Store;