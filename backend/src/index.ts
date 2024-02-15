import express from 'express'
import cors from 'cors'
import * as RecipeAPI from './routes'
import {PrismaClient} from '@prisma/client'

const app = express();
const primaClient = new PrismaClient();
app.use(express.json())
app.use(cors())


app.get("/api/recipes/search",async(req,res)=>{
    
    const searchTerm = req.query.searchTerm as string
    const page = parseInt(req.query.page as string)
    const results = await RecipeAPI.searchRecipes(searchTerm,page);

    return res.json(results)
})
app.get("/api/recipes/:recipeId/summary", async (req,res)=>{
    const recipeId = req.params.recipeId;
    const results = await RecipeAPI.getRecipesummary(recipeId)
    return res.json(results)
})

app.post("/api/recipes/favourite", async (req,res)=>{
    const recipeId = req.body.recipeId

    try{
    const favouriteRecipe = await primaClient.favouriteRecipes.create(
        {
            data:{
                recipeId:recipeId
            }
        }
    );
    return res.status(201).json(favouriteRecipe)
    }catch(error){
        console.log(error)
        return res.status(500).json({error:"There is something wrong"})
    }
})

app.get("/api/recipes/favourite",async(req,res)=>{
    try{
        const recipes = await primaClient.favouriteRecipes.findMany();
        const recipeIds = recipes.map((recipe)=>recipe.recipeId.toString())

        const favourites = await RecipeAPI.getFavouriteRecipesByIDs(recipeIds)
        return res.status(201).json(favourites)
    }catch (error){
        console.log(error)
    }
})

app.delete("/api/recipes/favourite",async(req,res)=>{
    const recipeId = req.body.recipeId;

    try{
        await primaClient.favouriteRecipes.delete({
            where:{
                recipeId:recipeId
            }
        })
        return res.status(204).send()
    }catch(error){
        console.log(error)
        return res.status(500).json({error:"There is something wrong"})
    }
})

app.listen(5000,()=>{
    console.log("server running on localhost 5000")
})