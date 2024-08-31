export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: "Hi, I'm Jässin!",
        text: "I'm doing dual vocational training, meaning I study computer science while working at IT Company WBS!",
        subhead: "Sometimes I do things with computers.",
        web: "Like making websites,",
        bots: "coding discord bots,",
        other: "or just anything that interests me!",
      },
      de: {
        welcome: "Hi, ich bin Jässin!",
        text: "Ich studiere dual Informatik an der Dualen Hochschule Sachsen während ich bei WBS IT-Service arbeite!",
        subhead: "Ich arbeite ab und an mit Computern.",
        web: "ich erstelle Websites,",
        bots: "programmiere discord bots,",
        other: "und einfach alles was mich interessiert!",
      }
    }
  }))