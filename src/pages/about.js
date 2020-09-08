import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const About = ({ data }) => {
	const person = data.contentfulPerson
	return (
		<Layout>
			<SEO title="About" />
			<h2>{person.name}</h2>
			<div style={{ width: '100%', margin: `${rhythm(1)} 0` }}>
				<Img fluid={person.image.fluid} />
			</div>
			<div
				dangerouslySetInnerHTML={{
					__html: person.shortBio.childMarkdownRemark.html,
				}}
			/>
		</Layout>
	)
}

export default About

export const query = graphql`
	query {
		contentfulPerson(id: { eq: "5616e2bc-4dc0-58c3-9f37-ae046ab451e1" }) {
			name
			shortBio {
				childMarkdownRemark {
					html
				}
			}
			image {
				fluid(quality: 85, maxWidth: 700) {
					...GatsbyContentfulFluid_tracedSVG
				}
			}
			id
		}
	}
`
