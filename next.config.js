/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		//APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://cinema-server-1p4o.onrender.com/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'https://cinema-server-1p4o.onrender.com/uploads/:path*',
			},
		]
	},
}

module.exports = nextConfig
