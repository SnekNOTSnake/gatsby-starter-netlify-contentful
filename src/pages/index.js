import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Home = ({ data }) => {
	const posts = data.allContentfulBlogPost.edges
	return (
		<Layout>
			<SEO title="Home" />
			<h2>Home</h2>
			{posts.map(({ node }) => (
				<div>
					<Link to={`/posts/${node.slug}`}>
						<h3>{node.title}</h3>
					</Link>
					<div>by: {node.author.name}</div>
					<p>{node.description.description}</p>
				</div>
			))}
		</Layout>
	)
}

export default Home

export const query = graphql`
	query {
		allContentfulBlogPost {
			edges {
				node {
					title
					slug
					description {
						description
					}
					author {
						name
						email
						id
					}
				}
			}
		}
	}
`
