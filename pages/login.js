exports.LoginPage = class LoginPage {
    
//construtor para o fluxo de login contendo o argumento (page) e atributos de login (username, password e login button)
    constructor(page) {
        this.page = page;
        this.username = page.locator('id=user-name');
        this.password = page.locator('id=password');
        this.loginButton = page.locator('id=login-button');
    }
//método para acessar a página de testes
    async pageGoto() {
        await this.page.goto('/');
    }
//método para realizar login
    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}