export class Place {
  constructor(title, imageUri, address, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    // this.address = address;
    // this.location = location;
    // this.id = new Date().toString() + Math.random().toString;
    this.id = id;
  }
}
