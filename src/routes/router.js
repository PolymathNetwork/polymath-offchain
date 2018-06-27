// @flow

import Router from 'koa-router'
// eslint-disable-next-line
import auth from './auth'
import email from './email'
import providers from './providers'

const router = new Router()

router.use(auth.routes())
router.use(email.routes())
router.use(providers.routes())

export default router
