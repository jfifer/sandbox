import {Portal} from "app/classes/Portal"
import {Component, View} from "angular2/core";

//framework recognizes @Component annotation and knows that we are trying to create a new component
@Component({
   selector: 'my-app',
   templateUrl: "app/assets/partials/home.html",
   providers: [Portal]
})

export class MyModulesClass {
   portal: Portal = new Portal();
   public groupList = this.portal.listServerGroups({query: "search", attr: "test"});
}