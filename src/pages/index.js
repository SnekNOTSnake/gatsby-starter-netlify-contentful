import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Home = ({ data }) => {
	const posts = data.allContentfulBlogPost.edges
	return (
		<Layout>
			<SEO title="Home" />
			{posts.map(({ node }) => (
				<div
					key={node.slug}
					style={{
						margin: '16px 0',
						borderRadius: 4,
						boxShadow: '0 0 16px rgba(50, 50, 50, 0.4)',
						padding: '16px 24px',
					}}
				>
					<Link to={`/posts/${node.slug}`}>
						<h3 style={{ margin: '16px 0' }}>{node.title}</h3>
					</Link>
					<div style={{ width: '100%', margin: `${rhythm(1)} 0` }}>
						<Img alt={node.title} fluid={node.heroImage.fluid} />
					</div>
					<p style={{ marginBottom: 16 }}>by: {node.author.name}</p>
					<p style={{ marginBottom: 16 }}>{node.description.description}</p>
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
					heroImage {
						fluid(quality: 85, maxWidth: 600) {
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`
