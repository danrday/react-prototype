
# GraphQL

Each time you have a request coming in, you get a signature of 4 variables:
(parent, args, ctx, info)

parent: The result of the previous resolver call (more info). parent schema that you have in graphql
args: The arguments of the resolver’s field - arguments that have been passed to the query
ctx(context): A custom object each resolver can read from/write to. you can surface data here like your database, will give you the rest of the request, like headers, cookies by default but you can add whatever else you want.
"The context object is one that gets passed to every single resolver at every level, so we can access it anywhere in our schema code. It’s where we can store things like data fetchers, database connections, and (conveniently) information about the user making the request.

 Since the context is generated again with every new request, we don’t have to worry about cleaning up user data at the end of execution."

(https://blog.apollographql.com/authorization-in-graphql-452b1c402a9)

info: ...not sure about this one, but read that it is normally not needed (https://www.prisma.io/blog/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a)


about the  requireResolversForResolveType: false in createServer.js:::::
https://github.com/prisma/prisma/issues/2225


to do:::
replace data loader with 'data sources'
(https://blog.apollographql.com/easy-and-performant-graphql-over-rest-e02796993b2b?_ga=2.91865810.938685030.1544117365-1477223043.1539791929)