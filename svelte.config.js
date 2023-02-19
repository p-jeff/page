import adapter from '@sveltejs/adapter-static';

const prod = process.env.NODE_ENV === "production";
console.log(process.env.NODE_ENV)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: ""
		}
	}
};

export default config;
