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

/**
 * @param {string} slug
 * @param {string} hostname
 * @return graphql query
 */
export const blogDetailQuery = (slug, hostname) => {
    const query = `
        {
            post(slug: "${slug}", hostname: "${hostname}") {
                slug,
                title,
                dateAdded,
                contentMarkdown,
                coverImage,
                author {
                    name
                }
            }
        }
    `;

    return query;
}
