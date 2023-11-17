import names from "../data/names.json"
import experiences from "../data/experiences.json"
import positions from "../data/positions.json"
import techLanguages from "../data/tech-languages.json"

export class Random {
  static randomName() {
    return `${names[Math.floor(Math.random() * names.length)]} ${names[Math.floor(Math.random() * names.length)]}`
  }
  static randomExperience() {
    return experiences[Math.floor(Math.random() * names.length)]
  }

  static randomPosition() {
    return positions[Math.floor(Math.random() * names.length)]
  }

  static randomTechLanguage() {
    return techLanguages[Math.floor(Math.random() * names.length)]
  }
}