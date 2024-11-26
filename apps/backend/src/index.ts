import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'

import type { SubCategoryTypes, ProductDataType, CartType } from '@repo/types/types'

import mainCategories from './dummyData/allCategory.json'
import allCategoriesJSON from './dummyData/merch.json'
import allProductDataJSON from './dummyData/product.json'

import getPaginatedData from './controller/paginationlogic.js'
import getProductById from './controller/getProductById.js'
import { addItemToDB, getCart, removeItemFromDB, updateItemFromDB } from './controller/dummyDB.js'

const allCategories: SubCategoryTypes = allCategoriesJSON
export const allProducts: ProductDataType[] = allProductDataJSON

const app = new Hono()
app.use('*', cors())
app.use('*', prettyJSON())

//-----------------------MERCH--------------------------------------//

app.get('/getAllMainCategories', (c) => {
    return c.json(mainCategories)
})

app.get('/getAllMerchData/:categoryId', (c) => {
    const categoryId = c.req.param('categoryId')
    if (Object.keys(allCategories).includes(categoryId)) {
        const categoryData = allCategories[categoryId]
        return c.json(categoryData)
    } else {
        return c.json({
            code: 404,
            message: 'Not found',
        })
    }
})

//get categoryDetails by product id

//----------------------Catalog--------------------------------------//

app.get('/getAllProductByCategory/:id', (c) => {
    const categoryId = c.req.param('id')
    console.log(categoryId)
    return c.text('test')
})

//get All Product
app.get('/getAllProducts', (c) => {
    const page = c.req.query('page') ?? '1'
    const size = c.req.query('size') ?? '10'
    return c.json(getPaginatedData(page, size, allProducts))
})

//get Product by id
app.get('/getProductById/:productId', (c) => {
    const productId = c.req.param('productId')
    return c.json(getProductById(productId, allProducts))
})

//----------------------------------CART------------------------------//
app.get('/getCart', (c) => {
    const cart = getCart()
    return c.json(cart)
})

app.post('/addItemToCart', async (c) => {
    try {
        const request: CartType = await c.req.json()
        addItemToDB(request)
        return c.json({ success: true, message: 'Item added to cart' })
    } catch (e) {
        if (e instanceof Error) console.log(e.message)
        return c.json({ code: 500, message: 'Something went wrong' })
    }
})

app.delete('/removeItemFromCart', async (c) => {
    try {
        const { id } = await c.req.json()
        const cart = removeItemFromDB(id)
        return c.json(cart)
    } catch (e) {
        if (e instanceof Error) console.log(e.message)
        return c.json({ code: 500, message: 'Something went wrong' })
    }
})

app.patch('/updateItemFromCart', async (c) => {
    try {
        const { id, ...props } = await c.req.json()
        const cart = updateItemFromDB(id, props)
        return c.json(cart)
    } catch (e) {
        if (e instanceof Error) console.log(e.message)
        return c.json({ code: 500, message: 'Something went wrong' })
    }
})

const port = parseInt(process.env.BACKEND_PORT ?? '') || 5000
console.log(`Server is running on http://localhost:${port}`)

serve({
    fetch: app.fetch,
    port,
})
