import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const BlogPost = ({ data }) => {
	const post = data.contentfulBlogPost
	return (
		<Layout>
			<SEO title={post.title} />
			<h2>{post.title}</h2>
			<div>by: {post.author.name}</div>
			<div style={{ maxWidth: 700 }}>
				<Img alt={post.title} fluid={post.heroImage.fluid} />
			</div>
			<p>{post.description.description}</p>
			<div
				dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
			/>
		</Layout>
	)
}

export default BlogPost

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			id
			author {
				name
				email
			}
			title
			description {
				description
			}
			body {
				childMarkdownRemark {
					html
				}
			}
			heroImage {
				fluid(quality: 85, maxWidth: 700) {
					...GatsbyContentfulFluid_tracedSVG
				}
			}
		}
	}
`
