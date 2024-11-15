import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import getPaginatedData from './controller/paginationlogic.js'

import type { SubCategoryTypes, ProductDataType } from '@repo/types/types'

import mainCategories from './dummyData/allCategory.json'
import allCategoriesJSON from './dummyData/merch.json'
import allProductDataJSON from './dummyData/product.json'
import getProductById from './controller/getProductById.js'

const allCategories: SubCategoryTypes = allCategoriesJSON
const allProducts: ProductDataType[] = allProductDataJSON

const app = new Hono()
app.use('*', prettyJSON())

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

//get categoryDetails by product id

const port = parseInt(process.env.BACKEND_PORT ?? '') || 5000
console.log(`Server is running on http://localhost:${port}`)

serve({
    fetch: app.fetch,
    port,
})
