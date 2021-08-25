const { Given, Then } = require("cucumber");
const detox = require("detox");

Given("I should have app welcome screen", async () => {
	await expect(
		element(by.text("Welcome to your bitvavo assignment!"))
	).toBeVisible();
	await expect(
		element(by.text(" Please test the login form below:"))
	).toBeVisible();
});

Given("I login with valid username & password", async () => {
	await expect(element(by.text("Email Address"))).toBeVisible();
	await expect(element(by.text("Password"))).toBeVisible();

	await element(by.id("Email Address")).tap();
	await element(by.id("Email Address")).clearText();
	await element(by.id("Email Address")).typeText("Tester@bitvavo.com");

	await element(by.id("Password")).tap();
	await element(by.id("Password")).clearText();
	await element(by.id("Password")).typeText("BitcoinMiner1905");
	await element(by.id("loginButton")).tap();
	await expect(element(by.text("You Made it!"))).toBeVisible();
	await expect(element(by.text("5901"))).toBeVisible();
});

Given("I login using an invalid username", async () => {
	await expect(element(by.text("Email Address"))).toBeVisible();
	await expect(element(by.text("Password"))).toBeVisible();

	await element(by.id("Email Address")).tap();
	await element(by.id("Email Address")).clearText();
	await element(by.id("Email Address")).typeText("Tester@bitvavo");

	await element(by.id("Password")).tap();
	await element(by.id("Password")).clearText();
	await element(by.id("Password")).typeText("BitcoinMiner1905");

	await element(by.id("loginButton")).tap();
	await expect(element(by.text("You Made it!"))).not.toBeVisible();
	await expect(element(by.text("5901"))).not.toBeVisible();

	await expect(
		element(by.text("Welcome to your bitvavo assignment!"))
	).toBeVisible();
	await expect(
		element(by.text(" Please test the login form below:"))
	).toBeVisible();
});

Given("I login using an invalid password", async () => {
	await expect(element(by.text("Email Address"))).toBeVisible();
	await expect(element(by.text("Password"))).toBeVisible();

	await element(by.id("Email Address")).tap();
	await element(by.id("Email Address")).clearText();
	await element(by.id("Email Address")).typeText("Tester@bitvavo.com");

	await element(by.id("Password")).tap();
	await element(by.id("Password")).clearText();
	await element(by.id("Password")).typeText("BitcoinMiner");

	await element(by.id("loginButton")).tap();
	await expect(element(by.text("You Made it!"))).not.toBeVisible();
	await expect(element(by.text("5901"))).not.toBeVisible();

	await expect(
		element(by.text("Welcome to your bitvavo assignment!"))
	).toBeVisible();
	await expect(
		element(by.text(" Please test the login form below:"))
	).toBeVisible();
});

Given("I login using an empty password", async () => {
	await expect(element(by.text("Email Address"))).toBeVisible();
	await expect(element(by.text("Password"))).toBeVisible();

	await element(by.id("Email Address")).tap();
	await element(by.id("Email Address")).clearText();
	await element(by.id("Email Address")).typeText("Tester@bitvavo.com");

	await element(by.id("Password")).tap();
	await element(by.id("Password")).clearText();
	await element(by.id("Password")).typeText("");

	await element(by.id("loginButton")).tap();
	await expect(element(by.text("You Made it!"))).not.toBeVisible();
	await expect(element(by.text("5901"))).not.toBeVisible();

	await expect(
		element(by.text("Welcome to your bitvavo assignment!"))
	).toBeVisible();
	await expect(
		element(by.text(" Please test the login form below:"))
	).toBeVisible();
});

Given("I login using an empty username", async () => {
	await expect(element(by.text("Email Address"))).toBeVisible();
	await expect(element(by.text("Password"))).toBeVisible();

	await element(by.id("Email Address")).tap();
	await element(by.id("Email Address")).clearText();
	await element(by.id("Email Address")).typeText("");

	await element(by.id("Password")).tap();
	await element(by.id("Password")).clearText();
	await element(by.id("Password")).typeText("BitcoinMiner1905");

	await element(by.id("loginButton")).tap();
	await expect(element(by.text("You Made it!"))).not.toBeVisible();
	await expect(element(by.text("5901"))).not.toBeVisible();

	await expect(
		element(by.text("Welcome to your bitvavo assignment!"))
	).toBeVisible();
	await expect(
		element(by.text(" Please test the login form below:"))
	).toBeVisible();
});

Given("I login using an empty credentials", async () => {
	await expect(element(by.text("Email Address"))).toBeVisible();
	await expect(element(by.text("Password"))).toBeVisible();

	await element(by.id("Email Address")).tap();
	await element(by.id("Email Address")).clearText();
	await element(by.id("Email Address")).typeText("");

	await element(by.id("Password")).tap();
	await element(by.id("Password")).clearText();
	await element(by.id("Password")).typeText("");

	await element(by.id("loginButton")).tap();
	await expect(element(by.text("You Made it!"))).not.toBeVisible();
	await expect(element(by.text("5901"))).not.toBeVisible();

	await expect(
		element(by.text("Welcome to your bitvavo assignment!"))
	).toBeVisible();
	await expect(
		element(by.text(" Please test the login form below:"))
	).toBeVisible();
});
