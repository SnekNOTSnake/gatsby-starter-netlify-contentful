const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, 'config.env') })

contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

module.exports = {
	siteMetadata: {
		title: 'Gatsby Netlify Contentful',
		description:
			'A Gatsby starter designed to be deployed on Netlify using contents on Contentful',
		author: 'SnekNOTSnake',
	},
	plugins: [
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig,
		},
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography.js',
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'GatsbyNetlifyContentfulStarter',
				short_name: 'GatsbyNetlifyContentful',
				start_url: '/',
				background_color: '#6b37bf',
				theme_color: '#6b37bf',
				display: 'standalone',
				icon: 'src/images/sns.png',
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
	],
}
