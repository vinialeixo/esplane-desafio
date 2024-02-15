import dotenv from 'dotenv'
dotenv.config();

const apiKey = process.env.API_KEY;

export const searchRecipes = async (searchTerm:string,page:number)=>{
  if(!apiKey){
    throw new Error ("API Key not found")
}

    const url = new URL("https://api.spoonacular.com/recipes/complexSearch")

    const queryParams = {
        apiKey,
        query:searchTerm,
        number:"10",
        offset:(page * 10).toString()
    }

    url.search = new URLSearchParams(queryParams).toString()

    try{
        const searchResponse = await fetch(url)
        const resultJson = await searchResponse.json()
        return resultJson
    }catch(error){
        console.log(error)
    }
}

export const getRecipesummary = async (recipeId: string)=>{
    if(!apiKey){
        throw new Error ("API Key not found")
    }
    const url = new URL (`https://api.spoonacular.com/recipes/${recipeId}/summary`)
    const params = {
        apiKey,
    }
    url.search = new URLSearchParams(params).toString()

    const searchResponse = await fetch(url)
    const resultJson = await searchResponse.json()
    return resultJson
}

export const getFavouriteRecipesByIDs = async(ids:string[])=>{
    if(!apiKey){
        throw new Error ("API Key not found")
    }
    const url = new URL("https://api.spoonacular.com/recipes/informationBulk")
    const params = {
        apiKey,
        ids:ids.join(",")
    }
    url.search = new URLSearchParams(params).toString()

    const searchResponse = await fetch(url)
    const resultJson = await searchResponse.json()
    return {results:resultJson}
}