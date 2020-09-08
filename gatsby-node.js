const path = require('path')

const createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const results = await graphql(`
		query {
			allContentfulBlogPost {
				edges {
					node {
						slug
					}
				}
			}
		}
	`)

	results.data.allContentfulBlogPost.edges.forEach(({ node }) => {
		createPage({
			path: `/posts/${node.slug}`,
			component: path.resolve(__dirname, 'src', 'templates', 'BlogPost.js'),
			context: {
				slug: node.slug,
			},
		})
	})
}

module.exports = {
	createPages,
}
