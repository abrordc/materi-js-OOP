function MailService(sender) {
  this.sender = sender;
}
 
MailService.prototype.sendMessage = function (message, receiver) {
  console.log(`${this.sender} sent ${message} to ${receiver}`);
}
 
function WhatsAppService(sender) {
  MailService.call(this, sender);
}
 
// Prototype inheritance
WhatsAppService.prototype = Object.create(MailService.prototype);
WhatsAppService.prototype.constructor = WhatsAppService;
 
WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
  for (const receiver of receivers) {
    this.sendMessage(message, receiver);
  }
}
 
function EmailService(sender) {
  MailService.call(this, sender);
}
 
// Prototype inheritance
EmailService.prototype = Object.create(MailService.prototype);
EmailService.prototype.constructor = EmailService;
 
EmailService.prototype.sendDelayedMessage = function (message, receiver, delay) {
  setTimeout(() => {
    this.sendMessage(message, receiver);
  }, delay);
}
 
const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);