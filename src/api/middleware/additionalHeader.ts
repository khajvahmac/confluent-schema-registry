import { Middleware } from 'mappersmith'

const additionalHeaderMiddleware: (headers: { [key: string]: string }) => Middleware = (headers: {
  [key: string]: string
}) => () => {
  return {
    prepareRequest: next => {
      return next().then(req => req.enhance({ headers }))
    },
  }
}

export default additionalHeaderMiddleware
