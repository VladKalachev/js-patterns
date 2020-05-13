/**
 * Фасад
 */

// $('.test')
class Complaints {
    constructor() {
        this.complaints = [];
    }

    reply(complaint) {
    }

    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplaint extends Complaints{
    reply({id, customer, details}) {
        return `Products: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplaint extends Complaints{
    reply({id, customer, details}) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;

        if(type === 'service'){
            complaint = new ServiceComplaint();
        } else {
            complaint = new ProductComplaint();
        }

        return complaint.add({id, customer, details});
    }
}

const registry = new ComplaintRegistry();
console.log(registry.register('Name', 'service', 'Non valid'));
console.log(registry.register('Eva', 'product', 'Error'));