import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  title = "Practice";

  @track showAccordionDetails = false;

  viewAccordionDetails() {
    this.showAccordionDetails = !this.showAccordionDetails
  }

  viewChildContainer() {
    this.template.querySelector('.child-container').classList.toggle('slds-hide');
  }

}
