
export class TreeStore {
    categoriesIdsByIndex = {}
    roots = [];
    constructor(categories) {
        let category;
        let i;

        for (i = 0; i < categories.length; i++) {
            this.categoriesIdsByIndex[categories[i].id] = i;
            categories[i].categories = [];
        }

        this.categories = categories;

        for (i = 0; i < categories.length; i++) {
            category = categories[i];
            if (category.parent !== 'root') {
                categories[this.categoriesIdsByIndex[category.parent]]
                    .categories
                    .push(category);
            } else {
                this.roots.push(category);
            }
        }

        console.log(this.roots, this.categoriesIdsByIndex );
    }

}
