# Optimizations
- Controller abstractions
- Testing
- Request validation
- Better logging
- Async error handling
- Data response object parity

# Questions

- Which column (movieId or imdbId) should the endpoint respect as its page req param id?
- No columns named `description` on the movie schema. Assuming the data from `overview` column.
- Can we do the rating average at the db layer? The call can be unwieldy depending on how many records are stored