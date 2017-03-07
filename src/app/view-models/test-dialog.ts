import {autoinject, useView} from "aurelia-framework";
import {DialogController} from "aurelia-dialog";

@autoinject
@useView("../../app/views/test-dialog.html")
export class TestDialog {
    public controller: DialogController;

    public constructor(controller: DialogController) {
        this.controller = controller;
    }
}
