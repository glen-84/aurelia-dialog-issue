import {Aurelia} from "aurelia-framework";
import {DialogConfiguration} from "aurelia-dialog";

export async function configure(aurelia: Aurelia) {
    aurelia.use.standardConfiguration()
        .developmentLogging()
        .plugin("aurelia-dialog", (config: DialogConfiguration) => {
            config.useDefaults();
            config.settings.startingZIndex = 1005;
        });

    await aurelia.start();
    await aurelia.setRoot("/assets/app/view-models/app.js");
}
