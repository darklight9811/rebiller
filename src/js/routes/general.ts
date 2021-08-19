import { route } from "@acai/router/dist"

route.group("/", () => {
	route("/", "Home")
	route("/bills/:id", "Bill")
})