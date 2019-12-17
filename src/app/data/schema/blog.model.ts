


export class Blog {
    id: number;
    userId: number;
    title: string;
    description: string;
    categories: Array<string>;
    content: string;
    imagePath: string;

    constructor(id: number, userId: number, title: string, description: string, categories: Array<string>, content: string, imagePath: string) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.categories = categories;
        this.content = content;
        this.imagePath = imagePath;
    }
}

// || -id		||
// || -user_id	||
// || -title	||
// || -description	||
// || -content	||
// || -created	||

