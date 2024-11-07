import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'

import mainCategories from './dummyData/allCategory.json'
import allCategories from './dummyData/merch.json'

const app = new Hono()
app.use('*', prettyJSON())

app.get('/', (c) => {
    return c.text('Hello Hono!')
})

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

app.get('getAllProductByCategory/:id', (c) => {
    const categoryId = c.req.param('id')
    console.log(categoryId)
    return c.text('test')
})

const port = parseInt(process.env.BACKEND_PORT ?? '') || 5000
console.log(`Server is running on http://localhost:${port}`)

serve({
    fetch: app.fetch,
    port,
})