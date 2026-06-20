/** @format */

export default class certificationsModel {
  constructor(id, title, issuer, description, year, image, badge = null) {
    this.id = id;
    this.title = title;
    this.issuer = issuer;
    this.description = description;
    this.year = year;
    this.image = image;
    this.badge = badge;
  }
}
