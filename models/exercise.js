
module.exports = class Exercise {
  description;
  duration;
  date;

  constructor(description, duration, date) {
    this.description = description;
    this.duration = duration;
    this.date = date;
}
}
