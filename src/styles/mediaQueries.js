// eslint-disable-next-line 
export default {
	up() {},
	down(size){
		const screen = {
			xs: "575.98px",
			sm: "767.98px",
			md: "991.98px",
			lg: "1100.98px",
		}
		return `@media (max-width: ${screen[size]})`
	}
}