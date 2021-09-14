Please read the PLEASE_READ_FIRST.md first.

Please document your code & design decisions here.

* The folder structure was left as it was but in production it will be ideal to move to a `src` folder
* I created a simply wrapper around the `simplyrets` API with axios. This with the idea of mocking.
* I created a "middleware" using graphql instead of `app.use()`. The reason behind this is that the AC said only the `/graphql` endpoint should be protected.


## TODOs

* Logging of info/error messages
* Metrics
* Caching on simplyrets responses.

## AC

- [x] Implement a GraphQL query that is fetching data from the SimplyRETS API `get_properties` endpoint ([documentation here](https://docs.simplyrets.com/api/index.html#/Listings/get_properties)).
- [x] Your GraphQL query must accept a `city` filter parameter to filter the API results (e.g. `houston`)
- [x] The `/graphql` endpoint must be protected by Bearer HTTP Authentication. You can hardcode the following credentials: `user1@sideinc.com` / `676cfd34-e706-4cce-87ca-97f947c43bd4`
- [x] You must use `jest` to write your tests for your queries, resolvers, and middlewares.
- [x] Please document your code via comments and the README.md to explain tradeoffs and design decisions that you have made.
