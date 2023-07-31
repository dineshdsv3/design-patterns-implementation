// Adapter Pattern

// After designing, some 3rd party lib come in with different signature.

// Write a wrapper implementing the existing interface to delegate the calls to the 3rd party library
class Email {
  recipient;

  constructor(recipient) {
    this.recipient = recipient;
  }

  sendMessage(Message) {
    console.log(`Email sent to ${this.recipient}`);
  }
}

class SMS {
  recipient;

  constructor(recipient) {
    this.recipient = recipient;
  }

  sendMessage(Message) {
    console.log(`SMS sent to ${this.recipient}`);
  }
}

class WhatsApp {
  receiver;

 constructor(receiver) {
   this.receiver = receiver;
 }

 submitMessage(message) {
   console.log("This message " + message + " has been sent to " + this.receiver);
 }
}

// ~% Here we are creating the Adapter class to connect the 3rd Party whatsapp class 
// ~% to connect the submitMessage and sendMessage in `comm.sendMessage(message)` in notifySubscriber class
// ~% So in this case we are eliminating the If-else
class WhatsAppAdapter {
  constructor(receiver) {
     this.ref = new WhatsApp(receiver);
     this.receiver = receiver;
  }

  sendMessage(message) {
    this.ref.submitMessage(message, this.receiver);
  }

}


class Subscriber {

  firstName;
  lastName;

  notifier = [];

  Subscriber(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  addNotifier(comm) {
    this.notifier.push(comm);
  }

  notifySubscriber(message) {
    this.notifier.forEach(comm => comm.sendMessage(message));
  }
}

var list = [];
var bill = new Subscriber("Bill", "Gates");
bill.addNotifier(new Email("billg@microsoft.com"));
list.push(bill);

var elon = new Subscriber("Elon", "Musk");
elon.addNotifier(new SMS("1-CALL-ELONMUSK"));
elon.addNotifier(new Email('elan@x.com'))
elon.addNotifier(new WhatsAppAdapter('123-whatspp'))
list.push(elon);

list.forEach(person => {
  person.notifySubscriber("Bill due in 3 days");
});

