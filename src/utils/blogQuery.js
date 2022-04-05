/**
 * 
 * @param {*} username 
 * @return graphql query
 */

export const blogQuery = (username) => {
    const query = `
        {
            user(username: "${username}") {
                publication {
                    posts(page: 0) {
                        title,
                        slug,
                        coverImage,
                        dateAdded,
                        brief,
                        type,
                    }
                },
                name,
                photo
            }
        }
    `;

    return query;
}
