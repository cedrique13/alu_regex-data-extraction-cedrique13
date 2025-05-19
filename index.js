const sampleData = `
  Contact me at cedrick@example.com or firstname.lastname@company.co.uk.
  Visit https://alueducation.com or https://subdomain.example.org/page.
  Call me: (123) 456-7890, 123-456-7890, or 123.456.7890.
  My credit card is 1234 5678 9012 3456 or 1234-5678-9012-3456.
  Meeting is at 14:30 and another at 2:30 PM.
  Tags include <p>, <div class="container"> and <img src="x.jpg">.
  Trending now: #coding #100DaysOfCode
  Prices: $19.99, $1,234.56
`;

// regular expressions
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
const urlRegex = /https?:\/\/[^\s]+/g;
const phoneRegex = /(\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/g;
const creditCardRegex = /\b\d{4}[- ]\d{4}[- ]\d{4}[- ]\d{4}\b/g;
const timeRegex =
  /\b((1[0-2]|0?[1-9]):[0-5][0-9](\s)?([AaPp][Mm])|([01]?[0-9]|2[0-3]):[0-5][0-9])\b/g;
const htmlTagRegex = /<[^>]+>/g;
const hashtagRegex = /#[A-Za-z0-9_]+/g;
const currencyRegex = /\$\d{1,3}(,\d{3})*(\.\d{2})?/g;

// Output
console.log("📧 Emails:", sampleData.match(emailRegex));
console.log("🔗 URLs:", sampleData.match(urlRegex));
console.log("📞 Phone Numbers:", sampleData.match(phoneRegex));
console.log("💳 Credit Card Numbers:", sampleData.match(creditCardRegex));
console.log("⏰ Times:", sampleData.match(timeRegex));
console.log("📄 HTML Tags:", sampleData.match(htmlTagRegex));
console.log("🏷️ Hashtags:", sampleData.match(hashtagRegex));
console.log("💵 Currency Amounts:", sampleData.match(currencyRegex));
