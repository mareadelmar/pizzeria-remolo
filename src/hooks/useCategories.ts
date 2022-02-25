import { useState, useEffect, useCallback } from "react";
import { db } from "../config/firebaseConfig";

export const useCategories = () => {
	const [categoriesList, setCategoriesList] = useState<ICategory[]>([]);
	const [loading, setLoading] = useState<Boolean>(false);

	const getCategoriesList = useCallback(() => {
		const ref = db.collection("categories");
		let data:ICategory[] = [];

		setLoading(true);
		ref.get()
			.then((doc:ICategory[]) => {
				if (doc) {
					doc.forEach(item => {
						console.log(item.data());
						data.push(item.data());
					});
				}
			})
			.catch(err => console.log(err));
		setLoading(false);
		setCategoriesList(data);

		return data;
	}, []);

	useEffect(() => {
		getCategoriesList();
	}, []);

	return {
		categoriesList,
		loading,
	};
};
