

module.exports = class Exercise {
  

  constructor(description, duration, date) {
    this.description = description;
    this.duration = parseInt(duration);
    this.date = date.format("ddd MMM DD YYYY");
}
}
