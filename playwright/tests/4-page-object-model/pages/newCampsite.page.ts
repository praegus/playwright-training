import { type Locator, type Page } from "@playwright/test";

export class NewCampsitePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly url: string;
  readonly name: Locator;
  readonly location: Locator;
  readonly campsiteType: Locator;
  readonly terrainType: Locator;
  readonly pricePerNight: Locator;
  readonly capacity: Locator;
  readonly accessibilityLevel: Locator;
  readonly createCampsite: Locator
  // TODO: Add variables amenities, description and imageUrl here

  constructor(page: Page) {
    this.page = page;
    this.url = "https://travels.praegus.nl/campsites/new";
    this.getStartedLink = page.locator("a", { hasText: "Get started" });
    this.name = page.getByRole("textbox", { name: "Name *" });
    this.location = page.getByRole("textbox", { name: "Location *" });
    this.campsiteType = page.getByLabel("Campsite Type *");
    this.terrainType = page.getByLabel("Terrain Type *");
    this.pricePerNight = page.getByRole("spinbutton", {
      name: "Price per Night ($) *",
    });
    this.capacity = page.getByRole("spinbutton", {
      name: "capacity",
    });
    this.accessibilityLevel = page.getByLabel("Accessibility Level *");
    this.createCampsite = page.getByRole("button", { name: "Create Campsite" })
    // TODO: Set the variables amenities, description and imageUrl here
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async fillCampsiteFields(data: any) {
    await this.name.fill(data.name);
    await this.location.fill(data.location);
    await this.campsiteType.selectOption(data.campsiteType);
    await this.terrainType.selectOption(data.terrainType);
    await this.pricePerNight.fill(data.pricePerNight);
    await this.capacity.fill(data.capacity);
    await this.accessibilityLevel.selectOption(data.accessibilityLevel);
    // TODO: fill in amenities, description and imageUrl here
  }
}
