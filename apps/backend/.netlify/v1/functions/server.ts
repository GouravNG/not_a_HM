import { handle } from 'hono/netlify'
import { app } from '../../../src/index' // Adjust the import path if needed

export default handle(app)
