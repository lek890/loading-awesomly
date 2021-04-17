export const messages = [
  "What’s the opposite of a koala?",
  "What's for dinner?",
  "What are the weekend plans?",
  "Which fruit is in season?",
  "Does aliens exist?",
  "Is a hotdog a sandwich?",
  "Why is Europe like a frying pan?",
  "What type of music do rabbits listen to?",
  "What kind of running means walking?",
  "If fish lived on land, where would they live?",
  "What goes up when the rain comes down?",
  "What clothes does a house wear?",
];

Array.prototype.getRandomLoadingMsgs = function () {
  return this[Math.floor(Math.random() * this.length)];
};

export const loadingAwesomly = messages.getRandomLoadingMsgs();
