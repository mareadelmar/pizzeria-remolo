import create from "zustand";
import { db } from "../config/firebaseConfig";

const refCategories = db.collection("categories");
const refProducts = db.collection("products");

const [useStore] = create(set => ({
	// state
	categories: [],
	products: [],
	cart: [],

	// actions
	getCategories: () => {
		let data = [];
		refCategories.get().then(doc => {
			if (doc) {
				doc.forEach(item => {
					data.push(item.data());
				});
				console.log("store categries -->", data);
				return set({ categories: data });
			}
		});
	},
	getProducts: () => {
		let data = [];
		refProducts.get().then(doc => {
			if (doc) {
				doc.forEach(item => {
					data.push(item.data());
				});
				console.log("store products -->", data);
				return set({ products: data });
			}
		});
	},
	addToCart: item =>
		set(state => ({
			cart: [...state.cart, item],
		})),
}));

export default useStore;
