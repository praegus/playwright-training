import { type Locator, type Page } from "@playwright/test";

export enum NavOption {
  Home = "Home",
  Campsites = "Campsites",
  AddCampsite = "Add Campsite",
}

export class BasePage {
  readonly page: Page;
  readonly baseUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = "https://travels.praegus.nl";
  }

  async clickLink(text: string) {
    await this.page.getByRole("link", { name: text }).click();
  }

  async clickNavOption(option: NavOption) {
    this.page.getByRole("navigation").getByRole("link", { name: option });
  }

  async clickButton(text: string) {
    await this.page.getByRole("button", { name: text }).click();
  }

  async goto() {
    await this.page.goto(this.baseUrl);
  }
}
