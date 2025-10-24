export class HomePage {
    private page: any;

    constructor(page: any) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }

    async clickButton(selector: string) {
        await this.page.click(selector);
    }
}