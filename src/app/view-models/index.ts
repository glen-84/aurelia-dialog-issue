import {autoinject, useView} from "aurelia-framework";
import {DialogService} from "aurelia-dialog";
import {TestDialog} from "./test-dialog";

@autoinject
@useView("../views/index.html")
export class Index {
    private dialogService: DialogService;

    public constructor(dialogService: DialogService) {
        this.dialogService = dialogService;
    }

    public async openDialog() {
        console.log("Opening dialog");

        const resp = await this.dialogService.open({
            // Works.
            ///viewModel: "/assets/app/view-models/test-dialog.js",
            // Doesn't work.
            viewModel: TestDialog,
            model: {}
        });

        console.log(resp);
    }
}
