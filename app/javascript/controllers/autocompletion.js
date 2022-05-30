import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [
        'firstName', 'lastName', 'email'
    ];

    autocomplete(e) {
        if (e instanceof InputEvent && e.inputType != 'insertReplacementText') return

        $.ajax({
            type: 'GET',
            url: '/autocomplete',
            data: {
                phone_number: e.target.value
            },
        }).done((data) => {
            this.fill_in_form(data);
        });
    }

    fill_in_form(data) {
        this.lastNameTarget.value = data['last_name']
        this.firstNameTarget.value = data['first_name']
        this.emailTarget.value = data['email']
      }
}