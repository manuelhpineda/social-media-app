import {Router} from 'express';

import users from './users';

const routes = Router()

routes.get('/', (req, res) => {
    res.send('hello world')
})

routes.use(users)

export default routes
